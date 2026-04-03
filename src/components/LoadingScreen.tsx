import { useState, useEffect } from "react";

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onFinish, 600);
          return 100;
        }
        // Easing — starts fast, slows near end
        const step = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + step, 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-600 ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(220 25% 8%) 0%, hsl(174 40% 12%) 50%, hsl(220 25% 10%) 100%)",
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: "hsl(174 62% 38%)",
            top: "20%",
            left: "10%",
            animation: "orbFloat 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-15 blur-[80px]"
          style={{
            background: "hsl(38 92% 50%)",
            bottom: "15%",
            right: "10%",
            animation: "orbFloat 8s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute w-[200px] h-[200px] rounded-full opacity-10 blur-[60px]"
          style={{
            background: "hsl(174 62% 50%)",
            top: "50%",
            right: "30%",
            animation: "orbFloat 5s ease-in-out infinite 1s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo icon */}
        <div
          className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(174 62% 38%), hsl(174 62% 50%))",
            boxShadow: "0 0 40px hsl(174 62% 38% / 0.4)",
            animation: "logoPulse 2s ease-in-out infinite",
          }}
        >
          <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
        </div>

        {/* Brand name */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2" style={{ color: "white" }}>
          Titik<span style={{ color: "hsl(174 62% 50%)" }}>Tolak</span>
        </h1>
        <p className="text-sm mb-10" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
          Platform Edukasi Online
        </p>

        {/* Progress bar */}
        <div className="w-56 h-1.5 rounded-full overflow-hidden" style={{ background: "hsl(0 0% 100% / 0.08)" }}>
          <div
            className="h-full rounded-full transition-all duration-150 ease-out"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, hsl(174 62% 38%), hsl(174 62% 55%), hsl(38 92% 50%))",
              boxShadow: "0 0 12px hsl(174 62% 50% / 0.5)",
            }}
          />
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-2 mt-5">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "hsl(174 62% 50%)",
                  animation: `dotBounce 1.4s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
          <span className="text-xs font-medium" style={{ color: "hsl(0 0% 100% / 0.35)" }}>
            Memuat pengalaman belajar
          </span>
        </div>
      </div>

      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 40px hsl(174 62% 38% / 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 60px hsl(174 62% 38% / 0.6); }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
