module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  theme: {
    extend: {},
  },
  variants: {},
  content: ["./node_modules/flowbite/**/*.js/*.jsx"],
  plugins: [require("flowbite/plugin")],
};
