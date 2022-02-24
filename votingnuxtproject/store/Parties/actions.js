import axios from "axios"

export default
{
  async FetchParty({commit})
  {
    await axios.get("http://localhost:8000/Party")
      .then(data=>(commit("PopulatePartiesStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
}
