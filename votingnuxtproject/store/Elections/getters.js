import axios from "axios"

export default
{
  GetElectionsFromId: (state) => (Id) =>
  {
    return state.electionCards.find(cards => cards.id === Id)
  }
}
