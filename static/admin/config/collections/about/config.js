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
            "label": "Logo",
            "name": "logo",
            "widget": "object",
            "fields": [
                {
                    "label": "Black",
                    "name": "black",
                    "widget": "image",
                    "choose_url":  false,
                        "media_folder": "/static/img/home/",
                        "public_folder": "/img/home/"
                },
                {
                    "label": "White",
                    "name": "white",
                    "choose_url":  false,
                    "widget": "image",
                        "media_folder": "/static/img/home/",
                        "public_folder": "/img/home/"
                },
            ]
        }
    ]
}