import tailwind from "@astrojs/tailwind";
/** @type {import('tailwindcss').Config} */

module.exports =
{
    content:
        [
            './src/**/*.{html,js,ts,jsx,tsx}', // Adjust to match your file paths
        ],
    theme:
    {
        extend:
        {
            animation:
            {
                "spin-slow": "spin .5s linear infinite"
            }
        },
    },
    plugins:
        [

        ],
}