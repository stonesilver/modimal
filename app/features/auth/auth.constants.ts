import { object, string } from "yup";

export const registerSchema = object().shape({
    firstName: string().trim().required("First name is required").min(2, "First name must be at least 2 characters"),
    lastName: string().trim().required("Last name is required").min(2, "Last name must be at least 2 characters"),
    email: string().trim().lowercase().required("Email address is required").email("Please enter a valid email address"),
    password: string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[@$!%*?&]/, "Password must contain at least one special character"),
});

export const loginSchema = object().shape({
    email: string().trim().lowercase().required("Email address is required").email("Please enter a valid email address"),
    password: string().required("Password is required"),
});
