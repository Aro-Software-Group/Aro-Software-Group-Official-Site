import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function WebsiteLaunchPost() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="text-primary flex items-center gap-2 hover:underline mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            ブログ一覧に戻る
          </Link>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-primary text-sm px-2 py-1 bg-primary/10 rounded-md">お知らせ</span>
              <span className="text-zinc-500 text-sm">2025年3月19日</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Aro Software Group 公式サイトをリリースしました</h1>
          </div>
        </div>

        <Separator className="bg-zinc-800 my-8" />

        <div className="prose prose-invert max-w-none prose-zinc">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/aro-logo.png"
              alt="Aro Software Group Logo"
              width={120}
              height={120}
              className="rounded-md"
            />
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            このたび、Aro Software Groupの公式ウェブサイトを正式にリリースしました。
            当サイトでは、私たちの企業理念やビジョン、そして開発中の革新的なAI製品に関する最新情報を発信してまいります。
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">新ウェブサイトの特徴</h2>
          <p className="text-zinc-300 mb-6">
            今回リリースした公式サイトでは、以下のコンテンツをご覧いただけます：
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-2 text-zinc-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span><strong>製品情報:</strong> 開発中のAro Agent、Aro Brain Studio、Aro Agent Private、Aro Oneに関する詳細情報</span>
            </li>
            <li className="flex items-start gap-2 text-zinc-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span><strong>企業情報:</strong> Aro Software Groupの理念、ミッション、ビジョンについての解説</span>
            </li>
            <li className="flex items-start gap-2 text-zinc-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span><strong>ブログ:</strong> 製品開発状況や技術関連の記事、お知らせなどを定期的に更新</span>
            </li>
            <li className="flex items-start gap-2 text-zinc-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span><strong>お問い合わせフォーム:</strong> 製品に関するお問い合わせやパートナーシップのご相談などを受け付け</span>
            </li>
          </ul>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">コミュニティへのご招待</h3>
            <p className="text-zinc-300 mb-6">
              Aro Software Groupの最新情報をいち早く入手したい方や、開発中の製品に関する議論に参加したい方は、
              公式Discordサーバーにぜひご参加ください。エンジニアやプロダクトチームとの直接的な交流の場となっています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://discord.gg/M7HsKhMRBS" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary text-black hover:bg-primary/90">
                  Discordに参加する
                </Button>
              </Link>
              <Link href="https://x.com/Group_Aro" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800">
                  Xでフォローする
                </Button>
              </Link>
            </div>
          </div>

          <p className="text-zinc-300 mb-6">
            Aro Software Groupの公式サイトは、皆様からのフィードバックを基に継続的に改善していく予定です。
            ご意見・ご要望がございましたら、サイト内のお問い合わせフォームやSNSを通じてお気軽にお寄せください。
          </p>

          <p className="text-zinc-300 font-medium">
            今後とも、Aro Software Groupをどうぞよろしくお願いいたします。
          </p>
        </div>

        <Separator className="bg-zinc-800 my-10" />

        <div className="flex justify-between items-center">
          <Link href="/blog/posts/ai-projects-in-development">
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="m15 18-6-6 6-6" />
              </svg>
              前の記事
            </Button>
          </Link>

          <Link href="/blog/posts/privacy-first-ai-development">
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900">
              次の記事
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
