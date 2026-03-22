import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  Code2, 
  Globe, 
  Search,
  Zap,
  Shield,
  Users,
  Star,
  ChevronRight,
  CheckCircle,
  Layers,
  Rocket,
  Clock,
  Award,
  TrendingUp,
  Cpu,
  Cloud,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Play,
  Megaphone,
  Download,
  Menu,
  X,
  Instagram
} from "lucide-react";

import lolo1 from "../images/lolo1.png";
import image2 from "../images/MB1.png";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import s6 from "../images/s6.png";
import secondImage from "../images/second_image.png";
import image3 from "../images/WHY.png";

const tabs = [
  {
    id: "product",
    label: "Transition to a product-based approach",
    description:
      "Move from a project-based to product-based approach and elevate digital experiences that are integral success drivers.",
    icon: Layers,
    color: "from-blue-500 to-purple-500"
  },
  {
    id: "cloud",
    label: "Achieve seamless cloud migration",
    description:
      "Accelerate your cloud journey with our comprehensive migration strategies and cloud-native solutions.",
    icon: Cloud,
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "data",
    label: "Unlock potential with data & AI",
    description:
      "Harness the power of data and artificial intelligence to drive innovation and informed decision-making.",
    icon: Database,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "infra",
    label: "Improve infrastructure management",
    description:
      "Optimize your IT infrastructure for better performance, scalability, and cost-efficiency.",
    icon: Cpu,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "process",
    label: "Optimize business processes",
    description:
      "Streamline your operations and enhance productivity through intelligent process automation.",
    icon: Zap,
    color: "from-orange-500 to-red-500"
  },
];

const technologies = [
  "CLOUD SYSTEMS",
  "DIGITAL PLATFORMS",
  "AUTOMATION",
  "DATA SOLUTIONS",
  "SMART APPLICATIONS",
  "SYSTEM INTEGRATION",
  "SCALABLE INFRASTRUCTURE",
  "WEB PLATFORMS",
  "DIGITAL WORKFLOWS",
  "DATA INTELLIGENCE",
];

