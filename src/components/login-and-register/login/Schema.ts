import { z } from "zod";

// zodSchema
const Schema = z.object({
    username: z.string()
        .nonempty('O usuário é obrigatorio!')
        .min(3, 'O usuário precisa ter no minimo 6 caracteres')
        .toLowerCase(),
    password: z.string()
        .nonempty('A senha é obrigatoria!')
        .min(6, 'A senha precisa ter no minimo 6 caracteres')
});

export default Schema;