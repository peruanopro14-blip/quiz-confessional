import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import type { AdminSession } from "./admin.server";

export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator((data: { username: string; password: string }) => data)
  .handler(async ({ data }) => {
    const { getSessionConfig, matches } = await import("./admin.server");
    const user = process.env["ADMIN_USERNAME"] ?? "";
    const pass = process.env["ADMIN_PASSWORD"] ?? "";
    if (!user || !pass) throw new Error("Credenciais de administrador não configuradas");

    if (!matches(data.username, user) || !matches(data.password, pass)) {
      return { ok: false as const };
    }

    const session = await useSession<AdminSession>(getSessionConfig());
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  const { getSessionConfig } = await import("./admin.server");
  const session = await useSession<AdminSession>(getSessionConfig());
  await session.clear();
  return { ok: true as const };
});

export const adminSessionStatus = createServerFn({ method: "GET" }).handler(async () => {
  const { isUnlocked } = await import("./admin.server");
  return { unlocked: await isUnlocked() };
});

export const listSubmissions = createServerFn({ method: "GET" })
  .inputValidator((data: { order?: "desc" | "asc" } | undefined) => data ?? {})
  .handler(async ({ data }) => {
    const { isUnlocked } = await import("./admin.server");
    if (!(await isUnlocked())) return { unlocked: false as const, rows: [] };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin
      .from("quiz_submissions")
      .select("*")
      .order("created_at", { ascending: data.order === "asc" })
      .limit(500);

    if (error) throw new Error(error.message);
    return { unlocked: true as const, rows: rows ?? [] };
  });
