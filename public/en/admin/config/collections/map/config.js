export default {
    "name": "map",
    "label": "Map",
    "folder": "data/map",
    "format": "json",
    "extension": "json",
    "create": true,
    "slug": "{{slug}}",
    "editor": {
        "preview": true
    },
    "identifier_field": "name",
    "fields": [
        {
            "label": "Name",
            "name": "name",
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
            "label": "Places",
            "name": "places",
            "widget": "list",
            "summary": "{{fields.name}}",
            "fields": [
                {
                    "label": "Name",
                    "name": "name",
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
                    "label": "Sites",
                    "name": "sites",
                    "widget": "list",
                    "summary": "{{fields.name}}",
                    "fields": [
                        {
                            "label": "name",
                            "name": "Name",
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
                        }
                    ]
                }
            ]
        }
    ]
}