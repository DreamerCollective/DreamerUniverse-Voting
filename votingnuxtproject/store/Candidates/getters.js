import axios from "axios"

export default
{
  GetCandidatesOfElectionCardsById: (state) => (CandidatesFromSpecificElection) =>
  {
    let returnCandidates = [];
    for(let i = 1; i < state.ElectionCandidates.length; i++ )
    {
      if(CandidatesFromSpecificElection.CandidatesForSpecificElections[i].electionCandidatesId === state.ElectionCandidates[i].id)
      {
        returnCandidates.push(state.ElectionCandidates[i])
      }
    }
    return returnCandidates
  }
}
