import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-16 relative" id="contact">
      <div className="absolute inset-0 hero-gradient opacity-30"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="section-label mb-2">お問い合わせ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">お気軽にご連絡ください</h2>
          <p className="text-zinc-300 text-lg">
            製品に関するお問い合わせ、プロジェクトの共同開発のご提案、採用情報など、お気軽にご連絡ください。
            24時間以内に担当者からご返信いたします。
          </p>
        </div>

        <Card className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-zinc-800">
              <h3 className="text-xl font-semibold text-white mb-6">お問い合わせフォーム</h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                    お名前
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="山田 太郎"
                    className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                    メールアドレス
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                    件名
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="お問い合わせ内容の件名"
                    className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="お問い合わせ内容を詳しく教えてください"
                    className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-white hover:bg-zinc-200 text-black">
                  送信する
                </Button>
              </form>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">その他の連絡方法</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-zinc-300 font-medium mb-2">メールアドレス</h4>
                  <a href="mailto:arosoftwaregroupen@gmail.com" className="text-primary hover:underline">
                    arosoftwaregroupen@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-zinc-300 font-medium mb-2">ソーシャルメディア</h4>
                  <div className="flex gap-4">
                    <Link href="https://x.com/Group_Aro" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-2 rounded-md text-zinc-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Link>
                    <Link href="https://github.com/Aro-Software-Group" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-2 rounded-md text-zinc-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </Link>
                    <Link href="https://discord.gg/M7HsKhMRBS" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-2 rounded-md text-zinc-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="12" r="1" />
                        <circle cx="15" cy="12" r="1" />
                        <path d="M7.5 7.2A11.4 11.4 0 0 1 16 7a4 4 0 0 1 2.6 1.5 12 12 0 0 1 1.1 1.5 4 4 0 0 1-1.4 5.8L18 17l-1.1 1a2 2 0 0 1-2.6 0L12 16l-2.3 2a2 2 0 0 1-2.6 0L6 17l-.4-1.2a4 4 0 0 1-1.3-5.7l.2-.3A12 12 0 0 1 5.6 8.5 4 4 0 0 1 7.5 7.2Z" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-zinc-300 font-medium mb-2">コミュニティへの参加</h4>
                  <p className="text-zinc-400 mb-4">
                    開発中のプロジェクトの早期アクセスや最新情報を受け取るには、コミュニティにご参加ください。
                  </p>
                  <Link href="https://discord.gg/M7HsKhMRBS" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-white">
                      Discordに参加する
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
