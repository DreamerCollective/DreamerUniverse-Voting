import axios from "axios"

export default
{
  async FetchElectionCards({commit})
  {
    await axios.get("http://localhost:8000/electionCards")
      .then(data=>(commit("PopulateElectionCardsStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
  async ChangeOptionSelectedStateAction({commit}, updatedElectionCard)
  {
    await axios.put(`http://localhost:8000/electionCards/${updatedElectionCard.id}`, {updatedElectionCard})
      .then(data=>(commit("ChangeOptionSelectedStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },

}
