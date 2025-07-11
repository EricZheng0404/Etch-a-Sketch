# Etch-a-Sketch

A simple Etch-a-Sketch web app built with vanilla JavaScript, HTML, and CSS.

## Features

- **Resizable grid:** Change the grid size (up to 150x150).
- **Color selection:** Choose from several colors to draw with.
- **Clear grid:** Instantly reset the grid to blank.
- **Responsive UI:** Simple, clean, and easy to use.

## How to Use

1. **Open `index.html` in your browser.**
2. **Draw:** Hover your mouse over the grid to draw with the selected color.
3. **Change color:** Click a color button to switch drawing color.
4. **Change grid size:** Click the "Change Size" button and enter a new grid size (max 150).
5. **Clear:** Click "Clear Grid" to erase your drawing.

## File Structure

- `index.html` – Main HTML file.
- `style.css` – Styles for layout and UI.
- `script.js` – App logic and interactivity.

## Customization

- Add more colors by duplicating a color button in the HTML and updating its `data-color` and `background-color`.
- Adjust the default grid size in `script.js` (`let gridSize = 30;`).

## Notes

- The app is designed for modern browsers.
- No external libraries or frameworks required.

## License

MIT License
