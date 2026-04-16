/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#E9B670",
        "gold-dark": "#C8973D",
        "gold-light": "#F5D094",
        brown: "#332017",
        "brown-light": "#5a3a1a",
        cream: "#FBF7F0",
        "border-soft": "#E8E2D8",
        "overlay-black": "rgba(0,0,0,0.55)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-left": "slideLeft 0.3s ease-out forwards",
        "slide-right": "slideRight 0.3s ease-out forwards",
        "scroll-indicator": "scrollBounce 1.5s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E9B670 0%, #C8973D 50%, #E9B670 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #332017 0%, #1a0e08 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, #E9B670 25%, #fff8e7 50%, #E9B670 75%)",
      },
      boxShadow: {
        gold: "0 4px 24px rgba(233, 182, 112, 0.25)",
        "gold-lg": "0 8px 40px rgba(233, 182, 112, 0.35)",
        luxury: "0 20px 60px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
