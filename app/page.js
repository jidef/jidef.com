import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <span className="font-mono list-inside list-decimal text-center sm:text-left text-xl">
         Jidef dot com
        </span>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/jidef"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={20}
            height={20}
          />
            GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://x.com/jidef"
            target="_blank"
            rel="noopener noreferrer"
          >
            x.com/jidef
          </a>
        </div>
      </main>
    </div>
  );
}
