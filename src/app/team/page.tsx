import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function TeamPage() {
  const teamValues = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.743-.95l.321-2.5a2 2 0 0 0-1.836-2.236l-5.51-.734a1 1 0 0 1-.89-.89l-.735-5.51A2 2 0 0 0 7.03 3.03L4.5 3.353c-.47.059-.882-.274-.951-.744a.979.979 0 0 1 .276-.837L5.536 0c.47-.47 1.087-.706 1.704-.706s1.233.235 1.704.706l1.568 1.568c.23.23.556.338.878.29a1.006 1.006 0 0 0 .29.878l1.322 1.322c.23.23.338.556.29.878a1.006 1.006 0 0 0 .878.29l1.322 1.322c.23.23.556.338.878.29l1.322 1.322c.23.23.556.338.878.29a1.006 1.006 0 0 0 .29.878l1.322 1.322c.23.23.338.556.29.878z" />
          <path d="M9.889 16.857 6.21 13.177a1 1 0 0 1 0-1.414l7.07-7.071a1 1 0 0 1 1.415 0l3.677 3.68a1 1 0 0 1 0 1.414l-7.07 7.07a1 1 0 0 1-1.414 0v.001z" />
          <path d="m10.5 7.5 6 6" />
        </svg>
      ),
      title: "イノベーション",
      description: "私たちは常に最先端のAI技術を追求し、革新的なソリューションを開発することで、ユーザーの期待を超える価値を提供します。",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "プライバシー",
      description: "ユーザーのプライバシーとデータセキュリティを最優先に考え、オフライン機能やローカル処理を重視した製品設計を行っています。",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
      title: "透明性",
      description: "オープンソースコミュニティとの協働を大切にし、コードとプロセスの透明性を通じて、信頼関係を構築しています。",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "ユーザー中心",
      description: "製品開発のすべての段階でユーザーのニーズを最優先に考え、使いやすさと実用性を追求したソリューションを提供します。",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="py-16 relative">
          <div className="orange-glow opacity-30"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <p className="section-label">チームについて</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Aro Software Group</h1>
              <p className="text-zinc-300 text-lg">
                Aro Software Groupは、あったらいいなを実現するために存在するチームです。
                プライバシーとセキュリティを重視した革新的なAIツールとソリューションを開発しています。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">私たちのビジョン</h2>
                <p className="text-zinc-300 text-lg mb-6">
                  AIの力を活用して人々の生活を豊かにし、テクノロジーとの関わり方に変革をもたらすことを目指しています。
                </p>
                <p className="text-zinc-400 mb-8">
                  特に、プライバシーとセキュリティを重視したソリューションを提供することで、ユーザーが安心して最先端のAI技術を活用できる環境を整えることに注力しています。
                  オンラインとオフラインの両方の環境で最高のユーザーエクスペリエンスを提供することを目指しています。
                </p>

                <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3">チーム結成の背景</h3>
                  <p className="text-zinc-400 mb-4">
                    私たちのチームは、AI技術の急速な進化を目の当たりにし、その力を最大限に活用しつつも、
                    プライバシーやセキュリティに関する懸念に応えるソリューションが必要だと感じたメンバーによって2025年3月に結成されました。
                  </p>
                  <p className="text-zinc-400">
                    各メンバーが持つ専門知識と情熱を結集し、「あったらいいな」を実現するための革新的なAIツールの開発に取り組んでいます。
                  </p>
                </div>

                <div className="flex gap-4">
                  <Link href="/projects">
                    <Button className="bg-white text-black hover:bg-zinc-200">
                      プロジェクト一覧
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 text-white">
                      お問い合わせ
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">私たちの価値観</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {teamValues.map((value, index) => (
                    <Card key={index} className="xai-card overflow-hidden transition-all duration-300">
                      <div className="p-6">
                        <div className="bg-zinc-800/50 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                          {value.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                        <p className="text-zinc-400 text-sm">{value.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <p className="section-label">チームの取り組み</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">私たちの活動</h2>
              <p className="text-zinc-300 text-lg">
                Aro Software Groupは、AIを中心とした様々な取り組みを通じて、技術の可能性と新しい体験を探求しています。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="xai-card p-6">
                <div className="bg-primary/20 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">オープンソース</h3>
                <p className="text-zinc-400 mb-4">
                  私たちは技術の透明性とコミュニティへの貢献を重視し、オープンソースのAIプロジェクトを積極的に開発・支援しています。
                </p>
                <ul className="space-y-2 feature-list mb-4">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>GitHub上での開発</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>コミュニティとの協働</span>
                  </li>
                </ul>
                <Link href="https://github.com/Aro-Software-Group" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 text-white w-full">
                    GitHubを見る
                  </Button>
                </Link>
              </div>

              <div className="xai-card p-6">
                <div className="bg-primary/20 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.5 7.2A11.4 11.4 0 0 1 16 7a4 4 0 0 1 2.6 1.5 12 12 0 0 1 1.1 1.5 4 4 0 0 1-1.4 5.8L18 17l-1.1 1a2 2 0 0 1-2.6 0L12 16l-2.3 2a2 2 0 0 1-2.6 0L6 17l-.4-1.2a4 4 0 0 1-1.3-5.7l.2-.3A12 12 0 0 1 5.6 8.5 4 4 0 0 1 7.5 7.2Z" />
                    <circle cx="9" cy="12" r="1" />
                    <circle cx="15" cy="12" r="1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">コミュニティ活動</h3>
                <p className="text-zinc-400 mb-4">
                  ユーザーからのフィードバックを大切にし、活発なコミュニティを通じて製品を進化させています。Discord上では常に開発者と直接対話できます。
                </p>
                <ul className="space-y-2 feature-list mb-4">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>ユーザーグループ</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>定期ミートアップ</span>
                  </li>
                </ul>
                <Link href="https://discord.gg/M7HsKhMRBS" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 text-white w-full">
                    Discordに参加
                  </Button>
                </Link>
              </div>

              <div className="xai-card p-6">
                <div className="bg-primary/20 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="M8 15h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">ブログと情報発信</h3>
                <p className="text-zinc-400 mb-4">
                  AIの最新動向や私たちのプロジェクトに関する技術的な解説、活動レポートなどを定期的にブログで発信しています。
                </p>
                <ul className="space-y-2 feature-list mb-4">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>技術記事</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>プロジェクト情報</span>
                  </li>
                </ul>
                <Link href="/blog">
                  <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 text-white w-full">
                    ブログを見る
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">私たちと一緒に未来を創り出しませんか？</h2>
              <p className="text-zinc-300 text-lg mb-8">
                革新的なAIプロジェクトに興味がある方、プライバシー重視のソリューション開発に情熱を持つ方、
                あなたのスキルと情熱を私たちのチームにお持ちください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 px-8">
                    お問い合わせ
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" className="w-full sm:w-auto border-zinc-700 hover:bg-zinc-900 text-white px-8">
                    プロジェクトを見る
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
