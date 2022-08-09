import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import ja from "@/locales/ja.json";

const i18n = createI18n({
  locale: "ja",
  fallbackLocale: "ja",
  messages: {
    en: en,
    ja: ja,
  },
});

export default i18n;
