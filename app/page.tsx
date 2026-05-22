"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FadeUp, AnimCard } from "@/components/AnimCard";

const INTERESTS = [
  { icon: "📚", label: "Reading" },
  { icon: "✍️", label: "Writing" },
  { icon: "🍳", label: "Cooking" },
  { icon: "✈️", label: "Traveling" },
  { icon: "🌱", label: "Lifelong Learner" },
];

const EDUCATION_TIMELINE = [
  { year: "Oct 2023–Present", title: "English Instructor", place: "Inti Marina Global, Denpasar", desc: "Design ESP lessons for hospitality & cruise line operations. Conduct mock interviews and develop industry-relevant materials." },
  { year: "Mar–May 2024", title: "English Instructor", place: "E-Work Indonesia, Bali", desc: "Delivered engaging lesson plans for various proficiency levels with digital teaching methodologies." },
  { year: "2022–2024", title: "M.Pd. — English Education", place: "Universitas Pendidikan Ganesha", desc: "Published in Jurnal Indonesia Sosial Teknologi Vol.5 No.8 (2024) · Best Presenter ICORHESTECH 2024", highlight: true },
  { year: "Aug 2022–Sep 2023", title: "Asst. Operation Manager", place: "E-Work Indonesia, Denpasar", desc: "Taught General English & ESP, developed learning materials, supervised daily teaching operations." },
  { year: "Feb 2019–Present", title: "English Instructor", place: "Mediterranean Bali", desc: "Develop assessments, provide feedback, and incorporate EduTech tools for engaging learning experiences." },
  { year: "Feb 2019–Jul 2022", title: "Academic Coordinator", place: "Mariner Language Centre, Denpasar", desc: "Managed class scheduling, student enrollment, placement tests, and instructor supervision." },
  { year: "2015–2019", title: "S.Pd. — English Education (GPA 3.82/4.00)", place: "Universitas Mahasaraswati Denpasar", desc: "Bakti Sosial di Desa Dawan Klungkung · KKN di Sumerta Kauh · PKL di SMPN 7 Denpasar", highlight: true },
  { year: "Jan 2015–Jul 2018", title: "Sales Executive", place: "Hotel Golden Tulip Denpasar", desc: "Generated IDR 100M+ revenue via offline/online marketing. Handled 30+ MICE Banquet events/month." },
  { year: "Oct 2014–Jan 2015", title: "Guest Service Agent", place: "Natya Hotels & Resort, Bali", desc: "Managed reservations, guest check-in/out, billing, and front office operations." },
  { year: "May–Oct 2014", title: "Front Desk Receptionist", place: "The Banyumas Villa", desc: "Handled guest reservations, check-in/out, front office cash flow, and reporting." },
  { year: "Sep–Dec 2012", title: "Internship — F&B Waitress", place: "Ramada Resort Camakila Bali", desc: "Completed 3-month internship in food & beverage service across all meal periods." },
  { year: "Jun–Sep 2012", title: "Internship — Housekeeping", place: "Legian Beach Hotel, Badung Bali", desc: "Learned teamwork, SOP-based room cleaning, and public area maintenance." },
];

const CERTIFICATIONS = [
  { year: "Jul 2024", title: "TOEFL Certificate", issuer: "Lembaga Kajian dan Pengajaran Bahasa", exp: "Exp. Jul 2026" },
  { year: "May 2024", title: "Best Presenter — ICORHESTECH 2024", issuer: "Universitas Ibrahimy", exp: "" },
  { year: "Feb 2023", title: "Train the Trainer Training & Workshop", issuer: "Medi Groups", exp: "" },
  { year: "Oct 2020", title: "Digital Marketing — Social Media Content Plan", issuer: "Lingkaran", exp: "" },
  { year: "Sep 2020", title: "Marketing — Online & Offline Network Selling", issuer: "STUDiLMU BusinessGrowth", exp: "" },
  { year: "Jul 2020", title: "Online English Program for Adult Learners", issuer: "Mentari Group", exp: "" },
];

