/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textColor: "var(--color-text)",
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
    animation: {
      "fade-in": "fadeIn 1s ease-out forwards",
      "fade-in-up": "fadeInUp 0.8s ease-out both",
      "text-pop": "popText 0.6s ease-out both",
      pop: 'pop 0.5s ease-out both',
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeInUp: {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      popText: {
        "0%": { transform: "scale(0.95)", opacity: 0 },
        "100%": { transform: "scale(1)", opacity: 1 },
      },
      pop: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
    },
  },
  plugins: [],
};
