
import researchProjects from "./collections/projects/researchProjects.config.js";
import studioProjects from "./collections/projects/studioProjects.config.js";
import team from "./collections/team/config.js";
import collaborators from "./collections/collaborators/config.js";
import map from "./collections/map/config.js";
import about from "./collections/about/config.js";

const config = {
  backend: {
    name: "git-gateway",
    branch: "master",
  },
  load_config_file: false,
  site_url: 'https://radiant-zabaione-e92fa0.netlify.app/',
  // publish_mode: "editorial_workflow",
  media_folder: 'static/img',
  public_folder: '/img',
  collections: [
    researchProjects,
    studioProjects,
    map,
    team,
    collaborators,
    about
  ],
};

export default config;
