export const SITE_CONFIG = {
    NAME: "Sushhma Gupta",
    URL: "https://www.sushhma.github.io"    
  } as const;

  export const SOCIAL_LINKS = {
    FACEBOOK: process.env.NEXT_PUBLIC_FACEBOOK_URL || "#",
    TWITTER: process.env.NEXT_PUBLIC_TWITTER_URL || "#",
    INSTAGRAM: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
    LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
    CONTACT: {
        EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sushma.gupta87@gmail.com",
        PHONE: "8010148903",
      }
  } as const;