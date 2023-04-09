/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.{html,js}"],
  theme: {
    colors: {
      lightRed: "hsl(var(--Light-red))",
      lightRedBG: "hsl(var(--Light-red-bg)/8%)",
      orangeyYellow: "hsl(var(--Orangey-yellow))",
      orangeyYellowBG: "hsl(var(--Orangey-yellow-bg)/8%)",
      cobaltBlue: "hsl(var(--Cobalt-blue))",
      cobaltBlueBG: "hsl(var(--Cobalt-blue)/8%)",
      greenTeal: "hsl(var(--Green-teal))",
      greenTealBG: "hsl(var(--Green-teal)/8%)",
      darkGrayBlue: "hsl(var(--Dark-gray-blue))",
      lightSlateBlueBackground: "hsl(var(--Light-slate-blue-background))",
      lightRoyalBlueBackground: "hsl(var(--Light-royal-blue-background))",
      violetBlueCircle: "hsl(var(--Violet-blue-circle)/1)",
      persianBlueCircle: "hsl(var(--Persian-blue-circle)/0)",
      white: "hsl(var(--White))",
      paleBlue: "hsl(var(--Pale-blue))",
      lightLavender: "hsl(var(--Light-lavender))",
      // darkGrayBlue: "hsl(var(--Dark-gray-blue))",
    },
    extend: {
      fontFamily: {
        Hanken: ['Hanken Grotesk', "sans-serif"],
      }
    },
  },
  plugins: [],
}

