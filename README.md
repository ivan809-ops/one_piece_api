# One Piece - Character & Devil Fruit Database

A web application that showcases characters and Devil Fruits from the One Piece universe. Browse through an extensive database of Devil Fruits and characters with real-time search functionality.

## Project Function

This application provides an interactive database viewer for One Piece content. It features:

- Browse Devil Fruits from the One Piece universe with detailed descriptions
- Browse character information and descriptions
- Real-time search functionality to filter results instantly
- Tab-based navigation between Devil Fruits and Characters
- Dynamic card-based display with clean, organized layout
- API-powered data from the One Piece API for accurate information

## Features

- **Two Database Tabs**:
  - **Devil Fruits**: Browse all Devil Fruits with descriptions
  - **Characters**: Browse all One Piece characters with information
- **Real-time Search**:
  - Type to instantly filter results as you type
  - Search placeholder changes based on selected tab
  - Works for both Devil Fruits and characters
- **Card Display**:
  - Clean card layout showing name and description
  - Organized grid display for easy browsing
  - "No Results" message when search yields no matches
- **Tab Navigation**: Switch between Devil Fruits and characters tabs
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **API Integration**: Fetches data from the One Piece API for current, accurate information

## How to Run

### Quick Start

1. Open the `one-piece` folder
2. Double-click on `index.html` or right-click and select "Open with" your preferred web browser
3. The application will load immediately in your browser

**No installation or server required** - it runs entirely in your browser with internet connection!

## How to Use

1. **View Devil Fruits**:

   - By default, the Devil Fruits tab is active
   - Browse through all available Devil Fruits with their descriptions
   - Type in the search box to filter Devil Fruits by name

2. **Search Devil Fruits**:

   - The search box shows placeholder "Search Devil Fruits..."
   - Type any part of a Devil Fruit name to filter results
   - Results update instantly as you type
   - Clear the search box to see all results again

3. **Switch to Characters**:

   - Click the **Characters** tab to view the character database
   - The search placeholder changes to "Search Characters..."
   - Search works the same way for character names

4. **Search Characters**:

   - Type in the search box to filter characters by name
   - Results update instantly as you type
   - Click the Devil Fruits tab to switch back

5. **No Results**:
   - If your search doesn't match any items, a "No Results" message appears
   - Clear the search box or adjust your search term

## Files

- `index.html` - Structure and layout
- `style.css` - Styling and responsive design
- `script.js` - API fetching, search logic, and DOM updates
- `README.md` - This file

## API Information

This application uses the **One Piece API** for data:

- **Fruits API Endpoint**: `https://api.api-onepiece.com/v2/fruits/en`
- **Characters API Endpoint**: `https://api.api-onepiece.com/v2/characters/en`
- **Data Format**: JSON
- **Language**: English

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla/ES6)
- One Piece API (Free)

## Notes

- An active internet connection is required to fetch data from the API
- Data is fetched when the application loads and when switching between tabs
- Search is case-insensitive
- Both databases are comprehensive and frequently updated

## Example Search Queries

- **Devil Fruits**: Search "Gomu" (Gomu Gomu no Mi), "Hie" (Hie Hie no Mi), etc.
- **Characters**: Search "Luffy", "Zoro", "Nami", etc.
