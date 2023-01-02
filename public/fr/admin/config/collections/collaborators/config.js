export default {
    "label": "Collaborators",
    "name": "collaborators",
    "format": "json",
    "extension": "json",
    "files": [
        {
            "label": "Clients",
            "name": "collaborators",
            "file": "data/collaborators/clients.json",
            "create": true,
            "slug": "{{slug}}",
            "editor": {
                "preview": true
            },
            "fields": [
                {
                    "label": "Clients",
                    "name": "clients",
                    "widget": "list",
                    "summary": "{{fields.name}}",
                    "fields":[
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
            ]
        }

    ]
}

