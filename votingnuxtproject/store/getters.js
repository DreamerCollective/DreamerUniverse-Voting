import axios from "axios"

export default
{
  GetElectionCardsById: (state) => (id) =>
  {
    return state.electionCards.find(electionCards => electionCards.id === id)
  },
  GetElectionMetaOptions: (state) => (index) =>
  {
    return state.electionMetaOptions.find(electionMetaOptions => electionMetaOptions.id === index)
  },
  GetElectionCards: (state) => (id) =>
  {
    return state.electionCards
  },
  GetUserAuthorOfElectionCardsById: (state) => (id) =>
  {
    return state.users.find(users => users.id === id)
  }
}
