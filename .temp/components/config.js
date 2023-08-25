import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/Files/Projects/Github/AlphaBlog/node_modules/vuepress-shared/lib/client/index.js";

import Replit from "D:/Files/Projects/Github/AlphaBlog/node_modules/vuepress-plugin-components/lib/client/components/Replit.js";

import "D:/Files/Projects/Github/AlphaBlog/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Replit")) app.component("Replit", Replit);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
