import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  Target, 
  Heart, 
  BookOpen,
  Lock,
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
  Code2,
  Briefcase,
  Calendar,
  Globe,
  Zap,
  Shield,
  Award as AwardIcon,
  Download,
  Instagram
} from "lucide-react";

import lolo1 from "../images/lolo1.png";

const About = () => {
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Innovating for a Sustainable Future";
  
  // Refs for sections
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
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

  // Animation variants for sections (trigger once)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Company values data
  const companyValues = [
    {
      id: 1,
      title: "Innovation First",
      description: "We constantly push boundaries, exploring new technologies and methodologies to deliver cutting-edge solutions.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Sustainable Development",
      description: "Building solutions that not only scale but also minimize environmental impact through efficient architecture.",
      icon: Heart,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Collaborative Excellence",
      description: "Great things happen when brilliant minds work together. We foster a culture of knowledge sharing and teamwork.",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Client Success Focus",
      description: "Your success is our success. We're committed to delivering measurable results that drive your business forward.",
      icon: Target,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Continuous Learning",
      description: "The tech landscape evolves daily. We invest in continuous learning to stay ahead of the curve.",
      icon: BookOpen,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 6,
      title: "Transparency & Trust",
      description: "Building lasting relationships through open communication, honest feedback, and reliable delivery.",
      icon: Lock,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Timeline data
  const timelineEvents = [
    {
      title: "The Beginning",
      description: "Veronic was founded with a vision to create innovative, scalable, and future-ready digital solutions for modern businesses.",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Growth Phase",
      description: "Expanded our team and capabilities, delivering excellence and driving innovation for clients worldwide.",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Key Milestones",
      description: "Launched Platform Engineering services and optimized cloud infrastructure for enterprise clients.",
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Future Forward",
      description: "Continuing to push boundaries, helping businesses scale, innovate, and thrive in the digital era.",
      icon: Rocket,
      color: "from-orange-500 to-red-500"
    }
  ];

  // Typing effect for the heading
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Smooth scroll to section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Handle link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Handle demo button click
  const handleDemoClick = () => {
    window.location.href = "/contact?demo=true";
  };

  // Handle PDF download
  const handlePDFDownload = () => {
    const link = document.createElement('a');
    link.href = '/PDF/Java Unit - 1-1.pdf';
    link.download = 'Java-Unit-1-1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(120,80,255,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,80,200,0.15),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating Geometric Shapes - Responsive */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 border border-purple-500/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-56 sm:w-72 md:w-96 lg:w-[500px] h-56 sm:h-72 md:h-96 lg:h-[500px] border border-pink-500/10 rounded-full" />
      </div>

      {/* Navbar */}
      <nav 
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
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
                { name: 'Home', to: '/' },
                { name: 'About', to: '/about' },
                { name: 'Services', to: '/services' },
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
                    { name: 'Home', to: '/' },
                    { name: 'About', to: '/about' },
                    { name: 'Services', to: '/services' },
                    { name: 'Products', to: '/products' },
                    { name: 'Contact', to: '/contact' }
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Background Shapes - Responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern - Responsive */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            // backgroundSize: 'clamp(20px, 5vw, 40px) clamp(20px, 5vw, 40px)'
          }} />
        </div>

        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              About Veronic
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Building Smart Digital Systems for Modern Businesses
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-white/80 px-2">
              {displayText}
              <span className="cursor animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm sm:text-base lg:text-lg text-white/60 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Our mission is to empower the next generation of innovators through cutting-edge solutions that harmonize productivity with environmental stewardship.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(storyRef)}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-sm sm:text-base overflow-hidden shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow"
          >
            <span className="relative z-10 flex items-center gap-2">
              Discover Our Story
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          {/* Scroll Indicator - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            // className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hidden sm:block"
            onClick={() => scrollToSection(storyRef)}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              // className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/20 flex justify-center"
            >
              <motion.div
                animate={{ height: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                // className="w-0.5 sm:w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section ref={storyRef} id="our-story" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 sm:mb-6">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-400">Our Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
              The Path That Led Us
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Here
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-pink-500/50" />
            
            <div className="space-y-12 sm:space-y-16 md:space-y-24">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                  >
                    {/* Timeline Dot - Visible on mobile */}
                    <div className="md:hidden absolute left-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10">
                      <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/50" />
                    </div>

                    {/* Desktop Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10">
                      <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/50" />
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                      <motion.div 
                        variants={cardVariants}
                        className="relative group"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${event.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                        <div className="relative p-5 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${event.color} p-3 sm:p-3.5 lg:p-4 mb-4 sm:mb-6`}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{event.title}</h3>
                          <p className="text-sm sm:text-base text-white/60">{event.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} id="our-values" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
              Values That
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Drive Us
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/60 max-w-3xl mx-auto mt-4 px-2">
              The principles that guide our decisions, shape our culture, and define who we are
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`} />
                  
                  <div className="relative">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${value.color} p-3 sm:p-3.5 lg:p-4 mb-4 sm:mb-6 shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-white/60 leading-relaxed">{value.description}</p>
                    
                    {/* Animated border on hover */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Culture Stats */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20"
          >
            {[
              { value: '98%', label: 'Employee Satisfaction', icon: Users },
              { value: '15+', label: 'Learning Hours/Month', icon: BookOpen },
              { value: '100%', label: 'Remote-First Culture', icon: Globe }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-2 sm:p-3 mx-auto mb-3 sm:mb-4">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtMC0yMGEyMCAyMCAwIDAgMSAwIDQwIDIwIDIwIDAgMCAxIDAtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-10" />
        </div>
        
        <div className="relative z-10 max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 sm:mb-8">
              <Play className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Start Your Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 px-2">
              Ready to Start Your
              <span className="block text-white mt-2">
                Digital Journey?
              </span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto px-4">
              Let's discuss how we can help transform your business with our expertise and innovative solutions.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-2">
              {/* Get in Touch button with PDF download */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePDFDownload}
                className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-purple-600 rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-2xl hover:shadow-white/25 transition-shadow flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </motion.button>

              {/* Book a Demo button - links to Contact page with demo parameter */}
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
    </div>
  );
};

export default About;