export default {
    "name": "studioProjects",
    "label": "Studio projects",
    "folder": "data/projects/studio",
    "format": "json",
    "extension": "json",
    "create": true,
    "slug": "{{slug}}",
    "editor": {
        "preview": true
    },
    "identifier_field": "modalID",
    "fields": [
        {
            "label": "modalID",
            "name": "modalID",
            "widget": "string"
        },
        {
            "label": "thumbnailTitle",
            "name": "thumbnailTitle",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string"
                }
            ]
        },
        {
            "label": "thumbnailLocation",
            "name": "thumbnailLocation",
            "required": false,
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string"
                }
            ]
        },
        {
            "label": "thumbnailDate",
            "name": "thumbnailDate",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string"
                }
            ]
        },
        {
            "label": "thumbnail",
            "name": "thumbnail",
            "widget": "string"
        },
        {
            "label": "articleTitle",
            "name": "articleTitle",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string"
                }
            ]
        },
        {
            "label": "articleLocation",
            "name": "articleLocation",
            "required": false,
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string"
                }
            ]
        },
        {
            "label": "articleDate",
            "name": "articleDate",
            "required": false,
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string"
                }
            ]
        },
        {
            "label": "text",
            "name": "text",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string"
                }
            ]
        },
        {
            "label": "actors",
            "name": "actors",
            "widget": "object",
            "summary": "{{fields.en}}: {{fields.fr}}",
            "fields": [
                {
                    "label": "En",
                    "name": "en",
                    "widget": "string"
                },
                {
                    "label": "Fr",
                    "name": "fr",
                    "widget": "string"
                },
                {
                    "label": "logos",
                    "name": "logos",
                    "widget": "list"
                }
            ]
        },
        {
            "label": "img",
            "name": "img",
            "widget": "list",
            "summary": "{{fields.full}}",
            "fields": [
                {
                    "label": "preview",
                    "name": "preview",
                    "widget": "string"
                },
                {
                    "label": "full",
                    "name": "full",
                    "widget": "image",
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