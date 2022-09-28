
var script = document.createElement('script');
script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
document.head.appendChild(script);
window.CMS_MANUAL_INIT = true
script.src = "https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js";
document.head.appendChild(script);
const { CMS, initCMS: init } = window;
initCMS();

// Import custom editor component from cms/editor-components.js
// import myCustomEditorComponent from "./editor-components";
// Import NetlifyCMS JS configuration object from cms/config/index.js
// import config from "./config";

// Disable loading of the configuration from the default config.yml file
window.CMS_MANUAL_INIT = true;
// Initialize NetlifyCMS with the JS configuration objext
window.CMS_CONFIGURATION = config;
CMS.init({ config });
// Register the custom editor component
// CMS.registerEditorComponent(myCustomEditorComponent);