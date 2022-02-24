import axios from "axios"

export default
{
  PopulateElectionCardsStateMutation(state, ElectionCardResponse)
  {
    state.Elections.electionCards = ElectionCardResponse;
  },
  PopulateElectionCandidatesStateMutation(state , ElectionCandidatesResponse)
  {
    state.Candidates.electionCandidates = ElectionCandidatesResponse;
  },
  PopulateUsersStateMutation(state, UserResponse)
  {
    state.Users.users = UserResponse;
  },
  PopulateElectionMetaOptionsStateMutation(state, ElectionMetaResponse)
  {
    state.Options.electionMetaOptions = ElectionMetaResponse;
  },
  PopulatePartiesStateMutation(state, Parties)
  {
    state.Parties.Party = Parties;
  },
  ChangeOptionSelectedStateMutation(state, updatedElectionCard)
  {
    const index = state.Elections.electionCards.findIndex(electionCard => electionCard.id === updatedElectionCard.id)
    if (index !== -1) {
      state.Elections.electionCards.splice(index,1,updatedElectionCard)
    }
  },
}
