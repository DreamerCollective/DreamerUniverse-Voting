import axios from "axios"

export default
{
  PopulateElectionCardsStateMutation: (state) => (ElectionCardResponse) =>
  {
    state.electionCards = ElectionCardResponse;
  },
  PopulateElectionCandidatesStateMutation: (state) => (ElectionCardResponse) =>
  {
    state.electionCandidates = ElectionCardResponse;
  },
  PopulateUsersStateMutation: (state) => (ElectionCardResponse) =>
  {
    state.users = ElectionCardResponse;
  },
  PopulateElectionMetaOptionsStateMutation: (state) => (ElectionCardResponse) =>
  {
    state.electionMetaOptions = ElectionCardResponse;
  },
  PopulatePartiesStateMutation: (state) => (ElectionCardResponse) =>
  {
    state.Party = ElectionCardResponse;
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
