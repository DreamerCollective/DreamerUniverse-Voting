import axios from "axios"

export default
{
  async FetchElections({commit})
  {
    await axios.get("http://localhost:8000/ElectionsVariables")
      .then(data=>(commit("PopulateElectionStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.get("http://localhost:8000/ElectionsMap")
      .then(data=>(commit("PopulateElectionMapStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchParty({commit})
  {
    await axios.get("http://localhost:8000/ElectionParties")
      .then(data=>(commit("PopulatePartiesStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchElectionCandidates({commit})
  {
    await axios.get("http://localhost:8000/ElectionCandidates")
      .then(data=>(commit("PopulateElectionCandidatesStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.get("http://localhost:8000/CandidateIssues")
      .then(data=>(commit("PopulateCandidateIssuesStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchUsers({commit})
  {
    await axios.get("http://localhost:8000/UsersMap")
      .then(data=>(commit("PopulateUsersMapStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.get("http://localhost:8000/Users")
      .then(data=>(commit("PopulateUsersStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.get("http://localhost:8000/Voters")
      .then(data=>(commit("PopulateVotersStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async FetchSiteOptions({commit})
  {
    await axios.get("http://localhost:8000/ElectionOptions")
      .then(data=>(commit("PopulateElectionMetaOptionsStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async ChangeOptionSelectedStateAction({commit}, ElectionCard)
  {
    await axios.put(`http://localhost:8000/ElectionsVariables/${ElectionCard.id}`, {ElectionCard})
      .then(data=>(commit("ChangeOptionSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async AddElectionAction({commit}, ElectionCard)
  {
    await axios.post("http://localhost:8000/ElectionsVariables", {ElectionCard})
      .then(data=>(commit("AddElectionStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    const ElectionCardId = ElectionCard.id
    await axios.post("http://localhost:8000/ElectionsMap", {ElectionCardId})
      .then(data=>(commit("AddElectionMapStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async DeleteElectionAction({commit}, ElectionCard)
  {
    await axios.delete("http://localhost:8000/ElectionsVariables/", {data: ElectionCard})
      .then(data=>(commit("DeleteElectionStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.delete(`http://localhost:8000/ElectionsMap/${ElectionCard.id}`)
      .then(data=>(commit("DeleteElectionMapStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },

}
