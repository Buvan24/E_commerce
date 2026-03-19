// ===== GLOBAL STATE =====
let cart = [];
let currentUser = null;

// ===== AUTHENTICATION FUNCTIONS =====
function googleLogin() {
    alert('Google Sign-In will be integrated with OAuth');
    // In production, integrate with Google OAuth
}

function sendOTP(event) {
    event.preventDefault();
    const phone = document.getElementById('phone').value;
    
    if (phone.length !== 10) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    
    // Store phone number
    sessionStorage.setItem('phoneNumber', phone);
    
    // Simulate OTP send
    alert(`OTP sent to ${phone}`);
    window.location.href = 'otp-verify.html';
}

function verifyOTP(event) {
    event.preventDefault();
    
    const otpBoxes = document.querySelectorAll('.otp-box');
    let otp = '';
    otpBoxes.forEach(box => {
        otp += box.value;
    });
    
    if (otp.length !== 6) {
        alert('Please enter complete OTP');
        return;
    }
    
    // Simulate OTP verification
    if (otp === '123456') {
        alert('Login Successful!');
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        alert('Invalid OTP. Try 123456 for demo');
    }
}

function moveToNext(current, nextIndex) {
    if (current.value.length === 1) {
        const otpBoxes = document.querySelectorAll('.otp-box');
        if (nextIndex < otpBoxes.length) {
            otpBoxes[nextIndex].focus();
        }
    }
}

function startTimer() {
    let timeLeft = 60;
    const timerElement = document.getElementById('timer');
    const resendLink = document.getElementById('resendLink');
    
    const countdown = setInterval(() => {
        timeLeft--;
        if (timerElement) {
            timerElement.textContent = timeLeft;
        }
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            if (resendLink) {
                resendLink.style.display = 'block';
            }
            document.querySelector('.resend-timer').style.display = 'none';
        }
    }, 1000);
}

function resendOTP() {
    alert('OTP has been resent');
    document.querySelector('.resend-timer').style.display = 'block';
    document.getElementById('resendLink').style.display = 'none';
    startTimer();
}

function emailLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate login
    if (email && password) {
        alert('Login Successful!');
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        alert('Please fill all fields');
    }
}

function registerBusiness(event) {
    event.preventDefault();
    
    const shopName = document.getElementById('shopName').value;
    const ownerName = document.getElementById('ownerName').value;
    const phone = document.getElementById('phoneSignup').value;
    const email = document.getElementById('emailSignup').value;
    const address = document.getElementById('shopAddress').value;
    const gst = document.getElementById('gstNumber').value;
    const password = document.getElementById('passwordSignup').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validation
    if (!shopName || !ownerName || !phone || !email || !address || !gst || !password) {
        alert('Please fill all required fields');
        return;
    }
    
    if (phone.length !== 10) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    
    // Simulate registration
    alert('Registration Successful! Please login.');
    window.location.href = 'login.html';
}

// ===== PRODUCT FUNCTIONS =====
function decreaseQty(button) {
    const input = button.parentElement.querySelector('.qty-input');
    let value = parseInt(input.value);
    if (value > 1) {
        input.value = value - 1;
    }
}

function increaseQty(button) {
    const input = button.parentElement.querySelector('.qty-input');
    let value = parseInt(input.value);
    input.value = value + 1;
}

function addToCart(button) {
    const productCard = button.closest('.product-card') || button.closest('.product-card-detailed');
    const productName = productCard.querySelector('.product-name').textContent;
    const productPrice = productCard.querySelector('.product-price').textContent;
    const quantity = parseInt(productCard.querySelector('.qty-input').value);
    
    // Add to cart
    alert(`${productName} (${quantity}x) added to cart!`);
    
    // Update cart badge
    updateCartBadge();
    
    // Change button text
    button.textContent = 'Added ✓';
    button.style.background = '#257031';
    
    setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.style.background = '#2D8B3C';
    }, 2000);
}

function updateCartBadge() {
    const badges = document.querySelectorAll('#cartBadge');
    let currentCount = parseInt(badges[0]?.textContent || 0);
    badges.forEach(badge => {
        badge.textContent = currentCount + 1;
    });
}

function goToCategory(categoryId) {
    // In production, you would pass the category ID as a URL parameter
    // For now, just navigate to the category page
    window.location.href = 'category.html?category=' + categoryId;
}

// ===== CART FUNCTIONS =====
function updateCartQty(button, change) {
    const input = button.parentElement.querySelector('.qty-input');
    let value = parseInt(input.value);
    value += change;
    
    if (value >= 1) {
        input.value = value;
        updateCartTotals();
    }
}

function removeFromCart(button) {
    if (confirm('Remove this item from cart?')) {
        const cartItem = button.closest('.cart-item');
        cartItem.remove();
        updateCartTotals();
        updateCartBadge();
    }
}

