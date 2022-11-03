export async function load ({ fetch }) {
    const endpoint = "http://localhost:3000/ElectionsVariables";
    const headers = {
        "content-type": "application/json"
    };
    const graphqlQuery = {
        "operationName": "fetchElectionVaribles",
        "query": `query fetchElectionVaribles {
            ElectionVariables{
                authorID,
                title,
                subtitle,
                textInformation
                }
            }`,
        "variables":{}
    };

    const options = {
        "method": 'GET',
        "headers": headers,
        "mode": 'cors',
        //"body": JSON.stringify(graphqlQuery)
    };

    const response = await fetch(endpoint, options)
        .then((response)=> {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`
                );
            }

        })
    console.log(response)
    const {data} = await response.json();
    return {data};
}