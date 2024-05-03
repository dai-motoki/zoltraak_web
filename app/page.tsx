import Image from "next/image";

export const metadata = {
  openGraph: {
    images: [
      {
        url: '/zoltraakhp.png',
      },
    ],
  },
};
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Sidebar />


      {/* メインコンテンツ */}
      <div className="ml-64 mt-[-80px]"> {/* 上に少し上げるためにmt-[-20px]を追加 */}
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {/* 創造魔法 zoltraakを始めましょう&nbsp;
            <code className="font-mono font-bold">app/page.tsx</code> */}
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Powered by{" "} */}
              <Image
                src="/GMLdz_1asAAdl6E.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200">
          <div className="mb-8 relative">
            <div className="relative">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] transition duration-500 ease-in-out transform hover:scale-105"
                src="/zoltraak2_smooth_high_quality.gif"
                alt="Zoltraak Logo"
                width={850}
                height={720}
                priority
              />
              {/* 白色の半透明のフィルタを重ねる */}
              <div className="absolute inset-0 bg-white opacity-40 transition duration-500 ease-in-out hover:opacity-0"></div>
            </div>
            {/* 白色の半透明のフィルタを重ねる */}
            {/* <div className="absolute inset-0 bg-white opacity-40"></div> */}
          </div>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <a
              href="/intro" 
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                魔法入門{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                zoltraakの基本的な使い方を学び、魔法の世界への第一歩を踏み出しましょう！
              </p>
            </a>

            <a
              href="https://github.com/dai-motoki/zoltraak/blob/main/README.md"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                創造魔法の書{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Githubに格納されているzoltraakの魔法のシステムの本質が記載された創造魔法の書です。
              </p>
            </a>

            <a
              href="https://github.com/dai-motoki/zoltraak/tree/main/zoltraak/grimoires"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                魔導書{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;  
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                zoltraakの魔導書のテンプレートを探しましょう。（Githubのディレクトリに飛びます）
              </p>
            </a>

            <a
              href="https://twitter.com/i/communities/1783671037420577056"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"  
            >
              <h2 className="mb-3 text-2xl font-semibold">
                ギルド{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                他の魔法使いと交流し、知識を共有しましょう。
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

