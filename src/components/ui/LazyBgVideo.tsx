import { useEffect, useRef } from "react";

interface LazyBgVideoProps {
  src: string;
}

/**
 * Background video that only starts downloading + playing when it scrolls
 * close to the viewport (rootMargin 400px). Pauses when off-screen.
 * Drop-in replacement for the raw <video autoPlay …> pattern used in sections.
 */
export function LazyBgVideo({ src }: LazyBgVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "400px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0,
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
