import axios from "axios"

export default
{
  GetUserAuthorOfElectionCardsById: (state) => (cardId) =>
  {
    const username = state.users.find(user => user.id === cardId)
    return username.username
  }
}
