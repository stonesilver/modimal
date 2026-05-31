<script lang="ts" setup>
import { FOOTER_LINKS } from "../homepage.constant";

const form = reactive({ email: "", subscribe: false });

const SOCIALS = [
    { href: "/", icon: "brand/instagram" },
    { href: "/", icon: "brand/facebook" },
    { href: "/", icon: "brand/pinterest" },
    { href: "/", icon: "brand/tiktok" },
];

const handleSubmit = () => {
    console.log(form);
};
</script>

<template>
    <footer class="bg-gray-404040 mt-6 flex min-h-104.25 flex-col pt-8 pb-10 sm:mt-12 lg:pt-13.5 lg:pb-8">
        <div class="content-wrapper grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="flex flex-col justify-between">
                <div>
                    <h3 class="mobile-h4 sm:h5 text-white">Join our club, get 15% off for your Birthday</h3>

                    <form class="mt-4 max-w-124" @submit.prevent="handleSubmit">
                        <div class="border-primary-50 flex h-10 items-center border">
                            <input
                                v-model="form.email"
                                type="email"
                                required
                                class="placeholder:text-primary-50 text-primary-50 bodyXS h-10 w-full flex-1 px-4 outline-none"
                                placeholder="Enter Your Email Address"
                            />

                            <button type="submit" class="center-item h-10 w-8 shrink-0">
                                <shared-svg-icon name="outline/arrow-right" />
                            </button>
                        </div>

                        <label for="subscribe" class="mt-2 flex items-center gap-2">
                            <button type="button" class="size-4 shrink-0 bg-white"></button>

                            <span class="mobile-caption sm:overlineSM text-white">
                                By Submitting your email, you agree to receive advertising emails from Modimal.
                            </span>
                        </label>
                    </form>
                </div>

                <div class="max-lg:hidden">
                    <div class="flex items-center gap-4">
                        <nuxt-link v-for="{ icon, href } in SOCIALS" :key="icon" :to="href" external target="_blank">
                            <shared-svg-icon :name="icon" class="" />
                        </nuxt-link>
                    </div>

                    <p class="text-gray-cbcbcb captionMD mt-7 flex items-center gap-1">
                        <shared-svg-icon name="outline/copyright" />
                        <span> 2023 modimal. All Rights Reserved. </span>
                    </p>
                </div>
            </div>

            <ul class="grid grid-cols-2 gap-4 lg:grid-cols-3">
                <li v-for="{ header, links } in FOOTER_LINKS" :key="header" class="">
                    <h3 class="mobile-h4 sm:h5 text-white">{{ header }}</h3>

                    <ul class="mt-2 space-y-2 lg:mt-5">
                        <li v-for="{ label, href } in links" :key="label" class="">
                            <nuxt-link :to="href" class="mobile-bodyMD sm:bodyMD text-white">{{ label }}</nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>

            <div class="lg:hidden">
                <div class="flex items-center gap-4">
                    <nuxt-link v-for="{ icon, href } in SOCIALS" :key="icon" :to="href" external target="_blank">
                        <shared-svg-icon :name="icon" class="" />
                    </nuxt-link>
                </div>

                <p class="text-gray-cbcbcb captionMD mt-7 flex items-center gap-1">
                    <shared-svg-icon name="outline/copyright" />
                    <span> 2023 modimal. All Rights Reserved. </span>
                </p>
            </div>
        </div>
    </footer>
</template>
