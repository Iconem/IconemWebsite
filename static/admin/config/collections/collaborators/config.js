export default {
    "label": "Collaborators",
    "name": "collaborators",
    "format": "json",
    "extension": "json",
    "files": [
        {
            "label": "Clients",
            "name": "clients",
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
                            "choose_url":  false,
                            "media_folder": "/assets/img/clients",
                            "public_folder": "/img/clients"
                        },
                        {
                            "label": "Icon studio",
                            "name": "icon_studio",
                            "widget": "image",
                            "choose_url":  false,
                            "media_folder": "/assets/img/clients",
                            "public_folder": "/img/clients"
                        },
                        {
                            "label": "Icon active",
                            "name": "icon_active",
                            "widget": "image",
                            "choose_url":  false,
                            "media_folder": "/assets/img/clients",
                            "public_folder": "/img/clients"
                        }
                    ]
                }
            ]
        },
        {
            "label": "Partners",
            "name": "partners",
            "file": "data/collaborators/partners.json",
            "create": true,
            "slug": "{{slug}}",
            "editor": {
                "preview": true
            },
            "fields": [
                {
                    "label": "Partners",
                    "name": "partners",
                    "widget": "list",
                    "summary": "{{fields.name}}",
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
                            "choose_url":  false,
                            "media_folder": "/assets/img/partners",
                            "public_folder": "/img/partners"
                        },
                        {
                            "label": "Icon studio",
                            "name": "icon_studio",
                            "widget": "image",
                            "choose_url":  false,
                            "media_folder": "/assets/img/partners",
                            "public_folder": "/img/partners"
                        },
                        {
                            "label": "Icon active",
                            "name": "icon_active",
                            "widget": "image",
                            "choose_url":  false,
                            "media_folder": "/assets/img/partners",
                            "public_folder": "/img/partners"
                        }
                    ]
                }
            ]
        }
    ]
}

