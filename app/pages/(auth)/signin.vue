<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/yup";
import { useForm } from "vee-validate";
import { loginSchema } from "~/features/auth/auth.constants";

definePageMeta({
    layout: "auth",
});

const form = useForm({
    initialValues: { email: "", password: "" },
    validationSchema: toTypedSchema(loginSchema),
});

const handleSubmit = form.handleSubmit(async (values) => {
    console.log(values);
    await navigateTo("/products");
});
</script>

<template>
    <div class="center-item flex-1 flex-col">
        <h1 class="mobile-h3 sm:h3 text-center text-black">Log In</h1>

        <form class="mx-auto mt-8 w-full sm:max-w-98" autocomplete="off" @submit="handleSubmit">
            <div class="space-y-2">
                <form-field name="email">
                    <template #default="{ componentField }">
                        <Input placeholder="Email" autocomplete="off" v-bind="componentField" />
                    </template>
                </form-field>

                <div>
                    <form-field name="password">
                        <template #default="{ componentField }">
                            <PasswordInput placeholder="Password" autocomplete="off" v-bind="componentField" />
                        </template>
                    </form-field>
                    <nuxt-link to="/forgot-password" class="mobile-bodySM sm:bodyXS text-primary">Forgot your password? </nuxt-link>
                </div>
            </div>

            <Button type="submit" class="mt-4 w-full">Log In</Button>

            <p class="mobile-bodySM my-4 text-center text-black sm:my-6">Or</p>

            <div class="mx-auto mb-8 flex w-fit items-center gap-x-4.25 sm:mb-6">
                <shared-svg-icon name="brand/apple" svg-class-name="size-8.75" />
                <shared-svg-icon name="brand/google" svg-class-name="size-8.75" />
                <shared-svg-icon name="brand/facebook" svg-class-name="size-8.75 [&_path]:fill-white [&_rect]:fill-[#1877F2]" />
            </div>

            <p class="mobile-bodyXS sm:bodyXS text-center text-black capitalize">
                New to modimal?
                <nuxt-link to="/signup" class="text-primary">create an account</nuxt-link>.
            </p>
        </form>
    </div>
</template>
