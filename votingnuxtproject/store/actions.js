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
    await axios.get("http://localhost:8000/Party")
      .then(data=>(commit("PopulatePartiesStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchElectionCandidates({commit})
  {
    await axios.get("http://localhost:8000/electionCandidates")
      .then(data=>(commit("PopulateElectionCandidatesStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchUsers({commit})
  {
    await axios.get("http://localhost:8000/users")
      .then(data=>(commit("PopulateUsersStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchSiteOptions({commit})
  {
    await axios.get("http://localhost:8000/electionMetaOptions")
      .then(data=>(commit("PopulateElectionMetaOptionsStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async ChangeOptionSelectedStateAction({commit}, ElectionCard)
  {
    await axios.put(`http://localhost:8000/electionCards/${ElectionCard.id}`, {ElectionCard})
      .then(data=>(commit("ChangeOptionSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async AddElectionAction({commit}, ElectionCard)
  {
    await axios.post("http://localhost:8000/electionCards", {ElectionCard})
      .then(data=>(commit("AddOptionSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async DeleteElectionAction({commit}, ElectionCard)
  {
    await axios.delete(`http://localhost:8000/electionCards/${ElectionCard.id}`)
      .then(data=>(commit("AddOptionSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },

}
