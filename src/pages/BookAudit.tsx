import { LenisProvider } from "@/lib/lenis";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BookAuditHero } from "@/components/site/book/BookAuditHero";
import { BookAuditForm } from "@/components/site/book/BookAuditForm";
import { BookAuditPromise } from "@/components/site/book/BookAuditPromise";
import { BookAuditCta } from "@/components/site/book/BookAuditCta";

export default function BookAudit() {
  return (
    <LenisProvider>
      <div className="surface-lavender min-h-screen">
        <Header />
        <main>
          <BookAuditHero />
          <BookAuditForm />
          <BookAuditPromise />
          <BookAuditCta />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
