
const { CMS, initCMS: init } = window;
import config from "./config/index.js";
import preview from "./config/collections/studioProjects/preview.js";
import preview from "./config/collections/researchProjects/preview.js";
initCMS({ config });

CMS.registerPreviewStyle("/css/vendors.min.css");
CMS.registerPreviewStyle("/css/iconem-studio.min.css");
CMS.registerPreviewTemplate("studioProjects", preview);
CMS.registerPreviewTemplate("researchProjects", preview);