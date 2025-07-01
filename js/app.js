// Main Application Class
class BurguruApp {
    constructor() {
        this.reviews = [];
        this.featuredMenu = [];
        this.sportsSchedule = [];
        this.init();
    }

    init() {
        this.loadFeaturedMenu();
        this.loadSportsSchedule();
        this.loadReviews();
        this.setupEventListeners();
        this.setupRatingSystem();
    }

    // Load featured menu items
    async loadFeaturedMenu() {
        try {
            const container = document.getElementById('featuredMenu');
            if (!container) return;

            // Featured menu items data
            const menuItems = [
                {
                    id: 1,
                    name: 'Classic Burger',
                    description: 'Juicy beef patty with fresh lettuce, tomato, and special sauce',
                    price: 10.00,
                    image: 'images/Classic-homemade-hamburger.jpg',
                    category: 'burgers'
                },
                {
                    id: 2,
                    name: 'BBQ Wings',
                    description: 'Crispy wings tossed in our signature BBQ sauce',
                    price: 4.00,
                    image: 'images/KFC-Honey-BBQ-Wings-Pin-2.jpg',
                    category: 'wings'
                },
                {
                    id: 3,
                    name: 'Cheesecake',
                    description: 'Creamy, rich cheesecake with a buttery graham cracker crust and a luscious topping. The perfect sweet finish to your meal.',
                    price: 3.00,
                    image: 'images/Cheesecake.jpg',
                    category: 'dessert'
                }
            ];

            this.featuredMenu = menuItems;
            this.renderFeaturedMenu();
        } catch (error) {
            console.error('Error loading featured menu:', error);
        }
    }

