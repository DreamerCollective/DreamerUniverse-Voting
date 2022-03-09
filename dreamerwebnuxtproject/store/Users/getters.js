import axios from "axios"

export default
{
  GetUserAuthorOfElectionCardsById: (state) => (Card) =>
  {
    return Card.map(userId => state.Users[userId])
  }
}
