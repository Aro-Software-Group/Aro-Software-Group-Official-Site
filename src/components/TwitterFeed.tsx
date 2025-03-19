import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Mock data for the tweets
const tweets = [
  {
    id: "1",
    mainTweet: true,
    content: "ビッグニュース！🎉✨\n\nみんなが欲しいと思う開発中のプロジェクトを発表！🚀\n\n優先順位順で紹介：\n\n1️⃣ Aro Agent (AIエージェント)  \n2️⃣ Aro Brain Studio (オフライン生成AI)  \n3️⃣ Aro Agent Private (オフライン特化)  \n4️⃣ Aro One (オールインワン)  \n\n詳細はリプで👇 #AI #開発中 #オープンソース",
    date: "2025年3月18日 午後7:39",
    engagements: "12件の表示",
  },
  {
    id: "2",
    content: "1️⃣ Aro Agent🤖\n\nGemini & OpenRouter API搭載の超賢いAIエージェント！Manusみたいに、みんなの作業をスマートにサポートするツールを目指してるよ💪 \n質問応答、タスク管理、何でもおまかせ！\n何でもできるかも！？\nResarch Previewを近日公開！！",
    date: "8分",
  },
  {
    id: "3",
    content: "2️⃣ Aro Brain Studio 💻\n\n生成AIと完全オフラインで話せるアプリ！LM Studioみたいな感じ💡 Windows & Androidで使えるように開発中！\n\n✨Android版は、なんとリアルタイムローカルボイス会話機能も搭載予定！✨\n 声でAIネット環境無しでやり取りできる未来が来る…！",
    date: "8分",
  },
  {
    id: "4",
    content: "3️⃣ Aro Agent Private✨\n\nオフライン特化のAIエージェント！プライバシーが気になる人にピッタリ！Gemma 3やLGのEXAONE-Deep-2.4Bを搭載予定だよ！\n\n(もしかしたら、Aro Brain Studioと合体して、もっとすごいのが生まれるかも…!?)",
    date: "8分",
  },
  {
    id: "5",
    content: "4️⃣ Aro One🧰\n\n文章も、表も、資料も…これ一つで全部OK！なオールインワンソフト🤩 みんなの「あったらいいな」を詰め込んだ、夢のようなツール！✨",
    date: "8分",
  },
  {
    id: "6",
    content: "✨極秘情報…!?✨\n\nAro Agent PrivateとAro Brain Studio…もしかしたら、この2つが合体して、とんでもないスーパーAIエージェントが誕生するかも…！？👀",
    date: "8分",
  },
  {
    id: "7",
    content: "📢 開発チームから一言！\n\n「ユーザーの皆さんの声が、僕たちの原動力！💪 どんな機能が欲しいか、どんどんリクエストしてね！一緒に最高のAIツールを作ろう！」 \n#AroSoftwareGroup #AI開発",
    date: "8分",
  },
  {
    id: "8",
    content: "🎁 早期アクセス & コミュニティ参加！\n\n開発中のプロダクトをいち早く試せるチャンス！✨ 興味がある人は、この投稿に「いいね！」& リプで教えてね！😉 専用コミュニティにも招待します！",
    date: "8分",
  },
  {
    id: "9",
    content: "🌱 オープンソースへのこだわり\n\nAro Software Groupは、透明性と協力を重視！🤝 みんなでコードを共有し、改善し、より良いAIの未来を築きたい！✨ \n#オープンソース #Contribute",
    date: "8分",
  },
  {
    id: "10",
    content: "🤔 「こんなことできる？」大歓迎！\n\nAIで実現したいこと、困っていること、何でも気軽に質問してね！💬\n みんなのアイデアが、新しいプロジェクトのヒントになるかも…！💡",
    date: "8分",
  },
];

export default function TwitterFeed() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-10 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
          <h2 className="text-2xl font-bold text-white">最新の投稿</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tweets.slice(0, 6).map((tweet) => (
            <Card key={tweet.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/aro-logo.png"
                    alt="Aro Software Group Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">Aro Software Group</p>
                    <p className="text-zinc-500 text-sm">@Group_Aro</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-white whitespace-pre-line">{tweet.content}</p>
                </div>

                <div className="text-zinc-500 text-sm flex justify-between items-center">
                  <span>{tweet.date}</span>
                  {tweet.engagements && (
                    <span className="text-primary hover:underline cursor-pointer">
                      {tweet.engagements}
                    </span>
                  )}
                </div>

                {tweet.mainTweet && (
                  <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between text-zinc-500 text-sm">
                    <button className="hover:text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20v-8m0 0V4m0 8h8m-8 0H4" />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                        <line x1="16" x2="22" y1="5" y2="5" />
                        <line x1="19" x2="19" y1="2" y2="8" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="https://x.com/Group_Aro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            さらに表示する
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
