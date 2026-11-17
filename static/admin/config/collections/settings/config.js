const group = (name, label, fields) => ({
    name, label, widget: "object", collapsed: true, fields,
});

const field = (name, label, widget = "string") => ({ name, label, widget });

const socialIcon = (name, label) => ({
    name, label, widget: "image", choose_url: false,
    media_folder: "/static/img/home/social", public_folder: "/img/home/social",
});

const download = (name, label) => group(name, label, [
    field("title", "Link text"),
    {
        name: "pdf", label: "PDF", widget: "file", choose_url: false,
        media_folder: "/static/pdf", public_folder: "/pdf",
    },
]);

const localizedFields = [
    field("description", "Site meta description", "text"),
    group("navigation", "Navigation labels", [
        field("projects", "Projects"),
        field("map", "Map"),
        field("about", "About"),
        field("contribute", "Contribute"),
        field("contact", "Contact"),
        field("studio", "Studio"),
        field("research", "Research"),
        field("exploration", "Exploration"),
    ]),
    group("projects", "Projects", [
        field("title", "Section heading"),
        group("modal", "Project detail labels", [
            field("pictures", "Pictures"),
            field("videos", "Videos"),
            field("models", "3D models"),
            { ...field("actors", "Project contributors"), required: false },
        ]),
    ]),
    group("team", "Team introduction", [
        field("title", "Heading"),
        { ...field("subtitle", "Subheading"), required: false },
        field("description", "Description", "text"),
    ]),
    group("partners", "Collaborator headings", [
        field("partners", "Partners"),
        field("clients", "Clients"),
    ]),
    group("downloads", "Downloads", [
        download("brochure", "Brochure"),
        download("portfolio", "Exhibition portfolio"),
        download("rgpd", "Data protection policy"),
    ]),
    group("newsletter", "Newsletter form", [
        field("title", "Heading"),
        field("placeholder", "Email placeholder"),
        field("button_label", "Subscribe button"),
    ]),
];

export default {
    name: "settings",
    label: "Site settings",
    format: "json",
    editor: { preview: false },
    files: [
        {
            name: "shared", label: "Shared settings", file: "data/settings/shared.json",
            fields: [
                field("author", "Site author"),
                group("home", "Home header", [
                    field("slogan_research_prefix", "Research slogan prefix"),
                    field("slogan_studio_prefix", "Studio slogan prefix"),
                    field("slogan", "Shared slogan ending"),
                    {
                        name: "social", label: "Social links", widget: "list",
                        summary: "{{fields.id}}", required: false,
                        fields: [
                            field("id", "Network name"),
                            field("link", "Profile URL"),
                            socialIcon("icon_black", "Research icon (black)"),
                            socialIcon("icon_white", "Studio icon (white)"),
                        ],
                    },
                ]),
                group("contact", "Contact details", [
                    field("phone", "Phone number as displayed"),
                    field("phone_link", "International number for click-to-call"),
                    field("address", "Street address"),
                    field("map_url", "Map URL for this address"),
                    field("email", "Contact email"),
                ]),
                field("footer", "Footer copyright"),
            ],
        },
        { name: "english", label: "English", file: "data/settings/en.json", fields: localizedFields },
        { name: "french", label: "French", file: "data/settings/fr.json", fields: localizedFields },
    ],
};
