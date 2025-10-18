export const navbarStylesV3 = {
  // --- THEME: Cosmic & Interactive ---

  nav: "sticky top-0 z-50 w-full bg-gradient-to-b from-gray-950/80 to-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-slate-900/60",

  // --- BACKGROUND ELEMENTS ---
  starfield: "absolute inset-0 w-full h-full animate-stars pointer-events-none",
  auroraGlow1:
    "pointer-events-none hidden md:block absolute -top-60 left-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[150px] animate-float-slow",
  auroraGlow2:
    "pointer-events-none hidden lg:block absolute -bottom-60 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[150px] animate-float-slower",

  // --- MAIN LAYOUT ---
  container:
    "max-w-7xl mx-auto flex items-center justify-between relative px-4 sm:px-6 lg:px-8 py-2",

  // --- LOGO ---
  logoLink:
    "relative group p-1.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
  logoOrbital:
    "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-0 group-hover:opacity-75 group-hover:animate-spin-slow transition-opacity duration-500 blur-md",
  logoImage:
    "relative h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover bg-slate-800 p-1",

  // --- TITLE ---
  titleContainer: "flex-1 flex justify-center px-3 md:px-0",
  titleText:
    "text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 text-center truncate",

  // --- BUTTONS (Desktop) ---
  desktopButtonsContainer:
    "hidden md:flex items-center flex-shrink-0 space-x-2",
  buttonBase:
    "relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transform transition-all duration-300 overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-transparent shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 group",
  buttonGlow:
    "absolute -inset-0.5 w-auto h-auto bg-[radial-gradient(circle_at_50%_50%,var(--glow-color)_0%,transparent_80%)] opacity-0 group-hover:opacity-100 group-hover:animate-glow-pulse transition-opacity duration-300",
  buttonContent: "relative z-10 flex items-center gap-2",

  // Button variants
  resultsButton:
    "text-emerald-300 [--glow-color:#10b981] focus-visible:ring-emerald-400",
  logoutButton:
    "text-rose-300 [--glow-color:#f43f5e] focus-visible:ring-rose-400",
  loginButton:
    "text-cyan-300 [--glow-color:#22d3ee] focus-visible:ring-cyan-400",
  buttonIcon: "h-4 w-4",

  // --- MOBILE MENU ---
  mobileMenuContainer: "md:hidden flex items-center",
  menuToggleButton:
    "relative z-[60] inline-flex items-center justify-center p-2 rounded-full text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
  menuIcon: "h-6 w-6 transition-transform duration-300",
  menuIconOpen: "rotate-90",

  mobileMenuPanel:
    "fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xl pt-20 transition-opacity duration-300",
  mobileMenuOpen: "opacity-100",
  mobileMenuClosed: "opacity-0 pointer-events-none",

  mobileMenuList:
    "flex flex-col items-center justify-center h-full gap-4 text-center",
  mobileMenuItem:
    "flex items-center gap-3 text-lg font-medium text-slate-200 hover:text-indigo-400 transition-colors animate-menu-item-in",
  mobileMenuIcon: "h-5 w-5",

  // --- CSS ANIMATIONS ---
  // Place this CSS in your global stylesheet (e.g., index.css)
  animations: `
    /* --- Starfield Background --- */
    @keyframes animate-stars {
      from { background-position: 0 0; }
      to { background-position: -10000px 5000px; }
    }
    .animate-stars {
      background-image:
        radial-gradient(1px 1px at 20px 30px, #eee, transparent),
        radial-gradient(1px 1px at 40px 70px, #fff, transparent),
        radial-gradient(1px 1px at 50px 160px, #ddd, transparent),
        radial-gradient(1.5px 1.5px at 100px 40px, #fff, transparent),
        radial-gradient(1.5px 1.5px at 40px 120px, #ddd, transparent),
        radial-gradient(1.5px 1.5px at 130px 100px, #fff, transparent),
        radial-gradient(2px 2px at 160px 120px, #ddd, transparent);
      background-repeat: repeat;
      background-size: 200px 200px;
    }

    /* --- Floating Aurora Glows --- */
    @keyframes float-slow {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-25px) rotate(20deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    @keyframes float-slower {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(-20deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
    .animate-float-slower { animation: float-slower 16s ease-in-out infinite; }
    
    /* --- Button Glow Effect on Hover --- */
    @keyframes glow-pulse {
      0%, 100% { transform: scale(0.8); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 1; }
    }
    .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
    
    /* --- Logo Orbital Spin --- */
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow { animation: spin-slow 4s linear infinite; }

    /* --- Mobile Menu Item Staggered Animation --- */
    @keyframes menu-item-in {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-menu-item-in {
      opacity: 0; /* Start hidden */
      animation: menu-item-in 0.5s ease forwards;
    }
  `,
};

