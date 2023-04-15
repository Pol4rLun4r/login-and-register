import { z } from "zod";

const Schema = z.object({
    username: z.string()
        .nonempty('Username is required')
        .min(3, 'Username must be at least 6 characters long')
        .toLowerCase(),
    password: z.string()
        .nonempty('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    confirmPass: z.string()
        .nonempty('Confirm your password')
        .min(6, 'Confirm Password must be at least 6 characters')
}).refine((data) => data.password === data.confirmPass, {
    message: "Passwords don't match",
    path: ["confirmPass"]
});

export default Schema;