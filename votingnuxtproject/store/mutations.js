import ElectionCards from "@/components/ElectionCards";

export default
{
  ChangeOptionSelectedStateHowManyCandidatesMutation(state, {Number, electionCardId})
  {
    const index = state.electionCards.findIndex(electionCards => electionCards.id === electionCardId)
    state.electionCards.splice(index,1,Number)
  },
  ChangeOptionSelectedStateHowManyCandidatesCanWinMutation(state, {Number, electionCardId}) {
    const index = state.electionCards.findIndex(electionCards => electionCards.id === electionCardId)
    state.electionCards.splice(index,1,Number)
  },
  ChangeOptionSelectedStateHowManyVotesDoVotersHaveMutation(state, {Number, electionCardId})
  {
    const index = state.electionCards.findIndex(electionCards => electionCards.id === electionCardId)
    state.electionCards.splice(index,1,Number)
  },
  ChangeOptionSelectedStateHowMuchOfAPercentageMustCandidatesNeedToWinMutation(state, {Number, electionCardId})
  {
    const index = state.electionCards.findIndex(electionCards => electionCards.id === electionCardId)
    state.electionCards.splice(index,1,Number)
  },
  ChangeOptionSelectedStateHowManyElectionRoundsMutation(state, {Number, electionCardId})
  {
    const index = state.electionCards.findIndex(electionCards => electionCards.id === electionCardId)
    state.electionCards.splice(index,1,Number)
  },
  ChangeOptionSelectedStateHowManyVotersMutation(state, {Number, electionCardId})
  {
    const index = state.electionCards.findIndex(electionCards => electionCards.id === electionCardId)
    state.electionCards.splice(index,1,Number)
  },

}
