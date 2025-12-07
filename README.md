# Rental Management System

A comprehensive, modern web application for managing rental properties across multiple buildings with beautiful UI and smooth animations.

## 🏢 Buildings Managed
- **KIDAREN NEW** - Modern residential building
- **KIDAREN OLD** - Established building with reliable infrastructure  
- **MAHE** - Premium location with excellent facilities

## ✨ Features

### 📊 Dashboard
- Real-time statistics for all buildings
- Total tenant count across all properties
- Individual building occupancy rates
- Smooth animations and modern gradient design

### 👥 Customer Management
For each building separately:
- **View Customers** - Complete tenant directory with contact information
- **Add New Customer** - Add tenants with full details (name, room, phone, email, rent, join date)
- **Edit Customer** - Update any customer information
- **Delete Customer** - Remove customers (with confirmation and automatic bill cleanup)
- **Search Functionality** - Filter customers by name, room, phone, or email

### 💰 Billing Management
For each building separately:
- **View Bills** - Complete billing records with payment status
- **Add New Bill** - Create bills for any customer
- **Edit Bill** - Modify bill details (customer, amount, dates, status)
- **Delete Bill** - Remove bills (with confirmation)
- **Mark as Paid** - Quick payment status update
- **Search Functionality** - Filter bills by customer, room, or month
- **Status Tracking** - Visual badges for Paid, Pending, and Overdue bills

### 📈 Statement Generation
Access via "Reports" in navigation:

#### 1. Individual Customer Statement
- Select any customer from any building
- Choose date range (from date to date)
- View complete transaction history
- Summary showing:
  - Total amount billed
  - Amount paid
  - Amount pending
- Print-friendly format

#### 2. Building Statement  
- Select specific building
- Choose date range
- View all transactions for that building
- Complete financial summary
- Print-friendly format

#### 3. All Buildings Statement
- Consolidated report across all 3 buildings
- Choose date range
- View all transactions with building names
- Complete financial overview
- Print-friendly format

## 🎨 Design Features

### Modern UI Elements
- **Dark Theme** - Professional dark mode with vibrant accents
- **Gradient Colors** - Beautiful purple, pink, and blue gradients
- **Glassmorphism** - Frosted glass effect on cards
- **Smooth Animations** - Fade-in, slide-up, and hover effects
- **Responsive Design** - Works on all screen sizes

### Color Palette
- Primary: Purple gradient (#667eea → #764ba2)
- Secondary: Pink gradient (#f093fb → #f5576c)
- Accent: Blue gradient (#4facfe → #00f2fe)
- Success: Green gradient (#43e97b → #38f9d7)

### Typography
- **Headings**: Outfit font family
- **Body**: Inter font family
- Clean, modern, and highly readable

## 🚀 How to Use

### Getting Started
1. Open `index.html` in a modern web browser
2. The dashboard will load with all building statistics

### Managing Customers
1. Click on any building card
2. Click "Customers" button
3. Use "Add Customer" to add new tenants
4. Click "Edit" on any customer to modify details
5. Click "Delete" to remove a customer (with confirmation)
6. Use the search box to filter customers

### Managing Bills
1. Click on any building card
2. Click "Billing" button
3. Use "Add Bill" to create new bills
4. Click "Edit" on any bill to modify details
5. Click "Delete" to remove a bill (with confirmation)
6. Click "Mark Paid" to update payment status
7. Use the search box to filter bills

### Generating Statements
1. Click "Reports" in the navigation bar
2. Select statement type:
   - Individual Customer
   - Single Building
   - All Buildings
3. Choose date range
4. Click "Generate Statement"
5. Review the detailed report
6. Click "Print" to print or save as PDF

## 📁 File Structure

```
rental-management/
├── index.html          # Main HTML structure
├── index.css           # Complete styling and animations
├── app.js              # All functionality and data management
└── README.md           # This file
```

## 🔧 Technical Details

### Data Structure
- All data stored in JavaScript objects
- Separate arrays for customers and bills per building
- Automatic ID generation for new records
- Relationship tracking between customers and bills

### Key Functions

**Customer Management:**
- `showCustomersPage(buildingId)` - Display customer list
- `showAddCustomerModal(buildingId)` - Add new customer
- `editCustomer(customerId)` - Edit customer details
- `deleteCustomer(customerId, buildingId)` - Remove customer
- `filterCustomerTable(buildingId)` - Search customers

**Billing Management:**
- `showBillingPage(buildingId)` - Display billing list
- `showAddBillModal(buildingId)` - Add new bill
- `editBill(billId, buildingId)` - Edit bill details
- `deleteBill(billId, buildingId)` - Remove bill
- `markAsPaid(billId, buildingId)` - Update payment status
- `filterBillingTable(buildingId)` - Search bills

**Statement Generation:**
- `showStatementModal()` - Open statement generator
- `generateIndividualStatement()` - Customer statement
- `generateBuildingStatement()` - Building statement
- `generateAllBuildingsStatement()` - Consolidated statement
- `showStatementView(data)` - Display statement
- `printStatement()` - Print functionality

## 🎯 Features Highlights

### User Experience
- ✅ Smooth page transitions
- ✅ Animated number counters
- ✅ Hover effects on all interactive elements
- ✅ Modal dialogs for forms
- ✅ Confirmation dialogs for destructive actions
- ✅ Real-time search filtering
- ✅ Responsive tables
- ✅ Print-optimized statements

### Data Integrity
- ✅ Automatic bill cleanup when deleting customers
- ✅ Validation on all forms
- ✅ Unique ID generation
- ✅ Date range filtering for statements
- ✅ Status tracking (Paid, Pending, Overdue)

### Visual Feedback
- ✅ Status badges with color coding
- ✅ Loading animations
- ✅ Success/error states
- ✅ Hover states on buttons and cards
- ✅ Active navigation highlighting

## 🌟 Premium Design Elements

1. **Hero Section** - Animated gradient background with statistics
2. **Building Cards** - Glassmorphic cards with hover effects
3. **Data Tables** - Clean, modern tables with alternating row colors
4. **Forms** - Styled inputs with focus states
5. **Buttons** - Gradient buttons with ripple effects
6. **Modals** - Smooth slide-in animations
7. **Navigation** - Fixed navbar with scroll effects

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with all features
- **Tablet**: Adjusted grid layouts
- **Mobile**: Single column layout, optimized tables

## 🎨 Animation Details

- **Fade In Up**: Hero title and stats (0.8s ease)
- **Hover Transforms**: Cards lift on hover (-10px)
- **Button Ripples**: Expanding circle effect on click
- **Modal Slides**: Scale animation (0.9 → 1.0)
- **Number Counters**: Animated count-up effect (1.5s)
- **Gradient Shift**: Subtle background animation (15s loop)

## 💡 Tips

1. **Search is Real-time**: Start typing to filter immediately
2. **Delete is Safe**: Confirmation required for all deletions
3. **Statements are Flexible**: Choose any date range
4. **Print Ready**: Statements optimized for printing
5. **Data Persists**: Changes saved in browser session

## 🔮 Future Enhancements (Potential)

- Backend integration with database
- User authentication and roles
- Email notifications for due payments
- SMS reminders
- Payment gateway integration
- Receipt generation with QR codes
- Export to Excel/PDF
- Multi-language support
- Dark/Light theme toggle
- Advanced analytics and charts

---

**Built with modern web technologies** - HTML5, CSS3, Vanilla JavaScript
**Design Philosophy** - Premium, professional, and user-friendly
**Performance** - Optimized for speed and smooth animations
