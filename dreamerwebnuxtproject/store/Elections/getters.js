
export default
{
  GetElections: (state) =>
  {
    return state.ElectionsVariables
  },
  GetOneElections: (state) => (id) =>
  {
    return state.ElectionsVariables.filter(function(a){return a.id === id})
  },
}
