/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // From Auth & Upload Pages
        'auth-primary': '#B19470',
        'auth-primary-dark': '#a08565',

        // From Main Listings Page (matching main_page.css)
        'main-page-primary': '#22223b',
        'main-page-accent': '#3a86ff',
        'main-page-bg': '#f8f9fa',
        'main-page-card-bg': '#fff',
        'main-dark-brown': 'rgb(77, 43, 20)',
        'main-light-icon-color': 'rgb(240, 240, 240)',
        'main-light-scroll-brown': '#B08968', // Light brown for scrollbar
        'main-sidebar-bg': '#EEECE1', // Light beige for sidebar background
        'main-section-bg-opacity': 'rgba(255, 255, 255, 0.6)', // Sidebar filter section background
        'main-section-shadow': 'rgba(0,0,0,0.1)', // Sidebar filter section shadow

        // From Profile View Page
        'profile-navbar-green': '#53754b',
        'profile-header-bg-light': '#dae5df',
        'profile-header-border-green': '#69ac82',
        'profile-border-green': '#82c7a5',
        'profile-left-box-bg': '#c7dcb9',
        'profile-left-box-border': '#6d9752',
        'profile-progress-bar-bg': '#e0e0e0',
        'profile-progress-bar-fill': '#4caf50',
        'profile-desc-bg': '#ddf0e3',
        'profile-desc-border': '#7cbe80',
        'profile-notice-bg': '#b4d7a8',
        'profile-notice-border': '#5cb584',
        'profile-highlight-box-bg': '#b2dcbf',
        'profile-highlight-box-border': '#6ed371',
        'profile-button-green': '#2e7d32',
        'profile-footer-bg': 'rgba(158, 212, 157, 0.95)',
        'profile-footer-text-light': '#f0f8ff',
        'profile-watermark-color': 'rgba(249, 247, 247, 0.07)',

        // From Landing Page
        'landing-light-blue': '#87CEFA',

        // From AfterSearch (Shared, matching original aftersearch.css)
        'aftersearch-background': '#f7f2e7',
        'aftersearch-card-bg': '#fdf7ee',
        'aftersearch-border': '#e6e0d5',
        'aftersearch-highlight': '#b48a56',
        'aftersearch-name-dark': '#2a272a',
        'aftersearch-tag-bg': '#e2d3c0',
        'aftersearch-tag-text': '#7c5a2f',
        'aftersearch-text-color': '#47392D',
        'aftersearch-subtext-color': '#b48a56',

        // New colors for MyFlatPage
        'myflat-container-bg': '#F0F0F0',
        'myflat-container-border': '#E0E0E0',
        'myflat-detail-bg': '#F8F8F8',
        'myflat-detail-border': '#E5E5E5',
        'myflat-description-bg': '#F5F5F5',
        'myflat-button-green': '#4CAF50',
        'myflat-button-green-dark': '#45A049',
        'myflat-text-dark': '#333333',
        'myflat-text-light': '#666666',

        // New light brown for footer (matching main_page.css body background)
        'footer-light-brown': '#C9B7AD',
      },
      borderRadius: {
        'card': '20px', // Default card radius (from main_page.css)
        'profile-card': '40px', // Specific larger radius for profile cards (from main_page.css)
        'auth-card': '1rem', // Auth page card radius
        'aftersearch-card': '14px', // AfterSearch card radius
      },
      boxShadow: {
        'main-custom': '0 4px 24px 0 rgba(30, 34, 90, 0.09)', // Main page default shadow
        'main-search-bar': '0 4px 12px rgba(0, 0, 0, 0.15)', // Search bar specific shadow
        'main-search-bar-hover': '0 6px 16px rgba(0, 0, 0, 0.2)', // Search bar hover shadow
        'main-sidebar': '3px 0 24px 0 rgba(30, 34, 90, 0.13)', // Sidebar shadow
        'profile-custom-lg': '0 8px 20px rgba(0,0,0,0.1)', // Profile page container shadow
        'aftersearch-custom': '0 2px 8px rgba(80, 67, 53, 0.07)', // AfterSearch cards shadow
        'aftersearch-hover': '0 8px 24px rgba(180, 138, 86, 0.13)', // AfterSearch cards hover shadow
        'aftersearch-dropdown': '0 8px 32px rgba(180, 138, 86, 0.11)', // AfterSearch dropdown shadow
      },
      height: {
        'main-header-reduced': '48px', // New smaller header height (from main_page.css visual)
        'main-header-original': '62px', // Original main header height for reference
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(.4,0,.2,1)',
      },
      transitionDuration: {
        'custom': '0.3s',
      },
      backgroundImage: {
        'app-background': "url('https://images.unsplash.com/photo-1697224687433-de3d2a618872?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'auth-background': "url('https://i.pinimg.com/736x/63/eb/ad/63ebad35b5207c38dd8ba136246184ea.jpg')",
        'profile-background': "url('https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D')",
        'aftersearch-background-pattern': "url('https://i.pinimg.com/736x/63/eb/ad/63ebad35b5207c38dd8ba136246184ea.jpg')",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'segoe-ui': ['Segoe UI', 'Arial', 'sans-serif'],
        'hanken-grotesk': ['Hanken Grotesk', 'sans-serif'],
      },
      keyframes: {
        'scroll-up': {
          '0%, 10%': { transform: 'translateY(0)' },
          '25%, 35%': { transform: 'translateY(-100%)' },
          '50%, 60%': { transform: 'translateY(-200%)' },
          '85%, 100%': { transform: 'translateY(-300%)' },
        },
        'scroll-up-md': {
          '0%, 10%': { transform: 'translateY(0)' },
          '25%, 35%': { transform: 'translateY(-100%)' },
          '50%, 60%': { transform: 'translateY(-200%)' },
          '85%, 100%': { transform: 'translateY(-300%)' },
        },
      },
      animation: {
        'scroll-up': 'scroll-up 6s infinite',
        'scroll-up-md': 'scroll-up-md 6s infinite',
      },
      gridTemplateColumns: {
        'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
      
    },
  },
  plugins: [],
};