
const { CMS, initCMS: init } = window;
import { config } from "./config";
console.log('ololol');
console.log(config);
import studioProjectsPreview from "./studioProjectsPreview.js";
initCMS({ config });

CMS.registerPreviewStyle("/css/vendors.min.css");
CMS.registerPreviewStyle("/css/iconem-studio.min.css");
CMS.registerPreviewTemplate("studioProjects", studioProjectsPreview);