
const { CMS, initCMS: init } = window;
import config from "./config/index.js";
import projectPreview from "./config/collections/projects/preview.js";
import teamPreview from "./config/collections/team/preview.js";
import clientsPreview from "./config/collections/collaborators/preview_clients.js";
import partnersPreview from "./config/collections/collaborators/preview_partners.js";

initCMS({ config });

CMS.registerPreviewStyle("/css/vendors.min.css");
CMS.registerPreviewStyle("/css/iconem-studio.min.css");
CMS.registerPreviewTemplate("studioProjects", projectPreview);
CMS.registerPreviewTemplate("researchProjects", projectPreview);
CMS.registerPreviewTemplate("team", teamPreview);
CMS.registerPreviewTemplate("partners", partnersPreview);
CMS.registerPreviewTemplate("clients", clientsPreview);