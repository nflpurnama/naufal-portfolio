import { Button } from "@/components/button/button";

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen w-full max-w-3xl items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-6 
        items-center justify-center text-center 
        sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            When software fails, organizations fail.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Three years in ERP development taught me to build software with real-world consequences.
          </p>
          <Button href="/about">About Me</Button>
        </div>
      </main>
  );
}
