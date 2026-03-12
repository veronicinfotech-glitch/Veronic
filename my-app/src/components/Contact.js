import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  ArrowRight,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  AlertCircle
} from "lucide-react";

import lolo1 from "../images/lolo1.png";

const Contact = () => {
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Refs
  const mobileMenuRef = useRef(null);
  const navbarRef = useRef(null);
  
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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  // Handle link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "veronic.infotech@gmail.com",
      link: "mailto:veronic.infotech@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 95106 53051 , +91 95104 69165",
      link: "tel:+919510653051",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Rao InfoTech, University Road, Behind Shilpan Onyx, Rajkot, Gujarat 360005",
      link: "https://www.google.com/maps/search/Rao+InfoTech+University+Road+Rajkot",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/veronicinfotech-glitch", label: "GitHub", color: "hover:bg-gray-800" },
    // { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-blue-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/veronic-infotech/?viewAsMember=true", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Instagram, href: "https://www.instagram.com/veronic_infotech?igsh=ZndleDdjajRxYjNq", label: "Instagram", color: "hover:bg-pink-600" }
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
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-64 h-64 border border-purple-500/10 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 border border-pink-500/10 rounded-full"
        />
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

      {/* Main Content */}
      <main className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          
          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 sm:mb-6"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm font-medium">Get in Touch</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 px-2"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto px-4"
            >
              Let's build something amazing together.
            </motion.p>
          </motion.div>

          {/* Split Screen Contact Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-start">
            
            {/* Left Side - Contact Information */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6 sm:space-y-8 lg:space-y-10"
            >
              {/* Intro Text */}
              <motion.p 
                variants={fadeInLeft}
                className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed px-2 sm:px-0"
              >
                Have a project in mind? We'd love to hear about it. 
                Drop us a message and we'll get back to you within 24 hours.
              </motion.p>

              {/* Contact Info List */}
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeInLeft}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="group flex items-center gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all"
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} p-2 sm:p-2.5 lg:p-3 group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm text-white/40 mb-0.5 sm:mb-1">{item.title}</div>
                        <div className="text-sm sm:text-base lg:text-lg font-medium text-white group-hover:text-purple-400 transition-colors break-words">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <motion.div variants={fadeInLeft} className="pt-2 sm:pt-4">
                <h3 className="text-xs sm:text-sm font-medium text-white/40 mb-3 sm:mb-4 tracking-wider px-2 sm:px-0">FOLLOW US</h3>
                <div className="flex gap-3 sm:gap-4 px-2 sm:px-0">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-purple-500/50 transition-all ${social.color}`}
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div variants={fadeInLeft} className="pt-2 sm:pt-4">
                <div className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xs sm:text-sm font-medium text-white/40 mb-2 sm:mb-3 tracking-wider">OFFICE HOURS</h3>
                  <div className="space-y-1.5 sm:space-y-2 text-white/80 text-xs sm:text-sm lg:text-base">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-purple-400">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-purple-400">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-purple-400">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="relative mt-6 lg:mt-0"
            >
              {/* Form Container */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-3xl" />
                
                {/* Form */}
                <form 
                  onSubmit={handleSubmit}
                  className="relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 lg:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Send a Message
                  </h2>

                  {/* Name Input */}
                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-white/60 mb-1.5 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-white placeholder-white/30 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-white/60 mb-1.5 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-white placeholder-white/30 text-sm sm:text-base"
                      placeholder="hello@veronic.com"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-5 sm:mb-6 lg:mb-8">
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-white/60 mb-1.5 sm:mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-white placeholder-white/30 text-sm sm:text-base resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button with Status */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base ${
                      formStatus === 'success'
                        ? 'bg-green-500 text-white'
                        : formStatus === 'submitting'
                        ? 'bg-purple-500/50 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Success Message */}
                  <AnimatePresence>
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -bottom-12 sm:-bottom-16 left-0 right-0 text-center"
                      >
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">Thank you! We'll get back to you soon.</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Form Note */}
                  <p className="text-xs text-white/30 text-center mt-4 sm:mt-5 lg:mt-6">
                    We'll never share your information with anyone else.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Simple Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 sm:mt-16 lg:mt-20 text-white/40 text-xs sm:text-sm"
          >
            <p>© 2026 veronic. All rights reserved.</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;