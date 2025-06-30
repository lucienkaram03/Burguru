// Reservations Management Class
class ReservationsManager {
    constructor() {
        this.reservations = JSON.parse(localStorage.getItem('burguruReservations')) || [];
        this.upcomingGames = [];
        this.init();
    }

    init() {
        this.loadUpcomingGames();
        this.loadMyReservations();
        this.setupEventListeners();
        this.populateGameSelect();
    }

    // Load upcoming games
    async loadUpcomingGames() {
        try {
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

            // Mock games data with dynamic dates (in real app, this would come from an API)
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

            this.upcomingGames = games;
            this.renderUpcomingGames();
        } catch (error) {
            console.error('Error loading upcoming games:', error);
        }
    }

    // Render upcoming games
    renderUpcomingGames() {
        const container = document.getElementById('upcomingGames');
        if (!container) return;

        container.innerHTML = this.upcomingGames.map(game => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="game-card">
                    <img src="${game.image}" alt="${game.teams}" class="img-fluid">
                    <div class="game-card-content">
                        <div class="game-date">${this.formatDate(game.date)}</div>
                        <h5 class="game-teams">${game.teams}</h5>
                        <p class="game-time">${game.time} - ${game.sport}</p>
                        <p class="text-muted small">${game.description}</p>
                        <button class="btn btn-success" onclick="reservationsManager.selectGameForReservation(${game.id})">
                            Book for This Game
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Load user's reservations
    loadMyReservations() {
        const container = document.getElementById('myReservations');
        if (!container) return;

        if (this.reservations.length === 0) {
            container.innerHTML = `
                <div class="text-center text-muted">
                    <i class="fas fa-calendar-times fa-3x mb-3"></i>
                    <p>No reservations found. Book your first table!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.reservations.map(reservation => `
            <div class="reservation-item border rounded p-3 mb-3">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h6 class="mb-1">Reservation for ${reservation.name}</h6>
                        <p class="mb-1 text-muted">
                            <i class="fas fa-calendar me-2"></i>
                            ${this.formatDate(reservation.date)} at ${reservation.time}
                        </p>
                        <p class="mb-1 text-muted">
                            <i class="fas fa-users me-2"></i>
                            ${reservation.guests} ${reservation.guests === 1 ? 'person' : 'people'}
                        </p>
                        ${reservation.game ? `
                            <p class="mb-0 text-muted">
                                <i class="fas fa-tv me-2"></i>
                                Watching: ${reservation.game}
                            </p>
                        ` : ''}
                        ${reservation.preOrder && reservation.preOrder.length > 0 ? `
                            <div class="mt-2">
                                <strong>Pre-Ordered Food:</strong>
                                <ul class="mb-0">
                                    ${reservation.preOrder.map(item => `<li>${item.name} x${item.quantity}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                    <div class="col-md-4 text-md-end">
                        <span class="badge bg-success">Confirmed</span>
                        <button class="btn btn-sm btn-outline-danger ms-2" onclick="reservationsManager.cancelReservation(${reservation.id})">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Setup event listeners
    setupEventListeners() {
        // Reservation form submission
        const reservationForm = document.getElementById('reservationForm');
        if (reservationForm) {
            reservationForm.addEventListener('submit', (e) => this.handleReservationSubmit(e));
        }

        // Pre-order checkbox
        const preOrderCheckbox = document.getElementById('preOrder');
        if (preOrderCheckbox) {
            preOrderCheckbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    // Save form data and checkbox state before redirecting
                    const form = document.getElementById('reservationForm');
                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData);
                    localStorage.setItem('burguruReservationDraft', JSON.stringify(data));
                    localStorage.setItem('burguruPreOrderChecked', 'true');
                    window.location.href = 'menu.html?preorder=1';
                } else {
                    localStorage.removeItem('burguruPreOrderChecked');
                }
            });
        }

        // Restore form data and checkbox state if present
        window.addEventListener('DOMContentLoaded', () => {
            const draft = localStorage.getItem('burguruReservationDraft');
            if (draft) {
                const data = JSON.parse(draft);
                for (const key in data) {
                    const field = document.querySelector(`[name="${key}"]`);
                    if (field) field.value = data[key];
                }
            }
            // Restore checkbox state
            const preOrderChecked = localStorage.getItem('burguruPreOrderChecked');
            const preOrderCheckbox = document.getElementById('preOrder');
            if (preOrderCheckbox) {
                if (preOrderChecked === 'true') {
                    preOrderCheckbox.checked = true;
                } else if (preOrderChecked === null) {
                    // If user has a cart and a draft, auto-check the box
                    const cart = JSON.parse(localStorage.getItem('burguruCart') || '[]');
                    if (cart.length > 0 && draft) {
                        preOrderCheckbox.checked = true;
                    }
                }
            }
        });
    }

    // Populate game select dropdown
    populateGameSelect() {
        const gameSelect = document.getElementById('gameSelect');
        if (!gameSelect) return;

        this.upcomingGames.forEach(game => {
            const option = document.createElement('option');
            option.value = game.id;
            option.textContent = `${game.teams} - ${this.formatDate(game.date)} ${game.time}`;
            gameSelect.appendChild(option);
        });
    }

    // Select game for reservation
    selectGameForReservation(gameId) {
        const game = this.upcomingGames.find(g => g.id === gameId);
        if (!game) return;

        const gameSelect = document.getElementById('gameSelect');
        if (gameSelect) {
            gameSelect.value = gameId;
        }

        // Scroll to reservation form
        document.getElementById('reservationForm').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Handle reservation form submission
    handleReservationSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        if (!this.validateReservationData(data)) {
            return;
        }
        // Attach preOrder if checked
        let preOrder = null;
        const preOrderCheckbox = document.getElementById('preOrder');
        if (preOrderCheckbox && preOrderCheckbox.checked && window.menuManager) {
            preOrder = JSON.parse(localStorage.getItem('burguruCart')) || [];
        }
        const reservation = {
            id: Date.now(),
            name: data.name || formData.get('name'),
            phone: data.phone || formData.get('phone'),
            email: data.email || formData.get('email'),
            guests: parseInt(data.guests || formData.get('guests')),
            date: data.date || formData.get('date'),
            time: data.time || formData.get('time'),
            game: this.getSelectedGame(data.game || formData.get('game')),
            specialRequests: data.specialRequests || formData.get('specialRequests') || '',
            createdAt: new Date().toISOString(),
            preOrder: preOrder
        };
        this.reservations.push(reservation);
        this.saveReservations();
        this.loadMyReservations();
        this.showReservationConfirmation(reservation);
        // Clear cart if preOrder was made
        if (preOrder) {
            if (window.menuManager) {
                window.menuManager.cart = [];
                window.menuManager.saveCart();
                window.menuManager.updateCartDisplay();
                window.menuManager.updateQuantityDisplays && window.menuManager.updateQuantityDisplays();
            } else {
                localStorage.setItem('burguruCart', JSON.stringify([]));
            }
        }
        // Clear saved draft and preOrder state after successful reservation
        localStorage.removeItem('burguruReservationDraft');
        localStorage.removeItem('burguruPreOrderChecked');
        e.target.reset();
    }

    // Validate reservation data
    validateReservationData(data) {
        const requiredFields = ['name', 'phone', 'email', 'guests', 'date', 'time'];
        
        for (const field of requiredFields) {
            if (!data[field]) {
                this.showAlert(`Please fill in the ${field} field.`, 'danger');
                return false;
            }
        }

        // Validate date (must be future date)
        const selectedDate = new Date(data.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            this.showAlert('Please select a future date for your reservation.', 'danger');
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showAlert('Please enter a valid email address.', 'danger');
            return false;
        }

        return true;
    }

    // Get selected game details
    getSelectedGame(gameId) {
        if (!gameId) return null;
        const game = this.upcomingGames.find(g => String(g.id) === String(gameId));
        return game ? `${game.teams} - ${this.formatDate(game.date)} ${game.time}` : null;
    }

    // Cancel reservation
    cancelReservation(reservationId) {
        if (confirm('Are you sure you want to cancel this reservation?')) {
            this.reservations = this.reservations.filter(r => r.id !== reservationId);
            this.saveReservations();
            this.loadMyReservations();
            this.showAlert('Reservation cancelled successfully.', 'success');
        }
    }

    // Show reservation confirmation
    showReservationConfirmation(reservation) {
        const modal = document.getElementById('reservationModal');
        const detailsContainer = modal.querySelector('.reservation-details');
        detailsContainer.innerHTML = `
            <div class="text-start">
                <p><strong>Name:</strong> ${reservation.name}</p>
                <p><strong>Date:</strong> ${this.formatDate(reservation.date)}</p>
                <p><strong>Time:</strong> ${reservation.time}</p>
                <p><strong>Guests:</strong> ${reservation.guests}</p>
                ${reservation.game ? `<p><strong>Game:</strong> ${reservation.game}</p>` : ''}
                ${reservation.preOrder && reservation.preOrder.length > 0 ? `
                    <div class="mt-2">
                        <strong>Pre-Ordered Food:</strong>
                        <ul class="mb-0">
                            ${reservation.preOrder.map(item => `<li>${item.name} x${item.quantity}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <p><strong>Confirmation #:</strong> ${reservation.id}</p>
            </div>
        `;
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
    }

    // Save reservations to localStorage
    saveReservations() {
        localStorage.setItem('burguruReservations', JSON.stringify(this.reservations));
    }

    // Utility functions
    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
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

// Sports API Integration Class
class SportsAPI {
    constructor() {
        this.apiKey = 'demo'; // In real app, use actual API key
        this.baseUrl = 'https://api.api-ninjas.com/v1/sports';
    }

    async getSportsData(sport) {
        try {
            // Simulate API call with mock data
            // In real implementation, you would use:
            // const response = await fetch(`${this.baseUrl}?name=${sport}`, {
            //     headers: { 'X-Api-Key': this.apiKey }
            // });
            // return await response.json();

            // Mock response
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        name: sport,
                        category: sport === 'basketball' ? 'team' : 'team',
                        number_of_players: sport === 'basketball' ? 5 : 11,
                        origin: sport === 'basketball' ? 'United States' : 'England'
                    });
                }, 1000);
            });
        } catch (error) {
            console.error('Error fetching sports data:', error);
            return null;
        }
    }
}

