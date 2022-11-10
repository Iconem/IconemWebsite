export default {
    "name": "team",
    "label": "Team",
    "slug": "{{slug}}",
    "editor": {
        "preview": true
    },
    files: [
        {
            "label": "Members",
            "name": "members",
            "file": "data/team.json",
            "widget": "list",
            "fields": [
                {
                    "label": "Team",
                    "name": "team",
                    "widget": "list"
                }
            ]
        }
    ]
}