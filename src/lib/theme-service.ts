// Theme service for interacting with the theme API

export interface Theme {
  id: string
  name: string
  isActive: boolean
  siteTitle?: string
  siteDescription?: string
  siteLogo?: string
  favicon?: string
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  backgroundColor?: string
  textColor?: string
  linkColor?: string
  bodyFont?: string
  headingFont?: string
  baseFontSize?: string
  headingFontSize?: string
  containerWidth?: string
  contentWidth?: string
  sidebarWidth?: string
  navbarBackground?: string
  navbarTextColor?: string
  navbarLogo?: string
  navbarHeight?: string
  navbarPosition?: string
  navbarShowSearch?: boolean
  navbarShowLanguage?: boolean
  navbarShowUserMenu?: boolean
  navbarShowNotifications?: boolean
  footerBackground?: string
  footerTextColor?: string
  footerLogo?: string
  footerCopyright?: string
  footerShowSocial?: boolean
  footerShowNewsletter?: boolean
  footerColumns?: any
  heroDesgin?: string
  heroBackground?: string
  heroBackgroundImage?: string
  heroTextColor?: string
  heroTitle?: string
  heroSubtitle?: string
  heroButtonText?: string
  heroButtonLink?: string
  heroButtonColor?: string
  heroOverlayColor?: string
  heroOverlayOpacity?: number
  buttonPrimaryColor?: string
  buttonSecondaryColor?: string
  buttonTextColor?: string
  buttonBorderRadius?: string
  buttonPadding?: string
  inputBackground?: string
  inputBorderColor?: string
  inputTextColor?: string
  inputFocusColor?: string
  inputBorderRadius?: string
  cardBackground?: string
  cardBorderColor?: string
  cardBorderRadius?: string
  cardShadow?: string
  cardPadding?: string
  successColor?: string
  warningColor?: string
  errorColor?: string
  infoColor?: string
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
  googleAnalyticsId?: string
  googleTagManagerId?: string
  facebookPixelId?: string
  createdAt?: string
  updatedAt?: string
}

// Get all themes
export async function getAllThemes(): Promise<Theme[]> {
  try {
    const response = await fetch("/api/theme/list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch themes")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching themes:", error)
    throw error
  }
}

// Get active theme
export async function getActiveTheme(): Promise<Theme> {
  try {
    const response = await fetch("/api/theme", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch active theme")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching active theme:", error)
    throw error
  }
}

// Get theme by ID
export async function getThemeById(id: string): Promise<Theme> {
  try {
    const response = await fetch(`/api/theme/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch theme")
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching theme with ID ${id}:`, error)
    throw error
  }
}

// Create new theme
export async function createTheme(theme: Omit<Theme, "id">): Promise<Theme> {
  try {
    const response = await fetch("/api/theme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theme),
    })

    if (!response.ok) {
      throw new Error("Failed to create theme")
    }

    return await response.json()
  } catch (error) {
    console.error("Error creating theme:", error)
    throw error
  }
}

// Update the updateTheme function to exclude nested relations
export async function updateTheme(theme: Theme): Promise<Theme> {
  try {
    // Extract the ID and remove nested relations before sending to the API
    const { id, navItems, languages, contentSections, banners, socialLinks, contactInfo, ...updateData } = theme

    const response = await fetch(`/api/theme/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })

    if (!response.ok) {
      throw new Error("Failed to update theme")
    }

    return await response.json()
  } catch (error) {
    console.error(`Error updating theme with ID ${theme.id}:`, error)
    throw error
  }
}

// Delete theme
export async function deleteTheme(id: string): Promise<void> {
  try {
    const response = await fetch(`/api/theme/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to delete theme")
    }
  } catch (error) {
    console.error(`Error deleting theme with ID ${id}:`, error)
    throw error
  }
}

// Activate theme
export async function activateTheme(id: string): Promise<Theme> {
  try {
    const response = await fetch("/api/theme/activate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })

    if (!response.ok) {
      throw new Error("Failed to activate theme")
    }

    return await response.json()
  } catch (error) {
    console.error(`Error activating theme with ID ${id}:`, error)
    throw error
  }
}
