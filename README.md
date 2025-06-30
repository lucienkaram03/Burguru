# Burguru - Premium Burger & Sports Experience

**Author:** Lucien Karam  
**Project Type:** Web Application  
**Technologies:** HTML5, CSS3, JavaScript ES6+, Bootstrap 5

## 📋 Brief Description

Burguru is a modern, responsive website for a premium burger restaurant that combines online food ordering with sports viewing reservations. The project demonstrates advanced web development techniques including dynamic content management, interactive user interfaces, and seamless integration between different functional modules.

The application features a comprehensive menu system with real-time cart management, sports viewing reservation system with game-specific bookings, customer review system, and responsive design optimized for all devices. Built with modern web technologies, it showcases professional-grade frontend development with emphasis on user experience and performance.

## 🔌 APIs Used

### External APIs
- **Bootstrap 5 CDN** - Responsive framework and UI components
- **Font Awesome 6 CDN** - Icon library for enhanced UI elements
- **Google Fonts** - Typography (Cinzel, Montserrat)

### Mock APIs (Simulated)
- **Sports Data API** - Dynamic sports schedule with real-time dates
- **Menu Data API** - Comprehensive menu item database
- **Review System API** - Customer feedback management

### Local Storage APIs
- **localStorage API** - Client-side data persistence
  - `burguruCart` - Shopping cart items and quantities
  - `burguruReservations` - User reservation history
  - `burguruReviews` - Customer reviews and ratings
  - `burguruReservationDraft` - Form data persistence

## 🎯 Custom Requirements Explanation

### 1. **Bootstrap Carousel Implementation**
**Requirement:** Implement a Bootstrap carousel for the homepage hero section
**Implementation:** 
- Created a 3-slide carousel with automatic sliding functionality
- Added custom CSS overlays and animations for enhanced visual appeal
- Implemented responsive design with mobile-optimized text sizing
- Included call-to-action buttons on each slide linking to relevant pages

### 2. **Advanced Menu System with Cart Management**
**Requirement:** Build a comprehensive menu system with shopping cart functionality
**Implementation:**
- Developed 8 menu categories with 25+ items using JavaScript classes
- Created interactive category tabs for seamless navigation
- Implemented real-time cart management with localStorage persistence
- Added quantity controls with dynamic price calculations
- Built modal-based cart interface with checkout process

### 3. **Sports Viewing Reservation System**
**Requirement:** Create a reservation system specifically for sports viewing events
**Implementation:**
- Designed game-specific reservation booking with dynamic sports schedule
- Integrated pre-order food system linking reservations to menu ordering
- Implemented comprehensive form validation and error handling
- Added reservation history management with cancellation functionality
- Created venue features showcase with HD screens and amenities

### 4. **Interactive Rating and Review System**
**Requirement:** Develop a customer feedback system with star ratings
**Implementation:**
- Built 5-star interactive rating component with visual feedback
- Created review submission system with localStorage persistence
- Implemented dynamic review display with user avatars and dates
- Added form validation and user-friendly notifications