function clearCart() {
    if (confirm('Are you sure you want to clear the cart?')) {
        document.getElementById('cartItems').innerHTML = '<p style="text-align:center; padding:40px; color:#666;">Your cart is empty</p>';
        updateCartTotals();
        
        const badges = document.querySelectorAll('#cartBadge');
        badges.forEach(badge => {
            badge.textContent = '0';
        });
    }
}

function updateCartTotals() {
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;
    
    cartItems.forEach(item => {
        const priceText = item.querySelector('.item-price').textContent;
        const price = parseInt(priceText.replace(/[₹,]/g, ''));
        const qty = parseInt(item.querySelector('.qty-input').value);
        const itemTotal = price * qty;
        
        // Update item subtotal
        item.querySelector('.item-subtotal').textContent = `₹${itemTotal.toLocaleString('en-IN')}`;
        subtotal += itemTotal;
    });
    
    // Calculate tax (18% GST)
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;
    
    // Update summary
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) subtotalElement.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (taxElement) taxElement.textContent = `₹${tax.toLocaleString('en-IN')}`;
    if (totalElement) totalElement.textContent = `₹${total.toLocaleString('en-IN')}`;
}

// ===== CHECKOUT FUNCTIONS =====
function toggleSection(header) {
    header.classList.toggle('collapsed');
    const content = header.nextElementSibling;
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

function placeOrder() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    
    if (!paymentMethod) {
        alert('Please select a payment method');
        return;
    }
    
    // Simulate order placement
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    alert(`Order Placed Successfully!\nOrder ID: #${orderNumber}\nPayment Method: ${paymentMethod.value.toUpperCase()}`);
    
    // Redirect to home
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 1000);
}

// ===== SEARCH FUNCTION =====
function setupSearch() {
    const searchInput = document.getElementById('searchInput') || document.getElementById('categorySearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const products = document.querySelectorAll('.product-card, .product-card-detailed');
            
            products.forEach(product => {
                const productName = product.querySelector('.product-name').textContent.toLowerCase();
                const productDesc = product.querySelector('.product-desc')?.textContent.toLowerCase() || '';
                
                if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
}

// ===== PAGE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Check if on OTP page and start timer
    if (window.location.pathname.includes('otp-verify')) {
        startTimer();
        
        // Display phone number if available
        const phoneNumber = sessionStorage.getItem('phoneNumber');
        if (phoneNumber) {
            document.getElementById('phoneNumber').textContent = `+91 ${phoneNumber}`;
        }
    }
    
    // Setup search functionality
    setupSearch();
    
    // Update cart totals if on cart page
    if (window.location.pathname.includes('cart.html')) {
        updateCartTotals();
    }
    
    // Check authentication for protected pages
    const protectedPages = ['home.html', 'cart.html', 'checkout.html', 'category.html', 'orders.html', 'profile.html', 'wishlist.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            // Redirect to login
            // Uncomment in production: window.location.href = 'login.html';
        }
    }
});

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
}

function validateGST(gst) {
    // Basic GST validation (15 characters)
    return /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(gst);
}

// ===== SAMPLE DATA =====
const sampleProducts = [
    {
        id: 1,
        name: "Tata Salt",
        description: "Premium quality iodized salt",
        bundle: "1 Bag = 30 packets (1kg each)",
        price: 850,
        category: "salt-sugar"
    },
    {
        id: 2,
        name: "Fortune Sunflower Oil",
        description: "Refined sunflower cooking oil",
        bundle: "1 Carton = 15 bottles (1L each)",
        price: 2100,
        category: "cooking-oil"
    },
    {
        id: 3,
        name: "Parle-G Biscuits",
        description: "Classic glucose biscuits",
        bundle: "1 Pack = 48 packets (100g each)",
        price: 720,
        category: "biscuits"
    },
    {
        id: 4,
        name: "MDH Garam Masala",
        description: "Authentic blend of spices",
        bundle: "1 Box = 50 packets (100g each)",
        price: 1500,
        category: "spices"
    },
    {
        id: 5,
        name: "Lifebuoy Soap",
        description: "Germ protection bathing soap",
        bundle: "1 Carton = 72 pieces (125g each)",
        price: 1440,
        category: "personal-care"
    }
];

// Make functions available globally
window.googleLogin = googleLogin;
window.sendOTP = sendOTP;
window.verifyOTP = verifyOTP;
window.moveToNext = moveToNext;
window.resendOTP = resendOTP;
window.emailLogin = emailLogin;
window.registerBusiness = registerBusiness;
window.decreaseQty = decreaseQty;
window.increaseQty = increaseQty;
window.addToCart = addToCart;
window.goToCategory = goToCategory;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.toggleSection = toggleSection;
window.placeOrder = placeOrder;
