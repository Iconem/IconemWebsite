export default {
    "name": "team",
    "label": "Team",
    "folder": "data/team",
    "format": "json",
    "extension": "json",
    "create": true,
    "slug": "{{slug}}",
    "editor": {
        "preview": true
    },
    "fields": [
        {
            "label": "id",
            "name": "id",
            "widget": "string",
            "pattern": ['^[a-z0-9_\-]+$', "Must be lowercase, without spaces or special characters"]
        },
        {
            "label": "Name",
            "name": "name",
            "widget": "string"
        },
        {
            "label": "Job",
            "name": "job",
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
            "label": "Photo",
            "name": "img",
            "widget": "image",
                "media_folder": "/assets/img/team",
                "public_folder": "/img/team"
        },
        {
            "label": "Description",
            "name": "description",
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
        }
    ]
}