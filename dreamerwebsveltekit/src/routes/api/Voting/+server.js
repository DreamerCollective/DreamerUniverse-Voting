export async function GET({ request }) {
    const res = await fetch('http://localhost:3000/ElectionsVariables');
    const data = await res.json()
    return new Response(JSON.stringify(data), {status:200})
}
export async function POST({request, params}) {
    const res = await fetch(`http://localhost:3000/ElectionsVariables/${params.id}`);
    const data = await res.json()
    return new Response(JSON.stringify(data), {status:200})
}

