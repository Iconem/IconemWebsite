// Import the configuration of each collection from cms/config/collections
import projectCarousel from "./collections/projectCarousel/config.js";
import researchProjects from "./collections/researchProjects/config.js";
import studioProjects from "./collections/studioProjects/config.js";

// Build the Netlify JS configuration object
const config = {
  backend: {
    name: "git-gateway",
    branch: "new",
  },
  // It is not required to set `load_config_file` if the `config.yml` file is
  // missing, but will improve performance and avoid a load error.
  load_config_file: false,
  site_url: 'https://radiant-zabaione-e92fa0.netlify.app/',
  publish_mode: "editorial_workflow",
  media_folder: "/static",
  public_folder: "/",
  collections: [
    // Include the collections imported from cms/config/collections
    projectCarousel,
    researchProjects,
    studioProjects,
  ],
};

export default config;