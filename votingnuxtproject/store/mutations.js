export default
{
  ChangeOptionSelectedStateHowManyCandidatesMutation(state, {Number, electionCardId})
  {
    state.electionCards[electionCardId].HowManyCandidates = Number
  },
  ChangeOptionSelectedStateHowManyCandidatesCanWinMutation(state, {Number, electionCardId})
  {
    state.electionCards[electionCardId].HowManyCandidatesCanWin= Number
  },
  ChangeOptionSelectedStateHowManyVotesDoVotersHaveMutation(state, {Number, electionCardId})
  {
    state.electionCards[electionCardId].HowManyVotesDoVotersHave = Number
  },
  ChangeOptionSelectedStateHowMuchOfAPercentageMustCandidatesNeedToWinMutation(state, {Number, electionCardId})
  {
    state.electionCards[electionCardId].HowMuchOfAPercentageMustCandidatesNeedToWin = Number
  },
  ChangeOptionSelectedStateHowManyElectionRoundsMutation(state, {Number, electionCardId})
  {
    state.electionCards[electionCardId].HowManyElectionRounds = Number
  },
  ChangeOptionSelectedStateHowManyVotersMutation(state, {Number, electionCardId})
  {
    state.electionCards[electionCardId].HowManyVoters = Number
  },

}
