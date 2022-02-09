export default
{
  ChangeElectionOptionStateOfHowManyCandidatesAction({commit}, {Number, electionCardId})
  {
    context.commit('ChangeOptionSelectedStateHowManyCandidatesMutation', Number, electionCardId)
  },
  ChangeOptionSelectedStateHowManyCandidatesCanWinAction({commit}, {Number, electionCardId})
  {
    commit('ChangeOptionSelectedStateHowManyCandidatesCanWinMutation', {Number, electionCardId})
  },
  ChangeOptionSelectedStateHowManyVotesDoVotersHaveAction({commit}, {Number, electionCardId})
  {
    commit('ChangeOptionSelectedStateHowManyVotesDoVotersHaveMutation', Number, electionCardId)
  },
  ChangeOptionSelectedStateHowMuchOfAPercentageMustCandidatesNeedToWinAction({commit}, {Number, electionCardId})
  {
    commit('ChangeOptionSelectedStateHowMuchOfAPercentageMustCandidatesNeedToWinMutation', Number, electionCardId)
  },
  ChangeOptionSelectedStateHowManyElectionRoundsAction({commit}, {Number, electionCardId})
  {
    commit('ChangeOptionSelectedStateHowManyElectionRoundsMutation', Number, electionCardId)
  },
  ChangeOptionSelectedStateHowManyVotersAction({commit}, {Number, electionCardId})
  {
    commit('ChangeOptionSelectedStateHowManyVotersMutation', Number, electionCardId)
  },
}
