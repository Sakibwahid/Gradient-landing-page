/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(2,0,36,1) 14%, rgba(96, 67, 163, 1) 49%, rgba(160,166,185,1) 94%)",
        "custom-gradient-3": `
          linear-gradient(90deg, rgba(96,67,163,1) 0%, rgba(100,74,164,1) 39%, rgba(160,166,185,1) 61%, rgba(255,255,255,1) 100%);
        `,
        "custom-gradient-2": ` 
        radial-gradient(circle at bottom right, rgba(66, 46, 113, 0.6) 0%, rgba(66, 46, 113, 0.8) 20%, rgba(96, 67, 163, 1) 70%, rgba(96, 67, 163, 1) 100%)
      `,
        "prime-hosting-gradient": `
          radial-gradient(circle at bottom left, rgba(66, 46, 113, 0.6) 0%,  rgba(2, 0, 36, 1) 90%, rgba(2, 0, 36, 1) 100%)`
        ,
        "New": `
        linear-gradient(90deg, rgba(96,67,163,1) 50.34%, rgba(2,0,36,1) 76%);

          `,
        "new":
          `
          linear-gradient(90deg, rgba(96,67,163,1) 33.34%, rgba(155,160,181,1) 47%, rgba(255,255,255,1) 100%);
          `
      },
    },
  },
  plugins: [require("daisyui")],
};
