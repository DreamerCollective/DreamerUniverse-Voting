import axios from "axios"

export default
{
  GetElectionsCandidatesFromElectionId: (state) => (ElectionWithCandidates) =>
  {
    return state.ElectionCandidates.filter(function(a){return a.id === ElectionWithCandidates.id})
  },
  GetIssuesFromCandidates: (state) => (CandidateIssues) =>
  {
    return state.CandidateIssues.filter(function(a){return a.id === CandidateIssues.id})
  }
}
