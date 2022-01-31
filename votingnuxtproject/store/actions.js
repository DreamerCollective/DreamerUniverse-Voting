export default
{
  ChangeOptionSelectedStateAction(context, OptionId)
  {
      context.commit('ChangeOptionSelectedStateMutation', OptionId)
  },
  RevealCardAction(context, electionCardId)
  {
    context.commit('RevealCardStateMutation', electionCardId)
  }
}
