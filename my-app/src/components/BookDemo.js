import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Play,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
  Menu,
  X,
  Video,
  Monitor,
  MessageCircle,
  Globe,
  Code2,
  Palette,
  Megaphone,
  Search,
  Cloud,
  Smartphone,
  PartyPopper,
  Calendar,
  Users,
  Target,
  Clock,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import lolo1 from "../images/lolo1.png";

// Custom Date Picker Component
const CustomDatePicker = ({ selected, onChange, minDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const pickerRef = useRef(null);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    const startDayOfWeek = firstDay.getDay();

    for (let i = 0; i < startDayOfWeek; i++) days.push(null);
    for (let i = 1; i <= lastDay.getDate(); i++)
      days.push(new Date(year, month, i));
    return days;
  };

  const isSameDay = (date1, date2) =>
    date1 &&
    date2 &&
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  const isDateDisabled = (date) => date < minDate;

  const handleDateSelect = (date) => {
    if (!isDateDisabled(date)) {
      onChange(date);
      setIsOpen(false);
    }
  };

  const formatDate = (date) =>
    date
      ? date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "";

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = getDaysInMonth(currentMonth);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={pickerRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-b-2 border-white/20 focus-within:border-purple-500 outline-none py-3 text-white cursor-pointer transition-all duration-300"
      >
        {selected ? formatDate(selected) : "Select a date"}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 bg-gray-900 border border-white/20 rounded-xl shadow-2xl p-4 w-80">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() - 1,
                  ),
                )
              }
              className="p-1 hover:bg-white/10 rounded-lg"
            >
              ←
            </button>
            <span className="text-white font-medium">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() + 1,
                  ),
                )
              }
              className="p-1 hover:bg-white/10 rounded-lg"
            >
              →
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-xs text-white/50 py-1">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((date, idx) => {
              if (!date) return <div key={idx} className="p-2" />;
              const isDisabled = isDateDisabled(date);
              const isSelected = isSameDay(date, selected);
              return (
                <button
                  key={idx}
                  onClick={() => handleDateSelect(date)}
                  disabled={isDisabled}
                  className={`p-2 text-center text-sm rounded-lg transition-all ${isSelected ? "bg-purple-500 text-white" : isDisabled ? "text-white/20 cursor-not-allowed" : "text-white/80 hover:bg-white/10"}`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// Success Modal
const SuccessModal = ({ isOpen, onClose, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative w-full max-w-md rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/20 shadow-2xl p-6 text-center"
      >
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
          <PartyPopper className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Demo Booked Successfully!
        </h3>
        <p className="text-white/60 text-sm mb-4">
          Thank you for scheduling a demo. Our team will contact you shortly.
        </p>
        <div className="bg-white/5 rounded-xl p-4 mb-6 text-left">
          <p className="text-xs text-white/40 mb-2">Demo Details:</p>
          <p className="text-sm text-white/80">
            <strong>Name:</strong> {formData.fullName}
            <br />
            <strong>Email:</strong> {formData.email}
            <br />
            <strong>Date:</strong>{" "}
            {formData.selectedDate
              ? formData.selectedDate.toLocaleDateString()
              : "N/A"}
            <br />
            <strong>Time:</strong> {formData.selectedTime}
            <br />
            <strong>Mode:</strong>{" "}
            {formData.demoMode === "online" ? "Online" : "Offline"}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform"
        >
          Great! Let's Get Started
        </button>
      </motion.div>
    </div>
  );
};

const BookDemo = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    demoMode: "online",
    platform: "google-meet",
    selectedDate: null,
    selectedTime: "",
    services: [],
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);

  const servicesList = [
    { id: "web", name: "Web Development", icon: Code2 },
    { id: "mobile", name: "Mobile Development", icon: Smartphone },
    { id: "uiux", name: "UI/UX Design", icon: Palette },
    { id: "marketing", name: "Digital Marketing", icon: Megaphone },
    { id: "seo", name: "SEO", icon: Search },
    { id: "cloud", name: "Cloud Solutions", icon: Cloud },
  ];

  const timeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
    setFormData({ ...formData, services: selectedServices });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) =>
    setFormData({ ...formData, selectedDate: date });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.selectedDate ||
      !formData.selectedTime ||
      selectedServices.length === 0
    ) {
      alert("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowSuccessModal(true);
    setIsSubmitting(false);

    // Reset form
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        demoMode: "online",
        platform: "google-meet",
        selectedDate: null,
        selectedTime: "",
        services: [],
        message: "",
      });
      setSelectedServices([]);
    }, 100);
  };

  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const heroRef = useRef(null);
  const bookingRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setNavbarScrolled(currentScrollPos > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleLinkClick = () => setIsMenuOpen(false);
  const scrollToSection = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.selectedDate &&
      formData.selectedTime &&
      selectedServices.length > 0
    );
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white font-sans overflow-x-hidden">
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal
            isOpen={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
            formData={formData}
          />
        )}
      </AnimatePresence>

      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(120,80,255,0.08),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(80,200,255,0.08),transparent_70%)]" />
      </div>

      {/* Navbar */}
      <motion.nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"} ${navbarScrolled ? "bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 group z-50"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <img
                  src={lolo1}
                  alt="logo"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                veronic
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {[
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
                { name: "Services", to: "/services" },
                { name: "Packages", to: "/packages" },
                { name: "Products", to: "/products" },
                { name: "Contact", to: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`relative px-2 py-1 text-sm lg:text-base font-medium transition-colors ${location.pathname === item.to ? "text-white" : "text-white/60 hover:text-white"}`}
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
            <Link to="/contact?demo=true" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 lg:px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg"
              >
                Book Demo <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors z-50"
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-16 left-0 right-0 mx-4 mt-2 md:hidden bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {[
                    { name: "Home", to: "/" },
                    { name: "About", to: "/about" },
                    { name: "Services", to: "/services" },
                    { name: "Packages", to: "/packages" },
                    { name: "Products", to: "/products" },
                    { name: "Contact", to: "/contact" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        className="block py-3 px-4 text-base text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl"
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
                    <Link to="/contact?demo=true" onClick={handleLinkClick}>
                      <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium">
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
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <motion.div
          style={{ scale: heroScale }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">
              Personalized Demo Experience
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            Book a
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Personalized Demo Experience
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto mb-10"
          >
            Discover how our digital marketing and development solutions can
            help grow your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(bookingRef)}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg shadow-lg"
            >
              Schedule Demo{" "}
              <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Booking Form Section */}
      <section ref={bookingRef} className="relative py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Schedule Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Personalized Demo
              </span>
            </h2>
            <p className="text-white/60">
              Fill out the form below and our team will contact you to confirm
              your demo session.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-white/20 focus:border-purple-500 outline-none py-3 text-white"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === "fullName" || formData.fullName ? "-top-4 text-xs text-purple-400" : "top-3 text-white/40"}`}
                >
                  Full Name *
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-white/20 focus:border-purple-500 outline-none py-3 text-white"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === "email" || formData.email ? "-top-4 text-xs text-purple-400" : "top-3 text-white/40"}`}
                >
                  Email Address *
                </label>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-white/20 focus:border-purple-500 outline-none py-3 text-white"
                  required
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === "phone" || formData.phone ? "-top-4 text-xs text-purple-400" : "top-3 text-white/40"}`}
                >
                  Phone Number *
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-white/20 focus:border-purple-500 outline-none py-3 text-white"
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === "company" || formData.company ? "-top-4 text-xs text-purple-400" : "top-3 text-white/40"}`}
                >
                  Company Name
                </label>
              </div>
            </div>

            {/* Demo Mode */}
            <div className="space-y-3">
              <label className="text-white/80 font-medium">Demo Mode *</label>
              <div className="flex gap-6">
                {["online", "offline"].map((mode) => (
                  <label
                    key={mode}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="radio"
                        name="demoMode"
                        value={mode}
                        checked={formData.demoMode === mode}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 transition-all ${formData.demoMode === mode ? "border-purple-500 bg-purple-500" : "border-white/30"}`}
                      >
                        {formData.demoMode === mode && (
                          <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                      </div>
                    </div>
                    <span
                      className={`capitalize ${formData.demoMode === mode ? "text-purple-400" : "text-white/60"}`}
                    >
                      {mode}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Platform Selection */}
            {formData.demoMode === "online" && (
              <div className="space-y-3">
                <label className="text-white/80 font-medium">
                  Preferred Platform *
                </label>
                <div className="flex flex-wrap gap-4">
                  {["google-meet", "zoom", "discord"].map((platform) => {
                    const icons = {
                      "google-meet": <Video className="w-4 h-4" />,
                      zoom: <Monitor className="w-4 h-4" />,
                      discord: <MessageCircle className="w-4 h-4" />,
                    };
                    return (
                      <label
                        key={platform}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all ${formData.platform === platform ? "border-purple-500 bg-purple-500/20" : "border-white/20 hover:border-white/40"}`}
                      >
                        <input
                          type="radio"
                          name="platform"
                          value={platform}
                          checked={formData.platform === platform}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        {icons[platform]}
                        <span className="capitalize text-sm">
                          {platform.replace("-", " ")}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white/80 font-medium">
                  Select Date *
                </label>
                <CustomDatePicker
                  selected={formData.selectedDate}
                  onChange={handleDateChange}
                  minDate={new Date()}
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-medium">
                  Select Time Slot *
                </label>
                <select
                  value={formData.selectedTime}
                  onChange={(e) =>
                    setFormData({ ...formData, selectedTime: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-white/20 focus:border-purple-500 outline-none py-3 text-white cursor-pointer"
                  required
                >
                  <option value="" className="bg-gray-900">
                    Select a time
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-gray-900">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <label className="text-white/80 font-medium">
                Services You're Interested In *
              </label>
              <div className="flex flex-wrap gap-3">
                {servicesList.map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceToggle(service.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${isSelected ? "border-purple-500 bg-purple-500/20" : "border-white/20 hover:border-white/40"}`}
                    >
                      <Icon
                        className={`w-4 h-4 ${isSelected ? "text-purple-400" : "text-white/60"}`}
                      />
                      <span
                        className={`text-sm ${isSelected ? "text-purple-400" : "text-white/70"}`}
                      >
                        {service.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows="3"
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-purple-500 outline-none py-3 text-white resize-none"
              />
              <label
                className={`absolute left-0 transition-all duration-300 pointer-events-none ${focusedField === "message" || formData.message ? "-top-4 text-xs text-purple-400" : "top-3 text-white/40"}`}
              >
                Message / Requirements
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                whileHover={
                  !isSubmitting && isFormValid() ? { scale: 1.05 } : {}
                }
                className={`px-12 py-4 rounded-full font-semibold text-lg shadow-lg transition-all ${isSubmitting || !isFormValid() ? "bg-gray-600 cursor-not-allowed opacity-50" : "bg-gradient-to-r from-purple-500 to-pink-500"}`}
              >
                {isSubmitting ? "Processing..." : "Book Demo Now"}
              </motion.button>
            </div>

            <p className="text-center text-white/40 text-sm">
              {!isFormValid() && "⚠️ Please fill all required fields"}
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <img src={lolo1} alt="logo" className="w-6 h-6 rounded-lg" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  veronic
                </span>
              </div>
              <p className="text-xs text-white/60">
                Building the future through innovative technology solutions.
              </p>
              <div className="flex gap-2 pt-2">
                {[
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/veronic_infotech",
                    label: "Instagram",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/veronicinfotech-glitch",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/company/veronic-infotech",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:veronic.infotech@gmail.com",
                    label: "Email",
                  },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10"
                    >
                      <Icon className="w-4 h-4 text-white/60 hover:text-purple-400" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3">Solutions</h4>
              <ul className="space-y-2">
                {[
                  "Cloud Services",
                  "Cybersecurity",
                  "AI & Automation",
                  "Data Analytics",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="/services"
                      className="text-xs text-white/60 hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-xs text-white/60 hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-xs text-white/60 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-xs text-white/60 hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/packages"
                    className="text-xs text-white/60 hover:text-white"
                  >
                    Packages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-xs text-white/60 hover:text-white"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-xs text-white/60 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-purple-400 mt-0.5" />
                  <Link
                    to="/contact"
                    className="text-xs text-white/60 hover:text-purple-400"
                  >
                    veronic.infotech@gmail.com
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-purple-400 mt-0.5" />
                  <Link
                    to="/contact"
                    className="text-xs text-white/60 hover:text-purple-400"
                  >
                    +91 95106 53051
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                  <Link
                    to="/contact"
                    className="text-xs text-white/60 hover:text-purple-400 leading-relaxed"
                  >
                    Rao InfoTech, University Road, Rajkot, Gujarat 360005
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-white/40">
              © 2026 veronic. All rights reserved. | Built with innovation for
              the future
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookDemo;
