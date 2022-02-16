import axios from "axios"

export default
{
  async FetchElectionCards({commit})
  {
    const response = await axios.get();
  },
  ChangeOptionSelectedStateAction({commit},
                                    updatedElectionCard)
  {
    commit('ChangeOptionSelectedStateMutation', updatedElectionCard)
  },

}
