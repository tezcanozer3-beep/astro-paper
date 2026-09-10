import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://www.primeattest.com/tr/kilavuz",
    title: "Attest Prime",
    description: "Birleşik Krallık evrak standartları, vize süreçleri ve resmi çeviri gereksinimleri için güncel bilgi arşivi.",
    author: "MKG Labs Ltd.",
    profile: "https://www.primeattest.com", 
    ogImage: "og-image.png",
    lang: "tr",
    timezone: "Europe/London", // Operasyon İngiltere odaklı olduğu için
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/satnaing/astro-paper" },
    { name: "x",        url: "https://x.com/username" },
    { name: "linkedin", url: "https://www.linkedin.com/in/username/" },
    { name: "mail",     url: "mailto:hello@primeattest.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});