# MA-ROYAL REAL ESTATE AND AIRBnB PROPERTIES LTD

A premium, modern, and highly interactive real estate website built with HTML5, Tailwind CSS, and Vanilla JavaScript.

## Features

### Design & Branding
- **Premium luxury aesthetic** with a sophisticated dark theme
- **Custom color palette**: Primary (#080B12), Secondary (#101522), Royal Gold (#F5B942), Champagne Gold (#E9C46A)
- **Glassmorphism effects** on header and UI elements
- **Custom cursor** with hover effects (desktop only)
- **Smooth animations** throughout the site

### Sections
1. **Header/Navigation**
   - Sticky header with glassmorphism effect on scroll
   - Responsive navigation with mobile hamburger menu
   - Bio dropdown with smooth animations
   - Active navigation indicators

2. **Hero Section**
   - Full-screen hero with parallax background
   - Animated text entrance
   - Floating gold particles
   - Dual CTA buttons
   - Scroll indicator

3. **Property Search Bar**
   - Floating search interface
   - Filter by type (Buy, Rent, Airbnb, Land, Commercial)
   - Location, property type, and price range filters
   - Interactive search functionality

4. **Promotional Ad Slider**
   - Infinite horizontal carousel
   - Touch/drag support
   - Progress indicators
   - Auto-play with pause on hover

5. **Featured Properties**
   - Elegant property cards with hover effects
   - Property details (beds, baths, parking, sqft)
   - Favorite button with localStorage persistence
   - Click to view property modal

6. **Property Categories**
   - Image tiles with hover animations
   - Gold border on hover
   - Category name slide-up effect

7. **Services Section**
   - Six service cards with animated icons
   - Hover effects with gold border
   - Comprehensive service descriptions

8. **Why MA-ROYAL Section**
   - Split layout with image and content
   - Animated statistics counters
   - Checkmark list of benefits

9. **Agents Section**
   - Agent profile cards
   - Hover effects revealing contact info
   - Specialization and property count

10. **About Company**
    - Split image/text layout
    - Animated gold vertical line
    - Company description and values

11. **Airbnb/Short-Let Section**
    - Premium short-let cards
    - Ratings, guest capacity, amenities
    - Book stay functionality

12. **Testimonials Carousel**
    - Auto-play testimonial slider
    - Client images and ratings
    - Smooth transitions

13. **FAQ Accordion**
    - Smooth accordion animations
    - Only one FAQ open at a time
    - 7 comprehensive questions

14. **CTA Section**
    - Powerful final call-to-action
    - Background image with overlay
    - Dual action buttons

15. **Footer**
    - Multi-column layout
    - Social media links
    - Contact information
    - Company links

### Interactive Features
- **Property Modal**: Detailed property view with agent contact
- **Favorites System**: Save favorite properties (localStorage)
- **Search/Filter**: Dynamic property filtering
- **Scroll Progress Bar**: Visual progress indicator
- **Floating Contact Widget**: WhatsApp, Call, Email options
- **Smooth Scrolling**: Anchor link navigation
- **Scroll Animations**: Elements animate on scroll (IntersectionObserver)
- **Number Counters**: Animated statistics when in view
- **Mobile Responsive**: Fully responsive design
- **Touch Support**: Swipe gestures for sliders

### Technical Implementation
- **No frameworks**: Pure HTML5, Tailwind CSS, Vanilla JavaScript
- **Modular JavaScript**: Separate functions for each feature
- **Performance**: Lazy loading, efficient DOM manipulation
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Reduced Motion**: Respects user preferences
- **LocalStorage**: Persists favorites

## File Structure

```
/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom CSS (animations, cursor, effects)
├── js/
│   └── app.js          # JavaScript functionality
├── assets/
│   ├── images/         # Property and brand images
│   ├── icons/          # Custom icons
│   └── logo/           # Logo files
├── server.py           # Local development server
└── README.md           # This file
```

## How to Run

### Option 1: Using Python (Recommended)
```bash
python server.py
```
Then open http://localhost:8080 in your browser.

### Option 2: Using Node.js
```bash
npx serve
```

### Option 3: Direct File
Simply open `index.html` in your browser (some features may require a server).

## Customization

### Adding Properties
Edit the `properties` array in `js/app.js`:

```javascript
const properties = [
    {
        id: 1,
        title: "Property Name",
        location: "Location",
        price: "₦X,XXX,XXX",
        type: "For Sale",
        beds: 4,
        baths: 3,
        parking: 2,
        sqft: 350,
        image: "image-url",
        featured: true,
        description: "Property description",
        agent: "Agent Name",
        agentPhone: "+234 XXX XXX XXXX"
    },
    // Add more properties...
];
```

### Adding Agents
Edit the `agents` array in `js/app.js`.

### Adding Testimonials
Edit the `testimonials` array in `js/app.js`.

### Modifying Colors
Update the Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#080B12',
                secondary: '#101522',
                royalGold: '#F5B942',
                champagneGold: '#E9C46A',
                secondaryText: '#A5ADBD',
                border: '#252C3A',
            },
        }
    }
}
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Lazy loading images
- Efficient event listeners
- IntersectionObserver for scroll animations
- CSS transforms for animations
- Debounced scroll events where necessary

## Accessibility
- Semantic HTML5
- Proper heading hierarchy
- ARIA labels
- Keyboard navigation
- Focus states
- Accessible modals and dropdowns
- Alt text for images
- Good color contrast

## License
© 2026 MA-ROYAL REAL ESTATE AND AIRBnB PROPERTIES LTD. All Rights Reserved.

## Contact
- Email: maroyalrealestateproperties4@gmail.com
- Phone: +234 810 615 3316
- Location: Owerri, Imo State, Nigeria
