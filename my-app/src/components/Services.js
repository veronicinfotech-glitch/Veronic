import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code2, 
  Megaphone, 
  Laptop, 
  Smartphone, 
  Globe, 
  Search,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  Palette,
  BarChart3,
  ChevronRight,
  Star,
  Users,
  Clock,
  Award,
  CheckCircle,
  Play,
  TrendingUp,
  Cpu,
  Cloud,
  Database,
  Lock,
  Gauge,
  Layers,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Instagram
} from 'lucide-react';

import lolo1 from "../images/lolo1.png";
import app from "../images/app_dev.png";
import dm from "../images/dm.jpg";
import custom from "../images/cust.png";
import SEO from "../images/seo.png";

const ServicesPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  
  // Refs
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const processRef = useRef(null);
  const techRef = useRef(null);
  const ctaRef = useRef(null);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  // SUPER SIMPLE animations - only 2 types
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Handle scroll for navbar - simplified
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
      
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'overview', ref: overviewRef },
        { id: 'process', ref: processRef },
        { id: 'tech', ref: techRef },
        { id: 'cta', ref: ctaRef }
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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Handle link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const serviceCategories = [
    {
      id: 1,
      title: "Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      services: [
        "Web Development",
        "Mobile Apps",
        "Custom Software",
        "API Integration"
      ]
    },
    {
      id: 2,
      title: "Marketing",
      icon: Megaphone,
      color: "from-orange-500 to-pink-500",
      services: [
        "Digital Strategy",
        "SEO Optimization",
        "Content Marketing",
        "Social Media"
      ]
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-purple-500 to-indigo-500",
      services: [
        "Cloud Migration",
        "CI/CD Pipeline",
        "Kubernetes",
        "Infrastructure"
      ]
    },
    {
      id: 4,
      title: "Data & AI",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      services: [
        "Machine Learning",
        "Data Analytics",
        "Business Intelligence",
        "Predictive Models"
      ]
    }
  ];

  const mainServices = [
    {
      id: 1,
      title: "Application Development",
      shortDesc: "Custom software solutions that scale",
      description: "Build powerful, scalable applications that drive business growth. We create custom solutions with cutting-edge technology and intuitive user experiences that your customers will love.",
      icon: Code2,
      gradient: "from-blue-600 to-cyan-600",
      lightGradient: "from-blue-500/20 to-cyan-500/20",
      accent: "blue",
      features: [
        "Full-stack development",
        "Microservices architecture",
        "API development",
        "Third-party integrations",
        "Performance optimization",
        "Security implementation"
      ],
      stats: [
        { value: "50+", label: "Apps Delivered", icon: Award },
        { value: "99.9%", label: "Uptime", icon: Shield },
        { value: "4.8/5", label: "Client Rating", icon: Star }
      ],
      image: app,
      position: "left"
    },
    {
      id: 2,
      title: "Digital Marketing",
      shortDesc: "Data-driven strategies that deliver results",
      description: "Data-driven marketing strategies that connect your brand with the right audience. We combine creativity with analytics to maximize your ROI and build lasting customer relationships.",
      icon: Megaphone,
      gradient: "from-orange-600 to-pink-600",
      lightGradient: "from-orange-500/20 to-pink-500/20",
      accent: "orange",
      features: [
        "SEO optimization",
        "Content strategy",
        "Social media management",
        "Email marketing",
        "PPC campaigns",
        "Analytics & reporting"
      ],
      stats: [
        { value: "200+", label: "Campaigns", icon: TrendingUp },
        { value: "3x", label: "ROI Average", icon: BarChart3 },
        { value: "50+", label: "Clients", icon: Users }
      ],
      image: dm,
      position: "right"
    },
    {
      id: 3,
      title: "Custom Software",
      shortDesc: "Tailored solutions for unique needs",
      description: "Tailored software solutions designed for your unique business needs. We build robust, secure, and scalable systems that streamline operations and drive efficiency.",
      icon: Laptop,
      gradient: "from-green-600 to-emerald-600",
      lightGradient: "from-green-500/20 to-emerald-500/20",
      accent: "green",
      features: [
        "Enterprise software",
        "CRM systems",
        "ERP solutions",
        "Automation tools",
        "Legacy modernization",
        "System integration"
      ],
      stats: [
        { value: "100%", label: "Custom Code", icon: Code2 },
        { value: "24/7", label: "Support", icon: Clock },
        { value: "99.9%", label: "Satisfaction", icon: Star }
      ],
      image: custom,
      position: "left"
    },
    {
      id: 4,
      title: "Mobile Apps",
      shortDesc: "Native & cross-platform excellence",
      description: "Native and cross-platform mobile applications that engage users and deliver exceptional performance across all devices and platforms, from iOS to Android.",
      icon: Smartphone,
      gradient: "from-purple-600 to-pink-600",
      lightGradient: "from-purple-500/20 to-pink-500/20",
      accent: "purple",
      features: [
        "iOS development",
        "Android development",
        "React Native",
        "Flutter",
        "App Store optimization",
        "Push notifications"
      ],
      stats: [
        { value: "5M+", label: "Downloads", icon: Users },
        { value: "4.9", label: "App Store Rating", icon: Star },
        { value: "50+", label: "Apps", icon: Award }
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      position: "right"
    },
    {
      id: 5,
      title: "Website Development",
      shortDesc: "Stunning, high-performance websites",
      description: "Stunning, high-performance websites that tell your story and convert visitors into customers. Modern design meets technical excellence for the perfect online presence.",
      icon: Globe,
      gradient: "from-cyan-600 to-blue-600",
      lightGradient: "from-cyan-500/20 to-blue-500/20",
      accent: "cyan",
      features: [
        "Responsive design",
        "E-commerce solutions",
        "CMS development",
        "Progressive web apps",
        "SEO optimization",
        "Performance tuning"
      ],
      stats: [
        { value: "500+", label: "Websites", icon: Globe },
        { value: "100%", label: "Responsive", icon: CheckCircle },
        { value: "0.1s", label: "Load Time", icon: Zap }
      ],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      position: "left"
    },
    {
      id: 6,
      title: "SEO & Analytics",
      shortDesc: "Dominate search rankings",
      description: "Comprehensive SEO strategies that boost your visibility and drive organic traffic. We help you rank higher, attract more visitors, and convert them into loyal customers.",
      icon: Search,
      gradient: "from-yellow-600 to-orange-600",
      lightGradient: "from-yellow-500/20 to-orange-500/20",
      accent: "yellow",
      features: [
        "Keyword research",
        "On-page SEO",
        "Technical SEO",
        "Link building",
        "Local SEO",
        "Analytics & reporting"
      ],
      stats: [
        { value: "#1", label: "Rankings", icon: Award },
        { value: "300%", label: "Traffic Growth", icon: TrendingUp },
        { value: "100+", label: "Keywords", icon: Search }
      ],
      image: SEO,
      position: "right"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your business goals, target audience, and project requirements to create a solid foundation.",
      icon: Users
    },
    {
      step: "02",
      title: "Strategy",
      description: "Our experts craft a comprehensive strategy tailored to your specific needs and market opportunities.",
      icon: Layers
    },
    {
      step: "03",
      title: "Design",
      description: "We create beautiful, intuitive designs that engage users and reflect your brand identity.",
      icon: Palette
    },
    {
      step: "04",
      title: "Development",
      description: "Our engineers bring your vision to life using cutting-edge technologies and best practices.",
      icon: Code2
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing ensures your product is bug-free, secure, and performs flawlessly.",
      icon: Shield
    },
    {
      step: "06",
      title: "Launch & Scale",
      description: "We deploy your solution and provide ongoing support to help you grow and succeed.",
      icon: Rocket
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "TypeScript", icon: "🔷", category: "Language" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "Kubernetes", icon: "⎈", category: "DevOps" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "GraphQL", icon: "◉", category: "API" },
    { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
    { name: "Figma", icon: "🎨", category: "Design" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Simple Background - No circles */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(120,80,255,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,80,200,0.1),transparent_70%)]" />
      </div>

      {/* Navigation - Simplified with animations */}
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
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group z-50">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20"
              >
                <img src={lolo1} alt="logo" className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg" />
              </motion.div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                veronic
              </span>
            </Link>

            {/* Desktop Navigation - Added Packages link */}
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
            <Link to="/book-demo" className="hidden md:block">
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

        {/* Mobile Menu Overlay - Added Packages link */}
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
                    transition={{ delay: 0.3 }}
                    className="pt-2"
                  >
                    <Link to="/book-demo" onClick={handleLinkClick}>
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

      {/* Hero Section - Exactly the same */}
      <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          }} />
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            <span className="text-xs sm:text-sm font-medium">Our Services</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/60 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
          >
            We deliver cutting-edge solutions that transform businesses and drive growth through innovation and technical expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4"
          >
            <button
              onClick={() => scrollToSection(overviewRef)}
              className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:opacity-90 transition-opacity"
            >
              <span className="flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection(processRef)}
              className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full border border-white/20 text-white font-semibold text-xs sm:text-sm md:text-base hover:bg-white/5 transition-colors"
            >
              How We Work
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Service Categories Overview - Icons Centered */}
      <section ref={overviewRef} id="overview" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              What We
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-2 sm:ml-3">
                Offer
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl mx-auto px-4">
              Comprehensive digital solutions tailored to your unique business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} p-3 sm:p-3.5 lg:p-4 mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center mx-auto`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-center">{category.title}</h3>
                  
                  <ul className="space-y-1.5 sm:space-y-2">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-center justify-center gap-1.5 sm:gap-2 text-white/60 text-xs sm:text-sm">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                        <span className="line-clamp-1">{service}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Services - Icons Centered */}
      <section className="relative py-12 sm:py-16 md:py-20">
        {mainServices.map((service, index) => {
          const Icon = service.icon;
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative min-h-screen flex items-center py-12 sm:py-16 md:py-20"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.lightGradient} pointer-events-none`} />
              
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  service.position === 'right' ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: service.position === 'left' ? -15 : 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 sm:space-y-5 lg:space-y-8"
                  >
                    <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white/5 select-none">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.gradient} p-3 sm:p-3.5 lg:p-4 flex-shrink-0 flex items-center justify-center`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-base sm:text-lg lg:text-xl text-purple-400 font-medium">
                      {service.shortDesc}
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 py-2 sm:py-3 lg:py-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                          <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 text-${service.accent}-500 flex-shrink-0`} />
                          <span className="text-xs sm:text-sm text-white/60">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 sm:gap-5 lg:gap-6 py-2 sm:py-3 lg:py-4">
                      {service.stats.map((stat, i) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                            <StatIcon className={`w-3 h-3 sm:w-4 sm:h-4 text-${service.accent}-500`} />
                            <div>
                              <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold">{stat.value}</div>
                              <div className="text-xs text-white/40">{stat.label}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative mt-6 lg:mt-0"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl sm:rounded-3xl blur-3xl opacity-20`} />
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Process Section - Icons Centered */}
      <section ref={processRef} id="process" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Our
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-2 sm:ml-3">
                Process
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl mx-auto px-4">
              A proven methodology that ensures successful delivery every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white/10 mb-3 sm:mb-4 text-center">{step.step}</div>
                  
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 sm:p-3.5 lg:p-4 mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center mx-auto">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-center">{step.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-white/60 text-center">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section - Icons Centered */}
      <section ref={techRef} id="tech" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Technologies We
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-2 sm:ml-3">
                Master
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl mx-auto px-4">
              We work with the latest and most reliable technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center transition-colors"
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 block">{tech.icon}</span>
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-0.5 sm:mb-1">{tech.name}</h3>
                <p className="text-xs text-white/40">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="cta" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-pink-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 sm:mb-6 lg:mb-8 mx-auto w-fit">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                <span className="text-xs sm:text-sm">Start Your Journey</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 lg:mb-6 text-center">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                  Digital Presence?
                </span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/60 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto px-2 text-center">
                Let's discuss how we can help you achieve your goals with our expertise and innovative solutions.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                {/* Packages Button - Now a link to Packages page */}
                <Link to="/packages">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-xs sm:text-sm lg:text-base hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <span className="flex items-center gap-2">
                      Packages
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                {/* Contact Button */}
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full border border-white/20 text-white font-semibold text-xs sm:text-sm lg:text-base hover:bg-white/5 transition-colors"
                  >
                    Contact
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
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

            {/* Services */}
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {['Web Development', 'Mobile Apps', 'Custom Software', 'Digital Marketing', 'SEO'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company - Added Packages link */}
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
    </div>
  );
};

export default ServicesPage;