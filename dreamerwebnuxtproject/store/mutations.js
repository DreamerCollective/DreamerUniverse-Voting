import axios from "axios"

export default
{
  PopulateVotersStateMutation(state, Voters)
  {
    state.Users.Voters = Voters;
  },
  PopulateUsersMapStateMutation(state, UsersMap)
  {
    state.Users.UsersMap = UsersMap;
  },
  PopulateUsersStateMutation(state, Users)
  {
    state.Users.Users = Users;
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
  PopulateCandidateIssuesStateMutation(state, ElectionIssues)
  {
    state.Candidates.CandidateIssues = ElectionIssues;
  },
  PopulateElectionMetaOptionsStateMutation(state, ElectionOptions)
  {
    state.Options.ElectionOptions = ElectionOptions;
  },
  PopulatePartiesStateMutation(state, Parties)
  {
    state.Parties.ElectionParties = Parties;
  },

  ChangePartySelectedStateMutation(state, PartyCard)
  {
    state.Parties.ElectoionParties = PartyCard
  },
  AddPartyStateMutation(state, PartyCard)
  {
    state.Parties.ElectoionParties.push(PartyCard)
  },
  DeletePartyStateMutation(state, PartyCard)
  {
    state.Parties.ElectoionParties = PartyCard
  },

  ChangeCandidateSelectedStateMutation(state, Candidate)
  {
    state.Candidates.ElectionCandidates = Candidate
  },
  AddCandidateStateMutation(state, Candidate)
  {
    state.Candidates.ElectionCandidates.push(Candidate)
  },
  DeleteCandidateStateMutation(state, Candidate)
  {
    state.Candidates.ElectionCandidates = Candidate
  },

  ChangeOptionSelectedStateMutation(state, Elections)
  {
    state.Elections.ElectionsVariables = Elections
  },
  AddElectionStateMutation(state, Elections)
  {
    state.Elections.ElectionsVariables.push(Elections)
  },
  DeleteElectionStateMutation(state, Elections)
  {
    state.Elections.ElectionsVariables = Elections
  },

  AddElectionMapStateMutation(state, Elections)
  {
    state.Elections.ElectionsMap.push(Elections)
  },
  DeleteElectionMapStateMutation(state, Elections)
  {
    const index = Elections.id
    state.Elections.ElectionsMap.splice(index,1)
  },
}
