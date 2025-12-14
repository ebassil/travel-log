// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  eslint: {
    /* module options */
    // config:  {
    //   stylistic: true,
    // }
    config: { standalone: false },
  },
});
