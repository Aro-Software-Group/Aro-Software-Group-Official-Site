import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TeamOverview() {
  const values = [
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
    <section className="py-16" id="team">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          <div className="md:w-2/5">
            <p className="section-label mb-2">チームについて</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">私たちのミッション</h2>
            <p className="text-zinc-300 text-lg mb-6">
              Aro Software Groupは、あったらいいなを実現するために存在するチームです。
            </p>
            <p className="text-zinc-400 mb-8">
              プライバシーとセキュリティを重視した革新的なAIツールを開発し、オンラインとオフラインの両方の環境で最高のユーザーエクスペリエンスを提供します。
              私たちは、AIの力を最大限に活用して、複雑な問題を解決し、人々の創造性と生産性を向上させることに情熱を注いでいます。
            </p>

            <div className="flex items-center gap-4">
              <div className="bg-zinc-800 rounded-full h-1 w-12"></div>
              <p className="text-zinc-500 text-sm font-medium">2025年3月始動</p>
            </div>

            <div className="mt-8">
              <Link href="/team">
                <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900">
                  詳細を見る
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="xai-card">
                  <CardContent className="p-6">
                    <div className="bg-zinc-800/50 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-zinc-400">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">私たちの約束</h3>
              </div>
              <Separator className="bg-zinc-800 my-4" />
              <p className="text-zinc-300">
                私たちは、すべてのプロジェクトで以下の価値を提供することをお約束します：
              </p>
              <ul className="mt-4 space-y-2 feature-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>最高レベルのプライバシー保護とセキュリティ</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>使いやすく直感的なユーザーインターフェース</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>継続的な改善と革新</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>迅速かつ丁寧なサポート</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
