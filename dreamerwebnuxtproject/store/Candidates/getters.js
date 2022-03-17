import axios from "axios"

export default
{
  GetElectionsCandidatesFromElectionId: (state) => (ElectionWithCandidates) =>
  {
    const returnable = state.ElectionCandidates.filter(function(a){return a.id === ElectionWithCandidates[0].ElectionCard.Candidates.includes(a.id)})
    //return state.ElectionCandidates.filter(function(a){return a.id === ElectionWithCandidates.includes(a.id)})
    console.log("Returnable ",returnable)
    return ElectionWithCandidates.length
  },
  GetIssuesFromCandidates: (state) => (CandidateIssues) =>
  {
    return state.CandidateIssues.filter(function(a){return a.id === CandidateIssues.id})
  }
}
