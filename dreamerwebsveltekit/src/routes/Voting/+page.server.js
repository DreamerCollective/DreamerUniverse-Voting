
export async function load({ fetch }) {
    const response = await fetch("http://localhost:3000/ElectionsVariables");
    console.log(response)
    const metadata = await response.json();
    const data = metadata.data;
    return{data}
}