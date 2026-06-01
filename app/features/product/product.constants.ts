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

export const FILTER_OPTIONS = [
    {
        label: "sort by",
        model: "sortBy" as const,
        options: [
            { label: "Featured", value: "featured" },
            { label: "Best Seller", value: "best_seller" },
            { label: "Price: Low To Hight", value: "price_low_to_hight" },
            { label: "Price: Hight To Low", value: "price_hight_to_low" },
        ],
    },
    {
        label: "collection",
        model: "collection" as const,
        options: [
            { label: "In Stock", value: "in_Stock" },
            { label: "Out of Stock", value: "out_of_stock" },
            { label: "Pre-order", value: "pre_order" },
        ],
    },
    {
        label: "size",
        model: "size" as const,
        options: [
            { label: "XS / US (0-4)", value: "xs_us_0_4" },
            { label: "S / US (4-6)", value: "s_us_4_6" },
            { label: "M / US (6-10)", value: "m_us_6_10" },
            { label: "L / US (10-14)", value: "l_us_10_14" },
            { label: "XL / US (12-16)", value: "xl_us_12_16" },
        ],
    },
    {
        label: "fabric",
        model: "fabric" as const,
        options: [
            { label: "Cotton", value: "cotton" },
            { label: "Linen", value: "linen" },
            { label: "Wool", value: "wool" },
            { label: "Silk", value: "silk" },
            { label: "Cashmere", value: "cashmere" },
        ],
    },
    {
        label: "color",
        model: "color" as const,
        options: [
            { label: "black", value: "black" },
            { label: "red", value: "red" },
            { label: "green", value: "green" },
            { label: "yellow", value: "yellow" },
            { label: "dark blue", value: "dark blue" },
            { label: "purple", value: "purple" },
            { label: "pink", value: "pink" },
            { label: "light blue", value: "light blue" },
            { label: "orange", value: "orange" },
            { label: "white", value: "white" },
        ],
    },
];
