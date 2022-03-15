import axios from "axios"

export default
{
  GetElectionsCandidatesFromElectionId: (state) => (ElectionWithCandidates) =>
  {
    return ElectionWithCandidates.map(Candidates => state.ElectionCandidates[Candidates])
  },
  GetIssuesFromCandidates: (state) => (CandidateIssues) =>
  {
    return CandidateIssues.map(Issues => state.CandidateIssues[Issues])
  }
}
