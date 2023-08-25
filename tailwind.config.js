/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '68': 'repeat(68, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '94': 'repeat(94, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '5': '5',
        '6': '6',
        '29': '29',
        '30': '30',
        '44': '44',
        '45': '45',
        '62': '62',
      },
      gridColumnEnd: {
        '29': '29',
        '44': '44',
        '45': '45',
        '61': '61',
        '65': '65',
      },
      gridRowStart: {
        '3': '3',
        '5': '5',
        '11': '11',
        '21': '21',
        '42': '42',
        '44': '44',
        '63': '63',
        
      },
      gridRowEnd: {
        '11': '11',
        '20': '20',
        '42': '42',
        '63': '63',
        '82': '82',
      }
    },
  },
  plugins: [],
}

