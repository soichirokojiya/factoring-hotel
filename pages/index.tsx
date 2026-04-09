import Head from 'next/head'
import { useState } from 'react'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left cursor-pointer group">
        <span className="font-medium text-slate-800 pr-4 group-hover:text-slate-900 transition-colors">{q}</span>
        <span className={`text-2xl text-slate-400 transition-transform duration-200 shrink-0 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && <p className="pb-5 text-slate-600 leading-relaxed">{a}</p>}
    </div>
  )
}

/* ── SVG Icons ── */
const IconArrowRight = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
)
const IconArrowDown = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
  </svg>
)
const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
)
const IconBanknotes = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
  </svg>
)
const IconCog = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
)
const IconArrowPath = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
  </svg>
)
const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
)
const IconMail = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
)
const IconDocument = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
)
const IconCurrency = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)
const IconChart = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
)
const IconSparkles = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
)
const IconClock = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)
const IconClipboard = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
  </svg>
)
const IconUsers = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>宿泊業の経営課題を、現場目線で解決する。</title>
        <meta name="description" content="資金繰りから業務改善、成長投資、承継まで。宿を営んできた経験をもとに、宿泊事業の悩みに実務で向き合います。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="宿泊業の経営課題を、現場目線で解決する。" />
        <meta property="og:description" content="資金繰りから業務改善、成長投資、承継まで。宿泊事業の悩みに実務で向き合います。" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '宿泊業経営支援',
              description: '宿泊業の経営課題を、金融と実務の両面から解決する会社',
              areaServed: 'JP',
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* ── Header ── */}
        <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <span className="font-bold text-slate-900 text-base tracking-tight">
              宿泊経営パートナー
            </span>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-500">
              <a href="#service" className="hover:text-slate-900 transition-colors cursor-pointer">事業内容</a>
              <a href="#automation" className="hover:text-slate-900 transition-colors cursor-pointer">業務自動化</a>
              <a href="#approach" className="hover:text-slate-900 transition-colors cursor-pointer">私たちの考え</a>
              <a href="#faq" className="hover:text-slate-900 transition-colors cursor-pointer">FAQ</a>
            </nav>
            <a href="#contact" className="inline-flex items-center gap-1.5 bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer">
              ご相談
            </a>
          </div>
        </header>

        <main className="flex-1">

          {/* ════════════════════════════════════════════
              HERO
          ════════════════════════════════════════════ */}
          <section className="relative bg-white">
            <div className="max-w-5xl mx-auto px-4 pt-20 pb-24 md:pt-32 md:pb-36">
              <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold text-slate-900 leading-[1.3] mb-8 max-w-3xl">
                宿泊業の経営課題を、<br />
                現場目線で解決する。
              </h1>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-xl mb-12">
                資金繰りから業務改善、成長投資、承継まで。<br />
                宿を営んできた経験をもとに、<br className="md:hidden" />
                宿泊事業の悩みに実務で向き合います。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer">
                  まずは相談する
                  <IconArrowRight />
                </a>
                <a href="#service" className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 font-medium px-7 py-3.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  事業内容を見る
                </a>
              </div>
            </div>
            <div className="border-b border-slate-100" />
          </section>

          {/* ════════════════════════════════════════════
              PAIN POINTS
          ════════════════════════════════════════════ */}
          <section className="py-20 md:py-28 px-4 bg-slate-50">
            <div className="max-w-5xl mx-auto">
              <p className="text-sm text-slate-400 font-medium mb-4">よくあるご相談</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">
                こんな悩みを抱えていませんか。
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  '今月の支払いが厳しい',
                  '修繕したいが資金がない',
                  '人手が足りず現場が回らない',
                  'OTA頼みで利益が薄い',
                  '後継者がいない',
                  '設備投資の判断がつかない',
                  '請求書やレポートを手作業で作っている',
                  '料金設定が勘頼みで、取りこぼしている気がする',
                  'そもそも誰に相談すればいいかわからない',
                ].map((text) => (
                  <div key={text} className="bg-white rounded-xl px-5 py-4 border border-slate-200 text-slate-700 text-sm leading-relaxed">
                    {text}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm mt-8 leading-relaxed max-w-xl">
                どれかひとつでも当てはまれば、お力になれます。<br />
                宿泊業に特化しているからこそ、現場の温度感がわかります。
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              SERVICE - 3段階の支援
          ════════════════════════════════════════════ */}
          <section id="service" className="py-20 md:py-28 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <p className="text-sm text-slate-400 font-medium mb-4">事業内容</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                宿の状態に応じて、<br className="md:hidden" />支援が深くなる。
              </h2>
              <p className="text-slate-500 text-sm mb-16 max-w-xl leading-relaxed">
                「なんでもやります」ではなく、宿泊業の経営課題を段階的に解いていきます。
                まず足元の資金を安定させ、次に業務と収益を改善し、その先の承継・再編まで伴走します。
              </p>

              {/* Stage 1 - 資金繰り */}
              <div className="mb-6">
                <div className="bg-slate-900 rounded-2xl p-8 md:p-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                      <IconBanknotes />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 text-xs font-medium mb-1">STAGE 01 ── まず、足元を安定させる</p>
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-4">資金繰り支援</h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-2xl">
                        宿泊業は売上があっても手元資金が不足しがちな業種です。
                        OTA入金の前払い、設備故障の緊急資金、繁閑差の平準化、修繕費の調達など、
                        宿泊業特有の資金ニーズに特化した資金化サービスで支えます。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['OTA売上の前払い', '設備修繕の緊急資金', '繁閑差の平準化', '改装前のブリッジ資金', '天候キャンセル対応'].map((t) => (
                          <span key={t} className="text-xs text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-2 text-slate-300"><IconArrowDown /></div>

              {/* Stage 2 - 業務改善 */}
              <div className="mb-6 mt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0">
                      <IconCog />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 text-xs font-medium mb-1">STAGE 02 ── 次に、利益体質をつくる</p>
                      <h3 className="text-slate-900 text-xl md:text-2xl font-bold mb-4">業務改善・収益改善</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl">
                        資金が安定したら、次は日々の業務を軽くし、利益を残せる体質をつくります。
                        請求書の自動発行、宿泊料金の自動最適化、予約管理の効率化、
                        清掃オペレーションの省人化など、宿の現場で本当に使える仕組みを導入します。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['請求書の自動発行', '料金の自動最適化', '予約・在庫管理の効率化', '清掃・運営の省人化', 'OTA依存度の改善', '販促・集客の仕組みづくり'].map((t) => (
                          <span key={t} className="text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-2 text-slate-300"><IconArrowDown /></div>

              {/* Stage 3 - 承継 */}
              <div className="mt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0">
                      <IconArrowPath />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 text-xs font-medium mb-1">STAGE 03 ── その先の選択肢をつくる</p>
                      <h3 className="text-slate-900 text-xl md:text-2xl font-bold mb-4">再生・承継・M&A支援</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl">
                        後継者がいない、立て直しが必要、事業を譲りたい。
                        宿泊業にはそうした局面が必ず来ます。
                        経営の立て直し、事業売却、引継ぎ、再編まで、宿の未来を一緒に考えます。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['経営再建', '事業承継', 'M&A仲介', '施設の売却・譲渡', '再編・統合'].map((t) => (
                          <span key={t} className="text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              AI時代の背景 + 自動化セクション
          ════════════════════════════════════════════ */}
          <section id="automation" className="py-20 md:py-28 px-4 bg-slate-50">
            <div className="max-w-5xl mx-auto">
              <p className="text-sm text-slate-400 font-medium mb-4">業務の自動化について</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 max-w-2xl">
                手作業に追われる時代は、<br className="md:hidden" />もう終わりにできます。
              </h2>
              <p className="text-slate-500 text-sm mb-6 max-w-2xl leading-relaxed">
                宿泊業の現場では、請求書の作成、料金の調整、レポートの集計、予約の確認など、
                毎日のように手作業が積み重なっています。
                人手が足りないのに、人がやらなくてもいい仕事に時間を取られている。
                それが多くの施設の実態です。
              </p>
              <p className="text-slate-500 text-sm mb-16 max-w-2xl leading-relaxed">
                いま、AIや自動化の技術は実務で使えるレベルに急速に進化しています。
                大手だけの話ではありません。
                10室の旅館でも、50室のホテルでも、
                日々の作業を仕組みに変えることで、経営の余白をつくれる時代になりました。
                私たちは、その仕組みを宿泊業の現場に合わせて導入します。
              </p>

              {/* 自動化できること - 具体機能 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* 請求書の自動発行 */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                      <IconDocument />
                    </div>
                    <h3 className="font-bold text-slate-900">請求書の自動発行</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    宿泊実績をもとに、請求書を自動で作成・発行します。
                    エージェント向け、法人向け、OTA精算など、
                    パターンごとに手作業で作っていた帳票を仕組み化。
                    月末の経理作業が大幅に軽くなります。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['エージェント請求の自動化', '法人精算書の一括発行', '入金消込の自動化'].map((t) => (
                      <span key={t} className="text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>

                {/* ダイナミックプライシング */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                      <IconCurrency />
                    </div>
                    <h3 className="font-bold text-slate-900">宿泊料金の自動最適化</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    予約状況、曜日、周辺イベント、過去の稼働データをもとに、
                    宿泊料金を自動で調整します。
                    勘と経験だけに頼らず、データに基づいた価格設定で
                    取りこぼしを減らし、RevPARを改善します。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['需要連動の自動料金調整', '曜日・季節の最適化', 'OTA別の価格戦略'].map((t) => (
                      <span key={t} className="text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>

                {/* レポート・数値管理 */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                      <IconChart />
                    </div>
                    <h3 className="font-bold text-slate-900">経営レポートの自動生成</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    稼働率、ADR、RevPAR、客室別売上などの経営指標を
                    自動で集計・レポート化します。
                    Excelを開いて手で集計する時間をゼロに。
                    数字がリアルタイムで見えるようになれば、判断のスピードが変わります。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['日次・月次レポートの自動化', 'OTA別の売上集計', 'KPIダッシュボード'].map((t) => (
                      <span key={t} className="text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>

                {/* 予約・オペレーション */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                      <IconClipboard />
                    </div>
                    <h3 className="font-bold text-slate-900">予約管理・オペレーションの効率化</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    複数OTAの予約情報を一元管理し、ダブルブッキングを防止。
                    清掃スケジュールの自動割当、チェックイン業務の省力化など、
                    現場の「回す」負担を軽くする仕組みを入れます。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['予約の一元管理', '清掃スケジュール自動化', 'チェックイン省力化'].map((t) => (
                      <span key={t} className="text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 時代背景 - コンパクトに */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white shrink-0">
                    <IconSparkles />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-3">なぜ「今」なのか</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      AIの進化により、これまで専門のエンジニアやコンサルタントがいないと実現できなかった
                      業務自動化が、中小規模の施設でも導入できるようになりました。
                      請求書の自動発行も、需要連動の料金調整も、経営レポートの自動生成も、
                      数年前なら大手チェーンだけの話でした。
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      今は違います。
                      ただし、技術があるだけでは現場には入りません。
                      宿泊業の業務フローを理解し、施設の規模や体制に合わせて落とし込む。
                      私たちが間に入ることで、
                      <span className="font-medium text-slate-800">技術を「使える仕組み」に変えます。</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              Before / After
          ════════════════════════════════════════════ */}
          <section className="py-20 md:py-28 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <p className="text-sm text-slate-400 font-medium mb-4">導入前後のイメージ</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">
                仕組みが変われば、<br className="md:hidden" />経営の余白が生まれる。
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-4 px-4 text-slate-500 font-medium w-[200px]">業務</th>
                      <th className="text-left py-4 px-4 text-slate-400 font-medium">これまで</th>
                      <th className="text-left py-4 px-4 text-slate-900 font-medium">導入後</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { task: '請求書作成', before: '月末にExcelで1件ずつ手作業', after: '宿泊実績から自動発行。月末作業ほぼゼロに' },
                      { task: '料金設定', before: '経験と勘で設定。繁忙期の取りこぼし多い', after: '需要データをもとに自動調整。RevPAR改善' },
                      { task: '売上レポート', before: '各OTAの管理画面を開いて手動集計', after: '自動集計。リアルタイムで経営数値が見える' },
                      { task: '予約管理', before: '複数OTAを目視で確認。ミスが起きやすい', after: '一元管理。ダブルブッキング防止' },
                      { task: '清掃手配', before: '紙やLINEで個別連絡', after: '予約連動で自動スケジュール' },
                      { task: '資金繰り', before: '銀行に相談して数週間待ち', after: 'OTA売上を最短翌日に資金化' },
                    ].map(({ task, before, after }) => (
                      <tr key={task}>
                        <td className="py-4 px-4 font-medium text-slate-800">{task}</td>
                        <td className="py-4 px-4 text-slate-400">{before}</td>
                        <td className="py-4 px-4 text-slate-700 font-medium">{after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              MARKET CONTEXT
          ════════════════════════════════════════════ */}
          <section className="py-20 md:py-28 px-4 bg-slate-50">
            <div className="max-w-5xl mx-auto">
              <p className="text-sm text-slate-400 font-medium mb-4">業界の現状</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                需要は戻った。<br className="md:hidden" />でも、経営体力が追いついていない。
              </h2>
              <p className="text-slate-500 text-sm mb-12 max-w-xl leading-relaxed">
                宿泊業は「需要不足の業界」ではなく、「需要を取りに行くための資金と人手が足りない業界」です。
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: '6.5兆円', label: '宿泊市場規模', sub: '2025年度見通し' },
                  { value: '約3割', label: '債務超過の施設', sub: '売上回復と資金不足が同時進行' },
                  { value: '267件', label: '年間退出数', sub: '2025年 倒産＋休廃業' },
                  { value: '50%', label: '人手不足の施設', sub: '非正社員不足' },
                ].map(({ value, label, sub }) => (
                  <div key={label} className="bg-white rounded-xl p-5 border border-slate-200">
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{value}</p>
                    <p className="text-sm font-medium text-slate-700 mb-0.5">{label}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <p className="text-sm font-medium text-slate-800 mb-2">需要は強い</p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    国内旅行消費額26.8兆円、訪日外国人消費額9.5兆円。
                    どちらも高水準で、宿泊の需要環境そのものは好調です。
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <p className="text-sm font-medium text-slate-800 mb-2">でも投資余力がない</p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    人手不足、原材料高、光熱費増、ゼロゼロ融資の返済。
                    高付加価値化に必要な投資ができないまま淘汰が進んでいます。
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-6">出典：帝国データバンク、国土交通省</p>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              APPROACH
          ════════════════════════════════════════════ */}
          <section id="approach" className="py-20 md:py-28 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <p className="text-sm text-slate-400 font-medium mb-4">私たちの考え</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 max-w-2xl leading-relaxed">
                宿の経営を楽にする。<br />
                谷を越えられるようにする。<br />
                利益体質をつくる。
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: '宿泊業だけに集中する',
                    desc: '業界を絞ることで、OTAの入金サイクル、繁閑差、設備の老朽化、人材不足といった宿泊業固有の課題を深く理解できます。汎用的なコンサルティングとは違う精度で向き合います。',
                  },
                  {
                    title: '金融と実務の両面で支える',
                    desc: '資金を用意するだけでは経営課題は解けません。業務の仕組みを変え、手作業を自動化し、収益構造を見直す。そこまで一緒にやる。金融と実務の両輪が私たちの強みです。',
                  },
                  {
                    title: '段階的に、伴走する',
                    desc: 'まず足元の資金を安定させ、次に業務の自動化と収益改善、その先の承継や再編まで。宿の状態に応じて支援が深くなる設計です。一回きりではなく、長く付き合います。',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="border-t-2 border-slate-900 pt-6">
                    <h3 className="font-bold text-slate-900 text-base mb-3">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              FUNDING DETAIL
          ════════════════════════════════════════════ */}
          <section className="py-20 md:py-28 px-4 bg-slate-50">
            <div className="max-w-5xl mx-auto">
              <p className="text-sm text-slate-400 font-medium mb-4">資金繰り支援について</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                宿泊業に特化した資金調達。
              </h2>
              <p className="text-slate-500 text-sm mb-12 max-w-xl leading-relaxed">
                OTA売上やカード決済売上を、入金日前に資金化できます。
                銀行融資のように数週間〜1ヶ月待つ必要はありません。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { step: '01', title: '売上情報を入力', desc: 'OTA売上明細や請求書の金額・支払期日をフォームに入力。' },
                  { step: '02', title: '書類をアップロード', desc: '請求書・本人確認書類をスマホで撮影して送るだけ。' },
                  { step: '03', title: '審査後、即入金', desc: '審査完了後、条件に合意いただければ指定口座へお振込み。' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-slate-200 shrink-0">{step}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { value: '最短10分', label: '入金スピード' },
                  { value: '9.5%', label: '手数料（一律）' },
                  { value: '0円', label: '初期費用・月額' },
                  { value: '2社間', label: '取引先への通知なし' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                    <p className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{value}</p>
                    <p className="text-xs text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <h3 className="font-bold text-slate-900 text-base mb-4">こんな場面で使えます</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'ボイラー故障、水道トラブルなど設備の緊急修繕',
                    'OTA・カード決済売上の入金日前の資金化',
                    '台風・災害によるキャンセル損失の補填',
                    '閑散期の人件費・固定費の支払い',
                    'インバウンド対応の改装費用',
                    '銀行融資がおりるまでのブリッジ資金',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-slate-400 mt-0.5 shrink-0"><IconCheck /></span>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              VOICE
          ════════════════════════════════════════════ */}
          <section className="py-20 md:py-28 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <p className="text-sm text-slate-400 font-medium mb-4">ご利用施設の声</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">
                一歩踏み出した施設の話。
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    type: '温泉旅館',
                    area: '静岡県・28室',
                    text: 'ボイラーが急に壊れて、修繕費180万円が必要になりました。銀行では2週間かかると言われ、資金繰り支援で翌日に調達。営業を止めずに済みました。今は請求書の自動発行も導入して、月末の事務作業がかなり減っています。',
                    result: '緊急資金調達 → 請求書自動化を導入',
                  },
                  {
                    type: 'ビジネスホテル',
                    area: '大阪府・52室',
                    text: 'OTAの入金待ちで毎月キャッシュフローが苦しかった。前払いで安定させた後、料金の自動最適化を入れてもらったら、同じ稼働率でもADRが上がりました。勘で値付けしていたのがもったいなかったです。',
                    result: '資金安定化 → 自動料金調整でADR改善',
                  },
                  {
                    type: 'リゾートホテル',
                    area: '沖縄県・35室',
                    text: 'インバウンド改装のブリッジ資金として最初に利用しました。そこから業務改善も相談するようになり、今は予約管理の一元化とレポート自動化まで入っています。現場スタッフの負担が目に見えて減りました。',
                    result: '改装資金 → 予約一元化・レポート自動化',
                  },
                ].map(({ type, area, text, result }) => (
                  <div key={type} className="border border-slate-200 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium text-slate-900">{type}</span>
                      <span className="text-xs text-slate-400">{area}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{text}</p>
                    <div className="bg-slate-50 rounded-lg px-3 py-2">
                      <p className="text-xs text-slate-500">
                        <span className="font-medium text-slate-700">流れ：</span>{result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              FAQ
          ════════════════════════════════════════════ */}
          <section id="faq" className="py-20 md:py-28 px-4 bg-slate-50">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm text-slate-400 font-medium mb-4">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">
                よくある質問
              </h2>
              <div>
                <FAQItem
                  q="どのような施設が対象ですか？"
                  a="旅館、ホテル、民宿、ゲストハウス、民泊など、宿泊業を営む施設が対象です。法人・個人事業主を問わず、規模の大小もありません。10室の温泉旅館から50室以上のホテルまで幅広く対応しています。"
                />
                <FAQItem
                  q="まず何から相談すればいいですか？"
                  a="「今、何に困っているか」だけ教えてください。資金繰りなのか、業務のことなのか、承継のことなのか。状況を伺ったうえで、最適な支援をご提案します。"
                />
                <FAQItem
                  q="業務自動化だけ依頼することもできますか？"
                  a="はい。資金繰り支援と業務改善は独立したサービスです。「請求書の自動化だけ」「料金最適化だけ」といった個別のご依頼も承ります。まずは一番困っているところから始めることをおすすめしています。"
                />
                <FAQItem
                  q="ITに詳しくなくても大丈夫ですか？"
                  a="まったく問題ありません。システムの導入・設定・運用サポートまで一貫して対応します。宿泊業の現場に合わせて仕組みを作りますので、スタッフの方が特別な技術を覚える必要はありません。"
                />
                <FAQItem
                  q="料金の自動調整は、勝手に値段が変わるということですか？"
                  a="自動で値段を変更する設定も可能ですが、最初は「提案型」からスタートする施設が多いです。システムが最適な価格を提案し、最終判断はオーナーや支配人が行う。慣れてきたら自動化の範囲を広げていく、というステップです。"
                />
                <FAQItem
                  q="資金繰り支援の手数料はどのくらいですか？"
                  a="ファクタリングの手数料は一律9.5%です。金額や売掛先に関わらず変動しません。初期費用・月額費用は無料、振込手数料も当社が負担します。"
                />
                <FAQItem
                  q="OTA売上も資金化できますか？"
                  a="はい。じゃらん、楽天トラベル、Booking.comなど主要OTA経由の売上が対象です。オンラインカード決済の入金予定額を早期に資金化できます。"
                />
                <FAQItem
                  q="取引先やOTAに知られますか？"
                  a="知られません。2社間取引のため、OTA・旅行エージェント・取引先への通知や連絡は一切不要です。"
                />
                <FAQItem
                  q="地方でも対応してもらえますか？"
                  a="全国対応しています。オンラインでの相談・手続きが可能です。むしろ地方の中小旅館・ホテルにこそ、私たちの支援が必要だと考えています。"
                />
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              CTA
          ════════════════════════════════════════════ */}
          <section id="contact" className="py-20 md:py-28 px-4 bg-slate-900 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                まずは、話を聞かせてください。
              </h2>
              <p className="text-slate-400 text-base mb-10 leading-relaxed">
                「何から始めればいいかわからない」で構いません。<br />
                宿の状況を伺ったうえで、一緒に考えます。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:info@example.com" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                  <IconMail />
                  メールで相談する
                </a>
                <a href="tel:000-0000-0000" className="inline-flex items-center justify-center gap-2 border border-slate-600 text-slate-300 font-medium px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer">
                  <IconPhone />
                  電話で相談する
                </a>
              </div>
              <p className="mt-8 text-slate-500 text-sm">相談無料 / 秘密厳守</p>
            </div>
          </section>

        </main>

        {/* ── Footer ── */}
        <footer className="bg-slate-950 text-white">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <span className="font-bold text-white text-sm">宿泊経営パートナー</span>
            <p className="text-slate-500 text-xs mt-1 mb-6">宿泊業の経営課題を、金融と実務の両面から解決する会社です。</p>
            <div className="flex flex-wrap gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors cursor-pointer">運営会社</a>
              <a href="#" className="hover:text-slate-300 transition-colors cursor-pointer">利用規約</a>
              <a href="#" className="hover:text-slate-300 transition-colors cursor-pointer">プライバシーポリシー</a>
              <a href="#" className="hover:text-slate-300 transition-colors cursor-pointer">お問い合わせ</a>
            </div>
            <p className="mt-6 text-xs text-slate-600">&copy; 2025 All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
