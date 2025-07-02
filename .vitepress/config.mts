import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [
      // https://icon-sets.iconify.design/vscode-icons/?keyword=vscode-icons
      groupIconVitePlugin({
        customIcon: {
          powershell: "vscode-icons:file-type-powershell",
          bash: "vscode-icons:file-type-shell",
        },
        defaultLabels: ["powershell", "bash"],
      }),
    ],
  },
  title: "DevSetup",
  description: "A comprehensive guide for setting up development environments and tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "CLI",
        base: "/cli/",
        items: [
          { text: "Windows Terminal", link: "windows-terminal" },
          { text: "PowerShell", link: "powershell" },
          { text: "Starship", link: "starship" },
        ],
      },
      {
        text: "Python",
        base: "/python/",
        items: [{ text: "uv", link: "uv" }],
      },
      {
        text: "JavaScript",
        base: "/javascript/",
        items: [
          { text: "fnm", link: "fnm" },
          { text: "npm", link: "npm" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/sunfkny/dev-setup" },
    ],
    editLink: {
      pattern: "https://github.com/sunfkny/dev-setup/blob/main/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
  },
});
