import MainGame from "@/components/MainGame";
import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className='text-lg font-bold text-center'>
        <div className="flex flex-col gap-4">
          <Link href="/guess-color">
              <div className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                Guess Color Game
              </div>
            </Link>
            <Link href="/guess-number">
              <div className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300 ease-in-out">
                Guess Number Game (Coming Soon)
              </div>
            </Link>
        </div>
      </div>
      </main>
    </div>
  );
}
