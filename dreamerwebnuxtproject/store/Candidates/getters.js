import axios from "axios"

export default
{
  GetElectionsCandidatesFromElectionId: (state) => (candidates) =>
  {
    candidates.map(state.ElectionCandidates[candidates])
  }
}
