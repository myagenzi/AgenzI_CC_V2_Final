import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo-horizontal.png";

export default function Auth() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  useEffect(() => {
    document.title = mode === "login" ? "Log in · AgenzI" : "Sign up · AgenzI";
  }, [mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = mode === "login"
      ? await signIn(email, password)
      : await signUp(email, password);
    setSubmitting(false);

    if (error) {
      const msg = error.message;
      let friendly = msg;
      if (msg.includes("Invalid login credentials")) friendly = "Wrong email or password.";
      else if (msg.includes("User already registered")) friendly = "That email is already registered. Try logging in.";
      else if (msg.includes("Email not confirmed")) friendly = "Please confirm your email first — check your inbox.";
      toast({ title: mode === "login" ? "Login failed" : "Sign up failed", description: friendly, variant: "destructive" });
      return;
    }

    if (mode === "signup") {
      toast({ title: "Check your inbox", description: "We sent you a confirmation link to finish signing up." });
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex justify-center">
          <img src={logo} alt="AgenzI" className="h-14 w-auto" />
        </Link>

        <div className="rounded-3xl border border-border bg-card/60 p-8 shadow-[0_8px_32px_rgba(76,42,153,0.10)] backdrop-blur-xl">
          <h1 className="mb-1 text-center font-display text-2xl font-bold text-foreground">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mb-6 text-center text-sm text-foreground/60">
            {mode === "login" ? "Log in to continue." : "Get started in seconds."}
          </p>

          <Tabs value={mode} onValueChange={(v) => setMode(v as "login" | "signup")} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Log in</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>

            <TabsContent value="login" />
            <TabsContent value="signup" />
          </Tabs>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            <Button type="submit" disabled={submitting} className="w-full rounded-full">
              {submitting ? "Please wait…" : mode === "login" ? "Log in" : "Create account"}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-foreground/55">
            {mode === "login" ? (
              <>No account? <button type="button" onClick={() => setMode("signup")} className="font-semibold text-primary hover:underline">Sign up</button></>
            ) : (
              <>Already have one? <button type="button" onClick={() => setMode("login")} className="font-semibold text-primary hover:underline">Log in</button></>
            )}
          </p>
        </div>
      </div>
    </main>
  );
}
