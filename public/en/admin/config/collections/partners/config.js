export default {
    "name": "partners",
    "label": "Partners",
    "folder": "data/partners",
    "format": "yaml",
    "extension": "yaml",
    "create": true,
    "slug": "{{slug}}",
    "editor": {
        "preview": true
    },
    "fields": [
        {
            "label": "Name",
            "name": "name",
            "widget": "string"
        },
        {
            "label": "Link",
            "name": "link",
            "widget": "string"
        },
        {
            "label": "Icon research",
            "name": "icon_research",
            "widget": "image",
                "media_folder": "/assets/img/partners",
                "public_folder": "/img/partners"
        },
        {
            "label": "Icon studio",
            "name": "icon_studio",
            "widget": "image",
                "media_folder": "/assets/img/partners",
                "public_folder": "/img/partners"
        },
        {
            "label": "Icon active",
            "name": "icon_active",
            "widget": "image",
                "media_folder": "/assets/img/partners",
                "public_folder": "/img/partners"
        }
    ]
}