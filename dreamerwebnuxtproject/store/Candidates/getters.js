import axios from "axios"

export default
{
  GetElectionsCandidatesFromElectionId: (state) => (ElectionWithCandidates) =>
  {
    console.log("Election array in candidate getter", ElectionWithCandidates)
    //const CandidateArray = ElectionWithCandidates[0].ElectionCard.specificElectionCandidates
    //const returnable = state.ElectionCandidates.filter(function(a){return a.id === CandidateArray})
    //return state.ElectionCandidates.filter(function(a){return a.id === ElectionWithCandidates.includes(a.id)})
    const {ElectionCard: {specificElectionCandidates}} = ElectionWithCandidates
    let CandidateArrayReturnable = []
    for(let i = 0; i < specificElectionCandidates.length; i++)
    {
      for(let j = 0; j < state.ElectionCandidates.length; j++)
      {
        if(state.ElectionCandidates[j].id === specificElectionCandidates[i])
        {
          CandidateArrayReturnable.push(state.ElectionCandidates[j])
        }
      }
    }
    console.log("Returnable ", CandidateArrayReturnable)
    return CandidateArrayReturnable
  },
  GetIssuesFromCandidates: (state) => (CandidateIssues) =>
  {
    return state.CandidateIssues.filter(function(a){return a.id === CandidateIssues.id})
  }
}
