# Restaurant Management System

## Description

A modern, responsive restaurant management system built with React, TypeScript, and Vite. This application provides comprehensive tools for managing restaurant operations including table management, reservations, waitlists, customer information, and notifications.

### Key Features

- 🏠 **Dashboard** - Overview of restaurant operations and analytics
- 🍽️ **Table Management** - Manage restaurant tables and seating arrangements
- 📅 **Reservations** - Handle customer reservations and booking system
- ⏰ **Waitlist** - Manage customer waiting queues
- 👥 **Customers** - Customer information and management
- 🔔 **Notifications** - Real-time notifications and alerts
- ⚙️ **Settings** - System configuration and preferences
- 🌐 **Multi-language Support** - English and Vietnamese localization

### Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6.x
- **Styling**: TailwindCSS + Ant Design
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Internationalization**: i18next
- **Icons**: Ant Design Icons
- **Form Handling**: Formik with Yup validation
- **HTTP Client**: Axios
- **Development Tools**: ESLint, Prettier, Husky

### System Architecture

The application follows a modern single-page application (SPA) architecture with:

- **Component-based Architecture** - Reusable React components
- **State Management** - Centralized state with Redux Toolkit
- **Route-based Code Splitting** - Lazy-loaded pages for optimal performance
- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Internationalization** - Multi-language support with i18next

## Getting Started

`Node.js version: 18.x or higher`

### Prerequisites

- Node.js v18.0.0 or higher
- npm or yarn package manager

### Installation

#### 1. Clone the repository

```bash
git clone <repository-url>
cd React-Zero-Vite
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- **Development**
  ```bash
  npm run dev          # Start development server
  npm run start        # Alternative command for development
  ```

- **Build & Preview**
  ```bash
  npm run build        # Build for production
  npm run preview      # Preview production build locally
  ```

- **Code Quality**
  ```bash
  npm run lint         # Run ESLint
  npm run lint:fix     # Fix ESLint issues automatically
  npm run prettier     # Check code formatting
  npm run prettier:fix # Fix code formatting
  npm run format       # Run both prettier and lint fixes
  ```

### Project Structure

```
src/
├── assets/          # Static assets (images, logos)
├── components/      # Reusable UI components
├── config/          # Configuration files (i18n, menu)
├── hooks/           # Custom React hooks
├── layout/          # Layout components (MenuLayout, 404, etc.)
├── locales/         # Internationalization files
├── pages/           # Page components
├── routes/          # Routing configuration
├── services/        # API services
├── store/           # Redux store and reducers
├── ts/              # TypeScript type definitions
└── utilities/       # Utility functions and helpers
```

### Environment Setup

1. **Development Environment**
   - Ensure Node.js 18+ is installed
   - Use modern code editor with TypeScript support
   - Install recommended extensions for React/TypeScript development

2. **Production Build**
   ```bash
   npm run build
   ```
   The built files will be in the `build/` directory.

### Docker Support

Build and run with Docker:

```bash
# Build Docker image
docker build -t restaurant-management .

# Run container
docker run -p 80:80 restaurant-management
```

## Contributing

1. Follow the existing code style (ESLint + Prettier)
2. Write TypeScript with proper type definitions
3. Use conventional commit messages
4. Test your changes thoroughly
5. Update documentation as needed

---

**Version**: 1.0.0  
**Company**: Eastgate Software
