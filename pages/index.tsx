import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left cursor-pointer group">
        <span className="font-medium text-slate-800 pr-4 group-hover:text-amber-700 transition-colors">{q}</span>
        <span className={`text-2xl text-slate-400 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && <p className="pb-5 text-slate-600 leading-relaxed">{a}</p>}
    </div>
  )
}

/* SVG Icons */
const IconClock = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)
const IconShield = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
)
const IconBanknotes = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
  </svg>
)
const IconBuilding = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
  </svg>
)
const IconWrench = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
  </svg>
)
const IconUsers = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
)
const IconSun = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
)
const IconGlobe = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)
const IconArrowRight = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
)
const IconCheck = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
)
const IconDocument = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
)
const IconUpload = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
)
const IconBolt = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
)
const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>宿泊業専門ファクタリング｜CASH NOW for Hotels</title>
        <meta name="description" content="旅館・ホテル専門のファクタリングサービス。OTA売上の前払い、設備修繕の緊急資金、繁閑差の平準化に。AI審査で最短10分入金。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="宿泊業専門ファクタリング｜CASH NOW for Hotels" />
        <meta property="og:description" content="旅館・ホテル専門のファクタリングサービス。OTA売上の前払い、設備修繕の緊急資金に。AI審査で最短10分入金。" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FinancialService',
              name: 'CASH NOW for Hotels',
              description: '旅館・ホテル専門のファクタリングサービス',
              areaServed: 'JP',
              serviceType: 'Factoring',
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-amber-400 text-xs font-bold">CN</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-sm tracking-tight">CASH NOW</span>
                <span className="text-[10px] text-amber-600 font-semibold ml-1.5 bg-amber-50 px-1.5 py-0.5 rounded">for Hotels</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
              <a href="#problem" className="hover:text-slate-900 transition-colors cursor-pointer">課題</a>
              <a href="#usecases" className="hover:text-slate-900 transition-colors cursor-pointer">活用シーン</a>
              <a href="#flow" className="hover:text-slate-900 transition-colors cursor-pointer">ご利用の流れ</a>
              <a href="#faq" className="hover:text-slate-900 transition-colors cursor-pointer">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer">
                <IconPhone />
                無料相談
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
                  <IconBuilding />
                  旅館・ホテル専門のファクタリング
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  宿泊業の資金繰りを、<br />
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">最短10分</span>で解決。
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                  OTA売上の前払い、設備修繕の緊急資金、繁閑差の平準化。<br className="hidden md:block" />
                  宿泊業に特化した資金調達をAI審査でスピーディーに。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25 cursor-pointer">
                    無料で相談する
                    <IconArrowRight />
                  </a>
                  <a href="#flow" className="inline-flex items-center justify-center gap-2 border border-slate-500 text-slate-300 font-medium text-lg px-8 py-4 rounded-xl hover:bg-slate-800 transition-all cursor-pointer">
                    利用の流れを見る
                  </a>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '6.5', unit: '兆円', label: '宿泊市場規模', sub: '2025年度見通し' },
                    { value: '約3割', unit: '', label: '債務超過の施設', sub: '売上回復と資金不足が同時進行' },
                    { value: '267', unit: '件', label: '年間退出数', sub: '2025年 倒産＋休廃業' },
                    { value: '50', unit: '%', label: '人手不足の施設', sub: '非正社員不足（2025年1月）' },
                  ].map(({ value, unit, label, sub }) => (
                    <div key={label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="flex items-baseline gap-0.5 mb-1">
                        <span className="text-2xl md:text-3xl font-bold text-amber-400">{value}</span>
                        {unit && <span className="text-sm font-bold text-amber-400/70">{unit}</span>}
                      </div>
                      <p className="text-white text-sm font-medium mb-0.5">{label}</p>
                      <p className="text-slate-400 text-xs">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section id="problem" className="py-20 md:py-28 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <p className="text-center text-amber-600 font-semibold text-sm mb-3 tracking-widest">PROBLEM</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
                宿泊業が抱える資金課題
              </h2>
              <p className="text-center text-slate-500 text-base mb-16 max-w-2xl mx-auto leading-relaxed">
                需要は回復しているのに、資金が追いつかない。<br />
                それが今の宿泊業界のリアルです。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Left: Market context */}
                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><IconGlobe /></span>
                    需要環境は好調
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                      <div>
                        <p className="text-slate-800 font-medium">国内旅行消費額 <span className="text-blue-600 font-bold">26.8兆円</span></p>
                        <p className="text-slate-500 text-sm">2025年 日本人国内旅行消費額</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                      <div>
                        <p className="text-slate-800 font-medium">訪日外国人消費額 <span className="text-blue-600 font-bold">9.5兆円</span></p>
                        <p className="text-slate-500 text-sm">2025年 インバウンド旅行消費額</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                      <div>
                        <p className="text-slate-800 font-medium">宿泊市場 <span className="text-blue-600 font-bold">6.5兆円</span></p>
                        <p className="text-slate-500 text-sm">2025年度 旅館・ホテル売上見通し</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-4">出典：国土交通省・帝国データバンク</p>
                </div>

                {/* Right: Financial reality */}
                <div className="bg-red-50/50 rounded-2xl p-8">
                  <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600"><IconShield /></span>
                    しかし財務は厳しい
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                      <div>
                        <p className="text-slate-800 font-medium">債務超過企業が <span className="text-red-600 font-bold">約3割</span></p>
                        <p className="text-slate-500 text-sm">売上回復と資金不足が同時進行</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                      <div>
                        <p className="text-slate-800 font-medium">倒産89件＋休廃業178件 = <span className="text-red-600 font-bold">267件退出</span></p>
                        <p className="text-slate-500 text-sm">2025年 宿泊業の市場退出数</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                      <div>
                        <p className="text-slate-800 font-medium">退出要因：人手不足・原材料高・設備投資難</p>
                        <p className="text-slate-500 text-sm">ゼロゼロ融資返済の圧迫も</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-4">出典：帝国データバンク</p>
                </div>
              </div>

              {/* Key insight */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-center">
                <p className="text-amber-400 font-semibold text-sm mb-2">KEY INSIGHT</p>
                <p className="text-white text-xl md:text-2xl font-bold leading-relaxed">
                  宿泊業は「需要不足」ではなく、<br className="hidden md:block" />
                  「需要を取りに行くための<span className="text-amber-400">資金が足りない</span>」業界です。
                </p>
                <p className="text-slate-400 text-sm mt-4 max-w-2xl mx-auto">
                  潜在的な早期資金化ニーズは推計3,250億円〜1.3兆円。宿泊売上の5〜20%で前倒し資金化ニーズが毎年発生していると見られます。
                </p>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section id="usecases" className="py-20 md:py-28 px-4 bg-slate-50">
            <div className="max-w-6xl mx-auto">
              <p className="text-center text-amber-600 font-semibold text-sm mb-3 tracking-widest">USE CASES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
                こんな場面で使われています
              </h2>
              <p className="text-center text-slate-500 text-base mb-16">
                宿泊業に特化しているからこそ、業界の資金ニーズにピタリと対応
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <IconWrench />,
                    title: '設備故障・緊急修繕',
                    desc: 'ボイラー故障、水道トラブル、空調停止。営業停止は1日も許されません。申込から最短10分で修繕資金を確保。',
                    tag: '緊急',
                    tagColor: 'bg-red-100 text-red-700',
                    example: '例：ボイラー交換 180万円を即日調達',
                  },
                  {
                    icon: <IconBanknotes />,
                    title: 'OTA売上の前払い',
                    desc: 'じゃらん・楽天トラベルなどOTA経由の売上を入金日前に資金化。キャッシュフローの平準化に。',
                    tag: '定常',
                    tagColor: 'bg-blue-100 text-blue-700',
                    example: '例：OTA売上300万円を翌月末前に前払い',
                  },
                  {
                    icon: <IconSun />,
                    title: '繁閑差・天候キャンセル対応',
                    desc: '台風シーズンの大量キャンセル、閑散期の売上減。一時的な収支悪化を乗り越える運転資金として。',
                    tag: '季節変動',
                    tagColor: 'bg-amber-100 text-amber-700',
                    example: '例：台風キャンセル70件分の損失を補填',
                  },
                  {
                    icon: <IconGlobe />,
                    title: '改装・インバウンド対応',
                    desc: 'インバウンド向け改装、バリアフリー対応、高付加価値化投資。銀行融資を待てない改装前のブリッジ資金に。',
                    tag: '投資',
                    tagColor: 'bg-emerald-100 text-emerald-700',
                    example: '例：客室リノベ500万円のブリッジ融資',
                  },
                ].map(({ icon, title, desc, tag, tagColor, example }) => (
                  <div key={title} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                        {icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tagColor}`}>{tag}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg px-4 py-3">
                      <p className="text-sm text-slate-500">{example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features / Why Us */}
          <section className="py-20 md:py-28 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <p className="text-center text-amber-600 font-semibold text-sm mb-3 tracking-widest">FEATURES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
                CASH NOW for Hotels の強み
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <IconBolt />,
                    title: 'AI審査で最短10分入金',
                    desc: 'AIが書類を自動解析。従来の金融機関のように数週間〜1ヶ月待つ必要はありません。',
                  },
                  {
                    icon: <IconBuilding />,
                    title: '宿泊業に特化した審査',
                    desc: 'OTA売上、予約データ、稼働率など宿泊業特有の指標を理解した審査ロジック。',
                  },
                  {
                    icon: <IconShield />,
                    title: '取引先に知られない',
                    desc: '2社間取引のため、OTAやエージェントへの通知は一切不要。',
                  },
                  {
                    icon: <IconBanknotes />,
                    title: '手数料一律9.5%',
                    desc: '金額や売掛先に関わらず一律。初期費用・月額費用は完全無料。振込手数料も当社負担。',
                  },
                  {
                    icon: <IconUsers />,
                    title: '個人経営・小規模旅館もOK',
                    desc: '法人・個人事業主を問わず対応。開業間もない施設もご利用いただけます。',
                  },
                  {
                    icon: <IconDocument />,
                    title: 'オンライン完結',
                    desc: '来店不要。スマホから請求書を撮影してアップロードするだけ。全国どこからでも申込可能。',
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="group bg-slate-50 p-6 rounded-2xl hover:bg-slate-900 transition-colors duration-200 cursor-default">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                      {icon}
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2 group-hover:text-white transition-colors duration-200">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors duration-200">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How it works */}
          <section id="flow" className="py-20 md:py-28 px-4 bg-slate-50">
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-amber-600 font-semibold text-sm mb-3 tracking-widest">HOW IT WORKS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
                かんたん3ステップで資金化
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    icon: <IconDocument />,
                    title: '請求書情報を入力',
                    desc: 'OTA売上明細や請求書の金額・支払期日などをフォームに入力。最短5分で完了。',
                  },
                  {
                    step: '02',
                    icon: <IconUpload />,
                    title: '書類をアップロード',
                    desc: '請求書・本人確認書類をスマホで撮影してアップロード。来店は一切不要。',
                  },
                  {
                    step: '03',
                    icon: <IconBolt />,
                    title: 'AI審査 → 最短10分で入金',
                    desc: 'AIが書類を自動審査。条件に合意後、指定口座へ即お振込み。',
                  },
                ].map(({ step, icon, title, desc }, i) => (
                  <div key={step} className="relative text-center">
                    {i < 2 && (
                      <div className="hidden md:flex absolute top-14 -right-4 z-10 w-8 h-8 items-center justify-center">
                        <IconArrowRight />
                      </div>
                    )}
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-amber-400 mx-auto mb-4">
                      {icon}
                    </div>
                    <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      STEP {step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section className="py-20 md:py-28 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-amber-600 font-semibold text-sm mb-3 tracking-widest">COMPARISON</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
                他の資金調達方法との違い
              </h2>
              <p className="text-center text-slate-500 text-sm mb-12">
                宿泊業の「すぐ必要」に応えられるのはファクタリングだけ
              </p>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-5 px-5 text-slate-500 font-medium w-[160px]"></th>
                      <th className="py-5 px-5 text-center relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" style={{ borderRadius: '12px 12px 0 0' }} />
                        <div className="relative">
                          <span className="inline-block text-white font-bold text-base">CASH NOW</span>
                          <p className="text-amber-400 text-[10px] mt-0.5 font-medium">おすすめ</p>
                        </div>
                      </th>
                      <th className="py-5 px-5 text-center text-slate-400 font-medium text-xs">一般ファクタリング</th>
                      <th className="py-5 px-5 text-center text-slate-400 font-medium text-xs">銀行融資</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { label: '審査スピード', ours: '最短10分', competitor: '最短即日〜数日', bank: '2週間〜1ヶ月', win: true },
                      { label: '宿泊業の理解', ours: 'OTA売上・稼働率を評価', competitor: '業種不問（汎用）', bank: '決算書ベース', win: true },
                      { label: '手数料', ours: '一律9.5%', competitor: '1〜20%', bank: '年1〜3%', win: false },
                      { label: '必要書類', ours: '請求書・本人確認\n通帳明細', competitor: '請求書・契約書等', bank: '決算書・事業計画等', win: true },
                      { label: '担保・保証人', ours: '不要', competitor: '不要', bank: '必要な場合あり', win: false },
                      { label: '信用情報への影響', ours: 'なし', competitor: 'なし', bank: 'あり', win: false },
                      { label: '少額対応', ours: '対応可', competitor: '業者による', bank: '難しい場合あり', win: true },
                      { label: 'オンライン完結', ours: '完全オンライン', competitor: '対面の場合あり', bank: '対面が基本', win: true },
                    ].map(({ label, ours, competitor, bank, win }) => (
                      <tr key={label}>
                        <td className="py-4 px-5 text-slate-600 font-medium">{label}</td>
                        <td className={`py-4 px-5 text-center font-bold relative ${win ? 'text-amber-700' : 'text-slate-700'}`}>
                          <div className={`absolute inset-0 ${win ? 'bg-amber-50/60' : 'bg-slate-50/30'}`} />
                          <div className="relative">
                            <span className="whitespace-pre-line flex items-center justify-center gap-1.5">
                              {win && <span className="inline-flex w-5 h-5 rounded-full bg-amber-500 text-white items-center justify-center shrink-0"><IconCheck /></span>}
                              {ours}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-5 text-center text-slate-400 whitespace-pre-line">{competitor}</td>
                        <td className="py-4 px-5 text-center text-slate-400 whitespace-pre-line">{bank}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Target customers */}
          <section className="py-20 md:py-28 px-4 bg-slate-50">
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-amber-600 font-semibold text-sm mb-3 tracking-widest">TARGET</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
                こんな施設にご利用いただいています
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: '地方の中小旅館・ホテル',
                    points: ['銀行融資のハードルが高い', '設備老朽化が進んでいる', '修繕費用を早急に確保したい'],
                  },
                  {
                    title: 'OTA依存度が高い施設',
                    points: ['OTA入金サイクルが遅い', 'カード決済の入金待ちが長い', '運転資金を前倒しで確保したい'],
                  },
                  {
                    title: 'インバウンド対応を急ぐ施設',
                    points: ['客室改装を急ぎたい', '多言語対応設備の導入', '銀行融資の審査を待てない'],
                  },
                ].map(({ title, points }) => (
                  <div key={title} className="bg-white rounded-2xl p-8 border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">{title}</h3>
                    <ul className="space-y-3">
                      {points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-amber-500 mt-0.5 shrink-0"><IconCheck /></span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 md:py-28 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-amber-600 font-semibold text-sm mb-3 tracking-widest">VOICE</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
                ご利用施設の声
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    type: '温泉旅館',
                    name: 'A旅館 代表',
                    area: '静岡県',
                    text: 'ボイラーが突然故障し、修繕費180万円が急遽必要になりました。銀行では2週間以上かかると言われましたが、CASH NOWは当日中に入金。営業を止めずに済みました。',
                  },
                  {
                    type: 'ビジネスホテル',
                    name: 'B社 経理担当',
                    area: '大阪府',
                    text: 'OTAの入金が翌月末なのに、リネン代・人件費は毎月発生します。OTA売上を前払いしてもらうことで、キャッシュフローが安定しました。毎月利用しています。',
                  },
                  {
                    type: 'リゾートホテル',
                    name: 'C社 オーナー',
                    area: '沖縄県',
                    text: 'インバウンド需要に対応するため客室改装が急務でしたが、銀行融資の審査が長すぎて。CASH NOWをブリッジ資金として活用し、繁忙期に間に合わせることができました。',
                  },
                ].map(({ type, name, area, text }) => (
                  <div key={name} className="bg-slate-50 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-amber-400 text-sm font-bold">
                        {type[0]}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{name}</p>
                        <p className="text-xs text-slate-500">{type} / {area}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Numbers */}
          <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { value: 'AI', unit: '審査', label: 'AIが即時審査', sub: '人手を介さず高速・公正' },
                  { value: '最短10', unit: '分', label: '入金スピード', sub: '申込から最短10分' },
                  { value: '9.5', unit: '%', label: '手数料（一律）', sub: '業界最安水準' },
                  { value: '0', unit: '円', label: '初期費用・月額', sub: '手数料以外の費用なし' },
                ].map(({ value, unit, label, sub }) => (
                  <div key={label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 text-center text-white border border-white/10">
                    <div className="flex items-baseline justify-center gap-0.5 mb-1">
                      <span className="text-3xl md:text-4xl font-bold text-amber-400">{value}</span>
                      {unit && <span className="text-lg md:text-xl font-bold text-amber-400/70">{unit}</span>}
                    </div>
                    <p className="font-semibold text-sm md:text-base mb-1">{label}</p>
                    <p className="text-white/60 text-xs">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-20 md:py-28 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
              <p className="text-center text-amber-600 font-semibold text-sm mb-3 tracking-widest">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
                よくある質問
              </h2>
              <div>
                <FAQItem
                  q="どのような宿泊施設が利用できますか？"
                  a="旅館、ホテル、民宿、ゲストハウス、民泊など宿泊業全般でご利用いただけます。法人・個人事業主を問わず、規模の大小も問いません。"
                />
                <FAQItem
                  q="OTA売上も資金化できますか？"
                  a="はい。じゃらん、楽天トラベル、Booking.comなどOTA経由の売上も対象です。オンラインカード決済の入金予定額を早期に資金化できます。"
                />
                <FAQItem
                  q="手数料はどのくらいですか？"
                  a="手数料は一律9.5%です。金額や売掛先に関わらず変動しません。初期費用・月額費用は無料で、振込手数料も当社が負担します。"
                />
                <FAQItem
                  q="審査にはどのくらい時間がかかりますか？"
                  a="AIが自動で審査を行うため、最短10分で結果をお知らせします。従来の金融機関のように数週間〜1ヶ月お待ちいただく必要はありません。"
                />
                <FAQItem
                  q="OTAやエージェントに知られることはありますか？"
                  a="いいえ。2社間取引のため、OTAや旅行エージェントへの通知・連絡は一切ございません。取引関係に影響しません。"
                />
                <FAQItem
                  q="繁忙期と閑散期で条件は変わりますか？"
                  a="手数料率は一律9.5%で変動しません。閑散期のキャッシュフロー改善にも安心してご利用いただけます。"
                />
                <FAQItem
                  q="少額でも利用できますか？"
                  a="はい。大口の資金調達だけでなく、少額の請求書・売上からご利用いただけます。設備の小修繕や突発的な出費にも対応可能です。"
                />
                <FAQItem
                  q="申込をキャンセルすることはできますか？"
                  a="オファーを承諾される前であれば、いつでもキャンセル可能です。キャンセル料は一切かかりません。"
                />
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="contact" className="py-20 md:py-28 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
            </div>
            <div className="relative max-w-3xl mx-auto">
              <p className="text-amber-400 font-semibold text-sm mb-4 tracking-widest">GET STARTED</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                まずは無料でご相談ください
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                宿泊業の資金繰りに精通したスタッフが、<br className="hidden md:block" />
                貴施設に最適な資金化プランをご提案します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://cash.co.jp/apply" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25 cursor-pointer">
                  無料で申込む
                  <IconArrowRight />
                </a>
                <a href="mailto:info@cash.co.jp" className="inline-flex items-center justify-center gap-2 border border-slate-500 text-slate-300 font-medium text-lg px-8 py-4 rounded-xl hover:bg-slate-800 transition-all cursor-pointer">
                  <IconPhone />
                  お問い合わせ
                </a>
              </div>
              <p className="mt-8 text-slate-400 text-sm">相談無料 / 手数料以外の費用は一切かかりません</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-slate-950 text-white">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-amber-400 text-xs font-bold">CN</span>
              </div>
              <div>
                <span className="font-bold text-white text-sm">CASH NOW</span>
                <span className="text-[10px] text-amber-400 font-semibold ml-1.5">for Hotels</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <a href="https://cash.co.jp" className="hover:text-white transition-colors cursor-pointer">CASH NOW 本体サイト</a>
              <a href="https://cash.co.jp/company" className="hover:text-white transition-colors cursor-pointer">運営会社</a>
              <a href="https://cash.co.jp/terms" className="hover:text-white transition-colors cursor-pointer">利用規約</a>
              <a href="https://cash.co.jp/privacy" className="hover:text-white transition-colors cursor-pointer">プライバシーポリシー</a>
              <a href="https://cash.co.jp/contact" className="hover:text-white transition-colors cursor-pointer">お問い合わせ</a>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                <a href="https://www.fsa.go.jp/user/factoring.html" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer">
                  ファクタリングの利用に関する注意喚起（金融庁）
                  <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-500">&copy; 2025 CASH NOW. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
