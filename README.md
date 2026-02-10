# Professional Speaker Website

A modern, elegant website template for professional speakers, coaches, and consultants.

## Project Structure

```
website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All CSS styles
├── js/
│   └── main.js         # JavaScript interactions
├── images/             # Place your images here
└── assets/             # Other assets (fonts, icons, etc.)
```

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Modern Aesthetics**: Clean, professional design with bold typography
- **Easy to Customize**: Well-organized code with CSS variables

## Customization Guide

### 1. Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary: #2c1810;      /* Main dark color */
    --accent: #d94a2e;       /* Accent color (red) */
    --bg-light: #faf8f6;     /* Light background */
    --bg-cream: #f5f0eb;     /* Cream background */
    --text-dark: #1a1614;    /* Dark text */
    --text-muted: #6b635e;   /* Muted text */
}
```

### 2. Content

Edit `index.html` to update:
- Your name and branding
- Hero section text
- About section content
- Services descriptions
- Testimonials
- Footer information

### 3. Images

Replace the Unsplash placeholder images with your own:
- Hero image: Professional headshot or action shot
- About image: Candid or professional photo
- Add images to the `images/` folder

Current placeholder images to replace:
- Hero: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2`
- About: `https://images.unsplash.com/photo-1551836022-deb4988cc6c0`

### 4. Typography

The website uses:
- **Playfair Display**: Headings (serif, elegant)
- **Instrument Sans**: Body text (clean, modern)

To change fonts, update the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```

Then update the CSS font-family declarations in `css/styles.css`.

## Sections

1. **Navigation**: Fixed header with smooth scroll
2. **Hero**: Large headline with call-to-action
3. **Trusted By**: Logo showcase
4. **About**: Story and credentials
5. **Services**: Three-column service cards
6. **Testimonial**: Featured quote
7. **CTA**: Contact call-to-action
8. **Footer**: Links and information

## Development

### Viewing Locally

Simply open `index.html` in a web browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000`

### Adding Functionality

**Contact Form**: Add form handling in `js/main.js`
**Mobile Menu**: Implement hamburger menu for mobile devices
**Analytics**: Add Google Analytics or similar tracking
**Newsletter**: Integrate email marketing service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form with backend
- [ ] Add portfolio/speaking gallery
- [ ] Integrate newsletter signup
- [ ] Add mobile hamburger menu
- [ ] SEO optimization
- [ ] Performance optimization

## Credits

Design inspired by modern professional speaker websites with custom implementation.

## License

Free to use for personal and commercial projects.
