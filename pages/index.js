import Head from "next/head";
import { motion } from "framer-motion";

const floating = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const sparkle = {
  animate: {
    opacity: [0.2, 0.9, 0.2],
    scale: [0.8, 1.05, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 1.5
    }
  }
};

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>बर्फ़ का राजसी घर | Rajasthan Ice Palace</title>
      </Head>
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-white/20" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-14 sm:px-10 sm:py-16">
          <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-sm font-semibold tracking-wide text-sky-800 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                एआई कार्टून कहानी
              </div>
              <h1 className="font-display text-4xl leading-tight text-slate-900 drop-shadow-sm sm:text-5xl lg:text-6xl">
                राजस्थान की तपती धरती पर
                <br />
                दादी का बर्फ़ का महल
              </h1>
              <p className="max-w-xl text-lg text-slate-700 sm:text-xl">
                एक गर्म दोपहर, दादी ने ठंडक पाने के लिए जादुई बर्फ़ इकट्ठा की। शरारती बंदर की मदद से
                दोनों ने मिलकर चमकता हुआ बर्फ़ का घर बनाया—जिसका हर ब्लॉक गोल-गोल और नर्म था।
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#story"
                  className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:scale-105 hover:bg-sky-600"
                >
                  कहानी सुनें
                </a>
                <a
                  href="#gallery"
                  className="rounded-full border border-sky-500/60 bg-white/70 px-6 py-3 font-semibold text-sky-700 shadow-md transition hover:scale-105 hover:border-sky-600 hover:text-sky-900"
                >
                  दृश्य देखें
                </a>
              </div>
            </div>
            <div className="relative">
              <motion.div
                className="absolute -left-6 -top-10 h-36 w-36 rounded-full bg-white/70 sun-glow blur-3xl sm:-left-10 sm:h-44 sm:w-44"
                {...floating}
              />
              <motion.div
                className="absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-cyan-100/70 blur-2xl sm:h-32 sm:w-32"
                {...floating}
              />
              <motion.div
                className="relative mx-auto w-full max-w-md rounded-3xl border border-white/70 bg-gradient-to-br from-cyan-50/90 via-white/80 to-sky-100/90 p-6 shadow-2xl backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl border border-white/70 shadow-inner shadow-sky-500/20" />
                  <div className="relative overflow-hidden rounded-2xl bg-white/70 p-6">
                    <motion.div
                      className="absolute left-6 top-6 h-6 w-6 rounded-full bg-sky-400"
                      {...sparkle}
                    />
                    <motion.div
                      className="absolute right-10 top-10 h-4 w-4 rounded-full bg-purple-300"
                      {...sparkle}
                    />
                    <motion.div
                      className="absolute bottom-6 left-10 h-5 w-5 rounded-full bg-amber-200"
                      {...sparkle}
                    />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <h2 className="font-display text-2xl text-sky-700">बर्फ़ का घर</h2>
                        <span className="rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold text-sky-600">
                          AI Cartoon
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-slate-600">
                        दादी और बंदर ने राजस्थान की गर्मी में भी एक ठंडी दुनिया बना ली। गोल बर्फ़ के
                        ब्लॉक चमकते हैं, और रेशमी ठंडी हवा धीरे से बहती है।
                      </p>
                      <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-slate-500">
                        <div className="rounded-xl bg-sky-50/70 px-3 py-3 shadow-sm">
                          <p className="text-lg font-display text-sky-600">∞</p>
                          ठंडक
                        </div>
                        <div className="rounded-xl bg-sky-50/70 px-3 py-3 shadow-sm">
                          <p className="text-lg font-display text-sky-600">गोल</p>
                          ब्लॉक
                        </div>
                        <div className="rounded-xl bg-sky-50/70 px-3 py-3 shadow-sm">
                          <p className="text-lg font-display text-sky-600">राजसी</p>
                          चमक
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <motion.section
            id="story"
            className="relative mt-20 grid gap-10 rounded-3xl border border-white/60 bg-white/70 p-10 shadow-xl backdrop-blur"
            {...sectionVariants}
          >
            <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">कहानी की झलक</h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
              <p>
                राजस्थान की तपती दोपहर थी। हवाएँ गर्म थीं और सूरज सख़्त। दादी को हमेशा से ठंड पसंद थी,
                इसलिए उन्होंने सोचा कि अगर राजस्थान में रहना है तो अपनी ठंडक खुद बनानी होगी। वे मैदान
                में पहुँचीं और जादुई बर्फ़ इकट्ठा करने लगीं, जो हवा में भीनी ठंड बिखेर रही थी।
              </p>
              <p>
                थोड़ी देर बाद उनका हाथ थक गया। तभी पेड़ पर बैठा शरारती बंदर उछलकर नीचे आया और बोला,
                “दादी, मैं मदद करूँ?” दादी ने मुस्कुराकर कहा, “क्यों नहीं बेटा! आज हम दोनों मिलकर
                राजस्थान में बर्फ़ का महल बनाएँगे!”
              </p>
            </div>
            <div className="grid gap-6 rounded-2xl bg-sky-50/70 p-6 text-slate-700 shadow-inner sm:grid-cols-3">
              <div>
                <h3 className="font-display text-xl text-sky-600">गोल बर्फ़ के ब्लॉक</h3>
                <p className="mt-2 text-sm">
                  दोनों ने मिलकर गोल-गोल चमकते ब्लॉक बनाए। हर ब्लॉक को जोड़ते समय बंदर अपनी पूँछ से
                  हल्का धक्का देता और दादी मंत्र बुदबुदातीं।
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-sky-600">रंगोली का दरवाज़ा</h3>
                <p className="mt-2 text-sm">
                  दादी ने घर के दरवाज़े पर बर्फ़ की रंगोली बनाई। गोल, कमल और सूरज जैसे रूप उसमें उभरे
                  और ठंडी रोशनी बिखेरने लगे।
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-sky-600">राजसी चमक</h3>
                <p className="mt-2 text-sm">
                  बंदर ने अपनी चमकती पूँछ से महल की छत साफ की। सूरज की किरणें बर्फ़ पर पड़ते ही घर राजसी
                  महल की तरह चमक उठा।
                </p>
              </div>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
              <p>
                शाम होते-होते बर्फ़ का घर चमचमाने लगा। अंदर बर्फ़ की चाँदी-सी रोशनी थी और बाहर राजस्थान
                का सुनहरा आसमान। दादी और बंदर ठंडे घर में बैठकर छाछ पीते रहे और गर्मी से बचते रहे।
              </p>
              <p className="font-semibold text-sky-700">
                दादी बोलीं, “तूने मदद की है न, इसलिए ये बर्फ़ का घर और भी खास बन गया।” बंदर ने शरारत से
                मुस्कुराते हुए कहा, “दादी, यह तो पूरा राजसी घर है!”
              </p>
            </div>
          </motion.section>

          <motion.section
            id="gallery"
            className="mt-20 space-y-8"
            {...sectionVariants}
          >
            <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">कल्पना के दृश्य</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <SceneCard
                title="दादी का जादुई आह्वान"
                description="दादी ने छाछ की मटकी से हवा में ठंडी धुंध उड़ाई, जो बर्फ़ के ब्लॉकों में जमने लगी।"
                accent="from-sky-400/70 via-sky-200/80 to-white/80"
                icon="🪄"
              />
              <SceneCard
                title="बंदर की शरारती मदद"
                description="बंदर गोल ब्लॉकों को उछाल-उछालकर लाता और दादी की ओर सरकाता, खिलखिलाता रहता।"
                accent="from-purple-400/70 via-purple-200/80 to-white/80"
                icon="🐒"
              />
              <SceneCard
                title="बर्फ़ की रंगोली"
                description="दरवाज़े पर चमकती रंगोली बनाई गई जिसे छूते ही हथेलियाँ ठंडी हो जातीं।"
                accent="from-amber-300/70 via-amber-100/80 to-white/80"
                icon="❄️"
              />
            </div>
          </motion.section>

          <motion.section
            className="my-20 rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl backdrop-blur lg:p-12"
            {...sectionVariants}
          >
            <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">AI Cartoon नोट्स</h2>
                <p className="text-lg leading-relaxed text-slate-700">
                  यह कहानी एक कल्पनाशील AI कार्टून अनुभव है। दृश्य, रंग और किरदार Rajasthan की गर्मी और
                  बर्फ़ की ठंडक के बीच अद्भुत विरोधाभास रचते हैं। दादी की सादगी, बंदर की शरारत और बर्फ़ की
                  नर्म चमक मिलकर एक अद्वितीय दुनिया बनाते हैं।
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FeatureBadge label="जादुई यथार्थ" detail="गर्मी में ठंड का आश्चर्य" />
                  <FeatureBadge label="सांस्कृतिक छाप" detail="राजस्थान + लोक सौंदर्य" />
                  <FeatureBadge label="भावनात्मक गर्मी" detail="दादी-पोते सा रिश्ता" />
                  <FeatureBadge label="दृश्य कला" detail="गोल बर्फ़, रंगोली, चमक" />
                </div>
              </div>
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500/70 via-cyan-400/50 to-white/60 p-1 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              >
                <div className="space-y-6 rounded-[26px] bg-white/80 p-8 text-center backdrop-blur">
                  <p className="font-display text-2xl text-sky-600">“ये घर तो पूरा राजसी लग रहा है!”</p>
                  <p className="text-sm text-slate-600">
                    बंदर ने अपनी चमकती पूँछ से छत को चमकाया और महल को अंतिम सलाम दिया।
                  </p>
                  <div className="grid gap-2 text-xs uppercase tracking-wide text-slate-500">
                    <span>Ice Symphony · Desert Twilight · Lassi Glow</span>
                    <span>Soundscape: हल्की हवा + छाछ की खनक</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <footer className="pb-6 text-center text-sm text-slate-600">
            © {new Date().getFullYear()} Rajasthan Ice Palace · कहानी और दृश्य कल्पना से प्रेरित।
          </footer>
        </div>
      </main>
    </>
  );
}

function SceneCard({ title, description, icon, accent }) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br ${accent} p-[1px] shadow-lg`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
    >
      <div className="relative h-full rounded-[26px] bg-white/85 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <span className="text-3xl">{icon}</span>
          <motion.span
            className="h-3 w-3 rounded-full bg-sky-400 shadow"
            {...sparkle}
          />
        </div>
        <h3 className="mt-4 font-display text-xl text-slate-800">{title}</h3>
        <p className="mt-3 text-sm text-slate-600">{description}</p>
        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-500">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Rajasthan · Ice · Magic
        </div>
      </div>
    </motion.article>
  );
}

function FeatureBadge({ label, detail }) {
  return (
    <div className="rounded-2xl bg-sky-50/80 p-4 text-sky-700 shadow-inner shadow-sky-200/70">
      <p className="font-display text-lg">{label}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-sky-500">{detail}</p>
    </div>
  );
}
