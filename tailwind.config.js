import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    theme: {
        extend: {
            colors: {
                "body-bg": "#0a0f0d",
                "primary-green": "#00c853",
                "secondary-green": "#00e676",
            },
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                float: {
                    "0%, 100%": {
                        transform:
                            "translateY(0px) translateX(0px) rotate(0deg)",
                        opacity: "0.6",
                    },
                    "25%": {
                        transform:
                            "translateY(-20px) translateX(10px) rotate(5deg)",
                        opacity: "1",
                    },
                    "50%": {
                        transform:
                            "translateY(-35px) translateX(-10px) rotate(0deg)",
                        opacity: "0.8",
                    },
                    "75%": {
                        transform:
                            "translateY(-15px) translateX(15px) rotate(-5deg)",
                        opacity: "1",
                    },
                },
                floatSlow: {
                    "0%, 100%": {
                        transform:
                            "translateY(0px) translateX(0px) rotate(0deg)",
                    },
                    "33%": {
                        transform:
                            "translateY(-15px) translateX(-8px) rotate(3deg)",
                    },
                    "66%": {
                        transform:
                            "translateY(-25px) translateX(12px) rotate(-3deg)",
                    },
                },
                floatFast: {
                    "0%, 100%": {
                        transform: "translateY(0px) translateX(0px) scale(1)",
                    },
                    "40%": {
                        transform:
                            "translateY(-12px) translateX(-5px) scale(1.1)",
                    },
                    "80%": {
                        transform:
                            "translateY(-8px) translateX(8px) scale(0.95)",
                    },
                },
            },
            animation: {
                float: "float 12s ease-in-out infinite",
                "float-slow": "floatSlow 15s ease-in-out infinite",
                "float-fast": "floatFast 8s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
