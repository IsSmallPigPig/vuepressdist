import { defineClientConfig } from "@vuepress/client";
import VPCard from "D:/Files/Projects/Github/AlphaBlog/node_modules/vuepress-plugin-md-enhance/lib/client/components/VPCard.js";
import Mermaid from "D:/Files/Projects/Github/AlphaBlog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "D:/Files/Projects/Github/AlphaBlog/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("VPCard", VPCard)
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
  },
  setup: () => {

  }
});
