# Iconem Website

## 1. User's guide 
User documentation is accessible on Iconem wiki : https://wiki.iconem.com/e/en/platform/documentation_utilisateurs/website-guide-utilisateur-cms
It explains how to add/modify data on the website using Netlify CMS.

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

In `./config.toml`, search for any field of the type `[languages.en.$param]`. Simply copy it under the name `[languages.$language_code.$param]` to add a new language to the site.

### 2.2. CMS - NetlifyCMS
NetlifyCMS is added on top of the Hugo website to provide an easy way to modify some variable parts of the website (projects, team member, partners, etc.).
Every configuration related to NetlifyCMS is located in the /static/admin folder. In case we wanted to use the website as a "simple" static hugo website, we should just remove this folder.

Hosting via Netlify: https://app.netlify.com/teams/iconem/overview
NetlifyCMS documentation: https://decapcms.org/docs/intro/


