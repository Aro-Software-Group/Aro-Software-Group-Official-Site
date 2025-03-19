import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: "aro-agent",
    title: "Aro Agent",
    description: "Gemini & OpenRouter API搭載の超賢いAIエージェント。あなたの作業を効率化するパートナー。",
    features: [
      "質問応答、タスク管理機能",
      "複雑な指示理解能力",
      "スマートな情報整理",
      "APIを活用した拡張性"
    ],
    status: "development", // in-development, active, discontinued
    gradient: "from-orange-500/10 to-amber-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    id: "aro-brain-studio",
    title: "Aro Brain Studio",
    description: "生成AIと完全オフラインで会話できるアプリ。プライバシーを守りながら、AIの力を最大限に活用。",
    features: [
      "完全オフラインでAIと会話",
      "Windows & Android対応",
      "リアルタイム音声会話（開発中）",
      "カスタマイズ可能なモデル選択"
    ],
    status: "development",
    gradient: "from-blue-500/10 to-indigo-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    id: "aro-agent-private",
    title: "Aro Agent Private",
    description: "オフライン特化のAIエージェント。プライバシーを最優先にしたい方のための高機能アシスタント。",
    features: [
      "完全オフライン動作",
      "Gemma 3やLGのEXAONE搭載",
      "高度なプライバシー保護",
      "拡張可能なプラグイン機能"
    ],
    status: "development",
    gradient: "from-green-500/10 to-emerald-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "aro-one",
    title: "Aro One",
    description: "文章、表、資料作成をオールインワンで提供。あなたの創造力を最大限に引き出すツール。",
    features: [
      "文書作成・編集機能",
      "表計算・データ分析",
      "プレゼン資料作成",
      "AIによる自動提案機能"
    ],
    status: "discontinued",
    gradient: "from-red-500/10 to-pink-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function ProductPreview() {
  // Helper function to render status badge
  const renderStatusBadge = (status: string) => {
    switch(status) {
      case 'development':
        return <span className="project-status project-in-development">開発中</span>;
      case 'active':
        return <span className="project-status project-active">提供中</span>;
      case 'discontinued':
        return <span className="project-status project-discontinued">終了</span>;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 relative" id="products">
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="section-label">製品ラインナップ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">革新的AIツール</h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            Aro Software Groupは、最先端のAI技術を活用した製品を開発しています。
            ユーザーのニーズとプライバシーを最優先に考えたこれらのツールで、あなたの生産性を向上させます。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className={`project-card bg-gradient-to-br ${product.gradient}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
                  {product.icon}
                </div>
                {renderStatusBadge(product.status)}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
              <p className="text-zinc-300 text-sm mb-5">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6 feature-list">
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2">
                {product.status === 'development' ? (
                  <div className="text-center text-sm">
                    <p className="text-primary">近日公開予定</p>
                  </div>
                ) : (
                  <Link href={`/projects/${product.id}`}>
                    <Button className="w-full bg-white text-black hover:bg-zinc-200">
                      詳細を見る
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button variant="outline" className="bg-zinc-900/50 backdrop-blur-sm text-white border-zinc-700 hover:bg-zinc-800/70">
              すべてのプロジェクトを見る
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
