/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        New: `
        linear-gradient(90deg, rgba(96,67,163,1) 50.34%, rgba(2,0,36,1) 76%);
          `,
        new: `
          linear-gradient(90deg, rgba(96,67,163,1) 33.34%, rgba(155,160,181,1) 47%, rgba(255,255,255,1) 100%);
          `,
        "new-2": `
          radial-gradient(circle at top left, #26003b, #300654, #2d0748, #0b0011)
          `,
        "card-2": `
        linear-gradient(55deg, rgba(31,35,115,255), rgba(2,0,36,1)38%);
          `,
        "card-1":
          "linear-gradient(130deg,rgba(96,67,163,1)65%, rgba(31,3,115,255))",
      },
    },
  },
  plugins: [require("daisyui")],
};
