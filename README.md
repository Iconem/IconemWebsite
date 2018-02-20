# Iconem Website

## Howtos

### Add a project to the main page

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


- **/!\ All fields marked with \* are mandatory.**
- **/!\ Images should be located in the folder `./static/img/projects/${new-project}`**
- **/!\ The thumbnail image should**
    - **be 720x405px**
    - **be desaturated (cf .psd files in the folder ./templates)**
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

### Add a project to the map

### Add a client to the main page

1. Go to the folder `./data/clients` and copy any of the existing `.yaml` file into `${new-client}.yaml`.
2. Modify each field of the file to fit your needs :
- **name**\* : The client's name
- **link** : A link to the client's website
- **icon**\* : The location of the client's logo (with "website-friendly" colors)
- **icon\_active**\* : The location of the client's logo (with "real" colors)


- **/!\ All fields marked with \* are mandatory.**
- **/!\ Logos should be located in the folder `./static/img/clients`**
- **/!\ The logos should**
    - **be in .png format (with transparent background)**
    - **be 100x50px**
Clients are displayed in `./data/clients` file order. 

### Add a partner to the main page

Idem clients, but in folder `./data/partners`.

### Modify team members

### Modify texts





