import axios from "axios"

export default
{
  GetUserAuthorOfElectionCardsById: (state) => (cardId) =>
  {
    return state.users.find(user => parseInt(user.id) === cardId)
  }
}
