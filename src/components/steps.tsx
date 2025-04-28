import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeContext } from "@/providers/ThemeProvider";
import { 
  Calendar, 
  Code, 
  Database, 
  Globe, 
  Key, 
  Lock,
  MessageSquare,
  Rocket,
  Server,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from "lucide-react";

export default function EnhancedAutoTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const progressRef = useRef(null);
  
  // Get theme from context
  const context = useThemeContext();
  const theme = context?.theme || null;

  // Theme variables with fallbacks but using some custom values for variety
  const primaryColor = "#6366f1"; // Custom primary
  const secondaryColor = theme?.secondaryColor || "#3a0ca3";
  const accentColor = "#ec4899"; // Custom accent
  const backgroundColor = theme?.backgroundColor || "#f8fafc";
  const textColor = theme?.textColor || "#1e293b";
  const cardBorderRadius = theme?.cardBorderRadius || "0.75rem";
  const cardShadow = theme?.cardShadow || "0 10px 25px -5px rgba(0, 0, 0, 0.1)";
  const buttonBorderRadius = theme?.buttonBorderRadius || "0.5rem";

  const timelineItems = [
    {
      id: 1,
      title: "Discover",
      subTitle: "Find the perfect API",
      icon: <Globe size={24} />,
      color: primaryColor,
      description: "Browse our marketplace of hundreds of APIs across different categories and industries. Filter by functionality, pricing, and popularity to find exactly what you need.",
      stats: [
        { label: "APIs Available", value: "500+" },
        { label: "Categories", value: "12" }
      ]
    },
    {
      id: 2,
      title: "Connect",
      subTitle: "Secure authentication",
      icon: <Key size={24} />,
      color: secondaryColor,
      description: "Generate API keys and set up secure authentication for your applications. Our dashboard makes managing keys and permissions straightforward and secure.",
      stats: [
        { label: "Auth Methods", value: "4" },
        { label: "Setup Time", value: "< 5 min" }
      ]
    },
    {
      id: 3,
      title: "Test",
      subTitle: "Try before you integrate",
      icon: <Code size={24} />,
      color: accentColor,
      description: "Use our interactive console to test API calls before implementing them. Visualize responses and understand data structure before writing any code.",
      stats: [
        { label: "Test Environments", value: "3" },
        { label: "Response Time", value: "Fast" }
      ]
    },
    {
      id: 4,
      title: "Integrate",
      subTitle: "Seamless implementation",
      icon: <Server size={24} />,
      color: "#10b981", // Success green
      description: "Add our APIs to your application with SDKs for all major programming languages. Copy-paste code snippets get you up and running in minutes, not hours.",
      stats: [
        { label: "SDK Languages", value: "8" },
        { label: "Documentation", value: "Complete" }
      ]
    },
    {
      id: 5,
      title: "Monitor",
      subTitle: "Track performance",
      icon: <Database size={24} />,
      color: theme?.warningColor || "#f59e0b",
      description: "Keep track of your API usage, performance metrics and error rates. Set up alerts and notifications to stay informed about your integration health.",
      stats: [
        { label: "Metrics Tracked", value: "15+" },
        { label: "Update Frequency", value: "Real-time" }
      ]
    },
    {
      id: 6,
      title: "Scale",
      subTitle: "Grow without limits",
      icon: <Rocket size={24} />,
      color: theme?.errorColor || "#ef4444",
      description: "Our APIs are built to handle millions of requests as your business grows. Flexible pricing tiers ensure you only pay for what you need at each stage.",
      stats: [
        { label: "Uptime", value: "99.99%" },
        { label: "Rate Limits", value: "Customizable" }
      ]
    }
  ];

  // Handle auto-progression with smooth animation
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % timelineItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, timelineItems.length]);

  // Handle manual navigation
  const navigate = (newIndex) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
    setIsPaused(true);
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % timelineItems.length);
    setIsPaused(true);
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + timelineItems.length) % timelineItems.length);
    setIsPaused(true);
  };

  // Animation variants
  const contentVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 40 : -40
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -40 : 40,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <div 
      className="w-full p-8 rounded-xl shadow-lg"
      style={{ 
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: cardBorderRadius,
        boxShadow: cardShadow
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 
       
                      className="text-4xl text-center mb-2 font-extrabold tracking-tight"
            style={{ color: theme.textColor || "#111", fontFamily: theme.headingFont || "Inter, sans-serif" }} >
          Your API Journey
        </h2>
        <p className="text-center mb-12 opacity-80">
          Follow these steps to leverage our powerful API ecosystem
        </p>

        {/* Enhanced Timeline Path */}
        <div className="relative h-4 mb-16">
          {/* Timeline Track */}
          <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-slate-200 rounded-full"></div>
          
          {/* Animated Progress */}
          <motion.div 
            className="absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full"
            style={{ 
              background: `linear-gradient(to right, ${primaryColor}, ${accentColor})`,
              originX: 0
            }}
            initial={false}
            animate={{ 
              width: `${(activeIndex / (timelineItems.length - 1)) * 100}%` 
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
            ref={progressRef}
          />
          
          {/* Timeline Points */}
          <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 flex justify-between">
            {timelineItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(index)}
                className="relative group"
              >
                <motion.div
                  className="w-6 h-6 rounded-full flex items-center justify-center -ml-3 cursor-pointer"
                  style={{ 
                    backgroundColor: index <= activeIndex ? item.color : "#e2e8f0",
                    boxShadow: `0 0 0 2px white, 0 0 ${index === activeIndex ? '8px 2px' : '0 0px'} ${item.color}80`,
                  }}
                  animate={{
                    scale: index === activeIndex ? 1.3 : 1
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }}
                >
                  {index === activeIndex && (
                    <motion.div 
                      className="absolute w-3 h-3 rounded-full bg-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                  )}
                </motion.div>
                
                {/* Label above point */}
                <motion.div
                  className="absolute bottom-full -mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: index === activeIndex ? 1 : index <= activeIndex ? 0.7 : 0.4,
                    y: index === activeIndex ? 0 : 5
                  }}
                >
                  <div 
                    className={`text-xs font-medium mb-3 py-1 px-2 rounded-md ${index === activeIndex ? 'text-white' : 'text-slate-700 bg-white/70'}`}
                    style={{ 
                      fontFamily: theme?.bodyFont,
                      backgroundColor: index === activeIndex ? item.color : undefined,
                      boxShadow: index === activeIndex ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                  >
                    {item.title}
                  </div>
                </motion.div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              style={{ 
                borderRadius: cardBorderRadius,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Section with Background */}
                <div 
                  className="md:w-1/3 p-8 text-white flex flex-col justify-between relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${timelineItems[activeIndex].color}, ${timelineItems[activeIndex].color}dd)`
                  }}
                >
                  {/* Decorative Circles */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 z-0" />
                  <div className="absolute -bottom-20 -right-10 w-60 h-60 rounded-full bg-white/5 z-0" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {timelineItems[activeIndex].icon}
                    </motion.div>
                    
                    <motion.h3 
                      className="text-3xl font-bold mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {timelineItems[activeIndex].title}
                    </motion.h3>
                    
                    <motion.p 
                      className="opacity-90 font-light text-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {timelineItems[activeIndex].subTitle}
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="text-white/80 text-sm mt-8 flex items-center relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex space-x-1">
                      {timelineItems.map((_, idx) => (
                        <div 
                          key={idx} 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ 
                            backgroundColor: idx === activeIndex ? 'white' : 'rgba(255,255,255,0.4)'
                          }}
                        />
                      ))}
                    </div>
                    <div className="ml-3">
                      Step {activeIndex + 1} of {timelineItems.length}
                    </div>
                  </motion.div>
                </div>
                
                {/* Right Section - Content */}
                <div className="md:w-2/3 p-8">
                  <motion.p 
                    className="text-slate-700 mb-8 text-lg leading-relaxed"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {timelineItems[activeIndex].description}
                  </motion.p>
                  
                  <motion.div 
                    className="grid grid-cols-2 gap-4 mb-8"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {timelineItems[activeIndex].stats.map((stat, index) => (
                      <div 
                        key={index} 
                        className="bg-slate-50 p-4 rounded-lg border border-slate-100"
                        style={{ borderRadius: buttonBorderRadius }}
                      >
                        <p className="text-sm text-slate-500">{stat.label}</p>
                        <p 
                          className="text-xl font-bold" 
                          style={{ color: timelineItems[activeIndex].color }}
                        >
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="mt-8 flex justify-between items-center pt-4 border-t border-slate-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button
                      onClick={goPrev}
                      className="text-slate-600 hover:text-slate-900 flex items-center transition-colors font-medium"
                      style={{ borderRadius: buttonBorderRadius }}
                    >
                      <ChevronLeft className="mr-1 h-5 w-5" />
                      Previous
                    </button>
                    
                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      className="flex items-center justify-center h-10 w-10 rounded-full transition-all"
                      style={{ 
                        backgroundColor: isPaused ? primaryColor : 'rgba(0,0,0,0.05)',
                        color: isPaused ? 'white' : timelineItems[activeIndex].color,
                        borderRadius: '50%'
                      }}
                    >
                      {isPaused ? <Play size={18} /> : <Pause size={18} />}
                    </button>
                    
                    <button
                      onClick={goNext}
                      className="text-slate-600 hover:text-slate-900 flex items-center transition-colors font-medium"
                      style={{ borderRadius: buttonBorderRadius }}
                    >
                      Next
                      <ChevronRight className="ml-1 h-5 w-5" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
             </div>
    </div>
  );
}
