export const FOOTER_LINKS = [
    {
        header: "About Modimal",
        links: [
            { label: "Collection", href: "/" },
            { label: "Sustainability", href: "/" },
            { label: "Privacy Policy", href: "/" },
            { label: "Support System", href: "/" },
            { label: "Terms & Condition", href: "/" },
            { label: "Copyright Notice", href: "/" },
        ],
    },
    {
        header: "Help & Support",
        links: [
            { label: "Orders & Shipping", href: "/" },
            { label: "Returns & Refunds", href: "/" },
            { label: "FAQs", href: "/" },
            { label: "Contact Us", href: "/" },
        ],
    },
    {
        header: "Join Up",
        links: [
            { label: "Modimal Club", href: "/" },
            { label: "Careers", href: "/" },
            { label: "Visit Us", href: "/" },
        ],
    },
];

export const NAV_LIST = [
    { key: "COLLECTION" as const, label: "Collection", href: "/collection" },
    { key: "NEW_IN" as const, label: "New In", href: "/new-in" },
    { key: "MODIWEEK" as const, label: "Modiweek", href: "/modiweek" },
    { key: "PLUS_SIZE" as const, label: "Plus Size", href: "/plus-size" },
    { key: "SUSTAINABILITY" as const, label: "Sustainability", href: "/sustainability" },
];

export const SUB_MENUS = {
    COLLECTION: {
        name: "collection",
        links: [
            {
                header: "Category",
                links: [
                    { label: "Shop All", href: "/" },
                    { label: "Boluses & Top", href: "/" },
                    { label: "Pants", href: "/" },
                    { label: "Dresses & Jumpsuits", href: "/" },
                    { label: "Outwear & Jackets ", href: "/" },
                    { label: "Pullovers", href: "/" },
                    { label: "Tees", href: "/" },
                    { label: "Shorts & Skirts", href: "/" },
                ],
            },
            {
                header: "featured",
                links: [
                    { label: "new in", href: "/" },
                    { label: "modiweek", href: "/" },
                    { label: "plus size", href: "/" },
                    { label: "best seller", href: "/" },
                ],
            },
            {
                header: "more",
                links: [
                    { label: "bundles", href: "/" },
                    { label: "occasion wear", href: "/" },
                    { label: "matching set", href: "/" },
                    { label: "suiting", href: "/" },
                ],
            },
        ],
        imageCard: [
            {
                label: "Blouses",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780210793/Modimal/blouse_n8mymr",
            },
            {
                label: "Plus Size",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780210792/Modimal/plus-size_o48dgj.webp",
            },
        ],
    },
    NEW_IN: {
        name: "new in",
        links: [
            {
                header: "category",
                links: [
                    { label: "Shop All", href: "/" },
                    { label: "Boluses & Top", href: "/" },
                    { label: "Pants", href: "/" },
                    { label: "Dresses & Jumpsuits", href: "/" },
                    { label: "Outwear & Jackets ", href: "/" },
                    { label: "Pullovers", href: "/" },
                    { label: "Tees", href: "/" },
                    { label: "Shorts & Skirts", href: "/" },
                ],
            },
            {
                header: "trending",
                links: [
                    { label: "plus size", href: "/" },
                    { label: "fall collection", href: "/" },
                    { label: "modiweek", href: "/" },
                ],
            },
        ],
        imageCard: [
            {
                label: "fall collection",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780251638/Modimal/fall-collection_ojf6jw.webp",
            },
            {
                label: "boluses",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780251610/Modimal/boluses_inwcep.webp",
            },
            {
                label: "dresses",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780251637/Modimal/dresses_eut0u3.webp",
            },
        ],
    },
    MODIWEEK: {
        name: "modiweek",
        links: [
            {
                header: "Category",
                links: [
                    { label: "Shop All", href: "/" },
                    { label: "Boluses & Top", href: "/" },
                    { label: "Pants", href: "/" },
                    { label: "Dresses & Jumpsuits", href: "/" },
                    { label: "Outwear & Jackets ", href: "/" },
                    { label: "Pullovers", href: "/" },
                    { label: "Tees", href: "/" },
                    { label: "Shorts & Skirts", href: "/" },
                ],
            },
            {
                header: "featured",
                links: [
                    { label: "new in", href: "/" },
                    { label: "modiweek", href: "/" },
                    { label: "plus size", href: "/" },
                    { label: "best seller", href: "/" },
                ],
            },
            {
                header: "more",
                links: [
                    { label: "bundles", href: "/" },
                    { label: "occasion wear", href: "/" },
                    { label: "matching set", href: "/" },
                    { label: "suiting", href: "/" },
                ],
            },
        ],
        imageCard: [
            {
                label: "Blouses",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780210793/Modimal/blouse_n8mymr",
            },
            {
                label: "Plus Size",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780210792/Modimal/plus-size_o48dgj.webp",
            },
        ],
    },
    PLUS_SIZE: {
        name: "plus size",
        links: [
            {
                header: "category",
                links: [
                    { label: "Shop All", href: "/" },
                    { label: "Boluses & Top", href: "/" },
                    { label: "Pants", href: "/" },
                    { label: "Dresses & Jumpsuits", href: "/" },
                    { label: "Outwear & Jackets ", href: "/" },
                    { label: "Pullovers", href: "/" },
                    { label: "Tees", href: "/" },
                    { label: "Shorts & Skirts", href: "/" },
                ],
            },
        ],
        imageCard: [
            {
                label: "Pants",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780252974/Modimal/Pants_jc6tfx.webp",
            },
            {
                label: "dresses",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780252973/Modimal/dresses_gx2ups.webp",
            },
            {
                label: "blouses",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780252974/Modimal/blouses_hmupnl.webp",
            },
        ],
    },
    SUSTAINABILITY: {
        name: "sustainability",
        links: [
            {
                header: "sustainability ",
                links: [
                    { label: "mission", href: "/" },
                    { label: "processing", href: "/" },
                    { label: "materials", href: "/" },
                    { label: "packaging", href: "/" },
                    { label: "product care", href: "/" },
                    { label: "our suppliers", href: "/" },
                ],
            },
        ],
        imageCard: [
            {
                label: "",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780253208/Modimal/sustainability-1_yr8ard.webp",
            },
            {
                label: "",
                image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780253209/Modimal/sustainability-2_yi1ni2.webp",
            },
        ],
    },
};

export const DUMMY_PRODUCTS = [
    {
        image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780237605/Modimal/tailored-stretch_gy2a6i.webp",
        name: "tailored stretch",
        description: "turn it up pants",
        price: "$180",
        colors: ["#0C0C0C", "#7DC3EB", "#748C70"],
    },
    {
        image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780237604/Modimal/technical-silk_qemnzf.webp",
        name: "Technical Silk",
        description: "Make A Splash",
        price: "$120",
        colors: ["#909225", "#19418E", "#0C0C0C"],
    },
    {
        image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780237604/Modimal/cool-weave_q49nqi.webp",
        name: "Cool Weave",
        description: "Anywhere Dress",
        price: "$210",
        colors: ["#D0A5EA", "#909225", "#748C70"],
    },
];
