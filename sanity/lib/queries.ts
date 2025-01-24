import { groq } from "next-sanity";

// Individual section queries
export const heroSectionQuery = groq`
*[_type == "heroSection"][0] {
  _type,
  greeting,
  profileImage {
    asset->,
    hotspot
  },
  mainHeading {
    highlightedText,
    remainingText
  },
  introduction {
    role,
    company,
    tagline
  },
  ctaButtons[] {
    text,
    url,
    type,
    newTab
  },
  sectionStyles {
    backgroundColor,
    textColor
  }
}`;

export const aboutSectionQuery = groq`
*[_type == "aboutSection"][0] {
  _type,
  title,
  quotes[] {
    text,
    delay
  },
  sectionStyles {
    backgroundColor,
    textColor
  }
}`;

export const projectsSectionQuery = groq`
*[_type == "projectsSection"][0] {
  _type,
  title,
  subtitle,
  description,
  projects[] {
    name,
    description,
    image {
      asset->,
      hotspot
    },
    gradient,
    url,
    "tech": tech[]-> {
      name,
      "slug": slug.current,
      "icon": icon.asset->url
    }
  },
  sectionStyles {
    backgroundColor,
    textColor
  }
}`;

export const skillsSectionQuery = groq`
*[_type == "skillsSection"][0] {
  _type,
  title,
  subtitle,
  description,
  skillCategories[] {
    category,
    skills[]-> {
      name,
      "slug": slug.current,
      icon {
        asset->,
        hotspot
      }
    }
  },
  sectionStyles {
    backgroundColor,
    textColor
  }
}`;

export const footerSectionQuery = groq`
*[_type == "footerSection"][0] {
  _type,
  copyright,
  socialLinks[] {
    platform,
    url,
    "icon": {
      "asset": {
        "url": icon.asset->url
      }
    }
  },
  contactEmail,
  ctaButtons[] {
    text,
    url,
    type,
    newTab
  }
}`;

// Combined query for all sections
export const allSectionsQuery = groq`{
  "hero": *[_type == "heroSection"][0] {
    _type,
    greeting,
    profileImage {
      asset->,
      hotspot
    },
    mainHeading {
      highlightedText,
      remainingText
    },
    introduction {
      role,
      company,
      tagline
    },
    ctaButtons[] {
      text,
      url,
      type,
      newTab
    },
    sectionStyles {
      backgroundColor,
      textColor
    }
  },
  "about": *[_type == "aboutSection"][0] {
    _type,
    title,
    quotes[] {
      text,
      delay
    },
    sectionStyles {
      backgroundColor,
      textColor
    }
  },
  "projects": *[_type == "projectsSection"][0] {
    _type,
    title,
    subtitle,
    description,
    projects[] {
      name,
      description,
      image {
        asset->,
        hotspot
      },
      gradient,
      url,
      "tech": tech[]-> {
        name,
        "slug": slug.current,
        "icon": icon.asset->url
      }
    },
    sectionStyles {
      backgroundColor,
      textColor
    }
  },
  "skills": *[_type == "skillsSection"][0] {
    _type,
    title,
    subtitle,
    description,
    skillCategories[] {
      category,
      skills[]-> {
        name,
        "slug": slug.current,
        icon {
          asset->,
          hotspot
        }
      }
    },
    sectionStyles {
      backgroundColor,
      textColor
    }
  },
  "footer": *[_type == "footerSection"][0] {
    _type,
    copyright,
    socialLinks[] {
      platform,
      url,
      "icon": {
        "asset": {
          "url": icon.asset->url
        }
      }
    },
    contactEmail,
    ctaButtons[] {
      text,
      url,
      type,
      newTab
    }
  }
}`;
