// Menu Management Class
class MenuManager {
    constructor() {
        this.menuItems = [];
        this.currentCategory = 'burgers';
        this.cart = JSON.parse(localStorage.getItem('burguruCart')) || [];
        this.init();
    }

    init() {
        this.loadMenuItems();
        this.setupEventListeners();
        this.updateCartDisplay();
    }

    // Load menu items
    async loadMenuItems() {
        try {
            // Menu items data
            const menuData = {
                burgers: [
                    {
                        id: 'b1',
                        name: 'THE AMERICAN',
                        description: '170 GR black angus patty, cheddar, shredded lettuce, onions, dill pickles, tomatoes, special sauce.',
                        price: 8.00,
                        image: 'images/burger_blog.jpg',
                        alt: 'The American Burger - Classic juicy beef burger with cheddar and fresh veggies.'
                    },
                    {
                        id: 'b2',
                        name: 'B-FOR BACON',
                        description: '170 GR black angus patty, cheddar, bacon, shredded lettuce, dill pickles, onions, tomatoes, special sauce.',
                        price: 9.00,
                        image: 'images/maplebaconburger.jpg',
                        alt: 'B-For Bacon Burger - Smoky bacon and cheddar on a juicy beef patty.'
                    },
                    {
                        id: 'b3',
                        name: 'THE LEBANESE',
                        description: '130 GR patty with authentic Lebanese flavors',
                        price: 7.00,
                        image: 'images/img_7316.jpeg',
                        alt: 'The Lebanese Burger - Mediterranean-inspired flavors with fresh ingredients.'
                    },
                    {
                        id: 'b4',
                        name: 'THE SWISS',
                        description: '170 GR black angus patty, shredded lettuce, mayo, crispy onion bits, swiss cheese, mushroom sauce',
                        price: 9.00,
                        image: 'images/Mushroom-Swiss-Burger-Featured.jpg',
                        alt: 'The Swiss Burger - Melted Swiss cheese and mushrooms on a premium patty.'
                    },
                    {
                        id: 'b5',
                        name: 'HAIL CAESAR',
                        description: 'Caesar-inspired burger with premium ingredients',
                        price: 7.00,
                        image: 'images/Caesar_Burger3810.png',
                        alt: 'Hail Caesar Burger - Caesar salad meets burger perfection.'
                    },
                    {
                        id: 'b6',
                        name: 'OG CHICKEN',
                        description: 'Grilled/Fried chicken breast, shredded lettuce, tomatoes pickles, your choice of sauce (special sauce, garlic mayo, honey mustard).',
                        price: 7.00,
                        image: 'images/Buffalo-Chicken-Burgers-4-scaled.jpg',
                        alt: 'OG Chicken Burger - Crispy or grilled chicken with fresh toppings.'
                    },
                    {
                        id: 'b7',
                        name: 'THE TEXAN',
                        description: '170 GR black angus patty, lettuce, pickles, tomatoes, onions, bacon, cheddar, onion rings.',
                        price: 10.00,
                        image: 'images/texas_burger-copy-1.jpg',
                        alt: 'The Texan Burger - Bold flavors with bacon, cheddar, and onion rings.'
                    },
                    {
                        id: 'b8',
                        name: 'THE ARMENIAN',
                        description: 'Soujouk patty, lettuce, mayo, tomatoes, pickles.',
                        price: 7.00,
                        image: 'images/Yayla-Sucuk-Burger-1-660x440.png',
                        alt: 'The Armenian Burger - Spicy soujouk and fresh veggies.'
                    },
                    {
                        id: 'b9',
                        name: 'TRUFFLE BURGER',
                        description: 'Premium truffle-infused burger with gourmet toppings',
                        price: 10.00,
                        image: 'images/SP-Truffle-Burger.jpg',
                        badge: 'NEW'
                    },
                    {
                        id: 'b10',
                        name: 'CHEESY BEEF',
                        description: 'Extra cheesy beef burger with multiple cheese varieties',
                        price: 10.00,
                        image: 'images/Cheesy Burger.jpeg'
                    }
                ],
                wings: [
                    {
                        id: 'w1',
                        name: 'CHICKEN WINGS',
                        description: '6 PCS - Dipped in your choice of sauce',
                        price: 4.00,
                        image: 'images/KFC-Honey-BBQ-Wings-Pin-2.jpg',
                        alt: 'Chicken Wings - 6 pieces, crispy and saucy.'
                    },
                    {
                        id: 'w2',
                        name: 'CHEESY CHICKEN TENDERS',
                        description: '6 PCS - Cheesy chicken tenders',
                        price: 4.00,
                        image: 'images/nacho-cheese-crumbed-chicken-tenders-recipe-523706-1.jpg',
                        alt: 'Cheesy Chicken Tenders - 6 pieces, golden and cheesy.'
                    }
                ],
                salads: [
                    {
                        id: 's1',
                        name: 'CAESAR SALAD',
                        description: 'Fresh romaine lettuce, parmesan cheese, croutons, caesar dressing',
                        price: 7.00,
                        image: 'images/Grilled-Chicken-Caesar-Salad-14.jpg'
                    },
                    {
                        id: 's2',
                        name: 'QUINOA SALAD',
                        description: 'Quinoa-based salad with fresh vegetables and light dressing',
                        price: 7.00,
                        image: 'images/Avocado-Quinoa-Salad-4.jpg'
                    },
                    {
                        id: 's3',
                        name: 'PASTA SALAD',
                        description: 'Fresh pasta salad with vegetables and Italian dressing',
                        price: 7.00,
                        image: 'images/greek-chicken-pasta-salad-3.jpg'
                    }
                ],
                sides: [
                    {
                        id: 'side1',
                        name: 'FRIES BOX',
                        description: '150G - Crispy golden fries',
                        price: 3.00,
                        image: 'images/fries.jpg'
                    },
                    {
                        id: 'side2',
                        name: 'MOZZARELLA STICKS',
                        description: 'Breaded mozzarella sticks with marinara sauce',
                        price: 7.00,
                        image: 'images/mozarella sticks.jpg'
                    },
                    {
                        id: 'side3',
                        name: 'WEDGES',
                        description: 'Crispy potato wedges with seasoning',
                        price: 3.00,
                        image: 'images/wedges.jpg'
                    }
                ],
                drinks: [
                    {
                        id: 'd1',
                        name: 'SOFT DRINK',
                        description: 'Your choice of soft drinks (Coke, Pepsi, Sprite, Fanta)',
                        price: 2.00,
                        image: 'images/softdrinks.jpg',
                        alt: 'Soft Drinks - Assorted sodas.'
                    },
                    {
                        id: 'd2',
                        name: 'BEER',
                        description: 'Local craft beers and popular brands',
                        price: 3.00,
                        image: 'images/Beer.jpg',
                        alt: 'Beer - Refreshing cold beer.'
                    }
                ],
                desserts: [
                    {
                        id: 'dessert1',
                        name: 'CHEESECAKE',
                        description: 'Creamy, rich cheesecake with a buttery graham cracker crust and a luscious topping. The perfect sweet finish to your meal.',
                        price: 3.00,
                        image: 'images/Cheesecake.jpg',
                        alt: 'Cheesecake - Creamy and rich dessert with graham cracker crust.'
                    }
                ],
                combos: [
                    {
                        id: 'combo1',
                        name: 'BURGER COMBO',
                        description: 'Any burger + Fries + Soft Drink',
                        price: 12.00,
                        image: 'images/combo.jpg',
                        badge: 'COMBO'
                    },
                    {
                        id: 'combo2',
                        name: 'WINGS COMBO',
                        description: '6 PCS Wings + Fries + Soft Drink',
                        price: 8.00,
                        image: 'images/18-wing-combo-9-wings.jpg',
                        badge: 'COMBO'
                    },
                    {
                        id: 'combo3',
                        name: 'TENDERS COMBO',
                        description: '6 PCS Tenders + Fries + Soft Drink',
                        price: 8.00,
                        image: 'images/full.jpeg',
                        badge: 'COMBO'
                    }
                ],
                addons: [
                    {
                        id: 'addon1',
                        name: '170 GR PATTY',
                        description: 'Additional beef patty',
                        price: 2.00,
                        image: 'images/patty.jpg',
                        badge: 'ADD ON'
                    },
                    {
                        id: 'addon3',
                        name: 'CHICKEN BREAST',
                        description: 'Additional grilled chicken breast',
                        price: 2.00,
                        image: 'images/ground-chicken-burgers-recipe.jpg',
                        badge: 'ADD ON'
                    },
                    {
                        id: 'addon4',
                        name: 'BACON',
                        description: 'Additional crispy bacon strips',
                        price: 1.00,
                        image: 'images/Bacon-rashers-in-a-pan-72c07f4.jpg',
                        badge: 'ADD ON'
                    },
                    {
                        id: 'addon5',
                        name: 'CHEDDAR SLICE',
                        description: 'Additional cheddar cheese slice',
                        price: 1.00,
                        image: 'images/cheddarbaconcheeseburger__FillWzgwMCw4MDBd.jpg',
                        badge: 'ADD ON'
                    },
                    {
                        id: 'addon6',
                        name: 'MOZZARELLA PATTY',
                        description: 'Additional mozzarella cheese patty',
                        price: 1.00,
                        image: 'images/mozarella patty.jpg',
                        badge: 'ADD ON'
                    }
                ]
            };

            this.menuItems = menuData;
            this.renderCurrentCategory();
        } catch (error) {
            console.error('Error loading menu items:', error);
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Category tab switching
        const categoryTabs = document.querySelectorAll('.category-tabs .btn');
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchCategory(e.target.dataset.category);
            });
        });

        // Cart modal events
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                this.openCheckoutModal();
            });
        }

        const placeOrderBtn = document.getElementById('placeOrderBtn');
        if (placeOrderBtn) {
            placeOrderBtn.addEventListener('click', () => {
                this.placeOrder();
            });
        }
    }

    // Switch between menu categories
    switchCategory(category) {
        this.currentCategory = category;
        
        // Update active tab
        document.querySelectorAll('.category-tabs .btn').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        // Hide all sections
        document.querySelectorAll('.menu-section').forEach(section => {
            section.classList.add('d-none');
        });
        
        // Show current section
        document.getElementById(category).classList.remove('d-none');
        
        this.renderCurrentCategory();
    }

    // Render current category items
    renderCurrentCategory() {
        const container = document.getElementById(`${this.currentCategory}Container`);
        if (!container || !this.menuItems[this.currentCategory]) return;

        container.innerHTML = this.menuItems[this.currentCategory].map(item => `
            <div class="col-lg-6 col-md-6 mb-4">
                <div class="menu-item">
                    ${item.badge ? `<div class="menu-badge ${item.badge.toLowerCase().replace(' ', '-')}">${item.badge}</div>` : ''}
                    <img src="${item.image}" alt="${item.alt}" class="img-fluid" onerror="this.onerror=null;this.src='images/burger_blog.jpg';">
                    <div class="menu-item-content">
                        <h5 class="menu-item-title">${item.name}</h5>
                        <p class="menu-item-description">${item.description}</p>
                        <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="menuManager.updateQuantity('${item.id}', -1)">-</button>
                            <span class="quantity-display" id="qty-${item.id}">0</span>
                            <button class="quantity-btn" onclick="menuManager.updateQuantity('${item.id}', 1)">+</button>
                        </div>
                        <button class="btn btn-primary w-100" onclick="menuManager.addToCart('${item.id}')">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        this.updateQuantityDisplays();
    }

    // Update quantity displays
    updateQuantityDisplays() {
        this.cart.forEach(item => {
            const display = document.getElementById(`qty-${item.id}`);
            if (display) {
                display.textContent = item.quantity;
            }
        });
    }

    // Add item to cart
    addToCart(itemId) {
        const item = this.findItemById(itemId);
        if (!item) return;

        const existingItem = this.cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...item, quantity: 1 });
        }
        
        this.saveCart();
        this.updateCartDisplay();
        this.updateQuantityDisplays();
        this.showAlert('Item added to cart!', 'success');
    }

    // Update item quantity
    updateQuantity(itemId, change) {
        const existingItem = this.cart.find(item => item.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += change;
            if (existingItem.quantity <= 0) {
                this.cart = this.cart.filter(item => item.id !== itemId);
            }
        } else if (change > 0) {
            const item = this.findItemById(itemId);
            if (item) {
                this.cart.push({ ...item, quantity: 1 });
            }
        }
        
        this.saveCart();
        this.updateCartDisplay();
        this.updateQuantityDisplays();
        // Re-render cart modal items if modal is open
        const cartModal = document.getElementById('cartModal');
        if (cartModal && cartModal.classList.contains('show')) {
            this.renderCartItems();
        }
    }

    // Find item by ID across all categories
    findItemById(itemId) {
        for (const category in this.menuItems) {
            const item = this.menuItems[category].find(item => item.id === itemId);
            if (item) return item;
        }
        return null;
    }

    // Update cart display
    updateCartDisplay() {
        const cartTotal = document.getElementById('cartTotal');
        const cartCount = document.getElementById('cartCount');
        const cartModalTotal = document.getElementById('cartModalTotal');
        
        const total = this.getTotal();
        const count = this.getCount();
        
        if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
        if (cartCount) cartCount.textContent = count;
        if (cartModalTotal) cartModalTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Get cart total
    getTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Get cart count
    getCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('burguruCart', JSON.stringify(this.cart));
    }

    // Open checkout modal
    openCheckoutModal() {
        this.renderCartItems();
        const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
        checkoutModal.show();
    }

    // Render cart items in modal
    renderCartItems() {
        const container = document.getElementById('cartItems');
        if (!container) return;

        if (this.cart.length === 0) {
            container.innerHTML = '<p class="text-center text-muted">Your cart is empty</p>';
            return;
        }

        container.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="btn btn-sm btn-outline-secondary" onclick="menuManager.updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="menuManager.updateQuantity('${item.id}', 1)">+</button>
                </div>
                <div class="cart-item-total">
                    $${(item.price * item.quantity).toFixed(2)}
                </div>
            </div>
        `).join('');
    }

    // Place order
    placeOrder() {
        const form = document.getElementById('checkoutForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Simulate order processing
        this.showAlert('Order placed successfully! You will receive a confirmation email shortly.', 'success');
        
        // Clear cart
        this.cart = [];
        this.saveCart();
        this.updateCartDisplay();
        this.updateQuantityDisplays();
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
        modal.hide();
        
        // Reset form
        form.reset();
    }

    // Show alert message
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
        }, 3000);
    }
}

// Initialize menu manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.menuManager = new MenuManager();
}); 