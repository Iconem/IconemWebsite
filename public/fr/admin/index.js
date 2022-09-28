
const { CMS, initCMS: init } = window;
import config from "./config/index.js";
import studioProjectsPreview from "./config/collections/studioProjects/studioProjectsPreview.js";
initCMS({ config });

CMS.registerPreviewStyle("/css/vendors.min.css");
CMS.registerPreviewStyle("/css/iconem-studio.min.css");
CMS.registerPreviewTemplate("studioProjects", studioProjectsPreview);