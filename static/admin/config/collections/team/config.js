export default {
    "label": "Team",
    "name": "team",
    "format": "json",
    "extension": "json",
    "files": [
        {
            "label": "Members",
            "name": "team",
            "file": "data/team.json",
            "fields": [
                {
                    "label": "members",
                    "name": "members",
                    "widget": "list",
                    "summary": "{{fields.name}}",
                    "fields": [
                        { "label": "id", "name": "id", "pattern": ['^[a-z0-9_\-]+$', "Must be lowercase, without spaces or special characters"] },
                        { "label": "name", "name": "name" },
                        {
                            "label": "job", "name": "job",
                            "widget": "object",
                            "summary": "{{fields.en}}: {{fields.fr}}",
                            "fields": [
                                {
                                    "label": "En",
                                    "name": "en",
                                    "widget": "string",
                                    "default": "Job title"
                                },
                                {
                                    "label": "Fr",
                                    "name": "fr",
                                    "widget": "string",
                                    "default": "Emploi",
                                }
                            ]
                        },
                        {
                            "label": "description", "name": "description",
                            "widget": "object",
                            "summary": "{{fields.en}}: {{fields.fr}}",
                            "fields": [
                                {
                                    "label": "En",
                                    "name": "en",
                                    "widget": "string",
                                    "default": "Job description"
                                },
                                {
                                    "label": "Fr",
                                    "name": "fr",
                                    "widget": "string",
                                    "default": "Descriptif de poste",
                                }
                            ]
                        },
                        {
                            "label": "Img",
                            "name": "img",
                            "widget": "image",
                            "choose_url":  false,
                            "media_folder": "/assets/img/team/{{fields.id}}",
                            "public_folder": "/img/team/{{fields.id}}"
                        },
                    ]
                }
            ]
        }

    ]
}

