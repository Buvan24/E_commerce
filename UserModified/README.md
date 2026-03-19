# WholesaleTN - B2B Wholesale E-Commerce Platform

A complete HTML/CSS/JavaScript-based B2B wholesale e-commerce platform for Tamil Nadu retail shops (maligai kadai).

## 📁 Project Structure

```
wholesale-tn/
├── login.html              - Main login page
├── phone-login.html        - Phone number login
├── otp-verify.html         - OTP verification
├── email-login.html        - Email/password login
├── signup.html             - Business registration
├── home.html               - Home page with products
├── category.html           - Category page with filtered products
├── cart.html               - Shopping cart
├── checkout.html           - Checkout with payment options
├── orders.html             - Order history
├── profile.html            - User profile
├── wishlist.html           - Wishlist/favorites
├── styles.css              - Complete stylesheet
├── script.js               - All JavaScript functionality
└── README.md               - This file
```

## 🚀 Getting Started

### Option 1: Quick Start (No Server Required)
1. Extract all files to a folder
2. Open `login.html` in your web browser
3. Start browsing!

### Option 2: Using Live Server (Recommended)
1. Install VS Code and "Live Server" extension
2. Right-click on `login.html`
3. Select "Open with Live Server"

### Option 3: Using Python HTTP Server
```bash
python -m http.server 8000
# Then open: http://localhost:8000/login.html
```

## 🎯 Features Implemented

### Authentication
✅ Phone number (OTP) login
✅ Email/Password login
✅ Google Sign-in button
✅ Business registration with all required fields
✅ OTP verification with timer and resend

### Home Page
✅ Search bar
✅ Horizontal scrolling categories
✅ Recently bought products
✅ Recommended products
✅ Cart badge showing item count
✅ Wishlist icon
✅ Bottom navigation

### Category Page
✅ Category-specific search
✅ Detailed product listings
✅ Product name, description, bundle info, price
✅ Quantity selector
✅ Add to cart functionality

### Shopping Cart
✅ Cart items with all details
✅ Quantity adjustment
✅ Remove items
✅ Clear cart option
✅ Price breakdown (Subtotal, Delivery, Tax, Total)
✅ Proceed to checkout

### Checkout
✅ Delivery address display
✅ Collapsible order summary
✅ Multiple payment options:
   - UPI (PhonePe, GPay, Paytm)
   - Credit/Debit Card
   - Net Banking
   - Cash on Delivery
   - Credit Terms (Net 30/60)
✅ Special instructions field
✅ Complete price breakdown
✅ Place order button

### Orders
✅ Order history with status
✅ Filter tabs (All, Pending, Delivered, Cancelled)
✅ Order details (ID, date, items, total)
✅ View details link

### Profile
✅ Business information display
✅ Menu options (Edit Profile, Change Password, etc.)
✅ Logout functionality

### Wishlist
✅ Saved products
✅ Add to cart from wishlist
✅ Remove from wishlist
✅ Empty state

## 🎨 Design Features

### Color Scheme
- Primary: White (#FFFFFF)
- Secondary: Black (#000000)
- Accent: Green (#2D8B3C)
- Background: Light Gray (#F5F5F5)

### Typography
- Clean sans-serif fonts
- Proper hierarchy
- Mobile-optimized sizes

### Layout
- Mobile-first design (320px - 480px)
- Clean spacing
- Adequate touch targets (44px minimum)
- Bottom navigation bar
- Sticky headers

## 🔧 Demo Credentials

For testing purposes:

**OTP Login:**
- Any 10-digit phone number
- OTP: 123456

**Email Login:**
- Any email/password combination works (demo mode)

## 📝 Product Categories Included

1. Rice & Grains
2. Pulses & Lentils
3. Cooking Oil
4. Spices
5. Tea & Coffee
6. Snacks & Biscuits
7. Breakfast Foods
8. Dairy Products
9. Personal Care
10. Household Cleaning
... and 15 more categories

## 🛠️ Customization

### Change Brand Name
Replace "WholesaleTN" / "WholesaleHub" in:
- HTML files (logo sections)
- Page titles

### Change Colors
Edit `styles.css`:
```css
/* Primary Green */
#2D8B3C → Your color

/* Success/Accent */
Update all instances
```

### Add More Products
Edit `script.js`:
```javascript
const sampleProducts = [
    // Add your products here
];
```

### Modify Payment Options
Edit `checkout.html`:
- Add/remove payment method options
- Change payment icons

## 📱 Mobile Responsiveness

- Optimized for screens 320px - 480px
- Works on all modern mobile browsers
- Touch-friendly buttons and inputs
- Smooth scrolling
- Fixed bottom navigation

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔐 Security Notes

**This is a frontend demo. For production:**

1. Implement real backend authentication
2. Add API integration for:
   - OTP generation/verification
   - Database operations
   - Payment gateway
   - Order management
3. Add input validation
4. Implement proper session management
5. Add HTTPS
6. Implement CSRF protection

## 📦 Future Enhancements

Suggested features for production:

1. **Backend Integration**
   - Node.js/Express or Django backend
   - MySQL/MongoDB database
   - RESTful APIs

2. **Real Payment Gateway**
   - Razorpay/PayU integration
   - UPI payment integration

3. **SMS Integration**
   - Real OTP via Twilio/MSG91

4. **Advanced Features**
   - Invoice generation
   - Analytics dashboard
   - Inventory management
   - Multi-language support (Tamil)
   - Push notifications
   - Bulk ordering CSV upload

5. **Admin Panel**
   - Product management
   - Order management
   - Customer management
   - Reports and analytics

## 💡 Tips for Development

1. **Testing**: Always test on actual mobile devices
2. **Images**: Add product images by creating an `/images` folder
3. **Database**: Plan your database schema before backend integration
4. **API**: Document all API endpoints needed
5. **Icons**: Consider using icon libraries like Font Awesome

## 📞 Support

For customization or backend development help, you can:
1. Review the code comments
2. Check browser console for errors
3. Test features one by one

## 📄 License

This is a demo project. Feel free to use and modify as needed for your business.

## 🙏 Credits

- Icons: Emoji icons (no external dependencies)
- Design: Minimal and functional approach
- Inspired by modern e-commerce platforms

---

**Note**: This is a frontend-only implementation. Backend integration is required for production use.

**Version**: 1.0
**Last Updated**: February 2026
