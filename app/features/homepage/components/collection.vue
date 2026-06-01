<script lang="ts" setup></script>

<template>
    <section class="content-wrapper mt-5 md:mt-22">
        <h2 class="mobile-h2 sm:h3 text-black">Collection</h2>

        <ul class="mt-2 grid grid-cols-2 gap-4 sm:mt-6 lg:gap-6">
            <li class="space-y-6 md:space-y-16">
                <div class="md:relative">
                    <img
                        src="https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780299733/Modimal/boluses_qasr6q.webp"
                        alt="Boluses"
                        class="block h-41.25 w-full object-cover md:h-129.5"
                    />

                    <Button variant="white" class="w-full cursor-auto max-md:justify-start md:absolute md:right-4 md:bottom-4 md:w-46.25">
                        Boluses
                    </Button>
                </div>

                <div class="md:relative">
                    <img
                        src="https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780299734/Modimal/dresses_gimden.webp"
                        alt="Dresses"
                        class="block h-69 w-full object-cover md:h-209.5"
                    />

                    <Button variant="white" class="w-full cursor-auto max-md:justify-start md:absolute md:right-4 md:bottom-4 md:w-46.25">
                        Dresses
                    </Button>
                </div>
            </li>

            <li class="flex flex-col justify-between space-y-8 md:space-y-36">
                <div class="md:relative">
                    <img
                        src="https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780299737/Modimal/pants_ffulap.webp"
                        alt="Pants"
                        class="block h-63.25 w-full object-cover md:h-210"
                    />

                    <Button variant="white" class="w-full cursor-auto max-md:justify-start md:absolute md:bottom-4 md:left-4 md:w-46.25">
                        Pants
                    </Button>
                </div>

                <div class="md:relative">
                    <img
                        src="https://res.cloudinary.com/stonesilver/image/upload/f_auto,q_auto,w_auto/v1780299735/Modimal/outwear_z2izi6.webp"
                        alt="Outwears"
                        class="block h-33.75 w-full object-cover md:h-108.75"
                    />

                    <Button variant="white" class="w-full cursor-auto max-md:justify-start md:absolute md:right-4 md:bottom-4 md:w-46.25">
                        Outwears
                    </Button>
                </div>
            </li>
        </ul>
    </section>
</template>
