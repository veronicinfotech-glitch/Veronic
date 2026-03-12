import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Smartphone,
  Package,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Clock,
  MapPin,
  Users,
  TrendingUp,
  Database,
  Cloud,
  Lock,
  Gauge,
  Layers,
  ChevronRight,
  Download,
  Share2,
  Bell,
  Camera,
  QrCode,
  BarChart3,
  Globe,
  Mail,
  Phone,
  Star,
  CheckCircle,
  Play,
  Github,
  Linkedin,
  Instagram
} from "lucide-react";

import lolo1 from "../images/lolo1.png";
import hub from "../images/hub.png";
import parcel from "../images/parcel.png";

const ProductPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeProduct, setActiveProduct] = useState("mobilehub");

  // Refs
  const heroRef = useRef(null);
  const mobileHubRef = useRef(null);
  const mobileHubFlowRef = useRef(null);
  const parcelRef = useRef(null);
  const techRef = useRef(null);
  const benefitsRef = useRef(null);
  const comparisonRef = useRef(null);
  const ctaRef = useRef(null);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

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

  // Very simple animations - only fade and slide
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      const navbar = navbarRef.current;
      if (navbar) {
        if (currentScrollPos > 50) {
          navbar.classList.add("bg-black/95", "backdrop-blur-xl", "border-b", "border-white/10");
          navbar.classList.remove("bg-transparent");
        } else {
          navbar.classList.remove("bg-black/95", "backdrop-blur-xl", "border-b", "border-white/10");
          navbar.classList.add("bg-transparent");
        }
      }

      const sections = [
        { id: "hero", ref: heroRef },
        { id: "mobilehub", ref: mobileHubRef },
        { id: "parcel", ref: parcelRef },
        { id: "tech", ref: techRef },
        { id: "cta", ref: ctaRef },
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Smooth scroll
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Handle link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // MobileHub features
  const mobileHubFeatures = [
    {
      title: "Smart Device Management",
      description:
        "Centralized control for all your mobile devices with real-time monitoring.",
      icon: Smartphone,
      color: "blue",
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security with biometric authentication.",
      icon: Shield,
      color: "purple",
    },
    {
      title: "Real-time Analytics",
      description: "Track device performance and usage patterns.",
      icon: TrendingUp,
      color: "green",
    },
    {
      title: "Automated Updates",
      description: "Seamless OTA updates with zero downtime.",
      icon: Zap,
      color: "orange",
    },
  ];

  // Parcel features
  const parcelFeatures = [
    {
      title: "Real-time Tracking",
      description: "Live GPS tracking with route optimization.",
      icon: MapPin,
      color: "blue",
    },
    {
      title: "Automated Dispatching",
      description: "Smart routing for maximum efficiency.",
      icon: Gauge,
      color: "green",
    },
    {
      title: "Proof of Delivery",
      description: "Digital signatures and photo confirmation.",
      icon: Camera,
      color: "purple",
    },
    {
      title: "Customer Notifications",
      description: "Automated updates at every stage.",
      icon: Bell,
      color: "orange",
    },
  ];

  // MobileHub flow steps
  const mobileHubFlow = [
    {
      step: "01",
      title: "Connect",
      description: "Connect all your mobile devices in minutes.",
      icon: Share2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Configure",
      description: "Set up policies and access controls.",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Monitor",
      description: "Real-time monitoring and alerts.",
      icon: Gauge,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Optimize",
      description: "Analyze data and optimize usage.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
    },
  ];

  // Parcel flow steps
  const parcelFlow = [
    {
      step: "01",
      title: "Scan & Log",
      description: "Quick QR code scanning.",
      icon: QrCode,
      color: "from-blue-500 to-indigo-500",
    },
    {
      step: "02",
      title: "Route Optimize",
      description: "AI-powered route planning.",
      icon: MapPin,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Track Live",
      description: "Real-time tracking updates.",
      icon: Globe,
      color: "from-green-500 to-teal-500",
    },
    {
      step: "04",
      title: "Deliver & Confirm",
      description: "Digital proof of delivery.",
      icon: CheckCircle,
      color: "from-orange-500 to-amber-500",
    },
  ];

  // Benefits
  const benefits = [
    {
      value: "99.9%",
      label: "Uptime",
      description: "Enterprise-grade reliability",
      icon: Shield,
    },
    {
      value: "3x",
      label: "Faster Delivery",
      description: "Optimized routing",
      icon: Zap,
    },
    {
      value: "50%",
      label: "Cost Reduction",
      description: "Streamlined operations",
      icon: TrendingUp,
    },
    {
      value: "10k+",
      label: "Active Users",
      description: "Trusted worldwide",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(120,80,255,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,80,200,0.15),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 border border-purple-500/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-pink-500/10 rounded-full" />
      </div>

      {/* Navigation */}
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } bg-transparent`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group z-50">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20"
              >
                <img src={lolo1} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg" />
              </motion.div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                veronic
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {[
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
                { name: "Services", to: "/services" },
                { name: "Products", to: "/products" },
                { name: "Contact", to: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`relative px-2 py-1 text-sm lg:text-base font-medium transition-colors whitespace-nowrap ${
                    location.pathname === item.to
                      ? "text-white"
                      : "text-white/60 hover:text-white"
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

            {/* Mobile Menu Button - Three Lines */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors z-50"
              aria-label="Toggle menu"
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
            </button>
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
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Content */}
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-16 left-0 right-0 mx-4 mt-2 md:hidden bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {[
                    { name: "Home", to: "/" },
                    { name: "About", to: "/about" },
                    { name: "Services", to: "/services" },
                    { name: "Products", to: "/products" },
                    { name: "Contact", to: "/contact" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.to}
                        className="block py-3 px-4 text-base text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
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
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
      >
        {/* Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              // backgroundSize: 'clamp(20px, 5vw, 40px) clamp(20px, 5vw, 40px)'
            }}
          />
        </div>

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            <span className="text-xs sm:text-sm font-medium">Innovation at Scale</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Our Products
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/60 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Powerful solutions designed to transform how you manage mobile
            devices and streamline parcel delivery operations.  
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4"
          >
            <button
              onClick={() => scrollToSection(mobileHubRef)}
              className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:opacity-90 transition-opacity"
            >
              <span className="flex items-center gap-2">
                Explore MobileHub
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection(parcelRef)}
              className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full border border-white/20 text-white font-semibold text-xs sm:text-sm md:text-base hover:bg-white/5 transition-colors"
            >
              View Parcel Management
            </button>
          </motion.div>

          
        </motion.div>
      </section>

      {/* MobileHub Product Showcase */}
      <section
        ref={mobileHubRef}
        className="relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent clip-diagonal" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 sm:mb-6">
              <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-400">Enterprise Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MobileHub
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="relative">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white/5 select-none">
                  01
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2 sm:mt-4">
                  Complete Mobile Device
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                    Management Platform
                  </span>
                </h3>
              </div>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/70 leading-relaxed">
                Take full control of your organization's mobile devices with
                enterprise-grade management, security, and analytics.
              </p>

              {/* Feature Timeline */}
              <div className="space-y-4 sm:space-y-5 lg:space-y-6 py-4 sm:py-6 lg:py-8">
                {mobileHubFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-3 sm:gap-4 items-start"
                    >
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-${feature.color}-500/10 flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${feature.color}-400`} />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-0.5 sm:mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-white/50">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <button className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-xs sm:text-sm lg:text-base hover:opacity-90 transition-opacity">
                Explore MobileHub
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

            {/* Right Image - Clean, no box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Glow effect only - no border, no background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20" />
              
              {/* Pure image - no container styling */}
              <div className="relative flex items-center justify-center">
                <img 
                  src={hub}
                  alt="MobileHub product showcase" 
                  className="w-full max-w-lg mx-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MobileHub Flow */}
      <section
        ref={mobileHubFlowRef}
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-2">
              How MobileHub
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                Transforms Your Workflow
              </span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {mobileHubFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl sm:rounded-3xl opacity-10`}
                  />
                  <div className="relative p-5 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white/10 mb-3 sm:mb-4">
                      {step.step}
                    </div>
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} p-3 sm:p-3.5 lg:p-4 mb-4 sm:mb-5 lg:mb-6`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3">{step.title}</h4>
                    <p className="text-xs sm:text-sm lg:text-base text-white/60">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parcel-Management App Showcase */}
      <section
        ref={parcelRef}
        className="relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-green-600/10 via-teal-600/10 to-transparent clip-diagonal-reverse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4 sm:mb-6">
              <Package className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-xs sm:text-sm text-green-400">Logistics Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Parcel-Management
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image - Clean, no box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative order-2 lg:order-1 mt-8 lg:mt-0"
            >
              {/* Glow effect only - no border, no background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-3xl opacity-20" />
              
              {/* Pure image - no container styling */}
              <div className="relative flex items-center justify-center">
                <img 
                  src={parcel}
                  alt="Parcel delivery tracking system" 
                  className="w-full max-w-lg mx-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              <div className="relative">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white/5 select-none">
                  02
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2 sm:mt-4">
                  Smart Parcel Delivery
                  <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                    Management System
                  </span>
                </h3>
              </div>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/70 leading-relaxed">
                Streamline your entire delivery operation with AI-powered
                routing, real-time tracking, and automated customer
                communications.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-6 lg:py-8">
                {parcelFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/30 transition-colors"
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-2 sm:mb-3`}
                      >
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${feature.color}-400`} />
                      </div>
                      <h4 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-white/40 text-xs">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <button className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full font-semibold text-xs sm:text-sm lg:text-base hover:opacity-90 transition-opacity">
                Explore Parcel System
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology & Integration Section */}
      <section ref={techRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
              Technology
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                & Integration
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/60 max-w-3xl mx-auto mt-4 px-4">
              Built on modern architecture with seamless integration
              capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 max-w-4xl mx-auto">
            {/* Left Column - Data Sources */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              >
                <Database className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-blue-400 mx-auto mb-2 sm:mb-3" />
                <h4 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">Data Sources</h4>
                <p className="text-xs text-white/40">APIs, Databases, IoT</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              >
                <Cloud className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-purple-400 mx-auto mb-2 sm:mb-3" />
                <h4 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">Cloud Services</h4>
                <p className="text-xs text-white/40">AWS, Azure, GCP</p>
              </motion.div>
            </div>

            {/* Center - Core Platform */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 text-center"
            >
              <Layers className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-1 sm:mb-2">Veronic Core</h3>
              <p className="text-white/80 text-xs sm:text-sm">Integration Platform</p>
            </motion.div>

            {/* Right Column - Applications */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              >
                <Smartphone className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-green-400 mx-auto mb-2 sm:mb-3" />
                <h4 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">MobileHub</h4>
                <p className="text-xs text-white/40">Device Management</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              >
                <Package className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-orange-400 mx-auto mb-2 sm:mb-3" />
                <h4 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">Parcel System</h4>
                <p className="text-xs text-white/40">Delivery Management</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
              Transform Your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                Business Operations
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative p-4 sm:p-5 lg:p-6 xl:p-8">
                    <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-400" />
                      </div>

                      <div>
                        <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                          {benefit.value}
                        </div>
                        <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold mb-1 sm:mb-2">
                          {benefit.label}
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-white/40">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Product Comparison */}
      <section ref={comparisonRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
              Choose Your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                Perfect Solution
              </span>
            </h2>
          </motion.div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex p-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <button
                onClick={() => setActiveProduct("mobilehub")}
                className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full font-medium text-xs sm:text-sm lg:text-base transition-all ${
                  activeProduct === "mobilehub"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                MobileHub
              </button>
              <button
                onClick={() => setActiveProduct("parcel")}
                className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full font-medium text-xs sm:text-sm lg:text-base transition-all ${
                  activeProduct === "parcel"
                    ? "bg-gradient-to-r from-green-500 to-teal-500 text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Parcel Management
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeProduct === "mobilehub" ? (
              <motion.div
                key="mobilehub"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-8"
              >
                <div className="p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
                  <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 mb-4 sm:mb-5 lg:mb-6" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">MobileHub</h3>
                  <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5 lg:mb-8">
                    {mobileHubFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-1.5 sm:gap-2 text-white/70 text-xs sm:text-sm"
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-1">{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">$499</div>
                  <div className="text-white/40 text-xs sm:text-sm mb-4 sm:mb-5 lg:mb-6">per month</div>
                  <button className="w-full py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity">
                    Get Started
                  </button>
                </div>

                <div className="p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Key Features</h4>
                  <div className="space-y-3 sm:space-y-4">
                    {mobileHubFlow.map((step, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <div
                          className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-lg bg-gradient-to-br ${step.color} p-1.5 sm:p-2 flex-shrink-0`}
                        >
                          <step.icon className="w-full h-full text-white" />
                        </div>
                        <span className="text-white/70 text-xs sm:text-sm">{step.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="parcel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-8"
              >
                <div className="p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10">
                  <Package className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-400 mb-4 sm:mb-5 lg:mb-6" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Parcel Management</h3>
                  <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5 lg:mb-8">
                    {parcelFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-1.5 sm:gap-2 text-white/70 text-xs sm:text-sm"
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-1">{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">$599</div>
                  <div className="text-white/40 text-xs sm:text-sm mb-4 sm:mb-5 lg:mb-6">per month</div>
                  <button className="w-full py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity">
                    Get Started
                  </button>
                </div>

                <div className="p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Key Features</h4>
                  <div className="space-y-3 sm:space-y-4">
                    {parcelFlow.map((step, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <div
                          className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-lg bg-gradient-to-br ${step.color} p-1.5 sm:p-2 flex-shrink-0`}
                        >
                          <step.icon className="w-full h-full text-white" />
                        </div>
                        <span className="text-white/70 text-xs sm:text-sm">{step.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtMC0yMGEyMCAyMCAwIDAgMSAwIDQwIDIwIDIwIDAgMCAxIDAtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 px-2">
              Ready to
              <span className="block text-white mt-1 sm:mt-2">Transform Your Business?</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto px-4">
              Join thousands of companies already using our products to
              streamline operations and drive growth.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
              <button className="group px-5 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 bg-white text-purple-600 rounded-full font-semibold text-xs sm:text-sm lg:text-base xl:text-lg shadow-2xl hover:opacity-90 transition-opacity">
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              {/* Contact Sales Button - Links to Contact page */}
              <Link to="/contact">
                <button className="px-5 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 rounded-full border-2 border-white/30 text-white font-semibold text-xs sm:text-sm lg:text-base xl:text-lg hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
              {[
                "Enterprise Ready",
                "24/7 Support",
                "99.9% Uptime",
                "GDPR Compliant",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-1 sm:gap-2"
                >
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white/60" />
                  <span className="text-white/80 text-xs sm:text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
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
                  { icon: Instagram, href: "https://www.instagram.com/veronic_infotech?igsh=ZndleDdjajRxYjNq", label: "Instagram" },
                  { icon: Github, href: "https://github.com/veronicinfotech-glitch", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/veronic-infotech/?viewAsMember=true", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:veronic.infotech@gmail.com", label: "Email" },
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

            {/* Products */}
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">Products</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {["MobileHub", "Parcel Management", "Enterprise", "Pricing"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <Link
                    to="/"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
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
                  <Link
                    to="/contact"
                    className="text-xs sm:text-sm text-white/60 hover:text-purple-400 transition-colors break-all"
                  >
                    veronic.infotech@gmail.com
                  </Link>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <Link
                    to="/contact"
                    className="text-xs sm:text-sm text-white/60 hover:text-purple-400 transition-colors"
                  >
                    +91 95106 53051
                  </Link>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  </div>
                  <Link
                    to="/contact"
                    className="text-xs sm:text-sm text-white/60 hover:text-purple-400 transition-colors leading-relaxed"
                  >
                    Rao InfoTech, University Road, Behind Shilpan Onyx, Rajkot,
                    Gujarat 360005
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-xs sm:text-sm text-white/40">
              © 2026 veronic. All rights reserved. | Built with innovation for
              the future
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for diagonal clips */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        .clip-diagonal-reverse {
          clip-path: polygon(100% 0, 100% 100%, 0 0);
        }
      `}</style>
    </div>
  );
};

export default ProductPage;