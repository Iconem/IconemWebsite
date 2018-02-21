# Iconem Website

## 1. Howtos

### 1.1. Add a project to the main page

1. Go to the folder `./data/projects` and copy any of the existing `.json` file into `${new-project}.json`.
2. Modify each field of the file to fit your needs :

- **modalID**\* : An identifier for the project
- **title**\* : The project's title (in French & in English)
- **date** : The project's date 
- **category** : The project's category (ex: "Exhibition")
- **thumbnail**\* : The photo that should appear on the main page
- **img**\* : A list of images to display on the project's page (in appearing order)
    - **img.src**\* : the location of the image
    - **img.caption** : the image's description (in French & in English)
- **video** : A list of links to Youtube/Vimeo videos to display on the project's page
- **models** : A list of links to Sketchfab models to display on the project's page
- **description**\* : The project's description (in French & in English)

<br />

- **/!\ All fields marked with \* are mandatory.**
- **/!\ Images should be located in the folder `./static/img/projects/${new-project}`**
- **/!\ The thumbnail image should**
    - **be 720x405px**
    - **be desaturated (cf .psd files in the folder ./templates)**
    - **be in .jpg format, with 75% compression**
- **/!\ The project images should**
    - **be 1920x800px(landscape) or 608x1080px (portrait)**
    - **be in .jpg format, with 75% compression**
- **/!\ Don't forget the "/embed" at the end Sketchfab links**

3. Add your new project's file name into the file `./data/carousel/projectList.json`. The projects are displayed according to this list's order. For example, if you want to add your `${new-project}.json`in third, `./data/carousel/projectList.json` should look like :
```
[
  "01",
  "02",
  "new-project",
  "03",
  "04",
  "05",
  "06",
  "07"
]
```

### 1.2. Add a project to the map

Map projects are listed by country in the folder `./data/map`. There is one file per country, that looks like :
- **name**\* : The country's name (in French & in English)
- **places**\* : A list of regions/cities where projects took place
  - **place.name**\* : The place's name, in French & in English (ex : "Aleppo/Alep")
  - **place.sites**\* : A list of sites in this place 
    - **place.site.name**\* : The site's name, in French & in English (ex : "Citadel/Citadelle", "Old City/Vieille Ville", etc)
    
 <br/>
 
 - **/!\ Country files should be named `${countryID}.json`, with `${countryId}` the id of the corresponding svg map element**

### 1.3. Add a client to the main page

1. Go to the folder `./data/clients` and copy any of the existing `.yaml` file into `${new-client}.yaml`.
2. Modify each field of the file to fit your needs :
- **name**\* : The client's name
- **link** : A link to the client's website
- **icon**\* : The location of the client's logo (with "website-friendly" colors)
- **icon\_active**\* : The location of the client's logo (with "real" colors)

<br />

- **/!\ All fields marked with \* are mandatory.**
- **/!\ Logos should be located in the folder `./static/img/clients`**
- **/!\ The logos should**
    - **be in .png format (with transparent background)**
    - **be 100x50px**
    
<br/>
    
Clients are displayed in `./data/clients` file order. 

### 1.4. Add a partner to the main page

Idem clients, but in folder `./data/partners`.

### 1.5. Modify team members

The file `./data/about/team.yaml` contains the list of all team members (in order of appearance). You can modify each item of the list to fit your needs : 
- **name**\*
- **job**\* (in French & in English)
- **img**\* : The location of the photo
- **description**\* (in French & in English)

<br/>

- **/!\ All fields marked with \* are mandatory.**
- **/!\ Photos should be located in the folder `./static/img/about/team_members`**
- **/!\ The photos should**
    - **be black & white**
    - **be 300x300px**

### 1.6. Modify texts

Main page's texts can be found in the file `./config.toml` (in French & in English). Other page's texts can be found in `./data` files. For example, the "Hardware" page's text is in `./data/about/hardware.yaml`.


## 2. Developer's guide

### 2.1. Installation

This site was built using Hugo `v0.32.4` for windows.
<br/>
To launch the dev mode : `hugo server`.
<br/>
To build site into `./dist` folder : `hugo`.

### 2.2. Folder organization

- **\_mockups** : Mockups & .psd for image generation (not used by Hugo for building site)
- **archetypes** : Generic Hugo folder. Useless here but should be kept.
- **content** : Generic Hugo folder. Useless here but should be kept.
- **data** : Front-matter files.
- **layouts** : GoJS/HTML templates.
- **static** : Static files.
- **config.toml** : Main configuration file (baseUrl, languages, sections, etc)

### 2.3. Add a language

In `./config.toml`, search for any field of the type `[languages.en.$param]`. Simply copy it under the name `[languages.$language_code.$param]` to add a new language to the site.



