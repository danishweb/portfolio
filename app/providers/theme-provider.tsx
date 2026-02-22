"use client";

import { createContext, useContext, ReactNode } from "react";
import type { SiteSettings } from "@/types/index";

interface ThemeContextValue {
  settings: SiteSettings | null;
}

const ThemeContext = createContext<ThemeContextValue>({ settings: null });

export function useTheme() {
  return useContext(ThemeContext);
}

interface ThemeProviderProps {
  children: ReactNode;
  settings: SiteSettings | null;
}

export function ThemeProvider({ children, settings }: ThemeProviderProps) {
  const cssVariables = settings
    ? {
        // Theme colors
        "--color-primary": settings.theme?.primaryColor || "#000000",
        "--color-secondary": settings.theme?.secondaryColor || "#333333",
        "--color-accent": settings.theme?.accentColor || "#0066ff",
        "--color-background": settings.theme?.backgroundColor || "#f1f1f1",
        "--color-text": settings.theme?.textColor || "#000000",
        "--color-text-muted": settings.theme?.mutedTextColor || "#666666",

        // Button theme
        "--btn-primary-bg": settings.buttonTheme?.primaryBg || "#000000",
        "--btn-primary-text": settings.buttonTheme?.primaryText || "#ffffff",
        "--btn-primary-hover-bg":
          settings.buttonTheme?.primaryHoverBg || "#333333",
        "--btn-outline-border":
          settings.buttonTheme?.outlineBorder || "#000000",
        "--btn-outline-text": settings.buttonTheme?.outlineText || "#000000",
        "--btn-outline-hover-bg":
          settings.buttonTheme?.outlineHoverBg || "rgba(0, 0, 0, 0.69)",
        "--btn-outline-hover-text":
          settings.buttonTheme?.outlineHoverText || "#ffffff",
        "--btn-white-bg": settings.buttonTheme?.whiteBg || "#ffffff",
        "--btn-white-text": settings.buttonTheme?.whiteText || "#111827",

        // Decorative assets
        "--underline-image": settings.decorativeAssets?.underlineImage?.asset
          ?.url
          ? `url(${settings.decorativeAssets.underlineImage.asset.url})`
          : 'url("/underline.svg")',
        "--pattern-left-image": settings.decorativeAssets?.patternLeftImage
          ?.asset?.url
          ? `url(${settings.decorativeAssets.patternLeftImage.asset.url})`
          : 'url("/pattern-l.svg")',
        "--pattern-right-image": settings.decorativeAssets?.patternRightImage
          ?.asset?.url
          ? `url(${settings.decorativeAssets.patternRightImage.asset.url})`
          : 'url("/pattern-r.svg")',
        "--project-tile-bg": settings.decorativeAssets?.projectTileBackground
          ?.asset?.url
          ? `url(${settings.decorativeAssets.projectTileBackground.asset.url})`
          : 'url("/project-bg.svg")',
      }
    : {};

  return (
    <ThemeContext.Provider value={{ settings }}>
      <div style={cssVariables as React.CSSProperties}>{children}</div>
    </ThemeContext.Provider>
  );
}