    renderFeaturedMenu() {
        const container = document.getElementById('featuredMenu');
        if (!container) return;

        container.innerHTML = this.featuredMenu.map(item => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="menu-item">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid">
                    <div class="menu-item-content">
                        <h5 class="menu-item-title">${item.name}</h5>
                        <p class="menu-item-description">${item.description}</p>
                        <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                        <a href="menu.html" class="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Load sports schedule from API
    async loadSportsSchedule() {
        try {
            const container = document.getElementById('sportsSchedule');
            if (!container) return;

            // Generate realistic upcoming game dates
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            const dayAfterTomorrow = new Date(today);
            dayAfterTomorrow.setDate(today.getDate() + 2);
            const threeDaysFromNow = new Date(today);
            threeDaysFromNow.setDate(today.getDate() + 3);
            const fourDaysFromNow = new Date(today);
            fourDaysFromNow.setDate(today.getDate() + 4);
            const fiveDaysFromNow = new Date(today);
            fiveDaysFromNow.setDate(today.getDate() + 5);

            // Updated games data with dynamic dates
            const games = [
                {
                    id: 1,
                    date: tomorrow.toISOString().split('T')[0],
                    time: '8:00 PM',
                    teams: 'Sagesse vs AL-Riyadi',
                    sport: 'Basketball',
                    image: 'images/sagesse vs al riaydi.jpeg',
                    description: 'Lebanese Basketball League Final 4'
                },
                {
                    id: 2,
                    date: dayAfterTomorrow.toISOString().split('T')[0],
                    time: '7:30 PM',
                    teams: 'Real Madrid vs Barcelona',
                    sport: 'Football',
                    image: 'images/realmadrid vs barcelona.jpg',
                    description: 'El Clasico'
                },
                {
                    id: 3,
                    date: threeDaysFromNow.toISOString().split('T')[0],
                    time: '9:00 PM',
                    teams: 'Beirut vs Homentmen',
                    sport: 'Basketball',
                    image: 'images/beirut vs homentmen.jpeg',
                    description: 'FIBA WASL Final 8'
                },
                {
                    id: 4,
                    date: fourDaysFromNow.toISOString().split('T')[0],
                    time: '8:30 PM',
                    teams: 'Bayern Munich vs Inter - Milan',
                    sport: 'Football',
                    image: 'images/bayern vs inter.jpg',
                    description: 'UEFA Champions League Semi-Final'
                },
                {
                    id: 5,
                    date: fiveDaysFromNow.toISOString().split('T')[0],
                    time: '7:00 PM',
                    teams: 'Champville vs Antranik',
                    sport: 'Basketball',
                    image: 'images/antranik vs champville.jpeg',
                    description: 'Lebanese Basketball League Final 4'
                },
                {
                    id: 6,
                    date: (new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
                    time: '6:00 PM',
                    teams: 'Paris Saint-Germain vs Arsenal',
                    sport: 'Football',
                    image: 'images/psg vs arsenal.jpg',
                    description: 'UEFA Champions League Semi-Final'
                }
            ];

            this.sportsSchedule = games;
            this.renderSportsSchedule();
        } catch (error) {
            console.error('Error loading sports schedule:', error);
        }
    }

    renderSportsSchedule() {
        const container = document.getElementById('sportsSchedule');
        if (!container) return;

        container.innerHTML = this.sportsSchedule.map(game => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="game-card">
                    <img src="${game.image}" alt="${game.teams}" class="img-fluid">
                    <div class="game-card-content">
                        <div class="game-date">${this.formatDate(game.date)}</div>
                        <h5 class="game-teams">${game.teams}</h5>
                        <p class="game-time">${game.time} - ${game.sport}</p>
                        <p class="text-muted small">${game.description}</p>
                        <a href="reservations.html" class="btn btn-success">Book Table</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Load reviews
    async loadReviews() {
        try {
            const container = document.getElementById('reviewsContainer');
            if (!container) return;

            // Load reviews from localStorage or use default data
            let reviews = JSON.parse(localStorage.getItem('burguruReviews'));
            
            if (!reviews || reviews.length === 0) {
                // Enhanced reviews data with Lebanese names and Burguru-specific content
                // Using more realistic recent dates
                const today = new Date();
                const yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);
                const twoDaysAgo = new Date(today);
                twoDaysAgo.setDate(today.getDate() - 2);
                const threeDaysAgo = new Date(today);
                threeDaysAgo.setDate(today.getDate() - 3);
                const weekAgo = new Date(today);
                weekAgo.setDate(today.getDate() - 7);
                const twoWeeksAgo = new Date(today);
                twoWeeksAgo.setDate(today.getDate() - 14);

                reviews = [
                    {
                        id: 1,
                        name: 'Lucien Karam',
                        rating: 5,
                        text: 'Amazing burgers and perfect atmosphere for watching sports! The wings are crispy and the service is excellent. Best place to watch Lebanese basketball games!',
                        date: threeDaysAgo.toISOString().split('T')[0]
                    },
                    {
                        id: 2,
                        name: 'Elias Zaghrini',
                        rating: 5,
                        text: 'Love the food here! Perfect place to watch the game with friends. The Sagesse vs AL-Riyadi game was incredible here. Great screens and atmosphere!',
                        date: twoDaysAgo.toISOString().split('T')[0]
                    },
                    {
                        id: 3,
                        name: 'Clovis Abou Kheir',
                        rating: 5,
                        text: 'Best sports snack in Lebanon! Great food, multiple screens for every game, and friendly staff. The El Clasico viewing was epic here!',
                        date: yesterday.toISOString().split('T')[0]
                    },
                    {
                        id: 4,
                        name: 'Nadine Chahine',
                        rating: 4,
                        text: 'Excellent burgers and the sports atmosphere is unbeatable. Perfect for watching Champions League matches. Will definitely come back!',
                        date: weekAgo.toISOString().split('T')[0]
                    },
                    {
                        id: 5,
                        name: 'Marc Saade',
                        rating: 5,
                        text: 'Incredible experience! The Beirut vs Homentmen game was amazing here. Food is top quality and the staff is very welcoming.',
                        date: twoWeeksAgo.toISOString().split('T')[0]
                    },
                    {
                        id: 6,
                        name: 'Rita Mansour',
                        rating: 4,
                        text: 'Great place for sports fans! Multiple screens showing different games, delicious food, and perfect for group gatherings.',
                        date: (new Date(today.getTime() - 21 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]
                    }
                ];
                
                // Save default reviews to localStorage
                localStorage.setItem('burguruReviews', JSON.stringify(reviews));
            }

            this.reviews = reviews;
            this.renderReviews();
        } catch (error) {
            console.error('Error loading reviews:', error);
        }
    }

    renderReviews() {
        const container = document.getElementById('reviewsContainer');
        if (!container) return;

        container.innerHTML = this.reviews.map(review => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-avatar">
                            ${review.name.charAt(0)}
                        </div>
                        <div class="review-info">
                            <h5>${review.name}</h5>
                            <div class="review-date">${this.formatDate(review.date)}</div>
                        </div>
                    </div>
                    <div class="review-rating">
                        ${this.generateStars(review.rating)}
                    </div>
                    <p class="review-text">${review.text}</p>
                </div>
            </div>
        `).join('');
    }

    // Setup event listeners
    setupEventListeners() {
        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Setup rating system
    setupRatingSystem() {
        const ratingStars = document.querySelectorAll('.rating i');
        ratingStars.forEach((star, index) => {
            star.addEventListener('click', () => {
                this.setRating(index + 1);
            });
        });
    }

    setRating(rating) {
        const stars = document.querySelectorAll('.rating i');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    // Handle contact form submission
    handleContactSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        this.showAlert('Thank you for your message! We\'ll get back to you soon.', 'success');
        e.target.reset();
    }

    // Handle review submission
    handleReviewSubmit() {
        const name = document.getElementById('reviewName').value;
        const text = document.getElementById('reviewText').value;
        const rating = document.querySelectorAll('.rating i.active').length;

        if (!name || !text || rating === 0) {
            this.showAlert('Please fill in all fields and select a rating.', 'danger');
            return;
        }

        const newReview = {
            id: this.reviews.length + 1,
            name: name,
            rating: rating,
            text: text,
            date: new Date().toISOString().split('T')[0]
        };

        this.reviews.unshift(newReview);
        
        // Save updated reviews to localStorage
        localStorage.setItem('burguruReviews', JSON.stringify(this.reviews));
        
        this.renderReviews();
        
        // Close modal and show success message
        const modal = bootstrap.Modal.getInstance(document.getElementById('reviewModal'));
        modal.hide();
        this.showAlert('Thank you for your review!', 'success');
        
        // Reset form
        document.getElementById('reviewForm').reset();
        document.querySelectorAll('.rating i').forEach(star => star.classList.remove('active'));
    }

    // Utility functions
    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            const isActive = i <= rating;
            const starColor = isActive ? '#ffc107' : '#ccc';
            stars += `<i class="fas fa-star ${isActive ? 'active' : ''}" style="color: ${starColor} !important;"></i>`;
        }
        return stars;
    }

    showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }
}

// Cart Management Class
class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('burguruCart')) || [];
        this.init();
    }

    init() {
        this.updateCartDisplay();
        this.setupCartEventListeners();
    }

    addToCart(item, quantity = 1) {
        const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({ ...item, quantity });
        }
        
        this.saveCart();
        this.updateCartDisplay();
        this.showAlert('Item added to cart!', 'success');
    }

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartDisplay();
    }

    updateQuantity(itemId, quantity) {
        const item = this.cart.find(item => item.id === itemId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(itemId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartDisplay();
            }
        }
    }

    getTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartDisplay();
    }

    saveCart() {
        localStorage.setItem('burguruCart', JSON.stringify(this.cart));
    }

    updateCartDisplay() {
        const cartTotal = document.getElementById('cartTotal');
        const cartCount = document.getElementById('cartCount');
        
        if (cartTotal) {
            cartTotal.textContent = `$${this.getTotal().toFixed(2)}`;
        }
        
        if (cartCount) {
            cartCount.textContent = this.getCount();
        }
    }

    setupCartEventListeners() {
        // Submit review button
        const submitReviewBtn = document.getElementById('submitReview');
        if (submitReviewBtn) {
            submitReviewBtn.addEventListener('click', () => {
                app.handleReviewSubmit();
            });
        }
    }

    showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new BurguruApp();
    window.cartManager = new CartManager();
});