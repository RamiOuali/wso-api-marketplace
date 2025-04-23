"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useThemeContext } from "@/providers/ThemeProvider"
import {
  LogIn,
  Search,
  AppWindow,
  Bookmark,
  Key,
  Code,
  Download,
  Settings,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function ApiStepsCompact() {
  const [activeStep, setActiveStep] = useState(1)

  // Get theme from context
  const context = useThemeContext()
  const theme = context?.theme || null

  // Theme variables with fallbacks
  const primaryColor = theme?.primaryColor || "#4361ee"
  const secondaryColor = theme?.secondaryColor || "#3a0ca3"
  const accentColor = theme?.accentColor || "#7209b7"
  const backgroundColor = theme?.backgroundColor || "#f8fafc"
  const textColor = theme?.textColor || "#1e293b"
  const fontFamily = theme?.bodyFont || "Inter, sans-serif"
  const buttonBorderRadius = theme?.buttonBorderRadius || "0.5rem"
  const cardBorderRadius = theme?.cardBorderRadius || "0.75rem"
  const cardShadow = theme?.cardShadow || "0 10px 25px -5px rgba(0, 0, 0, 0.1)"

  // Step content with concise descriptions
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create a free account in seconds",
      icon: <LogIn className="h-5 w-5" />,
      content: "Begin your API journey with a free developer account. Verify your email and start exploring immediately.",
      action: "Sign Up",
      actionLink: "/register"
    },
    {
      id: 2,
      title: "Browse APIs",
      description: "Explore our API catalog",
      icon: <Search className="h-5 w-5" />,
      content: "Discover hundreds of APIs across payments, AI, communications, and more. Each with comprehensive documentation.",
      action: "View APIs",
      actionLink: "/marketplace"
    },
    {
      id: 3,
      title: "Register App",
      description: "Create your application",
      icon: <AppWindow className="h-5 w-5" />,
      content: "Register your application to establish a secure identity and manage multiple projects from a single dashboard.",
      action: "Create App",
      actionLink: "/apps/new"
    },
    {
      id: 4,
      title: "Subscribe",
      description: "Choose your plan",
      icon: <Bookmark className="h-5 w-5" />,
      content: "Subscribe to APIs with a free tier for development and transparent pricing for production based on your needs.",
      action: "Subscribe",
      actionLink: "/pricing"
    },
    {
      id: 5,
      title: "Get Keys",
      description: "Secure API access",
      icon: <Key className="h-5 w-5" />,
      content: "Generate API keys for authentication with separate test and production environments and easy rotation options.",
      action: "Get Keys",
      actionLink: "/dashboard/keys"
    },
    {
      id: 6,
      title: "Test APIs",
      description: "Try before you code",
      icon: <Code className="h-5 w-5" />,
      content: "Test API calls in our interactive playground to validate parameters and understand responses in real-time.",
      action: "Try APIs",
      actionLink: "/playground"
    },
    {
      id: 7,
      title: "Integrate",
      description: "Implement in your app",
      icon: <Download className="h-5 w-5" />,
      content: "Add APIs to your app using our SDKs for JavaScript, Python, Ruby, PHP, and more with ready-to-use code snippets.",
      action: "Get SDKs",
      actionLink: "/docs/sdks"
    },
    {
      id: 8,
      title: "Monitor",
      description: "Track usage and performance",
      icon: <Settings className="h-5 w-5" />,
      content: "Access real-time analytics for API usage, response times, error rates, and costs with customizable alerts.",
      action: "View Stats",
      actionLink: "/dashboard"
    }
  ]

  return (
    <section
      className="py-12 px-4 w-full"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontFamily: fontFamily
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: primaryColor }}
          >
            Start Building in Minutes
          </h2>
          <p className="text-base max-w-2xl mx-auto opacity-80">
            Follow these eight simple steps to integrate our APIs into your applications
          </p>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mb-8 overflow-x-auto py-2 hide-scrollbar">
          <div className="flex space-x-1">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className="transition-all duration-300 px-1"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: step.id === activeStep ? primaryColor : step.id < activeStep ? `${primaryColor}30` : `${primaryColor}15`,
                    transform: step.id === activeStep ? 'scale(1.2)' : 'scale(1)',
                    boxShadow: step.id === activeStep ? `0 0 0 3px ${primaryColor}20` : 'none'
                  }}
                >
                  {step.id <= activeStep ? (
                    <div className="text-white">
                      {step.id === activeStep ? step.icon : <CheckCircle className="h-4 w-4" />}
                    </div>
                  ) : (
                    <span
                      className="text-xs font-medium"
                      style={{ color: `${primaryColor}90` }}
                    >
                      {step.id}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
            style={{
              backgroundColor: '#ffffff',
              boxShadow: cardShadow,
              borderRadius: cardBorderRadius,
              border: `1px solid ${primaryColor}10`
            }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Step List (Left Side) */}
              <div className="md:w-1/3 border-r" style={{ borderColor: `${primaryColor}10` }}>
                <div className="p-4">
                  <h3
                    className="text-sm font-medium mb-3 uppercase tracking-wider"
                    style={{ color: `${primaryColor}70` }}
                  >
                    Your Progress
                  </h3>

                  <div className="space-y-1">
                    {steps.map((step) => (
                      <button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className="w-full text-left p-2 transition-all duration-200 flex items-center rounded"
                        style={{
                          backgroundColor: activeStep === step.id ? `${primaryColor}10` : 'transparent',
                        }}
                      >
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                          style={{
                            backgroundColor: step.id <= activeStep ? primaryColor : `${primaryColor}15`,
                            color: step.id <= activeStep ? '#ffffff' : `${primaryColor}90`
                          }}
                        >
                          {step.id <= activeStep ? (
                            <CheckCircle className="h-3.5 w-3.5" />
                          ) : (
                            <span className="text-xs">{step.id}</span>
                          )}
                        </div>

                        <div className="flex-1 truncate">
                          <p
                            className="font-medium text-sm"
                            style={{
                              color: activeStep === step.id ? primaryColor : textColor,
                              opacity: step.id <= activeStep ? 1 : 0.6
                            }}
                          >
                            {step.title}
                          </p>
                        </div>

                        {activeStep === step.id && (
                          <ChevronRight
                            className="h-4 w-4 ml-2 flex-shrink-0"
                            style={{ color: primaryColor }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Content (Right Side) */}
              <div className="md:w-2/3">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                        color: '#ffffff'
                      }}
                    >
                      {steps[activeStep - 1].icon}
                    </div>
                    <div>
                      <p
                        className="text-xs font-medium"
                        style={{ color: `${primaryColor}90` }}
                      >
                        STEP {activeStep} OF {steps.length}
                      </p>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: primaryColor }}
                      >
                        {steps[activeStep - 1].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base mb-5">
                    {steps[activeStep - 1].description}
                  </p>

                  <div
                    className="p-4 rounded-lg mb-5 text-base"
                    style={{
                      backgroundColor: `${primaryColor}08`,
                      borderLeft: `3px solid ${primaryColor}`
                    }}
                  >
                    {steps[activeStep - 1].content}
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-5 border-t" style={{ borderColor: `${primaryColor}15` }}>
                    <Button
                      variant="ghost"
                      onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                      disabled={activeStep === 1}
                      className="text-sm"
                      style={{
                        color: primaryColor,
                        opacity: activeStep === 1 ? 0.5 : 1
                      }}
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" />
                      Previous
                    </Button>

                    <Button
                      size="sm"
                      className="text-sm"
                      style={{
                        backgroundColor: primaryColor,
                        color: "#ffffff",
                        borderRadius: buttonBorderRadius
                      }}
                    >
                      {steps[activeStep - 1].action}
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={() => setActiveStep(prev => Math.min(steps.length, prev + 1))}
                      disabled={activeStep === steps.length}
                      className="text-sm"
                      style={{
                        color: primaryColor,
                        opacity: activeStep === steps.length ? 0.5 : 1
                      }}
                    >
                      Next
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Timeline Journey - Simplified and More Compact */}
        <div className="mt-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex items-center p-2 rounded-lg transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: step.id <= activeStep ? '#ffffff' : `${primaryColor}05`,
                  border: `1px solid ${step.id <= activeStep ? primaryColor : 'transparent'}20`,
                  boxShadow: step.id <= activeStep ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                  opacity: step.id <= activeStep ? 1 : 0.7,
                  borderRadius: cardBorderRadius
                }}
                onClick={() => setActiveStep(step.id)}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
                  style={{
                    backgroundColor: step.id <= activeStep ? `${primaryColor}15` : `${primaryColor}05`,
                    color: step.id <= activeStep ? primaryColor : `${primaryColor}40`
                  }}
                >
                  {step.icon}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{
                    color: step.id <= activeStep ? primaryColor : textColor,
                    opacity: step.id <= activeStep ? 1 : 0.6
                  }}
                >
                  {step.title}
                </span>

                {step.id !== steps.length && (
                  <ChevronRight
                    className="h-4 w-4 mx-1"
                    style={{
                      color: step.id < activeStep ? primaryColor : `${primaryColor}30`
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-10">
            <Button
              className="text-sm"
              style={{
                backgroundColor: primaryColor,
                color: "#ffffff",
                borderRadius: buttonBorderRadius
              }}
            >
              Get Started Now
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
