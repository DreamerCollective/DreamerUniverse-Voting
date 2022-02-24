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
  async ChangeOptionSelectedStateAction({commit}, updatedElectionCard)
  {
    await axios.put(`http://localhost:8000/electionCards/${updatedElectionCard.id}`, {updatedElectionCard})
      .then(data=>(commit("ChangeOptionSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },

}
