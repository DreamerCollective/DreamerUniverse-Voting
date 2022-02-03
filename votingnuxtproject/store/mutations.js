export default
{
  ChangeOptionSelectedStateMutation(state, OptionId, electionCardId)
  {
    let changedElectionOptionsState = state.electionCards[electionCardId].id
    changedElectionOptionsState = !changedElectionOptionsState
    state.electionCards[OptionId].push(changedElectionOptionsState)
  },
  RevealCardStateMutation(state, electionCardId)
  {
    let changedCardRevealState = state.electionCards[electionCardId].reveal
    changedCardRevealState = !changedCardRevealState
    state.electionCards[electionCardId].reveal.push(changedCardRevealState)
  }
}
