import axios from "axios"

export default
{
  GetUserAuthorOfElectionCardsById: (state) => (cardId) =>
  {
    return state.VotingUsers.find(users => users.id === cardId)
  }
}
