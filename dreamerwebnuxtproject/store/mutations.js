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
  PopulateUsersMapStateMutation(state, UsersMap)
  {
    state.Users.UsersMap = UsersMap;
  },
  PopulateElectionStateMutation(state, ElectionVariables)
  {
    state.Elections.ElectionsVariables = ElectionVariables;
  },
  PopulateElectionMapStateMutation(state, ElectionMap)
  {
    state.Elections.ElectionsMap = ElectionMap;
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
    state.Elections.ElectionsVariables = Elections
  },
  AddElectionStateMutation(state, Elections)
  {
    state.Elections.ElectionsVariables = Elections
  },
  AddElectionMapStateMutation(state, Elections)
  {
    state.Elections.ElectionsMap.push(Elections)
  },
  DeleteElectionStateMutation(state, Elections)
  {
    state.Elections.ElectionsVariables = Elections
  },
  DeleteElectionMapStateMutation(state, Elections)
  {
    const index = Elections.id
    state.Elections.ElectionsMap.splice(index,1)
  },
}