### 5. **Responsive Design with Custom Styling**
**Requirement:** Ensure mobile-first responsive design with premium aesthetics
**Implementation:**
- Custom color scheme (Gold #bfa14a, Deep Brown #231a15, Warm Orange #e25822)
- Typography system using Cinzel for headings and Montserrat for body text
- CSS animations, 3D transforms, and hover effects
- Mobile-optimized touch targets and navigation
- Custom scrollbars and loading states

## 🍔 Features

### Core Functionality
- **Online Menu Ordering System** - Complete e-commerce functionality with cart management
- **Sports Viewing Reservations** - Book tables for game day experiences
- **Customer Reviews System** - Interactive rating and review system
- **Responsive Design** - Optimized for all devices and screen sizes
- **Real-time Cart Management** - Persistent shopping cart with localStorage
- **Pre-order Integration** - Seamless integration between reservations and menu ordering

### Menu Categories & Items
- **Burgers** (10 varieties including American, Bacon, Lebanese, Swiss, Caesar, Chicken, Texan, Armenian, Truffle, Cheesy)
- **Wings & Tenders** (Chicken Wings, Cheesy Chicken Tenders)
- **Salads** (Caesar, Quinoa, Pasta)
- **Sides** (Fries, Mozzarella Sticks, Wedges)
- **Drinks** (Soft Drinks, Beer)
- **Desserts** (Cheesecake)
- **Combos** (Burger + Fries + Drink combinations)
- **Add-ons** (Extra toppings and sides)

### Sports & Entertainment
- **Upcoming Games Display** - Dynamic sports schedule with real-time dates
- **Game-specific Reservations** - Book tables for specific sporting events
- **Multiple Sports Coverage** - Basketball, Football (Soccer), and more
- **Venue Features** - HD screens, sound system, group seating information

### User Experience Features
- **Interactive Rating System** - 5-star rating with visual feedback
- **Form Validation** - Comprehensive client-side validation
- **Local Storage Integration** - Persistent data across sessions
- **Modal Dialogs** - Smooth user interactions
- **Loading States** - Professional loading indicators
- **Alert System** - User-friendly notifications

## 🛠️ Technologies Used

### Frontend Technologies
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Advanced styling with Flexbox, Grid, Transitions, 3D Transforms
- **Bootstrap 5** - Responsive framework with custom theming
- **JavaScript ES6+** - Modern JavaScript with Classes and Modules
- **Font Awesome 6** - Comprehensive icon library

### Design & UX
- **Custom Color Scheme** - Gold (#bfa14a), Deep Brown (#231a15), Warm Orange (#e25822)
- **Typography** - Cinzel (headings) and Montserrat (body text)
- **Animations** - CSS transitions, transforms, and keyframe animations
- **Responsive Breakpoints** - Mobile-first design approach

### Data Management
- **Local Storage** - Client-side data persistence
- **Session Management** - Cross-page state management
- **Form Data Handling** - Advanced form processing and validation

## 📁 Project Structure

```
Burguru/
├── index.html              # Homepage with carousel and featured content
├── menu.html               # Complete menu system with cart functionality
├── reservations.html       # Sports viewing reservations system
├── css/
│   └── style.css          # Comprehensive stylesheet (1171 lines)
├── js/
│   ├── app.js             # Main application logic (522 lines)
│   ├── menu.js            # Menu management and cart system (524 lines)
│   └── reservations.js    # Reservations and sports API (532 lines)
└── images/                # 40+ high-quality image assets
    ├── Food items (burgers, wings, sides, etc.)
    ├── Sports images (basketball, football games)
    ├── UI elements (logo, backgrounds)
    └── README.md          # Image documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended for development)

### Installation & Setup
1. Clone or download the project files
2. Open `index.html` in a web browser
3. For development, use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```
4. Navigate to `http://localhost:8000`

## 🎯 Key Features Implemented

### Bootstrap Carousel System
- **Dynamic Content** - 3 featured slides with call-to-action buttons
- **Auto-play Functionality** - Automatic sliding with manual controls
- **Responsive Design** - Optimized for all screen sizes
- **Custom Styling** - Enhanced with CSS overlays and animations

### Advanced Menu System
- **Category Tabs** - Interactive menu navigation
- **Dynamic Loading** - JavaScript-powered menu rendering
- **Quantity Controls** - Add/remove items with real-time updates
- **Cart Integration** - Seamless shopping cart functionality
- **Price Calculations** - Automatic total and tax calculations

### Reservation Management
- **Form Validation** - Comprehensive input validation
- **Date/Time Selection** - User-friendly scheduling interface
- **Game Integration** - Link reservations to specific sporting events
- **Pre-order System** - Order food with reservations
- **Reservation History** - View and manage existing bookings

### Interactive Features
- **Rating System** - 5-star interactive rating component
- **Review System** - Customer feedback with localStorage persistence
- **Contact Forms** - Multiple contact methods with validation
- **Modal Dialogs** - Professional user interface components

### CSS Enhancements
- **Custom Animations** - Smooth transitions and hover effects
- **3D Transforms** - Modern visual effects
- **Responsive Typography** - Scalable text across devices
- **Custom Scrollbars** - Enhanced user experience
- **Loading States** - Professional loading indicators

## 🎨 Design System

### Color Palette
- **Primary**: Gold (#bfa14a) - Premium brand color
- **Secondary**: Deep Brown (#231a15) - Rich background
- **Accent**: Warm Orange (#e25822) - Call-to-action elements
- **Success**: Green variations for positive actions
- **Warning**: Yellow for notifications

### Typography
- **Headings**: Cinzel (serif) - Elegant, premium feel
- **Body**: Montserrat (sans-serif) - Clean, readable text
- **Responsive Scaling**: Fluid typography across breakpoints

### Visual Effects
- **Backdrop Filters** - Modern blur effects
- **Box Shadows** - Depth and elevation
- **Gradients** - Subtle background enhancements
- **Hover States** - Interactive feedback

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 576px - Optimized for smartphones
- **Tablet**: 576px - 768px - Touch-friendly interface
- **Desktop**: > 768px - Full-featured experience

### Mobile Optimizations
- **Touch Targets** - Minimum 44px for interactive elements
- **Simplified Navigation** - Collapsible menu system
- **Optimized Images** - Responsive image scaling
- **Readable Text** - Appropriate font sizes for mobile

## 🔧 Technical Implementation

### JavaScript Architecture
- **ES6 Classes** - Object-oriented design
- **Module Pattern** - Organized code structure
- **Event Delegation** - Efficient event handling
- **Local Storage API** - Client-side data persistence

### Performance Optimizations
- **Lazy Loading** - Efficient resource loading
- **Event Optimization** - Minimal event listeners
- **CSS Optimization** - Efficient selectors and properties
- **Image Optimization** - Compressed and appropriately sized images

### Accessibility Features
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - WCAG compliant color ratios
- **Semantic HTML** - Proper document structure

## 🌐 Browser Support

- **Chrome** (latest) - Full support
- **Firefox** (latest) - Full support
- **Safari** (latest) - Full support
- **Edge** (latest) - Full support
- **Mobile Browsers** - iOS Safari, Chrome Mobile

## 📊 Data Management

### Local Storage Structure
- `burguruCart` - Shopping cart items and quantities
- `burguruReservations` - User reservation history
- `burguruReviews` - Customer reviews and ratings
- `burguruReservationDraft` - Form data persistence

### API Integration (Mock)
- **Sports Data** - Simulated sports API responses
- **Menu Data** - Comprehensive menu item database
- **Review System** - Local storage-based review management

## 🎮 Interactive Elements

### Cart System
- **Add/Remove Items** - Real-time quantity management
- **Price Calculation** - Automatic total computation
- **Persistent Storage** - Cart survives page refreshes
- **Checkout Process** - Streamlined ordering experience

### Reservation System
- **Date/Time Picker** - User-friendly scheduling
- **Game Selection** - Link to specific sporting events
- **Form Validation** - Comprehensive input checking
- **Confirmation System** - Booking confirmation workflow

## 🔮 Future Enhancements

### Potential Additions
- **Payment Integration** - Online payment processing
- **Real-time Sports API** - Live sports data integration
- **User Accounts** - Customer profile management
- **Order Tracking** - Real-time order status
- **Push Notifications** - Game day reminders
- **Social Media Integration** - Social sharing features

## 📝 Development Notes

### Code Quality
- **ES6+ Standards** - Modern JavaScript practices
- **Semantic HTML** - Proper document structure
- **CSS Best Practices** - Organized and maintainable styles
- **Error Handling** - Comprehensive error management

### Performance Metrics
- **Load Time** - Optimized for fast loading
- **Responsiveness** - Smooth interactions across devices
- **Accessibility** - WCAG 2.1 AA compliance
- **SEO Optimization** - Search engine friendly structure

---

**Burguru** - Where premium burgers meet the ultimate sports viewing experience! 🏈🍔 