// Initialize reservations manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.reservationsManager = new ReservationsManager();
    window.sportsAPI = new SportsAPI();

    // Venue Features Interactivity
    document.querySelectorAll('.feature-card').forEach(card => {
        // Highlight card on hover with shadow pulse
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 32px 0 rgba(191,161,74,0.25), 0 0 0 8px rgba(226,88,34,0.08)';
            card.style.transform = 'scale(1.06)';
            card.style.transition = 'box-shadow 0.3s, transform 0.3s';
            const icon = card.querySelector('i');
            if (icon) {
                icon.style.color = '#e25822';
                icon.style.transform = 'rotate(-8deg) scale(1.2)';
                icon.style.transition = 'all 0.3s cubic-bezier(.68,-0.55,.27,1.55)';
            }
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
            card.style.transform = '';
            const icon = card.querySelector('i');
            if (icon) {
                icon.style.color = '';
                icon.style.transform = '';
            }
        });
        // Ripple effect and icon bounce on click
        card.addEventListener('click', (e) => {
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.left = `${e.offsetX}px`;
            ripple.style.top = `${e.offsetY}px`;
            ripple.style.width = ripple.style.height = '0px';
            ripple.style.background = 'rgba(191,161,74,0.25)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '1001';
            ripple.style.transition = 'width 0.5s cubic-bezier(.4,2,.6,1), height 0.5s cubic-bezier(.4,2,.6,1), opacity 0.7s';
            card.style.position = 'relative';
            card.appendChild(ripple);
            setTimeout(() => {
                ripple.style.width = ripple.style.height = '300px';
                ripple.style.opacity = '0';
            }, 10);
            setTimeout(() => ripple.remove(), 600);
            // Icon bounce
            const icon = card.querySelector('i');
            if (icon) {
                icon.animate([
                    { transform: 'scale(1.2) rotate(-8deg)' },
                    { transform: 'scale(1.5) rotate(0deg)' },
                    { transform: 'scale(1.1) rotate(8deg)' },
                    { transform: 'scale(1.2) rotate(-8deg)' }
                ], {
                    duration: 500,
                    easing: 'cubic-bezier(.68,-0.55,.27,1.55)'
                });
            }
            // Tooltip with feature description
            const desc = card.querySelector('p');
            if (desc) {
                const tooltip = document.createElement('div');
                tooltip.textContent = desc.textContent;
                tooltip.style.position = 'absolute';
                tooltip.style.left = '50%';
                tooltip.style.top = '70%';
                tooltip.style.transform = 'translate(-50%, 0)';
                tooltip.style.background = '#fff8e1';
                tooltip.style.color = '#231a15';
                tooltip.style.padding = '12px 18px';
                tooltip.style.borderRadius = '10px';
                tooltip.style.boxShadow = '0 2px 12px rgba(0,0,0,0.12)';
                tooltip.style.zIndex = '1002';
                tooltip.style.fontWeight = 'bold';
                tooltip.style.fontSize = '1rem';
                tooltip.style.pointerEvents = 'none';
                tooltip.style.opacity = '0';
                tooltip.style.transition = 'opacity 0.2s';
                card.appendChild(tooltip);
                setTimeout(() => { tooltip.style.opacity = '1'; }, 10);
                setTimeout(() => { tooltip.style.opacity = '0'; }, 1800);
                setTimeout(() => { tooltip.remove(); }, 2000);
            }
        });
    });
}); 