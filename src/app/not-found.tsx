import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-24">
        <div className="orange-glow opacity-20"></div>

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <h1 className="text-white text-7xl md:text-9xl font-bold mb-4">404</h1>

          <div className="relative mb-8">
            <h2 className="text-white text-2xl md:text-3xl font-medium mb-6">
              ページが見つかりませんでした
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              お探しのページは存在しないか、移動された可能性があります。URLが正しいかご確認ください。
            </p>

            <div className="absolute -top-16 -right-16 w-32 h-32 opacity-20">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FF6B35"
                  d="M47.5,-57.2C59.9,-46.8,67.5,-30.9,71.5,-14C75.4,3,75.7,20.9,67.7,34.1C59.7,47.3,43.3,55.9,26.1,63.3C8.9,70.7,-9.1,77,-26.4,74.1C-43.7,71.2,-60.3,59.2,-70.4,42.8C-80.6,26.5,-84.3,5.9,-80.1,-12.7C-75.9,-31.2,-63.8,-47.8,-48.7,-57.9C-33.6,-68.1,-15.5,-71.8,0.9,-72.9C17.4,-74,34.8,-72.3,47.5,-57.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            <div className="absolute -bottom-16 -left-16 w-32 h-32 opacity-20">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FF6B35"
                  d="M47.7,-58.4C62.1,-47.8,74.5,-33.5,79,-16.6C83.5,0.4,80.2,20,70.9,35.4C61.7,50.8,46.6,62,29.7,68.5C12.8,75,-5.8,76.9,-24.8,73.3C-43.9,69.7,-63.3,60.7,-72.6,45.1C-81.9,29.5,-80.9,7.3,-74.8,-11.3C-68.6,-29.9,-57.2,-44.9,-43.4,-55.6C-29.6,-66.3,-13.4,-72.5,1.9,-74.8C17.2,-77.1,33.3,-75.4,47.7,-62.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-white text-black hover:bg-zinc-200 font-medium px-6 py-2 h-auto text-base">
                ホームに戻る
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 text-white font-medium px-6 py-2 h-auto text-base">
                プロジェクト一覧
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-zinc-300 font-medium mb-4">お探しだったのはこちらですか？</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link href="/projects" className="block p-4 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg hover:bg-zinc-800/60 transition-colors">
              <h4 className="text-white font-medium mb-1">プロジェクト</h4>
              <p className="text-zinc-400 text-sm">開発中および提供中のプロジェクト一覧</p>
            </Link>
            <Link href="/blog" className="block p-4 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg hover:bg-zinc-800/60 transition-colors">
              <h4 className="text-white font-medium mb-1">ブログ</h4>
              <p className="text-zinc-400 text-sm">最新の記事と技術情報</p>
            </Link>
            <Link href="/team" className="block p-4 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg hover:bg-zinc-800/60 transition-colors">
              <h4 className="text-white font-medium mb-1">チーム情報</h4>
              <p className="text-zinc-400 text-sm">チームのミッションとビジョン</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