export const loginStyles = {
  // Page container
  pageContainer:
    "min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden",

  // Background bubbles
  bubble1:
    "pointer-events-none hidden md:block absolute -top-10 -left-24 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30 animate-float-slow",
  bubble2:
    "pointer-events-none hidden md:block absolute bottom-10 right-10 w-56 h-56 bg-purple-100 rounded-full blur-3xl opacity-30 animate-float-slower",

  // Back button
  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-gray-700 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow hover:scale-105 transform transition",
  backButtonIcon: "w-4 h-4",
  backButtonText: "text-xs sm:text-sm font-medium",

  // Form container
  formContainer:
    "w-full max-w-sm pt-10 sm:max-w-md md:max-w-lg lg:max-w-lg relative z-20",
  form: "w-full",
  formWrapper: "relative",
  animatedBorder:
    "rounded-3xl p-1 sm:p-[2px] bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400 animate-border",
  formContent: "bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl",

  // Heading
  heading:
    "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-5 sm:mb-6",
  headingIcon:
    "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md",
  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",
  headingText: "text-indigo-700",

  // Subtitle
  subtitle: "text-sm text-gray-600 mb-5 sm:mb-6",

  // Form labels and inputs
  label: "block mb-4",
  labelText: "text-sm font-medium text-gray-700",
  inputContainer: "mt-2 relative",
  inputIcon:
    "absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none",
  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400",
  input:
    "w-full pl-10 sm:pl-12 py-3 rounded-xl transition-shadow duration-150 border focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:shadow-md bg-white",
  inputNormal: "border-gray-200",
  inputError: "border-red-300",
  passwordInput: "pr-12",
  passwordToggle:
    "absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-gray-600",
  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",

  // Error messages
  errorText: "mt-2 text-xs text-red-600",
  submitError: "text-sm text-red-600 mb-3",

  // Buttons container
  buttonsContainer: "mt-4 grid gap-3",
  submitButton:
    "w-full inline-flex items-center cursor-pointer justify-center gap-3 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg transform transition disabled:opacity-60",
  submitButtonIcon: "w-4 h-4",
  submitButtonText: "text-sm sm:text-base",

  // Signup section
  signupContainer: "mt-6",
  signupContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow",
  signupText: "text-sm text-gray-700",
  signupLink: "text-indigo-700 font-semibold hover:underline",

  // Animations and styles
  animations: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');:root{--card-radius:24px;}@keyframes gradient-anim{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.animate-border{border-radius:var(--card-radius);padding:2px;background:linear-gradient(90deg,rgba(99,102,241,0.95),rgba(139,92,246,0.9),rgba(96,165,250,0.95));background-size:200% 200%;animation:gradient-anim 6s ease infinite}@keyframes float-slow{0%{transform:translateY(0px)}50%{transform:translateY(-18px)}100%{transform:translateY(0px)}}@keyframes float-slower{0%{transform:translateY(0px)}50%{transform:translateY(-10px)}100%{transform:translateY(0px)}}.animate-float-slow{animation:float-slow 8s ease-in-out infinite}.animate-float-slower{animation:float-slower 10s ease-in-out infinite}#login-heading,form,input,button,a,p,label,span{font-family:'Poppins',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial}@media(max-width:360px){.rounded-3xl{border-radius:14px}}@media(min-width:1024px){.rounded-3xl{border-radius:24px}}`,
};

