module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layout/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            keyframes: {
                grow: {
                    '0%, 100%': { transform: 'scale(95%)' },
                    '50%': { transform: 'scale(100%)' },
                }
            },
            animation: {
                'grow': 'grow 4s ease-in-out infinite',
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}
