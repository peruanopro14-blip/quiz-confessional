import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/minhas-musicas"
            className="hidden text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Minhas Músicas
          </Link>
          <Button asChild variant="cta" size="pill">
            <Link to="/criar">Criar Minha Música</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
