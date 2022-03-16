import axios from "axios"

export default
{
  GetUserAuthorOfElectionCardsById: (state) => (authorId) =>
  {
   return state.Users.filter(function(a){return a.id === authorId})
  }
}
