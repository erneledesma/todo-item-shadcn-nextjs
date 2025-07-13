export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Todo App",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Categories",
      href: "/categories",
    },
    {
      title: "Server-todos",
      href: "/server-todos",
    },
    {
      title: "Cookies",
      href: "/cookies",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/erneledesma",
    docs: "https://ui.shadcn.com",
  },
}
