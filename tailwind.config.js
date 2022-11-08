function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    borderRadius: {
      DEFAULT: '.375rem',
      'full': '9999px',
    },
    extend: {
      fontFamily: {
        display: ['Avenir'],
      },
      colors: {
        ui: {
          accentRGB: withOpacityValue('--color-ac'),
          accent: 'var(--color-ac)',
          background: 'var(--color-bg)',
          'background-rise': 'var(--color-bg-rise)',
          'background-mute': 'var(--color-bg-mute)',
          foreground: 'var(--color-text)',
          'foreground-mute': 'var(--color-text-mute)',
          focus: 'var(--color-focus)',
        },
        brand: 'var(--color-brand, #1e3a8a)',
      },
      cursor: {
        'zoom-in': 'zoom-in'
      },
      borderColor: {
        DEFAULT: 'var(--color-fg)',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
