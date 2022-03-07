import axios from "axios"

export default
{
  GetCandidatesOfElectionCardsById: (state) => (card) =>
  {
    const ElectionCandidates = card.specificElectionCandidates
    return state.electionCandidates.filter(electionCandidate => electionCandidate.id === ElectionCandidates)
  }
}
