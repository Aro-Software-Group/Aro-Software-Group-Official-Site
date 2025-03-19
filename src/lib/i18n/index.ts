import { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '@/components/LanguageProvider';

export type Language = 'ja' | 'en' | 'ko';

export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.products': {
    ja: '製品',
    en: 'Products',
    ko: '제품',
  },
  'nav.api': {
    ja: 'API',
    en: 'API',
    ko: 'API',
  },
  'nav.team': {
    ja: 'チーム',
    en: 'Team',
    ko: '팀',
  },
  'nav.projects': {
    ja: 'プロジェクト',
    en: 'Projects',
    ko: '프로젝트',
  },
  'nav.blog': {
    ja: 'ブログ',
    en: 'Blog',
    ko: '블로그',
  },
  'nav.contact': {
    ja: 'お問い合わせ',
    en: 'Contact',
    ko: '문의하기',
  },
  'nav.demo': {
    ja: 'デモを試す',
    en: 'Try Demo',
    ko: '데모 시도',
  },

  // Hero section
  'hero.title': {
    ja: '次世代 AI ソリューション',
    en: 'Next Generation AI Solutions',
    ko: '차세대 AI 솔루션',
  },
  'hero.subtitle': {
    ja: 'Aro Software Groupは、あったらいいなを実現するために存在するチームです。プライバシーとセキュリティを重視し、革新的なAIツールとソリューションを開発しています。',
    en: 'Aro Software Group is a team dedicated to realizing what could be. We develop innovative AI tools and solutions with a focus on privacy and security.',
    ko: 'Aro Software Group은 가능성을 실현하기 위해 존재하는 팀입니다. 개인 정보 보호와 보안에 중점을 둔 혁신적인 AI 도구와 솔루션을 개발합니다.',
  },
  'hero.search': {
    ja: '何をお探しですか？',
    en: 'What are you looking for?',
    ko: '무엇을 찾고 계신가요?',
  },
  'hero.viewProducts': {
    ja: '製品を見る',
    en: 'View Products',
    ko: '제품 보기',
  },
  'hero.viewProjects': {
    ja: 'プロジェクト一覧',
    en: 'View Projects',
    ko: '프로젝트 목록',
  },
  'hero.inDevelopment': {
    ja: '開発中のプロジェクト',
    en: 'Projects in Development',
    ko: '개발 중인 프로젝트',
  },
  'hero.details': {
    ja: '詳細を見る',
    en: 'View Details',
    ko: '자세히 보기',
  },

  // Product Preview section
  'products.title': {
    ja: '製品ラインナップ',
    en: 'Product Lineup',
    ko: '제품 라인업',
  },
  'products.heading': {
    ja: '革新的AIツール',
    en: 'Innovative AI Tools',
    ko: '혁신적인 AI 도구',
  },
  'products.description': {
    ja: 'Aro Software Groupは、最先端のAI技術を活用した製品を開発しています。ユーザーのニーズとプライバシーを最優先に考えたこれらのツールで、あなたの生産性を向上させます。',
    en: 'Aro Software Group develops products utilizing cutting-edge AI technology. These tools prioritize user needs and privacy, enhancing your productivity.',
    ko: 'Aro Software Group은 최첨단 AI 기술을 활용한 제품을 개발합니다. 사용자의 요구와 개인 정보 보호를 최우선으로 고려한 이러한 도구로 생산성을 향상시킵니다.',
  },
  'products.status.development': {
    ja: '開発中',
    en: 'In Development',
    ko: '개발 중',
  },
  'products.status.active': {
    ja: '提供中',
    en: 'Active',
    ko: '제공 중',
  },
  'products.status.discontinued': {
    ja: '終了',
    en: 'Discontinued',
    ko: '종료됨',
  },
  'products.comingSoon': {
    ja: '近日公開予定',
    en: 'Coming Soon',
    ko: '곧 공개 예정',
  },
  'products.viewDetails': {
    ja: '詳細を見る',
    en: 'View Details',
    ko: '자세히 보기',
  },
  'products.viewAll': {
    ja: 'すべてのプロジェクトを見る',
    en: 'View All Projects',
    ko: '모든 프로젝트 보기',
  },
  'products.lastUpdated': {
    ja: '最終更新',
    en: 'Last Updated',
    ko: '최종 업데이트',
  },
  'products.endDate': {
    ja: '開発終了',
    en: 'Development Ended',
    ko: '개발 종료',
  },

  // Team section
  'team.title': {
    ja: 'チームについて',
    en: 'About Our Team',
    ko: '팀 소개',
  },
  'team.heading': {
    ja: 'Aro Software Group',
    en: 'Aro Software Group',
    ko: 'Aro Software Group',
  },
  'team.description': {
    ja: 'Aro Software Groupは、あったらいいなを実現するために存在するチームです。プライバシーとセキュリティを重視した革新的なAIツールとソリューションを開発しています。',
    en: 'Aro Software Group is a team dedicated to bringing innovative ideas to life. We develop revolutionary AI tools and solutions with a focus on privacy and security.',
    ko: 'Aro Software Group은 혁신적인 아이디어를 실현하기 위해 존재하는 팀입니다. 개인 정보 보호와 보안에 중점을 둔 혁신적인 AI 도구와 솔루션을 개발합니다.',
  },
  'team.vision': {
    ja: '私たちのビジョン',
    en: 'Our Vision',
    ko: '우리의 비전',
  },
  'team.visionDesc': {
    ja: 'AIの力を活用して人々の生活を豊かにし、テクノロジーとの関わり方に変革をもたらすことを目指しています。',
    en: 'We aim to enrich people\'s lives by harnessing the power of AI, transforming how we interact with technology.',
    ko: 'AI의 힘을 활용하여 사람들의 삶을 풍요롭게 하고, 기술과의 상호 작용 방식을 변화시키는 것을 목표로 합니다。',
  },
  'team.values': {
    ja: '私たちの価値観',
    en: 'Our Values',
    ko: '우리의 가치',
  },
  'team.projects': {
    ja: 'プロジェクト一覧',
    en: 'View Projects',
    ko: '프로젝트 목록',
  },
  'team.contact': {
    ja: 'お問い合わせ',
    en: 'Contact Us',
    ko: '문의하기',
  },

  // Contact section
  'contact.title': {
    ja: 'お問い合わせ',
    en: 'Contact Us',
    ko: '문의하기',
  },
  'contact.heading': {
    ja: 'お気軽にご連絡ください',
    en: 'Get in Touch',
    ko: '연락주세요',
  },
  'contact.description': {
    ja: '製品に関するお問い合わせ、プロジェクトの共同開発のご提案、採用情報など、お気軽にご連絡ください。24時間以内に担当者からご返信いたします。',
    en: 'Feel free to contact us regarding products, project collaboration proposals, recruitment, and more. Our team will respond within 24 hours.',
    ko: '제품 관련 문의, 프로젝트 공동 개발 제안, 채용 정보 등 편하게 연락해 주세요. 24시간 이내에 담당자가 답변해 드립니다.',
  },
  'contact.form': {
    ja: 'お問い合わせフォーム',
    en: 'Contact Form',
    ko: '문의 양식',
  },
  'contact.name': {
    ja: 'お名前',
    en: 'Name',
    ko: '이름',
  },
  'contact.email': {
    ja: 'メールアドレス',
    en: 'Email',
    ko: '이메일',
  },
  'contact.subject': {
    ja: '件名',
    en: 'Subject',
    ko: '제목',
  },
  'contact.message': {
    ja: 'メッセージ',
    en: 'Message',
    ko: '메시지',
  },
  'contact.send': {
    ja: '送信する',
    en: 'Send',
    ko: '보내기',
  },
  'contact.otherMethods': {
    ja: 'その他の連絡方法',
    en: 'Other Contact Methods',
    ko: '기타 연락 방법',
  },
  'contact.emailAddress': {
    ja: 'メールアドレス',
    en: 'Email Address',
    ko: '이메일 주소',
  },
  'contact.socialMedia': {
    ja: 'ソーシャルメディア',
    en: 'Social Media',
    ko: '소셜 미디어',
  },
  'contact.community': {
    ja: 'コミュニティへの参加',
    en: 'Join Our Community',
    ko: '커뮤니티 참여',
  },
  'contact.communityDesc': {
    ja: '開発中のプロジェクトの早期アクセスや最新情報を受け取るには、コミュニティにご参加ください。',
    en: 'Join our community to get early access and latest updates on projects under development.',
    ko: '개발 중인 프로젝트의 조기 액세스 및 최신 정보를 받으려면 커뮤니티에 참여하세요。',
  },
  'contact.joinDiscord': {
    ja: 'Discordに参加する',
    en: 'Join Discord',
    ko: 'Discord 참여',
  },

  // Footer
  'footer.description': {
    ja: '次世代AIソリューションでビジネスと生活を変革します。あったらいいなを実現するために存在するチームです。プライバシーとセキュリティを重視した革新的なAIツールを提供しています。',
    en: 'Transforming business and life with next-generation AI solutions. We are a team dedicated to realizing what could be. We provide innovative AI tools with a focus on privacy and security.',
    ko: '차세대 AI 솔루션으로 비즈니스와 생활을 변화시킵니다. 가능성을 실현하기 위해 존재하는 팀입니다. 개인 정보 보호와 보안에 중점을 둔 혁신적인 AI 도구를 제공합니다.',
  },
  'footer.projects': {
    ja: 'プロジェクト',
    en: 'Projects',
    ko: '프로젝트',
  },
  'footer.allProjects': {
    ja: 'すべてのプロジェクト',
    en: 'All Projects',
    ko: '모든 프로젝트',
  },
  'footer.inDevelopment': {
    ja: '開発中',
    en: 'In Development',
    ko: '개발 중',
  },
  'footer.active': {
    ja: '提供中',
    en: 'Active',
    ko: '제공 중',
  },
  'footer.discontinued': {
    ja: '終了したプロジェクト',
    en: 'Discontinued Projects',
    ko: '종료된 프로젝트',
  },
  'footer.team': {
    ja: 'チーム',
    en: 'Team',
    ko: '팀',
  },
  'footer.teamIntro': {
    ja: 'チーム紹介',
    en: 'Team Introduction',
    ko: '팀 소개',
  },
  'footer.vision': {
    ja: 'ビジョン',
    en: 'Vision',
    ko: '비전',
  },
  'footer.activities': {
    ja: '活動内容',
    en: 'Activities',
    ko: '활동 내용',
  },
  'footer.resources': {
    ja: 'リソース',
    en: 'Resources',
    ko: '리소스',
  },
  'footer.blog': {
    ja: 'ブログ',
    en: 'Blog',
    ko: '블로그',
  },
  'footer.github': {
    ja: 'GitHub',
    en: 'GitHub',
    ko: 'GitHub',
  },
  'footer.discord': {
    ja: 'Discord',
    en: 'Discord',
    ko: 'Discord',
  },
  'footer.x': {
    ja: 'X (旧Twitter)',
    en: 'X (formerly Twitter)',
    ko: 'X (구 Twitter)',
  },
  'footer.privacy': {
    ja: 'プライバシーポリシー',
    en: 'Privacy Policy',
    ko: '개인정보 처리방침',
  },
  'footer.terms': {
    ja: '利用規約',
    en: 'Terms of Use',
    ko: '이용약관',
  },
  'footer.language': {
    ja: '🌐 JP | EN | KO',
    en: '🌐 JP | EN | KO',
    ko: '🌐 JP | EN | KO',
  },
  'footer.rights': {
    ja: 'All rights reserved.',
    en: 'All rights reserved.',
    ko: 'All rights reserved.',
  },

  // 404 Page
  '404.title': {
    ja: 'ページが見つかりませんでした',
    en: 'Page Not Found',
    ko: '페이지를 찾을 수 없습니다',
  },
  '404.description': {
    ja: 'お探しのページは存在しないか、移動された可能性があります。URLが正しいかご確認ください。',
    en: 'The page you are looking for does not exist or may have been moved. Please check that the URL is correct.',
    ko: '찾고 계신 페이지가 존재하지 않거나 이동되었을 수 있습니다. URL이 올바른지 확인해 주세요。',
  },
  '404.home': {
    ja: 'ホームに戻る',
    en: 'Return Home',
    ko: '홈으로 돌아가기',
  },
  '404.lookingFor': {
    ja: 'お探しだったのはこちらですか？',
    en: 'Were you looking for these?',
    ko: '이것을 찾고 계셨나요?',
  },
  '404.projects': {
    ja: 'プロジェクト',
    en: 'Projects',
    ko: '프로젝트',
  },
  '404.projectsList': {
    ja: '開発中および提供中のプロジェクト一覧',
    en: 'List of projects in development and available',
    ko: '개발 중 및 제공 중인 프로젝트 목록',
  },
  '404.blog': {
    ja: 'ブログ',
    en: 'Blog',
    ko: '블로그',
  },
  '404.blogDesc': {
    ja: '最新の記事と技術情報',
    en: 'Latest articles and technical information',
    ko: '최신 기사 및 기술 정보',
  },
  '404.teamInfo': {
    ja: 'チーム情報',
    en: 'Team Information',
    ko: '팀 정보',
  },
  '404.teamMission': {
    ja: 'チームのミッションとビジョン',
    en: 'Team mission and vision',
    ko: '팀의 미션과 비전',
  },

  // Projects Page
  'projects.pageTitle': {
    ja: 'プロジェクト一覧',
    en: 'Projects List',
    ko: '프로젝트 목록',
  },
  'projects.heading': {
    ja: 'Aro Software Group プロジェクト',
    en: 'Aro Software Group Projects',
    ko: 'Aro Software Group 프로젝트',
  },
  'projects.description': {
    ja: '私たちが開発および提供しているプロジェクトの一覧です。プライバシーとセキュリティを重視した革新的なAIツールを開発することで、ユーザーの皆様に価値を提供することを目指しています。',
    en: 'Here is a list of projects we are developing and providing. We aim to deliver value to our users by developing innovative AI tools with a focus on privacy and security.',
    ko: '당사가 개발하고 제공하는 프로젝트 목록입니다. 개인 정보 보호와 보안에 중점을 둔 혁신적인 AI 도구를 개발하여 사용자에게 가치를 제공하는 것을 목표로 합니다。',
  },
  'projects.inDevelopment': {
    ja: '開発中のプロジェクト',
    en: 'Projects in Development',
    ko: '개발 중인 프로젝트',
  },
  'projects.active': {
    ja: '提供中のプロジェクト',
    en: 'Active Projects',
    ko: '제공 중인 프로젝트',
  },
  'projects.discontinued': {
    ja: '終了したプロジェクト',
    en: 'Discontinued Projects',
    ko: '종료된 프로젝트',
  },
  'projects.inquiry': {
    ja: 'プロジェクトに関するお問い合わせ',
    en: 'Project Inquiries',
    ko: '프로젝트 관련 문의',
  },

  // Project specific
  'project.arogent.desc': {
    ja: 'Gemini & OpenRouter API搭載の超賢いAIエージェント。あなたの作業を効率化するパートナー。',
    en: 'Super smart AI agent with Gemini & OpenRouter API. A partner to streamline your work.',
    ko: 'Gemini 및 OpenRouter API가 탑재된 초지능 AI 에이전트. 작업 효율화를 위한 파트너。',
  },
  'project.arogent.longdesc': {
    ja: 'Aro Agentは、Gemini APIとOpenRouter APIを統合した高度なAIエージェントです。Manusのように、ユーザーの日常タスクや業務をスマートにサポートすることを目指しています。質問応答と複雑なタスク管理機能を備え、複数のAPIと連携した拡張性の高い設計となっています。また、ウェブブラウジング機能によるリアルタイム情報アクセスも可能です。',
    en: 'Aro Agent is an advanced AI agent that integrates Gemini API and OpenRouter API. Like Manus, it aims to smartly support users in their daily tasks and work. It has question answering and complex task management functions, with a highly expandable design that works with multiple APIs. It also enables real-time information access through web browsing.',
    ko: 'Aro Agent는 Gemini API와 OpenRouter API를 통합한 고급 AI 에이전트입니다. Manus처럼 사용자의 일상 작업과 업무를 지능적으로 지원하는 것을 목표로 합니다. 질문 응답 및 복잡한 작업 관리 기능을 갖추고 있으며, 여러 API와 연계한 확장성이 높은 설계입니다. 또한 웹 브라우징 기능을 통한 실시간 정보 접근도 가능합니다。',
  },
  'project.features.responses': {
    ja: '質問応答、タスク管理機能',
    en: 'Q&A and task management functions',
    ko: '질문 응답, 작업 관리 기능',
  },
  'project.features.instructions': {
    ja: '複雑な指示理解能力',
    en: 'Complex instruction understanding',
    ko: '복잡한 지시 이해 능력',
  },
  'project.features.info': {
    ja: 'スマートな情報整理',
    en: 'Smart information organization',
    ko: '스마트한 정보 정리',
  },
  'project.features.api': {
    ja: 'APIを活用した拡張性',
    en: 'Expandability using APIs',
    ko: 'API를 활용한 확장성',
  },

  // Brain studio
  'project.brainstudio.desc': {
    ja: '生成AIと完全オフラインで会話できるアプリ。プライバシーを守りながら、AIの力を最大限に活用。',
    en: 'An app for fully offline conversations with generative AI. Maximize the power of AI while protecting privacy.',
    ko: '생성형 AI와 완전 오프라인으로 대화할 수 있는 앱. 개인 정보를 보호하면서 AI의 힘을 최대한 활용합니다。',
  },
  'project.features.offline': {
    ja: '完全オフラインでAIと会話',
    en: 'Fully offline AI conversations',
    ko: '완전 오프라인으로 AI와 대화',
  },
  'project.features.platforms': {
    ja: 'Windows & Android対応',
    en: 'Windows & Android support',
    ko: 'Windows 및 Android 지원',
  },
  'project.features.voice': {
    ja: 'リアルタイム音声会話（開発中）',
    en: 'Real-time voice conversations (in development)',
    ko: '실시간 음성 대화 (개발 중)',
  },
  'project.features.models': {
    ja: 'カスタマイズ可能なモデル選択',
    en: 'Customizable model selection',
    ko: '사용자 정의 가능한 모델 선택',
  },
};

export const useTranslation = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || translations[key]['en'] || key;
  };

  return { t, language, changeLanguage: setLanguage };
};

export const getStaticTranslation = (key: string, lang: Language = 'ja'): string => {
  if (!translations[key]) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  return translations[key][lang] || translations[key]['en'] || key;
};
