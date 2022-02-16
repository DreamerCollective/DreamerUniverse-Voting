import axios from "axios"

export default
{
  ChangeOptionSelectedStateMutation: (state) => (updatedElectionCard) =>
  {
    const index = state.electionCards.findIndex(electionCard => electionCard.id === updatedElectionCard.id)
    Window.console.log(index);
    //if (index !== -1) {
      //state.electionCards.splice(index,1,updatedElectionCard)
    //}
    state.electionCards.splice(index,1,updatedElectionCard)
  },
}
