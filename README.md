# ☀️ Weather App

A modern, responsive weather application built with React and Vite. Get real-time weather information for any city around the world with an intuitive black and white minimalist design.

## Features

- 🔍 **City Search** - Search for weather information by city name
- 🌍 **Popular Cities** - Pre-loaded weather data for major cities (New York, London, Tokyo, Paris, Sydney, Casablanca)
- 📊 **Detailed Weather Info** - View:
  - Current temperature
  - Weather description
  - Humidity percentage
  - Wind speed
  - Atmospheric pressure
  - "Feels like" temperature
- 🎨 **Clean Design** - Minimalist black and white theme with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for optimal build speeds

## Technology Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **API:** OpenWeatherMap
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Deployment:** GitHub Pages

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Weather-App.git
   cd Weather-App
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build & Deployment

Build for production:

```bash
npm run build
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

The application will be live at: `https://your-username.github.io/Weather-App/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint to check code quality

## API Key

This project uses the **OpenWeatherMap API**. The API key is already configured in the code.

To use your own API key:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Replace the `API_KEY` in `src/App.jsx` with your own key

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── index.css              # Global styles
├── main.jsx               # Entry point
└── components/
    ├── SearchBar.jsx      # Search input component
    ├── WeatherCard.jsx    # Weather display card
    └── PopularCities.jsx  # Popular cities section
```

## Styling

The app features a clean black and white color scheme using:

- Gray-based backgrounds (gray-100 to gray-300)
- Dark text for readability
- Smooth transitions and hover effects
- Responsive grid layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Author

**Zakaria**

Made with ❤️
