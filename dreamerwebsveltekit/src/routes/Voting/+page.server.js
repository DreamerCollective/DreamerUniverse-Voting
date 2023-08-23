import {getAllElectionRecords} from "$lib/components/server/pocketbaseCRUD.js";

export async function load(){
  const resultList = await getAllElectionRecords()
  console.log("resultList")
  console.log(resultList)
  return{
    records: {
      resultList: resultList
    }
  }
}

