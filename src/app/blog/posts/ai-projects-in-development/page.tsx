import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AiProjectsPost() {
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
              <span className="text-primary text-sm px-2 py-1 bg-primary/10 rounded-md">プロダクト</span>
              <span className="text-zinc-500 text-sm">2025年3月18日</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Aro Software Group 開発中のAIプロジェクト紹介</h1>
          </div>
        </div>

        <Separator className="bg-zinc-800 my-8" />

        <div className="prose prose-invert max-w-none prose-zinc">
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Aro Software Groupでは、AIの力を最大限に活用した革新的なプロダクトを複数開発しています。
            プライバシーとセキュリティを重視し、ユーザーの皆様に真の価値を提供することをモットーに、
            以下の4つのプロジェクトを最優先で進めています。
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Aro Agent 🤖</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <p className="text-zinc-300 mb-4">
              Aro Agentは、Gemini APIとOpenRouter APIを統合した高度なAIエージェントです。
              Manusのように、ユーザーの日常タスクや業務をスマートにサポートすることを目指しています。
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">主な特徴:</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>質問応答と複雑なタスク管理機能</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>複数のAPIと連携した拡張性の高い設計</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>ウェブブラウジング機能によるリアルタイム情報アクセス</span>
              </li>
            </ul>
            <p className="text-zinc-400">
              現在、Research Previewバージョンを最終調整中で、近日中に一部ユーザーへの提供を開始する予定です。
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Aro Brain Studio 💻</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <p className="text-zinc-300 mb-4">
              Aro Brain Studioは、生成AIと完全オフラインで会話できるアプリケーションです。
              LM Studioに着想を得て、より使いやすさとローカル処理能力を高めた製品を目指しています。
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">主な特徴:</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>完全オフラインでのAI会話機能</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Windows版とAndroid版を同時開発中</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Aro Agent Private ✨</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <p className="text-zinc-300 mb-4">
              Aro Agent Privateは、オフライン特化のAIエージェントです。
              プライバシーを最優先に考えるユーザー向けに、データを一切外部に送信せずに動作する設計になっています。
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Aro One 🧰</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <p className="text-zinc-300 mb-4">
              Aro Oneは、文書作成、表計算、プレゼンテーション資料作成などをオールインワンで提供するツールです。
              AIによる支援機能を統合し、ユーザーの創造性と生産性を最大限に引き出します。
            </p>
          </div>
        </div>

        <Separator className="bg-zinc-800 my-10" />

        <div className="flex justify-between items-center">
          <div></div> {/* Empty div to maintain layout when there's no previous post */}

          <Link href="/blog/posts/aro-software-group-website-launch">
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
