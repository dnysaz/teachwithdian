"use client";
import { motion } from "framer-motion";

const BUBBLES = Array.from({ length: 12 }, (_, i) => ({
  size: 20 + (i * 7) % 40,
  left: (i * 8.3) % 100,
  delay: i * 0.5,
  duration: 4 + (i % 3),
  color: ["from-pink-300/30", "from-purple-300/30", "from-sky-300/30", "from-rose-300/30"][i % 4],
  toColor: ["to-pink-400/10", "to-purple-400/10", "to-sky-400/10", "to-rose-400/10"][i % 4],
}));

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-purple-100 to-sky-200">
      {/* floating bubbles */}
      {BUBBLES.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-b ${b.color} ${b.toColor} blur-sm`}
          initial={{ opacity: 0, y: 60, scale: 0.5 }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
            y: [60, -30, -80, -150],
            scale: [0.5, 1, 1.1, 0.8],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: "-10%",
          }}
        />
      ))}

      {/* main card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/70 backdrop-blur-xl rounded-3xl px-10 py-12 shadow-2xl shadow-purple-200/50 border border-white/60 text-center max-w-sm w-full mx-4"
      >
        {/* avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg mx-auto mb-5 rotate-3 hover:rotate-0 transition-transform"
        >
          D
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-black text-gray-800 mb-2"
        >
          Hello!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 font-semibold text-sm mb-1"
        >
          My Name is
        </motion.p>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
          className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent"
        >
          Dian!
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto mt-5"
        />
      </motion.div>

      {/* social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex gap-3 mt-6"
      >
        <a
          href="https://www.linkedin.com/in/diantarikd/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/70 backdrop-blur border border-white/60 rounded-2xl px-5 py-2.5 flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-lg transition-all"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/dhianthari"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/70 backdrop-blur border border-white/60 rounded-2xl px-5 py-2.5 flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-pink-500 hover:bg-white hover:shadow-lg transition-all"
        >
          Instagram
        </a>
      </motion.div>

      {/* footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 text-xs font-semibold text-gray-400"
      >
        teachwithdian
      </motion.p>
    </div>
  );
}
