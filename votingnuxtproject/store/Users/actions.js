import axios from "axios"

export default
{
  async FetchUsers({commit})
  {
    await axios.get("http://localhost:8000/users")
      .then(data=>(commit("PopulateUsersStateMutation", data.data)))
      .catch (error=>{ console.log(error)});
  },
}
