export default {
    "name": "map",
    "label": "Map",
    "folder": "data/map",
    "format": "json",
    "extension": "json",
    "create": true,
    "slug": "{{filename}}",
    "editor": {
        "preview": true
    },
    "identifier_field": "mapID",
    "fields": [
        {
            "label": "mapID",
            "name": "mapID",
            "widget": "string",
        },
        {
            "label": "Name",
            "name": "name",
            "widget": "object",
            "summary": "{{fields.en}}",
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
            "summary": "{{fields.name.en}}",
            "fields": [
                {
                    "label": "Name",
                    "name": "name",
                    "widget": "object",
                    "summary": "{{fields.en}}",
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
                    "summary": "{{fields.name.en}}",
                    "fields": [
                        {
                            "label": "Name",
                            "name": "name",
                            "widget": "object",
                            "summary": "{{fields.en}}",
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