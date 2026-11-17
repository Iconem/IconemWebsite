# Iconem Website

## 1. User's guide 
User documentation is accessible on Iconem wiki https://wiki.iconem.com/e/en/platform/documentation_utilisateurs/website-guide-utilisateur-cms

It explains how to add/modify data on the website using Netlify CMS.

In `/admin`, open **Site settings** and choose **Shared settings** for contact details, the map link, home slogans, social links and icons, the author, and the footer. Choose **English** or **French** for the meta description, navigation labels, section headings, team introduction, newsletter text, and downloadable PDFs. The **About** collection supplies the Studio and Research header logos and the Exploration and Contribute link destinations.

## 2. Developer's guide

### 2.1. Static website - Hugo

#### 2.1.1. Installation

This site was built using Hugo `v0.32.4` for windows.
<br/>
To launch the dev mode : `hugo server`.

#### 2.1.2. Deploy

The site is hosted on Netlify. To deploy, just push your modification to this repo main branch. Netlify will then hook and build the static website using Hugo.

#### 2.1.3. Folder organization

- **\_mockups** : Mockups & .psd for image generation (not used by Hugo for building site)
- **archetypes** : Generic Hugo folder. Useless here but should be kept.
- **content** : Generic Hugo folder. Useless here but should be kept.
- **data** : Front-matter files.
- **layouts** : GoJS/HTML templates.
- **static** : Static files.
- **config.toml** : Main configuration file (baseUrl, languages, sections, etc)

#### 2.1.4. Add a language

Use the English language settings in `config.toml` as a starting point for the new language's domain, language switcher, and newsletter integration. Copy `data/settings/en.json` to `data/settings/<language-code>.json`, translate the copy, and register the file in `static/admin/config/collections/settings/config.js` so editors can update it.

### 2.2. CMS - NetlifyCMS
NetlifyCMS is added on top of the Hugo website to provide an easy way to modify some variable parts of the website (projects, team member, partners, etc.).
Every configuration related to NetlifyCMS is located in the /static/admin folder. In case we wanted to use the website as a "simple" static hugo website, we should just remove this folder.

Hosting via Netlify: https://app.netlify.com/teams/iconem/overview

NetlifyCMS documentation: https://decapcms.org/docs/intro/
