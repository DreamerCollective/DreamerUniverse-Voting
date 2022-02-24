import axios from "axios"

export default
{
  async FetchSiteOptions({commit})
  {
    await axios.get("http://localhost:8000/electionMetaOptions")
      .then(data=>(commit("PopulateElectionOptionsStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
}
