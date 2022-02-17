import axios from "axios"

export default
{
  async FetchElectionCards({commit})
  {
    const response = await axios.get("http://localhost:8000/electionCards");
    commit("PopulateElectionCardsStateMutation", response.data)
  },
  async FetchParty({commit})
  {
    const response = await axios.get("http://localhost:8000/Party");
    commit("PopulateElectionCardsStateMutation", response.data)
  },
  async FetchElectionCandidates({commit})
  {
    const response = await axios.get("http://localhost:8000/electionCandidates");
    commit("PopulateElectionCardsStateMutation", response.data)
  },
  async FetchUsers({commit})
  {
    const response = await axios.get("http://localhost:8000/users");
    commit("PopulateElectionCardsStateMutation", response.data)
  },
  async FetchSiteOptions({commit})
  {
    const response = await axios.get("http://localhost:8000/electionMetaOptions");
    commit("PopulateElectionCardsStateMutation", response.data)
  },
  async ChangeOptionSelectedStateAction({commit}, updatedElectionCard)
  {
    const response = await axios.put(`http://localhost:8000/electionCards/${updatedElectionCard.id}`, {updatedElectionCard})
    commit('ChangeOptionSelectedStateMutation', response.data)
  },

}
