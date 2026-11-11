import Link from "next/link";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeHeader />
      <main className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          Sorry, the page you are looking for doesn&apos;t exist.
          <br />
          It may have been moved or deleted.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-lg border border-transparent bg-[#153B63] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-150 ease-out hover:bg-[#123354]"
        >
          Go Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
