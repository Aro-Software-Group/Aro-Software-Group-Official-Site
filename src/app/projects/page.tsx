import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Project data
const projects = [
  {
    id: "aro-agent",
    title: "Aro Agent",
    description: "Gemini & OpenRouter API搭載の超賢いAIエージェント。あなたの作業を効率化するパートナー。",
    longDescription: `
      Aro Agentは、Gemini APIとOpenRouter APIを統合した高度なAIエージェントです。
      Manusのように、ユーザーの日常タスクや業務をスマートにサポートすることを目指しています。
      質問応答と複雑なタスク管理機能を備え、複数のAPIと連携した拡張性の高い設計となっています。
      また、ウェブブラウジング機能によるリアルタイム情報アクセスも可能です。
    `,
    features: [
      "質問応答、タスク管理機能",
      "複雑な指示理解能力",
      "スマートな情報整理",
      "APIを活用した拡張性"
    ],
    status: "development", // development, active, discontinued
    lastUpdated: "2025年3月15日",
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
    longDescription: `
      Aro Brain Studioは、生成AIと完全オフラインで会話できるアプリケーションです。
      LM Studioに着想を得て、より使いやすさとローカル処理能力を高めた製品を目指しています。
      プライバシーを重視するユーザーのために、データをクラウドに送信せず、すべての処理をローカルで完結させます。
      Windows版とAndroid版を同時開発中で、特にAndroid版ではリアルタイム音声会話機能の実装を予定しています。
    `,
    features: [
      "完全オフラインでAIと会話",
      "Windows & Android対応",
      "リアルタイム音声会話（開発中）",
      "カスタマイズ可能なモデル選択"
    ],
    status: "development",
    lastUpdated: "2025年3月18日",
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
    longDescription: `
      Aro Agent Privateは、オフライン特化のAIエージェントです。
      プライバシーを最優先に考えるユーザー向けに、データを一切外部に送信せずに動作する設計になっています。
      Google製のGemma 3モデルやLG製のEXAONEモデルを搭載し、高速かつ高精度な応答を実現します。
      プラグイン機能も搭載予定で、様々な拡張機能を追加できるようになります。
    `,
    features: [
      "完全オフライン動作",
      "Gemma 3やLGのEXAONE搭載",
      "高度なプライバシー保護",
      "拡張可能なプラグイン機能"
    ],
    status: "development",
    lastUpdated: "2025年3月10日",
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
    longDescription: `
      Aro Oneは、文書作成、表計算、プレゼンテーション資料作成などをオールインワンで提供するツールです。
      AIによる支援機能を統合し、ユーザーの創造性と生産性を最大限に引き出します。
      技術的な課題により、現在は開発を中止していますが、将来的には他のプロジェクトの機能として統合される予定です。
    `,
    features: [
      "文書作成・編集機能",
      "表計算・データ分析",
      "プレゼン資料作成",
      "AIによる自動提案機能"
    ],
    status: "discontinued",
    lastUpdated: "2025年2月20日",
    endDate: "2025年3月5日",
    gradient: "from-red-500/10 to-pink-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "aro-api",
    title: "Aro API",
    description: "開発者向けAPI提供サービス。あなたのアプリケーションにAro AIの力を統合。",
    longDescription: `
      Aro APIは、開発者向けのAPI提供サービスです。
      Aro Agentの機能をAPIとして利用できるようにすることで、サードパーティ製アプリケーションへの統合を容易にします。
      現在は開発中で、まもなく限定ベータ版として提供を開始する予定です。
    `,
    features: [
      "簡単な統合",
      "高速なレスポンス",
      "豊富な機能セット",
      "充実したドキュメント"
    ],
    status: "development",
    lastUpdated: "2025年3月1日",
    gradient: "from-purple-500/10 to-violet-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
        <path d="M17 6.1H3" />
        <path d="M21 12.1H3" />
        <path d="M15.1 18H3" />
      </svg>
    ),
  },
];

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

export default function ProjectsPage() {
  // Group projects by status
  const devProjects = projects.filter(p => p.status === 'development');
  const activeProjects = projects.filter(p => p.status === 'active');
  const discontinuedProjects = projects.filter(p => p.status === 'discontinued');

  return (
    <>
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="section-label">プロジェクト一覧</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Aro Software Group プロジェクト</h1>
            <p className="text-zinc-300 text-lg max-w-3xl mx-auto">
              私たちが開発および提供しているプロジェクトの一覧です。プライバシーとセキュリティを重視した革新的なAIツールを
              開発することで、ユーザーの皆様に価値を提供することを目指しています。
            </p>
          </div>

          {/* Development Projects */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-bold text-white">開発中のプロジェクト</h2>
              <span className="project-status project-in-development">
                {devProjects.length}
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {devProjects.map((project) => (
                <div
                  key={project.id}
                  className={`project-card bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
                      {project.icon}
                    </div>
                    {renderStatusBadge(project.status)}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-zinc-300 text-sm mb-5">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6 feature-list">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <p className="text-sm text-zinc-400 mb-4">最終更新: {project.lastUpdated}</p>
                    <Link href={`/projects/${project.id}`}>
                      <Button className="w-full bg-white text-black hover:bg-zinc-200">
                        詳細を見る
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Active Projects */}
          {activeProjects.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold text-white">提供中のプロジェクト</h2>
                <span className="project-status project-active">
                  {activeProjects.length}
                </span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {activeProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`project-card bg-gradient-to-br ${project.gradient}`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
                        {project.icon}
                      </div>
                      {renderStatusBadge(project.status)}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-zinc-300 text-sm mb-5">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-6 feature-list">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-2">
                      <p className="text-sm text-zinc-400 mb-4">最終更新: {project.lastUpdated}</p>
                      <Link href={`/projects/${project.id}`}>
                        <Button className="w-full bg-white text-black hover:bg-zinc-200">
                          詳細を見る
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Discontinued Projects */}
          {discontinuedProjects.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold text-white">終了したプロジェクト</h2>
                <span className="project-status project-discontinued">
                  {discontinuedProjects.length}
                </span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {discontinuedProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`project-card bg-gradient-to-br ${project.gradient}`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
                        {project.icon}
                      </div>
                      {renderStatusBadge(project.status)}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-zinc-300 text-sm mb-5">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-6 feature-list">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <li key={index}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-2">
                      <p className="text-sm text-zinc-400 mb-1">開発終了: {project.endDate}</p>
                      <p className="text-sm text-zinc-400 mb-4">最終更新: {project.lastUpdated}</p>
                      <Link href={`/projects/${project.id}`}>
                        <Button className="w-full bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700">
                          詳細を見る
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 text-center">
            <Link href="/#contact">
              <Button variant="outline" className="bg-zinc-900/50 backdrop-blur-sm text-white border-zinc-700 hover:bg-zinc-800/70">
                プロジェクトに関するお問い合わせ
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
