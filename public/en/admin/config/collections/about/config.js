export default {
    "name": "about",
    "label": "About",
    "folder": "data/about",
    "format": "yaml",
    "extension": "yaml",
    "identifier_field": "title.en",
    "fields": [
        {
            "label": "Order",
            "name": "order",
            "widget": "string",
        },
        {
            "label": "Title",
            "name": "title",
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
            "label": "Description",
            "name": "description",
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
            "label": "Link",
            "name": "link",
            "widget": "string",
        },
        {
            "label": "Img",
            "name": "img",
            "widget": "image",
            "media_folder": "/static/img/home/",
            "public_folder": "/img/home/"
        }
    ]
}