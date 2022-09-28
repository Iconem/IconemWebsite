
const { CMS, initCMS: init } = window;
initCMS();


import studioProjectsPreview from "./studioProjectsPreview.js";
// Import NetlifyCMS JS configuration object from cms/config/index.js
// import config from "./config";

window.CMS_MANUAL_INIT = true;
CMS.init();
CMS.registerPreviewStyle("/css/vendors.min.css");
CMS.registerPreviewStyle("/css/iconem-studio.min.css");
CMS.registerPreviewTemplate("studioProjects", studioProjectsPreview);