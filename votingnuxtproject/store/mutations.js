export default
{
  ChangeOptionSelectedStateMutation(state, OptionId, electionCardId)
  {
    let changedElectionOptionsState = state.electionCards[electionCardId].id
    changedElectionOptionsState = !changedElectionOptionsState
    state.electionCards[OptionId].push(changedElectionOptionsState)
  },
}
