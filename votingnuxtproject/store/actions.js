export default
{
  ChangeElectionOptionsStateAction({commit},{
    electionCard})
  {
    commit('ChangeOptionSelectedStateHowManyCandidatesMutation', {electionCard})
    commit('ChangeOptionSelectedStateHowManyCandidatesCanWinMutation', {electionCard})
    commit('ChangeOptionSelectedStateHowManyVotesDoVotersHaveMutation', {electionCard})
    commit('ChangeOptionSelectedStateHowMuchOfAPercentageMustCandidatesNeedToWinMutation', {electionCard})
    commit('ChangeOptionSelectedStateHowManyElectionRoundsMutation', {electionCard})
    commit('ChangeOptionSelectedStateHowManyVotersMutation', {electionCard})
  },

}
