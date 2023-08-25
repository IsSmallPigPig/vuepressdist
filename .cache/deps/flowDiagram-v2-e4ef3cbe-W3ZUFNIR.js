import {
  flowRendererV2,
  flowStyles
} from "./chunk-RSKQ4E75.js";
import "./chunk-OKND6LKK.js";
import {
  flowDb,
  parser$1
} from "./chunk-6NTTWBNX.js";
import "./chunk-VN6CECFF.js";
import "./chunk-GOYKKJKR.js";
import "./chunk-2TDTBC5V.js";
import "./chunk-ID4JCWFK.js";
import "./chunk-J2HLTKPP.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-4LLFQBH7.js";
import {
  __toESM
} from "./chunk-HM4MQYWN.js";

// node_modules/mermaid/dist/flowDiagram-v2-e4ef3cbe.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-e4ef3cbe-W3ZUFNIR.js.map
