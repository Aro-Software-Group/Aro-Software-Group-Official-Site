"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const blogPosts = [
  {
    id: "aro-software-group-website-launch",
    title: "Aro Software Group 公式サイトをリリースしました",
    date: "2025年3月19日",
    excerpt: "このたび、Aro Software Groupの公式ウェブサイトを正式にリリースしました。当社の理念やビジョン、開発中の製品に関する最新情報を発信してまいります。",
    category: "お知らせ",
  },
  {
    id: "ai-projects-in-development",
    title: "Aro Software Group 開発中のAIプロジェクト紹介",
    date: "2025年3月18日",
    excerpt: "Aro Software Groupが現在開発中の4つの主要AIプロジェクトについて詳しくご紹介します。Aro Agent、Aro Brain Studio、Aro Agent Private、Aro Oneの特徴と開発状況をお届けします。",
    category: "プロダクト",
  },
  {
    id: "privacy-first-ai-development",
    title: "プライバシー重視のAI開発へのこだわり",
    date: "2025年3月15日",
    excerpt: "Aro Software Groupがプライバシーを最優先に考えたAI開発に取り組む理由と、その技術的アプローチについて解説します。オフラインファーストの思想とセキュリティへの取り組みをご紹介します。",
    category: "技術",
  },
  {
    id: "join-our-community",
    title: "Aro Software Group コミュニティへの参加方法",
    date: "2025年3月10日",
    excerpt: "開発中のプロダクトの早期アクセスや最新情報を得るための、Aro Software Groupコミュニティへの参加方法をご案内します。Discordサーバーを中心に活発な議論が行われています。",
    category: "コミュニティ",
  },
];

export default function BlogPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Aro Software Group ブログ</h1>
          <p className="text-zinc-400 text-lg">
            最新の製品情報、技術記事、お知らせなどを掲載しています
          </p>
        </div>

        <Separator className="bg-zinc-800 my-8" />

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/posts/${post.id}`}>
              <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/80 transition-colors cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-primary text-sm">{post.category}</span>
                    <span className="text-zinc-500 text-sm">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-white">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <span className="text-primary text-sm flex items-center gap-2">
                    続きを読む
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
