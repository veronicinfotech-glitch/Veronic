import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  Play,
  Code2,
  Palette,
  Search,
  Smartphone,
  Globe,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
  Menu,
  X,
  Award,
  Rocket,
  Crown,
  Gem,
  Target,
  BarChart3,
  Clock,
  Layers,
  Camera,
  Video,
  Layout,
  Database,
  ShoppingCart,
  Settings,
  BarChart,
  Megaphone,
  Cloud,
  Bot,
  LineChart,
  Briefcase,
  Workflow,
  Factory,
  Instagram as InstagramIcon,
  Cpu as CpuIcon,
  Sparkles as SparklesIcon,
} from "lucide-react";

import lolo1 from "../images/lolo1.png";

// Website Packages Modal Component
const WebsitePackagesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const subPackages = [
    {
      id: 1,
      title: "Starter Website",
      price: "$18,000",
      description:
        "Perfect for small businesses starting their online presence",
      features: [
        "5 page website",
        "Mobile responsive",
        "Contact form",
        "WhatsApp chat",
        "Basic SEO setup",
        "Google map integration",
      ],
      platformCosts: {
        domain: "$800 – $1,200 / year",
        hosting: "$3,000 – $5,000 / year",
        extra: null,
      },
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
      badge: "Basic Package",
      color: "blue",
      setupTime: "2-3 Weeks",
    },
    {
      id: 2,
      title: "Business Website",
      price: "$35,000",
      description: "Comprehensive solution for growing businesses",
      features: [
        "8-10 pages website",
        "Custom UI design",
        "CMS dashboard",
        "Lead capture forms",
        "Blog system",
        "Speed optimization",
        "Basic analytics",
      ],
      platformCosts: {
        domain: "$800 – $1,200 / year",
        hosting: "$4,000 – $6,000 / year",
        extra: null,
      },
      icon: Layout,
      gradient: "from-purple-500 to-pink-500",
      badge: "Popular Choice",
      color: "purple",
      setupTime: "3-4 Weeks",
    },
    {
      id: 3,
      title: "Professional Website",
      price: "$60,000",
      description:
        "Advanced website with premium features for established businesses",
      features: [
        "10-15 pages website",
        "Premium UI/UX design",
        "CMS system",
        "Landing pages",
        "Payment gateway integration",
        "Advanced SEO setup",
        "Lead management integration",
      ],
      platformCosts: {
        domain: "$800 – $1,200 / year",
        hosting: "$6,000 – $10,000 / year",
        extra: "Payment gateway charges: ~2% per transaction",
      },
      icon: Crown,
      gradient: "from-cyan-500 to-blue-500",
      badge: "Professional",
      color: "cyan",
      setupTime: "4-5 Weeks",
    },
    {
      id: 4,
      title: "Advanced Web System",
      price: "$90,000 – $120,000",
      description: "Custom web application with full-scale system architecture",
      features: [
        "Custom web application",
        "Admin panel",
        "User login system",
        "Database architecture",
        "API integrations",
        "Security system",
        "Analytics dashboard",
      ],
      platformCosts: {
        domain: "$800 – $1,200 / year",
        hosting: "$10,000 – $25,000 / year",
        extra: "Cloud hosting (premium infrastructure)",
      },
      icon: Database,
      gradient: "from-pink-500 to-rose-500",
      badge: "Enterprise",
      color: "pink",
      setupTime: "5-6 Weeks",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/20 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/70 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                    <Layout className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400">
                      Website & Basic Integration Packages
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    Complete Business Website Solutions
                  </h2>
                  <p className="text-white/60 text-base max-w-2xl mx-auto">
                    Choose the perfect website package for your business needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {subPackages.map((pkg, index) => {
                    const Icon = pkg.icon;
                    return (
                      <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                      >
                        <div
                          className={`h-full flex flex-col p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20`}
                        >
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${pkg.color}-500/20 border border-${pkg.color}-500/30 mb-4 self-start`}
                          >
                            <Icon className={`w-3 h-3 text-${pkg.color}-400`} />
                            <span className={`text-xs text-${pkg.color}-400`}>
                              {pkg.badge}
                            </span>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}
                          >
                            {pkg.title}
                          </h3>
                          <div
                            className={`text-xl font-bold text-${pkg.color}-400 mb-3`}
                          >
                            {pkg.price}
                          </div>
                          <div className="space-y-1.5 mb-4 flex-grow">
                            {pkg.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle
                                  className={`w-3 h-3 text-${pkg.color}-400 flex-shrink-0 mt-0.5`}
                                />
                                <span className="text-xs text-white/70">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-white/10">
                            <div className="text-xs text-white/40 mb-2 font-semibold">
                              Platform Costs
                            </div>
                            <div className="space-y-1.5">
                              <div className="flex justify-between text-xs">
                                <span className="text-white/50">Domain</span>
                                <span className="text-white/80 font-medium">
                                  {pkg.platformCosts.domain}
                                </span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-white/50">Hosting</span>
                                <span className="text-white/80 font-medium">
                                  {pkg.platformCosts.hosting}
                                </span>
                              </div>
                              {pkg.platformCosts.extra && (
                                <div className="text-xs text-amber-400/80 mt-1 pt-1 border-t border-white/5">
                                  {pkg.platformCosts.extra}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between text-xs pt-2">
                            <span className="text-white/40">Setup Time</span>
                            <span className="text-white/80">
                              {pkg.setupTime}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-white/10">
                  <Link to="/contact" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link to="/book-demo" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" /> Book a Demo
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Automation Packages Modal Component
const AutomationPackagesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const automationPackages = [
    {
      id: 1,
      title: "Basic Business System",
      price: "₹65,000",
      description: "Essential automation tools for small businesses",
      features: [
        "Admin dashboard",
        "Customer database",
        "Billing system",
        "Basic inventory",
        "Sales reports",
        "User roles",
      ],
      platformCosts: {
        cloudHosting: "₹8,000 – ₹12,000 / year",
        extra: null,
      },
      icon: Settings,
      gradient: "from-blue-500 to-cyan-500",
      badge: "Essential",
      color: "blue",
      setupTime: "2-3 Weeks",
    },
    {
      id: 2,
      title: "Business Management System",
      price: "₹1,10,000",
      description: "Comprehensive management solution for growing businesses",
      features: [
        "CRM system",
        "Lead management",
        "Inventory management",
        "Billing & invoices",
        "Supplier management",
        "Sales analytics",
        "Notification system",
      ],
      platformCosts: {
        cloudHosting: "₹10,000 – ₹15,000 / year",
        extra: null,
      },
      icon: Briefcase,
      gradient: "from-purple-500 to-pink-500",
      badge: "Popular",
      color: "purple",
      setupTime: "3-4 Weeks",
    },
    {
      id: 3,
      title: "Advanced Business Automation",
      price: "₹1,75,000",
      description: "Advanced automation for established businesses",
      features: [
        "Full CRM",
        "Inventory & purchase management",
        "Order management",
        "Workflow automation",
        "Analytics dashboard",
        "Document management",
      ],
      platformCosts: {
        cloudHosting: "₹12,000 – ₹20,000 / year",
        extra: null,
      },
      icon: Workflow,
      gradient: "from-cyan-500 to-blue-500",
      badge: "Advanced",
      color: "cyan",
      setupTime: "4-5 Weeks",
    },
    {
      id: 4,
      title: "Enterprise Business System",
      price: "₹2,50,000 – ₹4,00,000",
      description: "Complete enterprise-level business automation",
      features: [
        "Full ERP system",
        "Multi-branch management",
        "Custom modules",
        "API integrations",
        "Automation workflows",
        "Business intelligence dashboard",
      ],
      platformCosts: {
        cloudHosting: "₹20,000 – ₹50,000 / year",
        extra: "SMS / WhatsApp API charges (pay as you go)",
      },
      icon: Factory,
      gradient: "from-pink-500 to-rose-500",
      badge: "Enterprise",
      color: "pink",
      setupTime: "6-8 Weeks",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/20 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/70 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                    <Database className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400">
                      Business Automation Packages
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    Complete Business Automation Solutions
                  </h2>
                  <p className="text-white/60 text-base max-w-2xl mx-auto">
                    Streamline your operations with our comprehensive automation
                    systems. Choose the perfect package for your business needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {automationPackages.map((pkg, index) => {
                    const Icon = pkg.icon;
                    return (
                      <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                      >
                        <div
                          className={`h-full flex flex-col p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20`}
                        >
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${pkg.color}-500/20 border border-${pkg.color}-500/30 mb-4 self-start`}
                          >
                            <Icon className={`w-3 h-3 text-${pkg.color}-400`} />
                            <span className={`text-xs text-${pkg.color}-400`}>
                              {pkg.badge}
                            </span>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}
                          >
                            {pkg.title}
                          </h3>
                          <div
                            className={`text-xl font-bold text-${pkg.color}-400 mb-3`}
                          >
                            {pkg.price}
                          </div>
                          <div className="space-y-1.5 mb-4 flex-grow">
                            {pkg.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle
                                  className={`w-3 h-3 text-${pkg.color}-400 flex-shrink-0 mt-0.5`}
                                />
                                <span className="text-xs text-white/70">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-white/10">
                            <div className="text-xs text-white/40 mb-2 font-semibold">
                              Platform Costs
                            </div>
                            <div className="space-y-1.5">
                              <div className="flex justify-between text-xs">
                                <span className="text-white/50">
                                  Cloud Hosting
                                </span>
                                <span className="text-white/80 font-medium">
                                  {pkg.platformCosts.cloudHosting}
                                </span>
                              </div>
                              {pkg.platformCosts.extra && (
                                <div className="text-xs text-amber-400/80 mt-1 pt-1 border-t border-white/5">
                                  {pkg.platformCosts.extra}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between text-xs pt-2">
                            <span className="text-white/40">Setup Time</span>
                            <span className="text-white/80">
                              {pkg.setupTime}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-white/10">
                  <Link to="/contact" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link to="/book-demo" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" /> Book a Demo
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Marketing & Growth Packages Modal Component
const MarketingPackagesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const marketingPackages = [
    {
      id: 1,
      title: "BASIC - Online Presence",
      price: "₹18,000",
      description: "Best for small businesses starting their digital journey",
      features: [
        "Social media profile setup (Instagram + Facebook)",
        "9 professional social media posts",
        "4 reels",
        "GMB Profile",
        "Basic brand design (logo polish + colors)",
        "Monthly Report",
        "Content Calendar",
      ],
      results: [
        "Your business becomes searchable online",
        "Professional brand presence",
        "Customers can contact easily",
      ],
      icon: InstagramIcon,
      gradient: "from-blue-500 to-cyan-500",
      badge: "Basic",
      color: "blue",
      deliveryTime: "1-2 Weeks",
    },
    {
      id: 2,
      title: "GROWTH – Lead Generation System",
      price: "₹35,000",
      description: "Best for businesses that want consistent inquiries",
      features: [
        "Everything in Basic",
        "Google Business Profile optimization",
        "Professional website (5–8 pages)",
        "Mobile responsive design",
        "Basic SEO Optimization",
        "Just Dial business profile",
        "Google Business ranking optimization",
      ],
      results: [
        "Website that converts visitors into leads",
        "Social media growth",
        "Regular inquiries from ads",
      ],
      icon: Target,
      gradient: "from-purple-500 to-pink-500",
      badge: "Growth",
      color: "purple",
      deliveryTime: "3-4 Weeks",
    },
    {
      id: 3,
      title: "ADVANCED – Smart Business Automation",
      price: "₹75,000",
      description: "Best for businesses that want automation and scalability",
      features: [
        "Everything in Growth",
        "Custom Web Application / Admin Panel",
        "CRM system for lead management",
        "Banner and Poster",
      ],
      results: [
        "Performance analytics dashboard",
        "Conversion funnel setup",
      ],
      icon: CpuIcon,
      gradient: "from-cyan-500 to-blue-500",
      badge: "Advanced",
      color: "cyan",
      deliveryTime: "4-5 Weeks",
    },
    {
      id: 4,
      title: "ENTERPRISE – Full Digital Ecosystem",
      price: "₹1,20,000+",
      description: "Best for companies ready to dominate their market",
      features: [
        "Everything in Advanced",
        "Custom AI workflow automation",
        "Multi-platform integrations",
        "Inventory / billing / CRM modules",
        "Full marketing funnel system",
        "Google + Meta Ads management",
        "Retargeting system",
        "Data-driven growth strategy",
        "Monthly performance consultation",
      ],
      results: [
        "End-to-end digital infrastructure",
        "Predictable lead generation",
        "Scalable business growth",
      ],
      icon: Rocket,
      gradient: "from-pink-500 to-rose-500",
      badge: "Enterprise",
      color: "pink",
      deliveryTime: "6-8 Weeks",
    },
  ];

  const addOnFeatures = [
    {
      category: "Web Development",
      items: [
        { name: "E-commerce store", price: "₹20,000" },
        { name: "Payment gateway", price: "₹5,000" },
        { name: "Landing page", price: "₹8,000" },
        { name: "Custom admin panel", price: "₹15,000" },
      ],
      icon: Code2,
    },
    {
      category: "Automation & AI",
      items: [
        { name: "WhatsApp AI assistant", price: "₹20,000" },
        { name: "Advanced chatbot", price: "₹30,000" },
        { name: "Lead automation system", price: "₹20,000" },
        { name: "AI analytics dashboard", price: "₹25,000" },
      ],
      icon: Bot,
    },
    {
      category: "Digital Marketing",
      items: [
        { name: "Local SEO", price: "₹6,000/month" },
        { name: "Google Ads", price: "₹12,000/month" },
        { name: "Meta Ads", price: "₹12,000/month" },
        { name: "Reel creation", price: "₹1,000/reel" },
        { name: "Post creation", price: "₹400/Creative Post" },
      ],
      icon: Megaphone,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/20 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/70 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                    <Megaphone className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-400">
                      Marketing & Growth Packages
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    Complete Marketing & Growth Solutions
                  </h2>
                  <p className="text-white/60 text-base max-w-2xl mx-auto">
                    Scale your business with our comprehensive marketing and
                    growth packages. Choose the perfect plan for your business
                    goals.
                  </p>
                </div>

                {/* 4 Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {marketingPackages.map((pkg, index) => {
                    const Icon = pkg.icon;
                    return (
                      <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                      >
                        <div
                          className={`h-full flex flex-col p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20`}
                        >
                          {/* Badge */}
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${pkg.color}-500/20 border border-${pkg.color}-500/30 mb-4 self-start`}
                          >
                            <Icon className={`w-3 h-3 text-${pkg.color}-400`} />
                            <span className={`text-xs text-${pkg.color}-400`}>
                              {pkg.badge}
                            </span>
                          </div>

                          {/* Title */}
                          <h3
                            className={`text-base font-bold mb-2 bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent leading-tight`}
                          >
                            {pkg.title}
                          </h3>

                          {/* Price */}
                          <div
                            className={`text-xl font-bold text-${pkg.color}-400 mb-3`}
                          >
                            {pkg.price}
                          </div>

                          {/* Description */}
                          <p className="text-xs text-white/50 mb-3 italic">
                            {pkg.description}
                          </p>

                          {/* Features */}
                          <div className="space-y-1.5 mb-4 flex-grow">
                            {pkg.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle
                                  className={`w-3 h-3 text-${pkg.color}-400 flex-shrink-0 mt-0.5`}
                                />
                                <span className="text-xs text-white/70">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Results Section */}
                          <div className="mt-3 pt-3 border-t border-white/10">
                            <div className="text-xs text-amber-400/80 mb-2 font-semibold flex items-center gap-1">
                              <Star className="w-3 h-3" /> Result:
                            </div>
                            {pkg.results.map((result, idx) => (
                              <div key={idx} className="flex items-start gap-2 mb-1">
                                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-xs text-white/60">
                                  {result}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Delivery Time */}
                          <div className="mt-3 flex items-center justify-between text-xs pt-2">
                            <span className="text-white/40">Delivery Time</span>
                            <span className="text-white/80">
                              {pkg.deliveryTime}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Add-On Features Section */}
                <div className="mt-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                      <SparklesIcon className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-400">
                        Customize Your Package
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Add-On Features
                    </h3>
                    <p className="text-white/60 text-sm mt-2">
                      Clients can customize their package with these additional
                      features
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {addOnFeatures.map((category, idx) => {
                      const CategoryIcon = category.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-5"
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-lg bg-purple-500/20">
                              <CategoryIcon className="w-4 h-4 text-purple-400" />
                            </div>
                            <h4 className="text-base font-semibold text-white">
                              {category.category}
                            </h4>
                          </div>
                          <div className="space-y-2">
                            {category.items.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="flex justify-between items-center py-2 border-b border-white/10"
                              >
                                <span className="text-xs text-white/70">
                                  {item.name}
                                </span>
                                <span className="text-xs font-semibold text-purple-400">
                                  {item.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-6 border-t border-white/10">
                  <Link to="/contact" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link to="/book-demo" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" /> Book a Demo
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const PackagesPage = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isWebsiteModalOpen, setIsWebsiteModalOpen] = useState(false);
  const [isAutomationModalOpen, setIsAutomationModalOpen] = useState(false);
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false);

  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const heroRef = useRef(null);
  const showcaseRef = useRef(null);
  const comparisonRef = useRef(null);
  const ctaRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const packages = [
    {
      id: 1,
      title: "COMPLETE BUSINESS WEBSITE PACKAGE",
      price: "₹20,999 – ₹1,19,999",
      description: "Complete business website package for your online presence",
      features: [
        "8–10 PAGE PROFESSIONAL WEBSITE",
        "MOBILE OPTIMIZED DESIGN",
        "CUSTOM UI/UX LAYOUT",
        "CMS DASHBOARD ACCESS",
        "LEAD CAPTURE + WHATSAPP CHAT",
        "SEO SETUP + GOOGLE BUSINESS",
        "BLOG & GALLERY SYSTEM",
        "ANALYTICS + SECURITY SETUP",
      ],
      icon: Layout,
      gradient: "from-blue-500 to-cyan-500",
      badge: "Website Solution",
      color: "blue",
    },
    {
      id: 2,
      title: "BUSINESS AUTOMATION SYSTEM",
      price: "₹64,999 – ₹3,99,999",
      description:
        "Complete business automation system for streamlined operations",
      features: [
        "SMART ADMIN DASHBOARD",
        "CRM & LEAD MANAGEMENT",
        "INVENTORY & STOCK CONTROL",
        "BILLING & INVOICE SYSTEM",
        "PURCHASE & SUPPLIER MANAGEMENT",
        "ORDER MANAGEMENT",
        "WORKFLOW AUTOMATION",
        "SMS / WHATSAPP NOTIFICATIONS",
      ],
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      badge: "Automation Solution",
      color: "purple",
    },
    {
      id: 3,
      title: "MARKETING & GROWTH SYSTEM",
      price: "₹24,999 – ₹3,49,999",
      description:
        "Complete marketing and growth system for business expansion",
      features: [
        "GOOGLE & META ADS MANAGEMENT",
        "PROFESSIONAL POSTS, REELS & CREATIVES",
        "BASIC SEO & GOOGLE RANKING SETUP",
        "CRM FOR LEAD MANAGEMENT",
        "CONVERSION FUNNEL SETUP",
        "MARKETING ANALYTICS DASHBOARD",
        "SOCIAL MEDIA SETUP & CONTENT STRATEGY",
      ],
      icon: Megaphone,
      gradient: "from-green-500 to-emerald-500",
      badge: "Growth Solution",
      color: "green",
    },
  ];

  const handleShowMore = (pkg) => {
    if (pkg.id === 1) {
      setIsWebsiteModalOpen(true);
    } else if (pkg.id === 2) {
      setIsAutomationModalOpen(true);
    } else if (pkg.id === 3) {
      setIsMarketingModalOpen(true);
    }
  };

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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      if (currentScrollPos > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white font-sans overflow-x-hidden">
      <WebsitePackagesModal
        isOpen={isWebsiteModalOpen}
        onClose={() => setIsWebsiteModalOpen(false)}
      />
      <AutomationPackagesModal
        isOpen={isAutomationModalOpen}
        onClose={() => setIsAutomationModalOpen(false)}
      />
      <MarketingPackagesModal
        isOpen={isMarketingModalOpen}
        onClose={() => setIsMarketingModalOpen(false)}
      />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(120,80,255,0.08),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(80,200,255,0.08),transparent_70%)]" />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"} ${navbarScrolled ? "bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 group z-50"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20"
              >
                <img
                  src={lolo1}
                  alt="logo"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
                />
              </motion.div>
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
                  className={`relative px-2 py-1 text-sm lg:text-base font-medium transition-colors whitespace-nowrap ${location.pathname === item.to ? "text-white" : "text-white/60 hover:text-white"}`}
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
            <Link to="/book-demo" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 lg:px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-sm lg:text-base shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow"
              >
                Book Demo <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
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
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
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

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Pricing Plans</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Flexible Packages
            </span>
            <br />
            <span className="text-white">for Every Business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10"
          >
            Choose the perfect plan for your digital growth and development
            needs.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={() => scrollToSection(showcaseRef)}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Explore Packages{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      <section
        ref={showcaseRef}
        className="relative py-24 sm:py-32 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Choose Your{" "}
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Growth Path
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={scaleIn}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${pkg.color}-500/20 border border-${pkg.color}-500/30 mb-6`}
                    >
                      <Icon className={`w-3 h-3 text-${pkg.color}-400`} />
                      <span className={`text-xs text-${pkg.color}-400`}>
                        {pkg.badge}
                      </span>
                    </div>
                    <h3
                      className={`text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}
                    >
                      {pkg.title}
                    </h3>
                    <div
                      className={`text-2xl sm:text-3xl font-bold text-${pkg.color}-400 mb-6`}
                    >
                      {pkg.price}
                    </div>
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            className={`w-4 h-4 text-${pkg.color}-400 flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-sm text-white/70">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleShowMore(pkg)}
                      className={`group w-full py-3 rounded-full bg-gradient-to-r ${pkg.gradient} font-semibold text-white transition-all`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Show More{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        ref={comparisonRef}
        className="relative py-24 sm:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Compare{" "}
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Packages at a Glance
              </span>
            </h2>
          </motion.div>
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={scaleIn}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br from-${pkg.color}-500/5 to-transparent border border-${pkg.color}-500/20`}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-${pkg.color}-500/20 flex items-center justify-center mb-4`}
                  >
                    {idx === 0 && (
                      <Layout className={`w-6 h-6 text-${pkg.color}-400`} />
                    )}
                    {idx === 1 && (
                      <Database className={`w-6 h-6 text-${pkg.color}-400`} />
                    )}
                    {idx === 2 && (
                      <Megaphone className={`w-6 h-6 text-${pkg.color}-400`} />
                    )}
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-2 text-${pkg.color}-400`}
                  >
                    {pkg.title.split(" ")[0]}
                  </h3>
                  <div className={`text-xl font-bold mb-4 text-white`}>
                    {pkg.price}
                  </div>
                  <div className="space-y-2 mb-4">
                    {pkg.features.slice(0, 4).map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-white/70 text-sm"
                      >
                        <CheckCircle
                          className={`w-3 h-3 text-${pkg.color}-400`}
                        />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-white/40 mb-1">Best for</div>
                    <div className="text-sm font-semibold text-white/80">
                      {idx === 0 && "Businesses needing website presence"}
                      {idx === 1 && "Companies requiring automation"}
                      {idx === 2 && "Businesses focused on growth"}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
            className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-3">
                <Rocket className="w-8 h-8 text-purple-400" />
                <div>
                  <div className="text-sm text-white/40">Scalability</div>
                  <div className="font-semibold">Start → Scale → Dominate</div>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-cyan-400" />
                <div>
                  <div className="text-sm text-white/40">Perfect For</div>
                  <div className="font-semibold">Every Business Stage</div>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-pink-400" />
                <div>
                  <div className="text-sm text-white/40">Setup Time</div>
                  <div className="font-semibold">2-4 Weeks</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={ctaRef} className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtMC0yMGEyMCAyMCAwIDAgMSAwIDQwIDIwIDIwIDAgMCAxIDAtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] opacity-10" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Play className="w-4 h-4" />
              <span className="text-sm">Start Your Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Choose the Right Package
              <span className="block text-white mt-2">for Your Growth</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Start your journey with our expert digital solutions. Transform
              your business today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/25 transition-all"
                >
                  <span className="flex items-center gap-2">
                    Get Started Now{" "}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              <Link to="/book-demo">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
  >
    Book a Demo
  </motion.button>
</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                "30-Day Money Back",
                "24/7 Support",
                "No Hidden Fees",
                "Flexible Terms",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-white/60" />
                  <span className="text-white/80 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative py-12 sm:py-16 border-t border-white/10 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
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
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Building the future through innovative technology solutions.
              </p>
              <div className="flex gap-2 sm:gap-3 pt-2">
                {[
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/veronic_infotech?igsh=ZndleDdjajRxYjNq",
                    label: "Instagram",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/veronicinfotech-glitch",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/company/veronic-infotech/?viewAsMember=true",
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
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-purple-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">
                Solutions
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {[
                  "Cloud Services",
                  "Cybersecurity",
                  "AI & Automation",
                  "Data Analytics",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="/services"
                      className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">
                Company
              </h4>
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
                    to="/packages"
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Packages
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
            <div>
              <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">
                Contact
              </h4>
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
          <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
            <p className="text-xs sm:text-sm text-white/40">
              © 2026 veronic. All rights reserved. | Built with innovation for
              the future
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PackagesPage;