/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    const res = await fetch(`http://localhost:3000/ElectionsVariables`);
    const data= await res.json();

    return { data };
}