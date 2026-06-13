<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/yup";
import { useForm } from "vee-validate";
import { registerSchema } from "~/features/auth/auth.constants";

definePageMeta({
    layout: "auth",
});

const verifyModal = ref(false);
const form = useForm({
    initialValues: { firstName: "", lastName: "", email: "", password: "" },
    validationSchema: toTypedSchema(registerSchema),
});

const handleSubmit = form.handleSubmit(async (values) => {
    console.log(values);
    verifyModal.value = true;
});
</script>

<template>
    <div class="center-item flex-1 flex-col">
        <h1 class="mobile-h3 sm:h3 text-center text-black">Create Account</h1>

        <form class="mx-auto mt-8 w-full sm:max-w-98" autocomplete="off" @submit="handleSubmit">
            <div class="space-y-2">
                <form-field name="firstName">
                    <template #default="{ componentField }">
                        <Input placeholder="First Name" autocomplete="off" v-bind="componentField" />
                    </template>
                </form-field>

                <form-field name="lastName">
                    <template #default="{ componentField }">
                        <Input placeholder="Last Name" autocomplete="off" v-bind="componentField" />
                    </template>
                </form-field>

                <form-field name="email">
                    <template #default="{ componentField }">
                        <Input placeholder="Email" autocomplete="off" v-bind="componentField" />
                    </template>
                </form-field>

                <form-field name="password">
                    <template #default="{ componentField }">
                        <PasswordInput placeholder="Password" autocomplete="off" v-bind="componentField" />
                    </template>
                </form-field>
            </div>

            <Button type="submit" class="mt-4 w-full max-sm:hidden">Register Now</Button>

            <p class="mobile-bodySM sm:bodySM mx-auto mt-6 flex w-fit gap-x-4 sm:mt-4 sm:gap-x-6.75">
                <span class="text-black">Already have an account?</span>

                <nuxt-link to="/signin" class="text-primary-600">Log In</nuxt-link>
            </p>

            <p class="mobile-bodySM my-4 text-center text-black sm:my-6">Or</p>

            <div class="mx-auto mb-8 flex w-fit items-center gap-x-4.25 sm:mb-6">
                <shared-svg-icon name="brand/apple" svg-class-name="size-8.75" />
                <shared-svg-icon name="brand/google" svg-class-name="size-8.75" />
                <shared-svg-icon name="brand/facebook" svg-class-name="size-8.75 [&_path]:fill-white [&_rect]:fill-[#1877F2]" />
            </div>

            <Button type="submit" class="mt-4 mb-2 w-full sm:hidden">Register Now</Button>

            <p class="mobile-bodyXS sm:bodyXS text-center text-black capitalize">
                by clicking register now you agree to <a href="/" target="_blank" class="text-primary">terms & conditions</a> and
                <a href="/" target="_blank" class="text-primary">privacy policy</a>.
            </p>
        </form>

        <Dialog v-model:open="verifyModal">
            <DialogContent class="rounded-none! sm:max-w-213.5">
                <DialogHeader class="mt-5">
                    <DialogTitle class="mobile-h3 sm:h3 text-center capitalize">verify your email address</DialogTitle>
                    <DialogDescription class="mobile-bodySM sm:bodyLG mx-auto mt-6 max-w-150 text-center text-black">
                        We've sent an email to nina@gmail.com to verify your email address and activate your account. the link in the email
                        will expire in 24 hours.</DialogDescription
                    >
                </DialogHeader>

                <p class="mobile-bodySM sm:bodyLG mx-auto mt-6 mb-5 max-w-150 text-center text-black sm:mt-8">
                    Click here if you did not receive an email or would like to change the email address you registered with
                </p>
            </DialogContent>
        </Dialog>
    </div>
</template>