const PROJECTS = [
  { name: "SpeakUp Project", desc: "A platform for students to submit video assignment links — YouTube, TikTok, or Google Drive.", href: "https://speakup.teachwithdian.my.id", tag: "EdTech Tool", color: "from-blue-500 to-indigo-600" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden pt-20">
        <div className="absolute top-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 border border-white/30">
                🌴 Hospitality English Instructor · Denpasar, Bali
              </span>
              <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
                Hi, I'm <span className="text-yellow-300">Dian</span> 👋
              </h1>
              <p className="text-blue-100 font-bold text-base mb-1">Luh Putu Diantari Kusuma Dewi, S.Pd., M.Pd.</p>
              <p className="text-blue-200 leading-relaxed mb-8 text-sm">
                English educator with 10+ years in hospitality, passionate about ESP, EduTech, and empowering future hoteliers with the language skills they need to succeed.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="#projects" className="bg-yellow-400 text-gray-900 font-black px-6 py-3 rounded-2xl hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg shadow-yellow-500/30">My EduTech Projects</a>
                <a href="#contact" className="bg-white/10 border border-white/30 text-white font-bold px-6 py-3 rounded-2xl hover:bg-white/20 transition-all backdrop-blur">Get in Touch</a>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-4">
            {[
              { icon: "🏨", label: "Hospitality Experience", value: "10+ Years" },
              { icon: "🎓", label: "Master's in Education", value: "Undiksha, 2024" },
              { icon: "🏆", label: "Best Presenter", value: "ICORHESTECH 2024" },
              { icon: "📝", label: "Published Researcher", value: "JIST Vol.5, 2024" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-4">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="text-white/60 text-xs font-bold">{s.label}</p>
                  <p className="text-white font-black text-sm">{s.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full fill-[#fafafa]">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-4">
          <FadeUp>
            <span className="text-blue-600 font-black text-sm uppercase tracking-widest">Who I Am</span>
            <h2 className="text-4xl font-black text-gray-900 mt-1 mb-8">About Me</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-gray-600 leading-relaxed space-y-4">
                <p>My passion lies in empowering learners through engaging English education — especially <strong className="text-gray-800">English for Specific Purposes (ESP)</strong>. I'm dedicated to igniting a love for learning through EduTech and innovative digital methodologies.</p>
                <p>I leverage my <strong className="text-gray-800">10+ years of diverse hospitality experience</strong> to create dynamic, industry-relevant lessons for future hoteliers and cruise line professionals.</p>
                <p>I have a published work on <em>"Anxiety of English Teachers and Students in Bali in the AI-laden Learning Environment"</em> and was awarded <strong className="text-blue-600">Best Presenter</strong> at ICORHESTECH 2024.</p>
              </div>
            </FadeUp>
            <div className="grid grid-cols-2 gap-4">
              {INTERESTS.map((item) => (
                <AnimCard key={item.label} className="bg-white rounded-3xl p-5 flex flex-col items-center gap-2 text-center shadow-sm border border-gray-100 cursor-default">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-sm font-black text-gray-700">{item.label}</span>
                </AnimCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <FadeUp>
            <span className="text-purple-600 font-black text-sm uppercase tracking-widest">Journey</span>
            <h2 className="text-4xl font-black text-gray-900 mt-1 mb-12">Education & Experience</h2>
          </FadeUp>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />

            <div className="flex flex-col gap-8">
              {EDUCATION_TIMELINE.map((item, i) => (
                <FadeUp key={i} delay={i * 0.05}>
                  <div className="flex gap-6 items-start">
                    {/* dot */}
                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${item.highlight ? "bg-gradient-to-br from-blue-500 to-purple-600" : "bg-white border-2 border-gray-200"}`}>
                      <span className="text-lg">{item.highlight ? "🎓" : "💼"}</span>
                    </div>
                    {/* content */}
                    <div className={`flex-1 rounded-2xl p-5 border ${item.highlight ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100" : "bg-gray-50 border-gray-100"}`}>
                      <span className="text-xs font-black text-gray-400 uppercase tracking-wider">{item.year}</span>
                      <h3 className="font-black text-gray-800 mt-0.5">{item.title}</h3>
                      <p className={`text-sm font-bold mb-2 ${item.highlight ? "text-blue-600" : "text-purple-500"}`}>{item.place}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-4">
          <FadeUp>
            <span className="text-green-600 font-black text-sm uppercase tracking-widest">Credentials</span>
            <h2 className="text-4xl font-black text-gray-900 mt-1 mb-8">Certifications</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((c) => (
              <AnimCard key={c.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <span className="text-xs font-black text-green-600 uppercase tracking-wider">{c.year}</span>
                <h3 className="font-black text-gray-800 text-sm mt-1 leading-snug">{c.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{c.issuer}</p>
                {c.exp && <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-700 font-bold px-2 py-0.5 rounded-full">{c.exp}</span>}
              </AnimCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <FadeUp>
            <span className="text-orange-500 font-black text-sm uppercase tracking-widest">What I Build</span>
            <h2 className="text-4xl font-black text-gray-900 mt-1 mb-8">Projects</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <AnimCard key={p.name} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="block">
                  <div className={`h-28 bg-gradient-to-r ${p.color} flex items-center px-6`}>
                    <span className="text-white font-black text-xl">{p.name}</span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full">{p.tag}</span>
                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">{p.desc}</p>
                    <span className="text-blue-600 font-black text-sm mt-3 inline-block">Visit →</span>
                  </div>
                </a>
              </AnimCard>
            ))}
            <AnimCard className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border-2 border-dashed border-gray-200 p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[200px]">
              <span className="text-4xl">🚀</span>
              <p className="text-sm font-black text-gray-400">More projects coming soon</p>
            </AnimCard>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-4xl font-black mb-3">Let's Connect! 🤝</h2>
            <p className="text-blue-200 mb-8 max-w-md mx-auto font-bold">Have a question, collaboration idea, or just want to say hi?</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="mailto:diantarikusumdewi@gmail.com" className="bg-yellow-400 text-gray-900 font-black px-6 py-3 rounded-2xl hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg">✉️ Email Me</a>
              <a href="https://www.linkedin.com/in/diantari-kusuma-dewi" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/30 text-white font-bold px-6 py-3 rounded-2xl hover:bg-white/20 transition-all backdrop-blur">LinkedIn →</a>
              <a href="https://www.instagram.com/dhianthari" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/30 text-white font-bold px-6 py-3 rounded-2xl hover:bg-white/20 transition-all backdrop-blur">Instagram →</a>
            </div>
          </FadeUp>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm font-bold">
        © {new Date().getFullYear()} Luh Putu Diantari Kusuma Dewi · teachwithdian.my.id
      </footer>
    </div>
  );
}
