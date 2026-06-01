<script lang="ts" setup>
const MODIWEEK = [
    {
        id: "ec85055d-1f07-4178-a105-7ee0c7b222e6",
        image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780238493/Modimal/sunday_yo3upw.webp",
        weekday: "Sunday",
    },
    {
        id: "ca53fca5-1eb5-47c0-97a7-9af99eb3d8ee",
        image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780238492/Modimal/monday_xaoyn6.webp",
        weekday: "Monday",
    },
    {
        id: "c9c888be-6903-4a90-9e3f-270ed1419a81",
        image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780238493/Modimal/tuesday_xjk1ee.webp",
        weekday: "Tuesday",
    },
    {
        id: "8da99d8f-b288-4254-bb9d-ac5cfab1ac27",
        image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780238494/Modimal/wednesday_nyta81.webp",
        weekday: "Wednesday",
    },
    {
        id: "87cd6d0a-0331-4bec-94a5-6885dd64c3e7",
        image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780238493/Modimal/thursday_szeyam.webp",
        weekday: "Thursday",
    },
    {
        id: "d4c5ff8d-d733-41a5-8841-bb3ad9b62c36",
        image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780238493/Modimal/sunday_yo3upw.webp",
        weekday: "Friday",
    },
    {
        id: "9dcb9976-c022-4891-a4b3-e12326b180ed",
        image: "https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780238492/Modimal/monday_xaoyn6.webp",
        weekday: "Saturday",
    },
];
</script>

<template>
    <section class="content-wrapper mt-5 md:mt-22">
        <h2 class="mobile-h2 sm:h3 text-black">Modiweek</h2>

        <ul class="mt-2 flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto sm:mt-6 lg:gap-6">
            <li v-for="{ id, image, weekday } in MODIWEEK" :key="id" class="min-w-[calc(50%-16px)] snap-start sm:min-w-[288px]">
                <img :src="image" :alt="weekday" class="block h-60.75 object-cover md:h-106.5" />

                <p class="mobile-h4 sm:h6 mt-0.5 sm:mt-7">{{ weekday }}</p>
            </li>
        </ul>
    </section>
</template>
