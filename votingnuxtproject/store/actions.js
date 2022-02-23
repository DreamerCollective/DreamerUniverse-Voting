import axios from "axios"

export default
{
  async FetchElectionCards({commit})
  {
    await axios.get("http://localhost:8000/electionCards")
      .then(data=>(commit("PopulateElectionCardsStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchParty({commit})
  {
    const response = await axios.get("http://localhost:8000/Party");
    commit("PopulateElectionCandidatesStateMutation", response.data)
  },
  async FetchElectionCandidates({commit})
  {
    const response = await axios.get("http://localhost:8000/electionCandidates");
    commit("PopulateUsersStateMutation", response.data)
  },
  async FetchUsers({commit})
  {
    const response = await axios.get("http://localhost:8000/users");
    commit("PopulateElectionMetaOptionsStateMutation", response.data)
  },
  async FetchSiteOptions({commit})
  {
    const response = await axios.get("http://localhost:8000/electionMetaOptions");
    commit("PopulatePartiesStateMutation", response.data)
  },
  async ChangeOptionSelectedStateAction({commit}, updatedElectionCard)
  {
    const response = await axios.put(`http://localhost:8000/electionCards/${updatedElectionCard.id}`, {updatedElectionCard})
    commit('ChangeOptionSelectedStateMutation', response.data)
  },

}
