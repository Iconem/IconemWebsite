export default {
    label: "Medias",
    name: "medias",
    format: "json",
    extension: "json",
    files: [
        {
            label: "Medias",
            name: "medias",
            file: "data/medias/medias.json",
            create: true,
            slug: "{{slug}}",
            editor: {
                preview: true,
            },
            fields: [
                {
                    label: "Medias",
                    name: "medias",
                    widget: "list",
                    summary: "{{fields.title}}",
                    fields: [
                        {
                            label: "Title",
                            name: "title",
                            widget: "string",
                        },
                        {
                            label: "Link",
                            name: "link",
                            widget: "string",
                        },
                        {
                            label: "Quote",
                            name: "quote",
                            widget: "string",
                        },
                        {
                            label: "Icon research",
                            name: "icon_research",
                            widget: "image",
                            choose_url: false,
                            media_folder: "/assets/img/medias",
                            public_folder: "/img/medias",
                        },
                        {
                            label: "Icon studio",
                            name: "icon_studio",
                            widget: "image",
                            choose_url: false,
                            media_folder: "/assets/img/medias",
                            public_folder: "/img/medias",
                        },
                    ],
                },
            ],
        },
    ],
};
