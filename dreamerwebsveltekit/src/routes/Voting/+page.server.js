import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

// export async function load({ locals, fetch }) {
//     const fetchElectionVariables = async () => {
//         try {
//             const projects = serializeNonPOJOs(
//                 await locals.pb.collection('electionsettings').getFullList()
//             );
//             return projects;
//         } catch (err) {
//             console.log('Error: ', err);
//             throw error(err.status, err.message);
//         }
//     }
//     return {
//         cards: fetchElectionVariables()
//     };
// }

/*export const actions = {
    default: async ({request}) => {
        const formdata = await request.formData()

        const name = formData.get('name')


    }
}*/