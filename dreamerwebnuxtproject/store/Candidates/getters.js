import axios from "axios"

export default
{
  GetElectionsCandidatesFromElectionId: (state) => (Id) =>
  {
    return state.ElectionCandidates
  }
}
