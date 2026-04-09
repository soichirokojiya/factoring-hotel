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
            {/* 下の区切り線 */}
            <div className="border-b border-slate-100" />
          </section>

          {/* ════════════════════════════════════════════
              PAIN POINTS - 宿の経営者の声
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
                  'やりたいことはあるが手が回らない',
                  '銀行に相談しても時間がかかる',
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

              {/* Stage 1 */}
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
                        宿泊業特有の資金ニーズに特化したファクタリング・資金化サービスで支えます。
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
              <div className="flex justify-center my-2 text-slate-300">
                <IconArrowDown />
              </div>

              {/* Stage 2 */}
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
                        資金が安定したら、次は業務と収益の改善です。
                        予約管理の効率化、清掃オペレーションの省人化、価格設定の最適化、
                        OTA依存からの脱却、販促の仕組みづくりなど、宿泊業の現場を知っているからこそできる改善を進めます。
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['予約・在庫管理の効率化', '清掃・運営の省人化', '価格設定の最適化', 'OTA依存度の改善', '販促・集客の仕組みづくり', '管理業務の整理'].map((t) => (
                          <span key={t} className="text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-2 text-slate-300">
                <IconArrowDown />
              </div>

              {/* Stage 3 */}
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
              MARKET CONTEXT - 業界の今
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
              APPROACH - 私たちの考え
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
                    desc: '資金を用意するだけでは経営課題は解けません。業務の仕組みを変える、収益構造を見直す、そこまで一緒にやる。金融と実務の両輪が私たちの強みです。',
                  },
                  {
                    title: '段階的に、伴走する',
                    desc: 'まず足元の資金を安定させ、次に業務と収益を改善し、その先の承継や再編まで。宿の状態に応じて支援が深くなる設計です。一回きりではなく、長く付き合います。',
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
              FUNDING DETAIL - 資金繰り支援の詳細
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

              {/* How it works - compact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { step: '01', title: '売上情報を入力', desc: 'OTA売上明細や請求書の金額・支払期日をフォームに入力。' },
                  { step: '02', title: '書類をアップロード', desc: '請求書・本人確認書類をスマホで撮影して送るだけ。' },
                  { step: '03', title: '審査後、即入金', desc: '審査完了後、条件に合意いただければ指定口座へお振込み。' },
                ].map(({ step, title, desc }, i) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-slate-200 shrink-0">{step}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key numbers */}
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

              {/* Use cases list */}
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
              VOICE - ご利用施設の声
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
                    area: '静岡県',
                    text: 'ボイラーが急に壊れて、修繕費180万円が必要になりました。銀行に相談したら2週間はかかると。資金繰り支援のおかげで営業を止めずに済みました。',
                    result: '翌日に資金化、営業継続',
                  },
                  {
                    type: 'ビジネスホテル',
                    area: '大阪府',
                    text: 'OTAの入金が翌月末なのに、リネン代も人件費も毎月出ていく。OTA売上を前払いしてもらうことで、月末のひやひやがなくなりました。',
                    result: 'キャッシュフロー安定化',
                  },
                  {
                    type: 'リゾートホテル',
                    area: '沖縄県',
                    text: 'インバウンド需要に対応するため客室改装が急務でした。銀行融資の審査を待てなかったので、ブリッジ資金として活用。繁忙期に間に合いました。',
                    result: '改装完了、稼働率向上',
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
                        <span className="font-medium text-slate-700">結果：</span>{result}
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
                  a="旅館、ホテル、民宿、ゲストハウス、民泊など、宿泊業を営む施設が対象です。法人・個人事業主を問わず、規模の大小もありません。"
                />
                <FAQItem
                  q="まず何から相談すればいいですか？"
                  a="「今、何に困っているか」だけ教えてください。資金繰りなのか、業務のことなのか、承継のことなのか。状況を伺ったうえで、最適な支援をご提案します。"
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
                  q="業務改善やDXの支援だけ受けることもできますか？"
                  a="はい。資金繰り支援と業務改善は独立したサービスです。施設の状況やニーズに応じて、必要な支援だけをお選びいただけます。"
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
