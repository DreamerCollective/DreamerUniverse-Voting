export default
{
  PopulateElectionCardsStateMutation(state, ElectionCardResponse)
  {
    state.electionCards = ElectionCardResponse;
  },
  ChangeOptionSelectedStateMutation(state, updatedElectionCard)
  {
    const index = state.electionCards.findIndex(electionCard => electionCard.id === updatedElectionCard.id)
    if (index !== -1) {
      state.electionCards.splice(index,1,updatedElectionCard)
    }
  },
}
