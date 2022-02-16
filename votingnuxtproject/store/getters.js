import axios from "axios"

export default
{
  GetElectionCardOptionSelectedState: (state) => (payload) =>
  {
    return state.electionCards.find(electionOptions => electionOptions.selected === payload)
  },
  GetElectionCardsById: (state) => (id) =>
  {
    return state.electionCards.find(electionCards => electionCards.id === id)
  },
  GetUserAuthorOfElectionCardsById: (state) => (payload) =>
  {
    return state.users.find(users => users.id === payload)
  }
}
