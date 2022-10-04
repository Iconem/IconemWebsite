export default {
    "name": "clients",
    "label": "Clients",
    "folder": "data/clients",
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
                "media_folder": "/assets/img/clients",
                "public_folder": "/img/clients"
        },
        {
            "label": "Icon studio",
            "name": "icon_studio",
            "widget": "image",
                "media_folder": "/assets/img/clients",
                "public_folder": "/img/clients"
        },
        {
            "label": "Icon active",
            "name": "icon_active",
            "widget": "image",
                "media_folder": "/assets/img/clients",
                "public_folder": "/img/clients"
        }
    ]
}