import axios from "axios"

export default
{
  PopulateElectionCardsStateMutation(state, ElectionCardResponse)
  {
    //state.electionCards.push(ElectionCardResponse);
    state.electionCards = ElectionCardResponse;
  },
  PopulateElectionCandidatesStateMutation: (state) => (ElectionCandidatesResponse) =>
  {
    state.electionCandidates.push(ElectionCandidatesResponse);
  },
  PopulateUsersStateMutation: (state) => (UserResponse) =>
  {
    state.users.push(UserResponse);
  },
  PopulateElectionMetaOptionsStateMutation: (state) => (ElectionMetaResponse) =>
  {
    state.electionMetaOptions.push(ElectionMetaResponse);
  },
  PopulatePartiesStateMutation: (state) => (Parties) =>
  {
    state.Party.push(Parties);
  },
  ChangeOptionSelectedStateMutation: (state) => (updatedElectionCard) =>
  {
    const index = state.electionCards.findIndex(electionCard => electionCard.id === updatedElectionCard.id)
    Window.console.log(index);
    if (index !== -1) {
      state.electionCards.splice(index,1,updatedElectionCard)
    }
  },
}
