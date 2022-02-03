export default
{
  ChangeOptionSelectedStateAction({commit}, OptionId)
  {
    commit('ChangeOptionSelectedStateMutation', OptionId)
  },
  RevealCardAction({commit}, electionCardId)
  {
    commit('RevealCardStateMutation', electionCardId)
  }
}
