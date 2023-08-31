module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(238, 238, 238)',
        background: 'rgb(26,27,28)',
        popout: 'rgb(28,29,30)',
        island: 'rgb(21,20,20)',
        accent: 'rgb(250,202,222)',

        'bot-yellow': 'rgb(255,224,9)',
        'bot-gray': 'rgb(30, 31, 34)',
        'bot-bg': 'rgb(54,57,63)',
        'bot-mention-bg': 'rgba(88,101,242,0.3)',
        'bot-mention-hover': 'rgba(88,101,242,0.5)',
        'bot-mention': 'rgb(222,224,252)',
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.25',
            maxWidth: 'full',
            color: 'rgb(238, 238, 238)',
            a: {
              color: 'rgb(238, 238, 238)',
              '&:hover': {
                color: 'rgb(250,202,222)',
              },
            },
            h2: {
              color: 'rgb(238, 238, 238)',
            },
            hr: {
              borderColor: 'rgb(250,202,222)',
              marginBottom: '1.5rem',
              marginTop: '1.5rem',
            },
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};
