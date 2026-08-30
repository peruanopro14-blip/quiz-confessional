import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  adminLogin,
  adminLogout,
  adminSessionStatus,
  listSubmissions,
} from "@/lib/admin.functions";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel administrativo — AmorCantado" },
      { name: "description", content: "Área restrita para consulta das respostas do formulário." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Painel administrativo — AmorCantado" },
      {
        property: "og:description",
        content: "Área restrita para consulta das respostas do formulário.",
      },
    ],
  }),
  component: AdminPage,
});

type Row = {
  id: string;
  created_at: string;
  recipient: string | null;
  recipient_name: string | null;
  my_relation: string | null;
  occasion: string | null;
  story: string | null;
  moments: string | null;
  genre: string | null;
  mood: string | null;
  name_in_song: string | null;
  special_phrase: string | null;
  whatsapp: string | null;
};

const QUESTIONS: { key: keyof Row; label: string }[] = [
  { key: "recipient", label: "Quem vai receber a música?" },
  { key: "recipient_name", label: "Qual o nome dessa pessoa?" },
  { key: "my_relation", label: "Quem é você para ela?" },
  { key: "occasion", label: "Qual a ocasião?" },
  { key: "story", label: "Conte a história de vocês" },
  { key: "moments", label: "Momentos especiais" },
  { key: "genre", label: "Estilo musical" },
  { key: "mood", label: "Clima da música" },
  { key: "name_in_song", label: "Nome que aparece na música" },
  { key: "special_phrase", label: "Frase especial" },
  { key: "whatsapp", label: "WhatsApp para envio" },
];

function formatDate(value: string) {
  return new Date(value).toLocaleString("pt-BR");
}

function AdminPage() {
  const login = useServerFn(adminLogin);
  const logout = useServerFn(adminLogout);
  const status = useServerFn(adminSessionStatus);
  const fetchRows = useServerFn(listSubmissions);

  const [checking, setChecking] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [order, setOrder] = useState<"desc" | "asc">("desc");
  const [openId, setOpenId] = useState<string | null>(null);

  const load = async (nextOrder: "desc" | "asc") => {
    setLoading(true);
    const res = await fetchRows({ data: { order: nextOrder } });
    setUnlocked(res.unlocked);
    setRows((res.rows ?? []) as Row[]);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      const res = await status();
      if (res.unlocked) await load("desc");
      setUnlocked(res.unlocked);
      setChecking(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await login({ data: { username, password } });
    setLoading(false);
    if (!res.ok) {
      setError("Usuário ou senha inválidos.");
      return;
    }
    setUsername("");
    setPassword("");
    await load(order);
    setUnlocked(true);
  };

  const total = useMemo(() => rows.length, [rows]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
        Carregando...
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/50 px-4">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-soft"
        >
          <h1 className="text-xl font-extrabold">Área restrita</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Informe suas credenciais para acessar o painel.
          </p>

          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Usuário</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

          <Button type="submit" variant="cta" size="lg" className="mt-6 w-full" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/50 px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold">Respostas do formulário</h1>
            <p className="text-sm text-muted-foreground">{total} envio(s) registrado(s)</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="soft"
              onClick={() => {
                const next = order === "desc" ? "asc" : "desc";
                setOrder(next);
                load(next);
              }}
            >
              Data: {order === "desc" ? "mais recentes" : "mais antigos"}
            </Button>
            <Button variant="soft" onClick={() => load(order)} disabled={loading}>
              Atualizar
            </Button>
            <Button
              variant="outline"
              onClick={async () => {
                await logout();
                setUnlocked(false);
                setRows([]);
              }}
            >
              Sair
            </Button>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-3xl border border-border bg-card">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="border-b border-border bg-muted/60 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Enviado em</th>
                {QUESTIONS.map((q) => (
                  <th key={String(q.key)} className="px-4 py-3">
                    {q.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={QUESTIONS.length + 1}
                    className="px-4 py-10 text-center text-muted-foreground"
                  >
                    {loading ? "Carregando..." : "Nenhuma resposta enviada ainda."}
                  </td>
                </tr>
              )}
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className="cursor-pointer border-b border-border/60 align-top hover:bg-muted/40"
                  onClick={() => setOpenId(openId === row.id ? null : row.id)}
                >
                  <td className="whitespace-nowrap px-4 py-3 font-semibold">
                    {formatDate(row.created_at)}
                  </td>
                  {QUESTIONS.map((q) => {
                    const value = (row[q.key] as string | null) ?? "—";
                    const long = openId === row.id;
                    return (
                      <td key={String(q.key)} className="px-4 py-3">
                        <span className={long ? "whitespace-pre-wrap" : "line-clamp-2 block"}>
                          {value || "—"}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Clique em uma linha para expandir os textos completos.
        </p>
      </div>
    </div>
  );
}
