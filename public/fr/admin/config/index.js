
import researchProjects from "./collections/projects/researchProjects.config.js";
import studioProjects from "./collections/projects/studioProjects.config.js";

const config = {
  backend: {
    name: "git-gateway",
    branch: "new",
  },
  load_config_file: false,
  site_url: 'https://radiant-zabaione-e92fa0.netlify.app/',
  publish_mode: "editorial_workflow",
  media_folder: "/static",
  public_folder: "/",
  collections: [
    researchProjects,
    studioProjects,
  ],
};

export default config;