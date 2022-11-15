export async function load({ data, fetch }) {
    const fetchElectionVariables = async () => {
        const res = await fetch('/api/Voting')
        const data = res.json();
        console.log(data);
        return data
    }
    return {
        cards: fetchElectionVariables()
    };
}

export const actions = {
    default: async ({request}) => {
        const formdata = await request.formData()

        const name = formData.get('name')


    }
}