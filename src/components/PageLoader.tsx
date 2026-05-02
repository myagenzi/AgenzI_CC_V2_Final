import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  onComplete: () => void;
}

const WORDS = ["ARCHITECT", "AUTOMATE", "AMPLIFY", "AGENZІ"];
const SESSION_KEY = "agenzl_v2_loaded";
const DURATION = 1400;

export function PageLoader({ onComplete }: PageLoaderProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [humanVisible, setHumanVisible] = useState(false);
  const [plusVisible, setPlusVisible] = useState(false);
  const [aiVisible, setAiVisible] = useState(false);
  const [fadeContent, setFadeContent] = useState(false);
  const [closing, setClosing] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const later = (fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      onComplete();
      return;
    }

    const wordInterval = setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      900,
    );

    const startTime = Date.now();
    let rafId: number;
    const tick = () => {
      const progress = Math.min((Date.now() - startTime) / DURATION, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    later(() => setHumanVisible(true), 300);
    later(() => setPlusVisible(true), 550);
    later(() => setAiVisible(true), 800);
    later(() => { clearInterval(wordInterval); setFadeContent(true); }, DURATION);
    later(() => setClosing(true), DURATION + 200);
    later(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      window.dispatchEvent(new CustomEvent("pageLoaderDone"));
      onComplete();
    }, DURATION + 500);

    return () => {
      clearInterval(wordInterval);
      cancelAnimationFrame(rafId);
      timers.current.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 0 0)" }}
      animate={closing ? { clipPath: "inset(100% 0 0 0)" } : { clipPath: "inset(0 0 0 0)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#080808",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ opacity: fadeContent ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Top-left brand label */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            color: "rgba(240,238,232,0.35)",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
          }}
        >
          AGENZІ
        </motion.div>

        {/* Rotating headline word */}
        <div style={{ textAlign: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                fontWeight: 800,
                color: "rgba(240,238,232,0.8)",
                fontStyle: "italic",
                lineHeight: 1,
              }}
            >
              {WORDS[wordIndex]}
            </motion.div>
          </AnimatePresence>

          {/* HUMAN + AI row */}
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1.5rem",
            }}
          >
            {[
              { label: "HUMAN", color: "#F0EEE8", visible: humanVisible },
              { label: "PLUS", color: "var(--ring-2, #6870BD)", visible: plusVisible },
              { label: "AI", color: "#F0EEE8", visible: aiVisible },
            ].map(({ label, color, visible }) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 50 }}
                animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "clamp(1.5rem, 5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color,
                }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom-right counter */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 48,
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 700,
            color: "rgba(240,238,232,0.15)",
            fontStyle: "italic",
            lineHeight: 1,
          }}
        >
          {String(count).padStart(3, "0")}
        </div>

        {/* Progress bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "rgba(255,255,255,0.08)",
          }}
        >
          <motion.div
            style={{
              height: "100%",
              scaleX: count / 100,
              transformOrigin: "left",
              background:
                "linear-gradient(135deg, #2B3A86 0%, #6870BD 50%, #7B5499 100%)",
              boxShadow: "0 0 8px rgba(104,112,189,0.4)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
