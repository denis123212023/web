module.exports = {
    content: [
        "./views/**/*.{html,js,ejs}",
        "./node_modules/tw-elements/js/**/*.js"
    ],
    plugins: [require("tw-elements/plugin.cjs")],
    // darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: '#3490dc', // Define your primary color
            },
        },
    },
};