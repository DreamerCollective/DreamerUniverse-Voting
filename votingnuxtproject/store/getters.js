

export default
{
  GetElectionCardOptionSelectedState: (state) => (payload) =>
  {
    return state.electionCards.find(electionOptions => electionOptions.electionOptions.selected === payload)
  },
  GetElectionCardsById: (state) => (payload) =>
  {
    return state.electionCards.find(electionCards => electionCards.id === payload)
  },
  GetUserAuthorOfElectionCardsById: (state) => (payload) =>
  {
    return state.users.find(users => users.id === payload)
  }
}
