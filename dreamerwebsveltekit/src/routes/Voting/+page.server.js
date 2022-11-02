export async function load ({ fetch }) {
    const response = await fetch("http://localhost:3000/ElectionsVariables",
        {credentials: 'include',
            method : 'GET',
            mode: 'cors'}
        );
    console.log(response)
    const metadata = response.json();
    return{metadata}
}