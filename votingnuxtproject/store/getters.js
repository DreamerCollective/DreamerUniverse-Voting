import axios from "axios"

export default
{
  GetElectionCardsById: (state) => (id) =>
  {
    return state.electionCards.find(electionCard => electionCard.id === id)
  },
  GetElectionMetaOptions: (state) => (index) =>
  {
    return state.electionMetaOptions.find(electionMetaOption => electionMetaOption.id === index)
  },
  GetElectionCards: (state) =>
  {
    return state.electionCards
  },
  GetUserAuthorOfElectionCardsById: (state) => (cardId) =>
  {
    return state.users.find(user => user.id === cardId)
  }
}
