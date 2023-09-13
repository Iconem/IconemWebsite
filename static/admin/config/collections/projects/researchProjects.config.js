export default {
    "name": "researchProjects",
    "label": "Research projects",
    "folder": "data/projects/research",
    "format": "json",
    "extension": "json",
    "identifier_field": "modalID",
    "create": true,
    "slug": "{{slug}}",
    "editor": {
        "preview": true
    },
    "fields": [
        {
            "label": "modalID",
            "name": "modalID",
            "widget": "string",
            "pattern": ['^[a-z0-9_\-]+$', "Must be lowercase, without spaces or special characters"]
        },
        {
            "label": "Thumbnail title",
            "name": "thumbnailTitle",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string",
                    "default": "Thumbnail title"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string",
                    "default": "Titre de la miniature",
                }
            ]
        },
        {
            "label": "Thumbnail location",
            "name": "thumbnailLocation",
            "required": false,
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string",
                    "default": "Thumbnail location",
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string",
                    "default": "Lieu de la miniature",
                }
            ]
        },
        {
            "label": "Thumbnail date",
            "name": "thumbnailDate",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "required": false,
                    "widget": "datetime",
                    "format": 'YYYY',
                    "date_format": "YYYY",
                    "time_format": "",
                    "default": ""
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "required": false,
                    "widget": "datetime",
                    "format": 'YYYY',
                    "date_format": "YYYY",
                    "time_format": "",
                    "default": ""
                }
            ]
        },
        {
            "label": "Thumbnail",
            "name": "thumbnail",
            "widget": "image",
            "choose_url": false,
            "media_folder": "/assets/img/projects/{{fields.modalID}}",
            "public_folder": "/img/projects/{{fields.modalID}}"
        },
        {
            "label": "Article title",
            "name": "articleTitle",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string",
                    "default": "Article title"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string",
                    "default": "Titre de l'article"
                }
            ]
        },
        {
            "label": "Article location",
            "name": "articleLocation",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "required": false,
                    "widget": "string",
                    "default": "Article location"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "required": false,
                    "widget": "string",
                    "default": "Lieu de l'article"
                }
            ]
        },
        {
            "label": "Article date",
            "name": "articleDate",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "required": false,
                    "widget": "datetime",
                    "format": 'MM. YYYY',
                    "date_format": "MM.YYYY",
                    "time_format": "",
                    "default": ""
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "required": false,
                    "widget": "datetime",
                    "format": 'MM. YYYY',
                    "date_format": "MM.YYYY",
                    "time_format": "",
                    "default": ""
                }
            ]
        },
        {
            "label": "Text",
            "name": "text",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string",
                    "default": "Text",
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string",
                    "default": "test",
                }
            ]
        },
        {
            "label": "Actors",
            "name": "actors",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "required": false,
                    "widget": "string",
                    "default": "Actor names",
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "required": false,
                    "widget": "string",
                    "default": "Nom des acteurs",
                },
                {
                    "label": "logos",
                    "name": "logos",
                    "widget": "list",
                    "field":
                    {
                        "label": "logo",
                        "name": "logo",
                        "widget": "image",
                        "required": false,
                        "choose_url": false,
                        "media_folder": "/assets/img/projects/{{fields.modalID}}",
                        "public_folder": "/img/projects/{{fields.modalID}}"
                    }
                }
            ]
        },
        {
            "label": "img",
            "name": "img",
            "widget": "list",
            "summary": "{{fields.src}}",
            "fields": [
                {
                    "label": "src",
                    "name": "src",
                    "widget": "image",
                    "choose_url": false,
                    "media_folder": "/assets/img/projects/{{fields.modalID}}",
                    "public_folder": "/img/projects/{{fields.modalID}}"
                },
                {
                    "label": "caption",
                    "name": "caption",
                    "widget": "object",
                    "fields": [
                        {
                            "label": "en",
                            "name": "en",
                            "widget": "string"
                        },
                        {
                            "label": "fr",
                            "name": "fr",
                            "widget": "string"
                        }
                    ]
                }
            ]
        },
        {
            "label": "video",
            "name": "video",
            "widget": "list",
            "summary": "{{fields.src}}",
            "fields": [
                {
                    "label": "preview",
                    "name": "preview",
                    "widget": "image",
                    "choose_url": false,
                    "media_folder": "/assets/img/projects/{{fields.modalID}}",
                    "public_folder": "img/projects/{{fields.modalID}}"
                },
                {
                    "label": "src",
                    "name": "src",
                    "widget": "string"
                }
            ]
        },
        {
            "label": "models",
            "name": "models",
            "widget": "list"
        }
    ]
}