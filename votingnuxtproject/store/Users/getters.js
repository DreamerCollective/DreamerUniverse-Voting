import axios from "axios"

export default
{
  GetUserAuthorOfElectionCardsById: (state) => (cardId) =>
  {
    return state.users.find(users => users.id === cardId)
  }
}
