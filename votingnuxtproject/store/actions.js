export default
{
  ChangeElectionOptionsStateAction({commit}, {
    HowManyCandidates,
    HowManyCandidatesCanWin,
    HowManyVotesDoVotersHave,
    HowMuchOfAPercentageMustCandidatesNeedToWin,
    HowManyElectionRounds,
    HowManyVoters,
    electionCardId})
  {
    commit('ChangeOptionSelectedStateHowManyCandidatesMutation', HowManyCandidates, electionCardId)
    commit('ChangeOptionSelectedStateHowManyCandidatesCanWinMutation', HowManyCandidatesCanWin, electionCardId)
    commit('ChangeOptionSelectedStateHowManyVotesDoVotersHaveMutation', HowManyVotesDoVotersHave, electionCardId)
    commit('ChangeOptionSelectedStateHowMuchOfAPercentageMustCandidatesNeedToWinMutation', HowMuchOfAPercentageMustCandidatesNeedToWin, electionCardId)
    commit('ChangeOptionSelectedStateHowManyElectionRoundsMutation', HowManyElectionRounds, electionCardId)
    commit('ChangeOptionSelectedStateHowManyVotersMutation', HowManyVoters, electionCardId)
  },

  ChangeElectionOptionStateOfHowManyCandidatesAction({commit}, {Number, electionCardId})
  {
    commit('ChangeOptionSelectedStateHowManyCandidatesMutation', Number, electionCardId)
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
