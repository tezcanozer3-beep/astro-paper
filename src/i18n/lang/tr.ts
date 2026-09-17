import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Ana Sayfa",
    posts: "Yazılar",
    tags: "Etiketler",
    about: "Hakkımızda",
    archives: "Arşiv",
    search: "Arama",
  },
  post: {
    publishedAt: "Yayınlanma tarihi:",
    updatedAt: "Güncellenme tarihi:",
    sharePostIntro: "Bu yazıyı paylaş:",
    sharePostOn: "Bu yazıyı {{platform}} üzerinde paylaş",
    sharePostViaEmail: "Bu yazıyı e-posta ile paylaş",
    tagLabel: "Etiketler",
    backToTop: "Başa dön",
    goBack: "Geri dön",
    editPage: "Sayfayı düzenle",
    previousPost: "Önceki Yazı",
    nextPost: "Sonraki Yazı",
  },
  pagination: {
    prev: "Önceki",
    next: "Sonraki",
    page: "Sayfa",
  },
  home: {
    socialLinks: "Sosyal Medya Linkleri",
    featured: "Öne Çıkanlar",
    recentPosts: "Son Yazılar",
    allPosts: "Tüm Yazılar",
  },
  footer: {
      copyright: "Telif Hakkı",
        allRightsReserved: "Tüm hakları saklıdır.",
          disclaimer: "Bu kılavuz yalnızca bilgilendirme amaçlıdır, yasal tavsiye niteliği taşımaz ve profesyonel Birleşik Krallık göçmenlik danışmanlığının yerini almaz. Önceki vize retleri, yasal kalış süresi aşımı veya karmaşık statü durumlarınız varsa, tercüme süreci mutlaka uzman bir dava stratejisiyle birlikte yürütülmelidir.",
          },
          
  }
  pages: {
    tagTitle: "Etiket",
    tagDesc: "Bu etikete sahip tüm yazılar.",

    tagsTitle: "Etiketler",
    tagsDesc: "Yazılarda kullanılan tüm etiketler.",

    postsTitle: "Yazılar",
    postsDesc: "Yayınladığımız tüm yazılar.",

    archivesTitle: "Arşiv",
    archivesDesc: "Arşivlediğimiz tüm yazılar.",

    searchTitle: "Arama",
    searchDesc: "Bir yazı arayın...",
  },
  a11y: {
    skipToContent: "İçeriğe atla",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    toggleTheme: "Temayı değiştir",
    searchPlaceholder: "Yazılarda ara...",
    noResults: "Sonuç bulunamadı",
    goToPreviousPage: "Önceki sayfaya git",
    goToNextPage: "Sonraki sayfaya git",
  },
  notFound: {
    title: "404 Bulunamadı",
    message: "Sayfa Bulunamadı",
    goHome: "Ana sayfaya dön",
  },
} satisfies UIStrings;
