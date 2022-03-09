import axios from "axios"

export default
{
  PopulateCandidateIssuesStateMutation(state, ElectionIssues)
  {
    state.Candidates.ElectionIssues = ElectionIssues;
  },
  PopulateVotersStateMutation(state, Voters)
  {
    state.Users.Voters = Voters;
  },
  PopulateElectionStateMutation(state, ElectionVariables)
  {
    state.Elections.ElectionsVariables = ElectionVariables;
  },
  PopulateElectionMapStateMutation(state, ElectionMap)
  {
    state.Elections.ElectionMap = ElectionMap;
  },
  PopulateElectionCandidatesStateMutation(state , ElectionCandidates)
  {
    state.Candidates.ElectionCandidates = ElectionCandidates;
  },
  PopulateUsersStateMutation(state, Users)
  {
    state.Users.Users = Users;
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
    const index = Elections.id
    state.Elections.ElectionsVariables.splice(index,1, Elections)
  },
  AddOptionSelectedStateMutation(state, Elections)
  {
    state.Elections.ElectionsVariables.push(Elections)
  },
  DeleteOptionSelectedStateMutation(state, Elections)
  {
    const index = Elections.id
    state.Elections.ElectionsVariables.splice(index,1)
  },
}
