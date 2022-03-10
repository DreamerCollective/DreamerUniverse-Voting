import axios from "axios"

export default
{
  GetElections: (state) =>
  {
    return state.ElectionsMap.map(Elections => state.ElectionsVariables[Elections])
  },
}
