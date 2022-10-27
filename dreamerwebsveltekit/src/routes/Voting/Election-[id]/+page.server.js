
/** @type {import('./$types').Actions} */

export const actions = {
    default: async (event) => {
        await fetch (`http://localhost:3000/ElectionsVariables/${event.params.id}` ,{method:'POST', body: JSON.stringify({})});
    }
}