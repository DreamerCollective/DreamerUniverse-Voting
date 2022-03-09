import axios from "axios"

export default
{
  GetElections: (state) =>
  {
    state.ElectionMap.map(Elections => state.ElectionsVariables[Elections])
  },
  GetSingleElection: (state) => (id) =>
  {
    state.ElectionMap.map(id => state.ElectionsVariables[id])
  }
}
