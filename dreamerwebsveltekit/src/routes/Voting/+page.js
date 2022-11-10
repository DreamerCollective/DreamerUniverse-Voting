export async function load({ data, fetch }) {
    const fetchElectionVariables = async () => {
        const res = await fetch('/api/Voting')
        const dataj = res.json();
        console.log(dataj);
        return dataj
    }
    return {
        cards: fetchElectionVariables()
    };
}