import axios from "axios"

export default
{
  async FetchElections({commit})
  {
    await axios.get("http://localhost:8000/ElectionsVariables")
      .then(data=>(commit("PopulateElectionStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.get("http://localhost:8000/CandidatesForSpecificElections")
      .then(data=>(commit("PopulateCandidatesForSpecificElectionsStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
    await axios.get("http://localhost:8000/VotersForSpecificElections")
      .then(data=>(commit("PopulateVotersForSpecificElectionsStateMutation", data.data)))
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
  },
  async FetchUsers({commit})
  {
    await axios.get("http://localhost:8000/VotingUsers")
      .then(data=>(commit("PopulateUsersStateMutation", data.data)))
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
    await axios.put(`http://localhost:8000/Elections/${ElectionCard.id}`, {ElectionCard})
      .then(data=>(commit("ChangeOptionSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async AddElectionAction({commit}, ElectionCard)
  {
    await axios.post("http://localhost:8000/Elections", {ElectionCard})
      .then(data=>(commit("AddOptionSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async DeleteElectionAction({commit}, ElectionCard)
  {
    await axios.delete(`http://localhost:8000/Elections/${ElectionCard.id}`)
      .then(data=>(commit("AddOptionSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },

}
