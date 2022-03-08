import axios from "axios"

export default
{
  GetElectionsCandidatesFromId: (state) => (Id) =>
  {
    return state.CandidatesForSpecificElections.find(CandidatesForSpecificElection => CandidatesForSpecificElection.id === Id)
  }
}