function Home() {
  const location = useLocation();
  
  // Refs for DOM elements
  const navbarRef = useRef(null);
  const canvasRef = useRef(null);
  const carouselRef = useRef(null);
  const dotsRef = useRef(null);
  const mobileMenuRef = useRef(null);
  
  // Refs for sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const journeyRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // State for active nav item
  const [activeNav, setActiveNav] = useState('home');
  
  // State for carousel
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const totalCards = 5;

  // State for digital journey tabs
  const [activeTab, setActiveTab] = useState(tabs[0]);
  
  // Navbar visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Simple animation variants - only for sections after hero
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  // Rotating text effect for hero section
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Engineering the Future",
    "Deep Tech Intelligence",
    "Cloud Native Solutions",
    "AI-Driven Innovation",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Update active nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      
      // Simple navbar background change on scroll
      if (currentScrollPos > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }

      // Determine which section is in view
      const sections = [
        { id: 'home', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'services', ref: servicesRef },
        { id: 'journey', ref: journeyRef },
        { id: 'testimonials', ref: testimonialsRef },
        { id: 'cta', ref: ctaRef }
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          // If section is in view (with some offset for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveNav(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w, h;
    let mouseX = -1000,
      mouseY = -1000;
    let points = [];
    const NUM = 60;
    const CONNECT = 200;

    function initPoints() {
      points = [];
      for (let i = 0; i < NUM; i++) {
        points.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          rad: 2 + Math.random() * 4,
        });
      }
    }

    function resizeCanvas() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      initPoints();
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();

    function drawCanvas() {
      if (!ctx) return;

      ctx.clearRect(0, 0, w, h);

      for (let p of points) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        let dx = mouseX - p.x;
        let dy = mouseY - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          let force = (1 - dist / 180) * 0.15;
          p.x -= dx * force;
          p.y -= dy * force;
        }
      }

      ctx.lineWidth = 1.2;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          let dx = points[i].x - points[j].x;
          let dy = points[i].y - points[j].y;
          let d = Math.sqrt(dx * dx + dy * dy);

          if (d < CONNECT) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            let a = 0.25 * (1 - d / CONNECT);
            ctx.strokeStyle = `rgba(139, 92, 246, ${a})`;
            ctx.stroke();
          }
        }
      }

      for (let p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.rad, 0, 2 * Math.PI);
        ctx.fillStyle = "#C18BBF";
        ctx.shadowColor = "#D12CFF";
        ctx.shadowBlur = 12;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      requestAnimationFrame(drawCanvas);
    }

    const animationId = requestAnimationFrame(drawCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Carousel logic
  useEffect(() => {
    function updateVisible() {
      if (window.innerWidth <= 640) setVisibleCards(1);
      else if (window.innerWidth <= 1024) setVisibleCards(2);
      else setVisibleCards(3);
    }

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Update carousel position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = document.querySelectorAll(".testimonial-card");
    if (cards.length === 0) return;

    const gap = 24;
    const w = cards[0]?.offsetWidth || 0;
    carousel.style.transform = `translateX(-${carouselIndex * (w + gap)}px)`;
  }, [carouselIndex]);

  // Update dots
  useEffect(() => {
    const dotsContainer = dotsRef.current;
    if (!dotsContainer) return;

    const maxIndex = Math.max(0, totalCards - visibleCards);
    let html = "";
    for (let i = 0; i <= maxIndex; i++) {
      html += `<div class="dot ${i === carouselIndex ? "active" : ""}" data-index="${i}"></div>`;
    }
    dotsContainer.innerHTML = html;

    const dotElements = document.querySelectorAll(".dot");
    dotElements.forEach((dot) => {
      dot.addEventListener("click", function () {
        const index = parseInt(this.dataset.index);
        setCarouselIndex(index);
      });
    });
  }, [carouselIndex, visibleCards]);

  // Handle carousel navigation
  const handlePrevClick = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  const handleNextClick = () => {
    const maxIndex = Math.max(0, totalCards - visibleCards);
    if (carouselIndex < maxIndex) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (ref, sectionId) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(sectionId);
    setIsMenuOpen(false);
  };

  // Handle link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Simple Background - No circles */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(120,80,255,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,80,200,0.1),transparent_70%)]" />
      </div>

      {/* Navbar - Simplified */}
      <motion.nav 
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${navbarScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2 sm:gap-3 group cursor-pointer z-50" 
              onClick={() => scrollToSection(heroRef, 'home')}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <img src={lolo1} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                veronic
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {[
                { name: 'Home', to: '/' },
                { name: 'About', to: '/about' },
                { name: 'Services', to: '/services' },
                { name: 'Packages', to: '/packages' },
                { name: 'Products', to: '/products' },
                { name: 'Contact', to: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`relative px-2 py-1 text-sm lg:text-base font-medium transition-colors whitespace-nowrap ${
                    location.pathname === item.to ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.to && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link to="/contact?demo=true" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 lg:px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-sm lg:text-base shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow"
              >
                Book Demo
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors z-50"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Content */}
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-16 left-0 right-0 mx-4 mt-2 md:hidden bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {[
                    { name: 'Home', to: '/' },
                    { name: 'About', to: '/about' },
                    { name: 'Services', to: '/services' },
                    { name: 'Packages', to: '/packages' },
                    { name: 'Products', to: '/products' },
                    { name: 'Contact', to: '/contact' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        onClick={handleLinkClick}
                        className="block py-3 px-4 text-base text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-2"
                  >
                    <Link to="/contact?demo=true" onClick={handleLinkClick}>
                      <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                        Book Demo
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern - Responsive */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: 'clamp(20px, 5vw, 40px) clamp(20px, 5vw, 40px)'
          }} />
        </div>

        <canvas 
          ref={canvasRef}
          id="interactiveCanvas" 
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            <span className="text-xs sm:text-sm font-medium">Welcome to the Future</span>
          </motion.div>

          <motion.div
            key={currentPhraseIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 sm:mb-6"
          >
            {phrases[currentPhraseIndex]}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 px-2"
          >
            AI-driven infrastructure · cloud-native solutions · the future pulses with innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center px-2"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-xs sm:text-sm md:text-base overflow-hidden shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full border border-white/20 text-white font-semibold text-xs sm:text-sm md:text-base hover:bg-white/5 transition-colors"
              >
                Request Consultation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-400">About Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
              Building Smart Digital Systems for
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Modern Businesses
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="relative">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white/5 select-none">01</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-2 sm:mt-4">
                  Engineering Excellence,
                  <span className="block text-purple-400 mt-1">Delivered</span>
                </h3>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
                Veronic is an IT consulting and software development company based in Rajkot, Gujarat. 
                We design scalable web platforms, mobile applications, and automation-driven business 
                systems that help startups and SMEs grow with clarity and confidence.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
                We focus on solving real operational challenges through clean engineering, intelligent 
                automation, and performance-driven digital solutions.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 pt-4">
                <motion.div 
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-white/40">Projects</div>
                </motion.div>
                <motion.div 
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    8
                  </div>
                  <div className="text-xs sm:text-sm text-white/40">Partners</div>
                </motion.div>
                <motion.div 
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-xs sm:text-sm text-white/40">Satisfaction</div>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium text-sm sm:text-base shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow"
                  >
                    <span className="flex items-center gap-2">
                      Our Story
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 text-white font-medium text-sm sm:text-base hover:bg-white/5 transition-colors"
                  >
                    Meet the Team
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-3xl opacity-20" />
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden">
                <img 
                  src={image2} 
                  alt="Veronic Team" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Modified: Only color change on hover, no movement, icons centered */}
      <section ref={servicesRef} id="services" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 sm:mb-6">
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-400">Our Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
              Comprehensive Digital
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Solutions
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/60 max-w-3xl mx-auto mt-4 px-2">
              From concept to deployment, we deliver cutting-edge solutions that drive business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: "Application Development",
                desc: "Custom software, mobile & web applications with cutting-edge technology.",
                icon: Code2,
                color: "from-blue-500 to-cyan-500",
                img: s1,
                path: "/services"
              },
              {
                name: "Brand Marketing",
                desc: "SEO, digital strategy & brand presence to elevate your market position.",
                icon: Megaphone,
                color: "from-orange-500 to-pink-500",
                img: s2,
                path: "/services"
              },
              {
                name: "Custom Software",
                desc: "Bespoke, scalable enterprise solutions tailored to your needs.",
                icon: Layers,
                color: "from-green-500 to-emerald-500",
                img: s3,
                path: "/services"
              },
              {
                name: "Mobile Apps",
                desc: "Native & cross-platform mobile applications that engage users.",
                icon: Smartphone,
                color: "from-purple-500 to-pink-500",
                img: s4,
                path: "/services"
              },
              {
                name: "Website Development",
                desc: "Modern, responsive high-performance web platforms.",
                icon: Globe,
                color: "from-cyan-500 to-blue-500",
                img: s5,
                path: "/services"
              },
              {
                name: "SEO",
                desc: "Search engine optimization & content strategy for visibility.",
                icon: Search,
                color: "from-yellow-500 to-orange-500",
                img: s6,
                path: "/services"
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={index}
                  to={service.path}
                  className="block no-underline group"
                >
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.05 }}
                    className="relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden cursor-pointer h-full transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative flex flex-col items-center text-center">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} p-3 sm:p-3.5 lg:p-4 mb-4 sm:mb-5 lg:mb-6 shadow-lg flex items-center justify-center`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      
                      <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 text-center">{service.name}</h3>
                      <p className="text-xs sm:text-sm text-white/60 mb-3 sm:mb-4 text-center">{service.desc}</p>
                      
                      <div className="flex items-center justify-center gap-1 sm:gap-2 text-purple-400 transition-all">
                        <span className="text-xs sm:text-sm font-medium">Learn More</span>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full font-medium text-sm sm:text-base hover:bg-white/10 transition-colors"
              >
                <span className="flex items-center gap-2">
                  View All Services
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Digital Journey Section - Modified: Icons centered in tabs */}
      <section ref={journeyRef} id="journey" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 sm:mb-6">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-400">Your Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
              Customized For You and Your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Digital Journey
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 items-start">
            {/* Left: Tab List - Modified: Icons centered */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-3 sm:space-y-4"
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.div
                    key={tab.id}
                    whileHover={{ x: 5 }}
                    className={`group p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl cursor-pointer transition-all ${
                      activeTab.id === tab.id 
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30' 
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${tab.color} p-1.5 sm:p-2 lg:p-3 flex-shrink-0 flex items-center justify-center`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm font-medium line-clamp-2">{tab.label}</div>
                      </div>
                      {activeTab.id === tab.id && (
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Middle: Image */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative my-6 lg:my-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-3xl opacity-20" />
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden">
                <img 
                  src={secondImage} 
                  alt="Digital Journey" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right: Description */}
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-6 lg:p-8"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${activeTab.color} p-2 sm:p-2.5 lg:p-4 mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center`}>
                <activeTab.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-3 sm:mb-4">{activeTab.label}</h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {activeTab.description}
              </p>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 lg:pt-8 border-t border-white/10">
                <Link to="/services">
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-purple-400 font-medium text-sm sm:text-base"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Veronic */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-400">Why Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
              Why Choose
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Veronic?
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4 sm:space-y-5 lg:space-y-6"
            >
              {[
                {
                  icon: Code2,
                  title: "Expert Developers",
                  desc: "Senior-level engineers with deep full-stack & cloud expertise.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  desc: "Round-the-clock monitoring and assistance for your peace of mind.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Shield,
                  title: "Secure Systems",
                  desc: "Zero-trust architecture, encrypted by default, GDPR compliant.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Zap,
                  title: "On-Time Delivery",
                  desc: "Agile sprints, clear milestones, predictable releases.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Solutions",
                  desc: "Built to grow from startup to enterprise without limits.",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-3 sm:gap-4 items-start group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} p-2 sm:p-2.5 lg:p-3 flex-shrink-0 shadow-lg flex items-center justify-center`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-white/60">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-3xl opacity-20" />
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden">
                <img 
                  src={image3} 
                  alt="Why Veronic" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Modified: Faster speed from right to left */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 sm:mb-6">
              <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-400">Tech Stack</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
              Powering Modern
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Digital Solutions
              </span>
            </h2>
          </motion.div>

          <div className="marquee-container relative overflow-hidden">
            <div className="marquee-content flex animate-marquee-reverse-super-fast">
              {technologies.concat(technologies).map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-3 sm:mx-4 flex items-center"
                >
                  <span className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black whitespace-nowrap ${
                    index % 2 === 0 
                      ? 'text-transparent' 
                      : 'text-[#D12CFF]'
                  }`}
                  style={index % 2 === 0 ? { WebkitTextStroke: '1px #D12CFF' } : {}}
                  >
                    {tech}
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/20 mx-3 sm:mx-4">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="cta" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtMC0yMGEyMCAyMCAwIDAgMSAwIDQwIDIwIDIwIDAgMCAxIDAtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-10" />
        </div>
        
        <div className="relative z-10 max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 sm:mb-8">
              <Play className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Let's Create Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8">
              LET'S
              <span className="block text-white mt-2">
                CREATE
              </span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto px-2">
              Ready to transform your brand? Let's talk about your project and build something amazing together.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-2">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-purple-600 rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-2xl hover:shadow-white/25 transition-shadow"
                >
                  <span className="flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.button>
              </Link>

              <Link to="/contact?demo=true">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full border-2 border-white/30 text-white font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/10 transition-colors"
                >
                  Book a Demo
                </motion.button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
              {[
                { value: '50+', label: 'Projects' },
                { value: '98%', label: 'Satisfaction' },
                { value: '24/7', label: 'Support' },
                { value: '10+', label: 'Years' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="text-center"
                >
                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">{item.value}</div>
                  <div className="text-xs sm:text-sm text-white/60">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <img src={lolo1} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg" />
                </div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  veronic
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Building the future through innovative technology solutions.
              </p>
              <div className="flex gap-2 sm:gap-3 pt-2">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/veronic_infotech?igsh=ZndleDdjajRxYjNq', label: 'Instagram' },
                  { icon: Github, href: 'https://github.com/veronicinfotech-glitch', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/veronic-infotech/?viewAsMember=true', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:veronic.infotech@gmail.com', label: 'Email' }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-purple-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">Solutions</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {['Cloud Services', 'Cybersecurity', 'AI & Automation', 'Data Analytics'].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <Link to="/" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/services" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Services</Link>
                </li>
                <li>
                  <Link to="/packages" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Packages</Link>
                </li>
                <li>
                  <Link to="/products" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Products</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-purple-400 transition-colors break-all">
                    veronic.infotech@gmail.com
                  </Link>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-purple-400 transition-colors">
                    +91 95106 53051
                  </Link>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <Link to="/contact" className="text-xs sm:text-sm text-white/60 hover:text-purple-400 transition-colors leading-relaxed">
                    Rao InfoTech, University Road, Behind Shilpan Onyx, Rajkot, Gujarat 360005
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-xs sm:text-sm text-white/40">
              © 2026 veronic. All rights reserved. | Built with innovation for the future
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee-reverse-super-fast {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-reverse-super-fast {
          animation: marquee-reverse-super-fast 8s linear infinite;
        }
        .animate-marquee-reverse-super-fast:hover {
          animation-play-state: paused;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot.active {
          width: 24px;
          background: linear-gradient(to right, #a855f7, #ec4899);
          border-radius: 4px;
        }
        @media (min-width: 640px) {
          .dot {
            width: 10px;
            height: 10px;
          }
          .dot.active {
            width: 30px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;