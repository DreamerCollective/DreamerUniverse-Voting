import { error, invalid, redirect } from '@sveltejs/kit';
import { registerUserSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';

export const actions = {
    default: async ({ locals, request }) => {
        const { formData, errors } = await validateData(await request.formData(), registerUserSchema);

        if (errors) {
            return invalid(400, {
                data: formData,
                errors: errors.fieldErrors
            });
        }

        try {
            await locals.pb.collection('users').create({ ...formData });
            await locals.pb.collection('users').requestVerification(formData.email);
        } catch (err) {
            console.log('Error: ', err);
            throw error(500, 'Something went wrong');
        }

        throw redirect(303, '/login');
    }
};