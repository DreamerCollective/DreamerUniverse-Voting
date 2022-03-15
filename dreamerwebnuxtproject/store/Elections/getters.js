
export default
{
  GetElections: (state) =>
  {
    return state.ElectionsMap.map(Elections => state.ElectionsVariables[Elections])
  },
  GetOneElections: (state) => (id) =>
  {
    let Elections = [];
    state.ElectionsMap.forEach((iterator, index) => {
      if(iterator === id)
      {
        Elections.push(index)
      }
    })
    let CandidateMap = Elections[0].Candidates
    return CandidateMap
  },
}
