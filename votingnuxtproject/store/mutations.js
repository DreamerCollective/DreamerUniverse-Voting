import axios from "axios"

export default
{
  PopulateVotersForSpecificElectionsStateMutation(state, ElectionCardResponse)
  {
    state.Elections.VotersForSpecificElections = ElectionCardResponse;
  },
  PopulateCandidatesForSpecificElectionsStateMutation(state, ElectionCardResponse)
  {
    state.Elections.CandidatesForSpecificElections = ElectionCardResponse;
  },
  PopulateElectionStateMutation(state, ElectionCardResponse)
  {
    state.Elections.ElectionsVariables = ElectionCardResponse;
  },
  PopulateElectionCandidatesStateMutation(state , ElectionCandidatesResponse)
  {
    state.Candidates.ElectionCandidates = ElectionCandidatesResponse;
  },
  PopulateUsersStateMutation(state, UserResponse)
  {
    state.Users.VotingUsers = UserResponse;
  },
  PopulateElectionMetaOptionsStateMutation(state, ElectionOptions)
  {
    state.Options.ElectionOptions = ElectionOptions;
  },
  PopulatePartiesStateMutation(state, Parties)
  {
    state.Parties.ElectionParties = Parties;
  },
  ChangeOptionSelectedStateMutation(state, Elections)
  {
    const index = state.Elections.ElectionsVariables.findIndex(ElectionVariable => ElectionVariable.id === Elections.id)
    if (index !== -1) {
      state.Elections.ElectionsVariables.splice(index,1, Elections)
    }
  },
  AddOptionSelectedStateMutation(state, Elections)
  {
    state.Elections.ElectionsVariables.push(Elections)
  },
  DeleteOptionSelectedStateMutation(state, Elections)
  {
    const index = state.Elections.ElectionsVariables.findIndex(electionCard => electionCard.id === Elections.id)
    if (index !== -1) {
      state.Elections.ElectionsVariables.splice(index,1)
    }
  },
}
