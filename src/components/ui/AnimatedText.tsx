import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function Char({
  char,
  progress,
  start,
  end,
}: {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  const len = chars.length;

  return (
    <p ref={containerRef} className={`relative ${className}`}>
      <span className="invisible">{text}</span>
      <span className="absolute inset-0">
        {chars.map((char, i) => (
          <Char
            key={i}
            char={char}
            progress={scrollYProgress}
            start={i / len}
            end={(i + 1) / len}
          />
        ))}
      </span>
    </p>
  );
}
