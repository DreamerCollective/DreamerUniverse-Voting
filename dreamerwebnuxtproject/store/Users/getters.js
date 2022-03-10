import axios from "axios"

export default
{
  GetUserAuthorOfElectionCardsById: (state) => (Card) =>
  {
    return Card.authorId.map(userId => state.Users[userId])
  }
}
