<template>
    <ClientOnly>
        <span class="block" v-html="Svg" />
    </ClientOnly>
</template>

<script setup lang="ts">
type IconProps = {
    name: string | undefined;
    width?: string;
    height?: string;
    svgClassName?: string;
    resetHue?: boolean;
    preserveAspectRatio?: "none";
};

const props = defineProps<IconProps>();

const Svg = ref<string>("");

const resetNodeHue = (node: HTMLCollection) => {
    if (node.length) {
        for (let i = 0; i < node.length; i++) {
            const childNode = node[i];

            if (childNode?.hasAttribute("fill")) {
                childNode.setAttribute("fill", "currentColor");
            }

            if (childNode?.hasAttribute("stroke")) {
                childNode.setAttribute("stroke", "currentColor");
            }

            if (childNode?.children.length) {
                resetNodeHue(childNode.children);
            }
        }
    }
};

const fetchXFormatSvg = () => {
    const { name, width, height, svgClassName, preserveAspectRatio } = props;
    try {
        const modules: Record<string, { default: string }> = import.meta.glob(["@/assets/icons/**/**"], {
            query: "raw",
            eager: true,
        });

        const iconString = modules?.[`/assets/icons/${name}.svg`]?.default;

        if (typeof window !== "undefined") {
            const parser = new DOMParser();
            const svg = parser.parseFromString(iconString as string, "image/svg+xml");
            const svgEl = svg.getElementsByTagName("svg")[0];
            if (!svgEl) {
                return (Svg.value = `<span class='text-5xl'>🤪</span>`);
            }

            if (height) svgEl.setAttribute("height", height.toString());
            if (width) svgEl.setAttribute("width", width.toString());
            if (svgClassName) svgEl.setAttribute("class", svgClassName);

            if (preserveAspectRatio === "none") {
                svgEl.removeAttribute("height");
                svgEl.removeAttribute("width");
                svgEl.setAttribute("preserveAspectRatio", "none");
            }

            // Change the fill and stroke color to currentColor
            // This will allow you use css color property on the icon
            if (props.resetHue) {
                svgEl.setAttribute("fill", "currentColor");
                resetNodeHue(svgEl.children);
            }

            const string = new XMLSerializer();
            Svg.value = string.serializeToString(svg);
        }
    } catch (error) {
        console.error(error);
    }
};

watch(
    () => props,
    () => {
        fetchXFormatSvg();
    },
    { deep: true, immediate: true }
);
</script>
