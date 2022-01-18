export default () => ({
  ChangeOptionSelectedState(state, id, electionCardId)
  {
    let changedElectionOptionsState = state.electionCards[electionCardId].electionOptions.id
    changedElectionOptionsState = !changedElectionOptionsState
  }
})