export const loginStylesV2 = {
  // --- THEME: Aurora & Glassmorphism ---

  // Page container
  pageContainer:
    "min-h-screen bg-slate-900 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden",

  // Background aurora glows
  bubble1:
    "pointer-events-none hidden md:block absolute -top-20 -left-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] animate-float-slow",
  bubble2:
    "pointer-events-none hidden md:block absolute bottom-20 -right-40 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px] animate-float-slower",

  // Back button
  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-slate-300 bg-white/5 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full shadow-lg hover:bg-white/10 hover:-translate-y-0.5 transform transition-all duration-300",
  backButtonIcon: "w-4 h-4 text-slate-300",
  backButtonText: "text-xs sm:text-sm font-medium",

  // Form container
  formContainer: "w-full max-w-sm sm:max-w-md relative z-20 animate-fade-in-up",
  form: "w-full",

  // Aurora Glow Border Container
  auroraGlowContainer: "rounded-3xl p-[2px]  animate-aurora-glow",

  // Form Card Content
  formContent:
    "bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl shadow-slate-900/40 border border-white/10",

  // Heading
  heading:
    "flex flex-col items-center text-center gap-3 text-xl sm:text-2xl font-bold mb-5 sm:mb-6",
  headingIcon:
    "inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/30",
  headingIconInner: "w-6 h-6",
  headingText: "text-slate-100",

  // Subtitle
  subtitle: "text-sm text-slate-400 mb-6 sm:mb-8 text-center",

  // Form labels and inputs
  label: "block mb-4",
  labelText: "text-sm font-medium text-slate-300",
  inputContainer: "mt-2 relative",
  inputIcon:
    "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none",
  inputIconInner: "w-5 h-5 text-slate-400",
  input:
    "w-full pl-12 pr-4 py-3 rounded-xl transition-all duration-300 border focus:outline-none focus:ring-4 bg-white/5 text-slate-100 placeholder-slate-500",
  inputNormal:
    "border-slate-300/20 focus:border-indigo-500 focus:ring-indigo-500/20",
  inputError: "border-red-400 focus:border-red-500 focus:ring-red-500/30",
  passwordInput: "pr-12",
  passwordToggle:
    "absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-indigo-400 cursor-pointer transition-colors",
  passwordToggleIcon: "w-5 h-5",

  // Error messages
  errorText: "mt-2 text-xs text-red-400",
  submitError: "text-sm text-red-400 mb-4 text-center",

  // Buttons container
  buttonsContainer: "mt-6 grid gap-4",
  submitButton:
    "w-full inline-flex items-center justify-center gap-3 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold shadow-lg shadow-indigo-700/30 transform transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400",
  submitButtonIcon: "w-5 h-5",
  submitButtonText: "text-sm sm:text-base",

  // Signup section
  signupContainer: "mt-8 text-center",
  signupText: "text-sm text-slate-400",
  signupLink:
    "font-semibold text-indigo-400 hover:text-indigo-300 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-indigo-300 after:transition-all after:duration-300 hover:after:w-full",

  // --- STYLES & ANIMATIONS ---
  // Place this CSS in your global stylesheet (e.g., index.css)
  animations: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    /* Apply base font to the component scope */
    #login-page {
      font-family: 'Inter', sans-serif;
    }

    /* Keyframes for the aurora border gradient */
    @keyframes aurora-glow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-aurora-glow {
      background-size: 200% 200%;
      animation: aurora-glow 8s ease infinite;
    }

    /* Keyframes for the floating background bubbles */
    @keyframes float-slow {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-25px) rotate(15deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .animate-float-slow {
      animation: float-slow 10s ease-in-out infinite;
    }
    
    @keyframes float-slower {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(-15deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .animate-float-slower {
      animation: float-slower 14s ease-in-out infinite;
    }

    /* Keyframe for the form fading in on load */
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.6s ease-out forwards;
    }
  `,
};

export const signupStyles = {
  // Page container
  pageContainer:
    "min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 flex items-center justify-center p-4 sm:p-6 relative",

  // Back button
  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-gray-700 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 py-2 rounded-full shadow hover:scale-105 transform transition",
  backButtonIcon: "w-4 h-4",
  backButtonText: "text-xs sm:text-sm font-medium",

  // Form container
  formContainer: "w-full max-w-sm pt-15 sm:max-w-md md:max-w-lg relative z-10",
  animatedBorder:
    "rounded-3xl p-1 sm:p-[2px] bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400 animate-border",
  formContent: "bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl",

  // Heading
  heading:
    "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4",
  headingIcon:
    "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md",
  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",
  headingText: "text-indigo-700",

  // Subtitle
  subtitle: "text-sm text-gray-600 mb-5 sm:mb-6",

  // Form labels and inputs
  label: "block mb-3 sm:mb-4",
  labelText: "text-sm font-medium text-gray-700",
  inputContainer: "mt-2 relative",
  inputIcon:
    "absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none",
  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-gray-400",
  input:
    "w-full pl-10 sm:pl-12 py-3 rounded-xl transition-shadow duration-150 border focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:shadow-md bg-white",
  inputNormal: "border-gray-200",
  inputError: "border-red-300",
  passwordInput: "pr-12",
  passwordToggle:
    "absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-gray-600",
  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",

  // Error messages
  errorText: "mt-2 text-xs text-red-600",
  submitError: "text-sm text-red-600 mb-3",

  // Buttons container
  buttonsContainer: "mt-4 grid gap-3",
  submitButton:
    "w-full inline-flex cursor-pointer items-center justify-center gap-3 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg transform transition hover:scale-[1.02] disabled:opacity-60",

  // Login prompt section
  loginPromptContainer: "mt-5 sm:mt-6",
  loginPromptContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-3 sm:px-4 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow",
  loginPromptText: "text-sm text-gray-700",
  loginPromptLink: "text-indigo-700 font-semibold hover:underline",

  // Animations and styles
  animations: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');:root{--card-radius:24px;}@keyframes gradient-anim{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.animate-border{border-radius:var(--card-radius);padding:2px;background:linear-gradient(90deg,rgba(99,102,241,0.95),rgba(139,92,246,0.9),rgba(96,165,250,0.95));background-size:200% 200%;animation:gradient-anim 6s ease infinite}@keyframes float-slow{0%{transform:translateY(0px)}50%{transform:translateY(-18px)}100%{transform:translateY(0px)}}.animate-float-slow{animation:float-slow 8s ease-in-out infinite}#signup-heading,form,input,button,a,p,label,span{font-family:'Poppins',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial}@media(max-width:360px){.rounded-3xl{border-radius:14px}}@media(min-width:1024px){.rounded-3xl{border-radius:24px}.bg-white\\/95{padding:2.5rem}}`,
};

export const sidebarStyles = {
  // Page container
  pageContainer: "min-h-screen bg-gradient-to-br from-slate-50 to-gray-100",

  // Mobile overlay
  mobileOverlay: "fixed inset-0 bg-black/30 z-30 md:hidden",

  // Main container
  mainContainer: "flex xl:h-screen xl:overflow-y-hidden",

  // Sidebar styles
  sidebar:
    "fixed h-screen z-40 top-0 left-0 w-80 transform transition-transform duration-300 ease-in-out bg-white shadow-lg rounded-r-2xl overflow-y-auto border-r border-gray-200 md:relative md:translate-x-0 md:flex md:flex-col",

  // Sidebar header
  sidebarHeader:
    "top-0 z-20 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-slate-800 relative overflow-hidden",
  headerDecoration1:
    "absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-white opacity-20 rounded-full",
  headerDecoration2:
    "absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 bg-blue-200 opacity-40 rounded-full",
  headerContent:
    "flex font-[pacifico] items-center justify-between relative z-10",
  logoContainer: "flex items-center space-x-3",
  logoIcon: "p-2 bg-white/40 rounded-xl backdrop-blur-sm border border-white",
  logoTitle: "text-2xl font-bold",
  logoSubtitle: "mt-1 text-slate-600 text-sm",
  closeButton: "md:hidden p-2 rounded-md hover:bg-white/50",

  // Sidebar content
  sidebarContent: "sidebar-content flex-1 overflow-y-auto p-4",
  technologiesHeader: "mb-4 flex items-center justify-between",
  technologiesTitle: "text-lg font-semibold text-slate-700",
  technologiesCount: "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full",

  // Technology items
  techItem: "mb-3",
  techButton:
    "w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 border",
  techButtonSelected: "border-current shadow-md transform scale-[1.02]",
  techButtonNormal: "border-gray-100 hover:border-gray-300 hover:bg-gray-50",
  techButtonContent: "flex items-center space-x-3",
  techIcon: "p-2 rounded-lg border",
  techName: "font-medium",

  // Levels container
  levelsContainer: "mt-3 ml-2 p-3 bg-gray-50 rounded-xl border border-gray-100",
  levelsTitle: "text-sm font-medium text-slate-700 mb-2 flex items-center",
  techBadge: "ml-2 text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full",

  // Level buttons
  levelButton:
    "w-full flex items-center justify-between cursor-pointer p-3 my-2 rounded-lg border transition-all",
  levelButtonSelected: "border-current shadow-sm font-bold",
  levelButtonNormal: "border-gray-100 hover:bg-white",
  levelButtonContent: "flex items-center space-x-2",
  levelIcon: "p-1.5 rounded-md",
  levelQuestions: "text-xs bg-gray-200 text-slate-700 px-2 py-1 rounded-full",

  // Sidebar footer
  sidebarFooter: "sticky bottom-0 z-20 p-4 border-t border-gray-100 bg-white",
  footerContent: "flex items-center justify-center text-slate-500",
  footerContentCenter: "text-center text-xs",
  footerHighlight: "mt-1 text-blue-600 font-medium",

  // Main content
  mainContent: "flex-1 min-h-screen p-4 md:p-8 ml-0 md:ml-0",

  // Mobile header
  mobileHeader: "flex items-center justify-between mb-4 md:hidden",
  menuButton: "p-2 rounded-md bg-white shadow-sm",
  mobileTitle: "flex-1 mx-3",
  mobileTechInfo: "flex items-center font-[pacifico] justify-center space-x-3",
  mobileTechIcon: "p-2 rounded-md border",
  mobileTechText: "text-center",
  mobileTechName: "text-sm font-semibold",
  mobileTechLevel: "text-xs text-slate-600",
  mobilePlaceholder: "text-center text-sm text-slate-600",

  // Mobile levels
  mobileLevels: "md:hidden mb-4",
  mobileLevelsContainer: "flex gap-2 overflow-x-auto",
  mobileLevelButton:
    "flex-none px-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm text-sm font-medium",

  // Welcome screen
  welcomeContainer:
    "h-full xl:pt-75 font-[pacifico] lg:pb-90 flex items-center justify-center",
  welcomeContent:
    "text-center font-[pacifico] max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border border-white",
  welcomeIcon:
    "inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full shadow mb-6",
  welcomeTitle:
    "text-2xl md:text-4xl font-bold text-slate-800 mb-4 font-[pacifico]",
  welcomeDescription: "text-sm md:text-lg text-slate-700 mb-6 max-w-md mx-auto",

  // Features grid
  featuresGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6",
  featureCard:
    "bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-5 rounded-2xl border border-blue-100 text-center",
  featureIcon:
    "inline-flex items-center justify-center p-3 bg-green-100 text-green-600 rounded-full mb-3",
  featureTitle: "font-semibold text-slate-800 mb-2",
  featureDescription: "text-xs md:text-sm text-slate-600",

  // Welcome prompt
  welcomePrompt:
    "bg-gradient-to-r from-blue-100 to-indigo-100 p-3 md:p-4 rounded-2xl border border-blue-200 shadow-inner",
  welcomePromptText:
    "text-blue-700 font-medium flex items-center justify-center",

  // Level selection
  levelSelectionContainer:
    "h-full xl:mt-60 md:pb-200 pb-30 flex items-center justify-center",
  levelSelectionContent:
    "text-center bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100 max-w-md",
  techSelectionIcon: "p-5 rounded-2xl inline-flex mb-6 shadow-sm",
  techSelectionTitle: "text-2xl md:text-3xl font-bold text-slate-800 mb-2",
  techSelectionDescription: "text-slate-600 mb-6",
  techSelectionPrompt:
    "bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl border border-blue-200",
  techSelectionPromptText: "text-blue-700 font-medium",

  // Results screen
  resultsContainer:
    "h-full lg:pb-140 xl:pb-0 md:pb-90 flex items-center justify-center",
  resultsContent:
    "bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100 max-w-2xl w-full",
  resultsHeader: "text-center",
  performanceIcon: "p-4 rounded-2xl inline-flex mb-6 shadow-sm",
  resultsTitle:
    "text-2xl md:text-4xl font-bold text-slate-800 mb-2 font-[pacifico]",
  resultsSubtitle: "text-slate-600 mb-2",
  performanceBadge:
    "inline-block text-slate-800 px-4 py-1 rounded-full text-sm font-medium mb-6",

  // Score grid
  scoreGrid: "grid grid-cols-2 gap-4 mb-6",
  scoreCard:
    "bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200 text-center",
  scoreIcon:
    "inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-3 shadow-inner",
  scoreNumber: "text-2xl font-bold text-green-600",
  scoreLabel: "text-green-700 font-medium",

  // Score progress
  scoreProgress:
    "bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-2xl border border-indigo-200 mb-6",
  scoreProgressHeader: "flex items-center justify-between mb-4",
  scoreProgressTitle: "text-indigo-700 font-semibold",
  scoreProgressPercentage: "text-indigo-700 font-bold",
  scoreProgressBar: "w-full bg-gray-200 rounded-full h-4",
  scoreProgressFill: "h-4 rounded-full transition-all duration-500",

  // Quiz container
  quizContainer: "max-w-3xl mx-auto",
  quizHeader:
    "mb-4 bg-white p-4 md:p-6 rounded-2xl shadow-md border border-gray-100",
  quizTitleContainer: "flex items-center justify-between mb-2",
  quizTitle: "text-xl md:text-2xl font-bold text-slate-800",
  quizCounter:
    "text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium",
  progressBar: "w-full bg-gray-200 rounded-full h-2.5 mb-2",
  progressFill:
    "bg-gradient-to-r from-blue-300 to-indigo-300 h-2.5 rounded-full transition-all duration-500",

  // Question container
  questionContainer:
    "bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100",
  questionHeader: "flex items-center mb-2",
  questionIcon: "bg-indigo-100 text-indigo-600 p-2 rounded-lg mr-3",
  questionText: "text-lg md:text-xl font-semibold text-slate-800",

  // Options container
  optionsContainer: "space-y-4 mt-6",
  optionButton:
    "w-full cursor-pointer text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-300",
  optionNormal:
    "border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-sm",
  optionCorrect: "bg-green-50 border-green-300 text-green-700 shadow-sm",
  optionIncorrect: "bg-red-50 border-red-300 text-red-700 shadow-sm",
  optionContent: "flex items-center",
  optionIconCorrect: "mr-3 text-green-500 flex-shrink-0",
  optionIconIncorrect: "mr-3 text-red-500 flex-shrink-0",
  optionIconEmpty:
    "w-5 h-5 rounded-full border-2 border-gray-200 mr-3 flex-shrink-0",
  optionText: "text-sm md:text-lg",

  // Loading container
  loadingContainer: "h-full flex items-center justify-center",
  loadingContent:
    "text-center bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100",
  loadingSpinner:
    "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400 mx-auto mb-4",
  loadingTitle: "text-lg md:text-xl font-semibold text-slate-800 mb-2",
  loadingDescription: "text-sm md:text-base text-slate-600",

  // Custom styles
  customStyles: `
    .sidebar-content {
      -webkit-overflow-scrolling: touch;
    }

    aside .sidebar-content::-webkit-scrollbar {
      width: 10px;
    }
    aside .sidebar-content::-webkit-scrollbar-track {
      background: transparent;
    }
    aside .sidebar-content::-webkit-scrollbar-thumb {
      background-color: rgba(99,102,241,0.12);
      border-radius: 999px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    aside .sidebar-content::-webkit-scrollbar-thumb:hover {
      background-color: rgba(99,102,241,0.18);
    }

    aside .sidebar-content {
      scrollbar-width: thin;
      scrollbar-color: rgba(99,102,241,0.12) transparent;
    }
  `,
};

export const resultStyles = {
  // Page container
  pageContainer: "min-h-screen bg-gray-50 p-6",
  container: "max-w-6xl font-[pacifico] mx-auto",

  // Header
  header:
    "mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4",
  title: "text-2xl md:text-3xl lg:text-2xl font-semibold",
  headerControls: "flex items-center gap-3",

  // Filter section
  filterContainer: "mb-4",
  filterContent: "flex items-center justify-between gap-3",
  filterButtons: "flex flex-wrap items-center gap-2",
  filterLabel: "text-sm text-gray-600 mr-2",
  filterButton:
    "px-3 py-1 rounded-full text-sm font-medium border shadow-sm focus:outline-none",
  filterButtonActive: "bg-indigo-600 text-white",
  filterButtonInactive: "bg-white text-gray-700",
  filterStatus: "text-sm text-gray-500",

  // Loading state
  loadingContainer: "text-center py-20",
  loadingSpinner:
    "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400 mb-4",
  loadingText: "text-gray-600",

  // Track sections
  trackSection: "mb-6",
  trackTitle: "text-lg md:text-xl lg:text-lg font-semibold mb-3",

  // Results grid
  resultsGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-4",

  // Empty state
  emptyState: "text-center py-12 text-gray-600",

  // Badge styles
  badgeExcellent:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800",
  badgeGood:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800",
  badgeAverage:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",
  badgeNeedsWork:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800",

  // Card styles
  card: "relative bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition",
  cardAccent:
    "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-indigo-700",
  cardContent: "p-4 md:p-5 lg:p-4 flex flex-col h-full",

  // Card header
  cardHeader: "flex items-start justify-between gap-3",
  cardInfo: "flex items-center gap-3 min-w-0",
  levelAvatar:
    "flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 rounded-md font-semibold text-lg md:text-xl lg:text-lg",
  levelBasic: "bg-indigo-50 text-indigo-700",
  levelIntermediate: "bg-purple-50 text-purple-700",
  levelAdvanced: "bg-pink-50 text-pink-700",
  cardText: "min-w-0",
  cardTitle: "text-sm md:text-base lg:text-sm font-medium truncate",
  cardMeta: "text-xs md:text-sm lg:text-xs text-gray-500",

  // Card performance
  cardPerformance: "text-right",
  performanceLabel: "text-md md:text-md lg:text-md text-gray-500",
  badgeContainer: "mt-1",

  // Card stats
  cardStats: "mt-4",
  statItem: "text-md md:text-md lg:text-md text-gray-600",
  statNumber: "font-semibold text-lg md:text-xl lg:text-lg text-gray-800",
};
