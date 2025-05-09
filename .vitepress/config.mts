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
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "CLI",
        items: [
          { text: "Windows Terminal", link: "/cli/windows-terminal" },
          { text: "PowerShell", link: "/cli/powershell" },
          { text: "Starship", link: "/cli/starship" },
        ],
      },
      {
        text: "Python",
        items: [{ text: "uv", link: "/python/uv" }],
      },
      {
        text: "JavaScript",
        items: [{ text: "fnm", link: "/javascript/fnm" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/sunfkny/dev-setup" },
    ],
  },
});
