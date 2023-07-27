import {pb} from '$lib/pocketbase'

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

async function getAllElectionRecords(){
  const resultList = await pb.collection('elections').getFullList({
    sort: 'created',
    expand: 'electionoptions, electioncandidates, electioncandidates.candidateIssues, electionparties, electionparties.partyIssues, electionvoters',
  });
  console.log(resultList)

  const ElectionRecordResult = resultList.map((record) =>
    {
      if(record.electionoptions.length > 0){
        const returnObject = {
          electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
          ElectionOptions: record.expand.electionoptions,
          ElectionCandidates: [],
          ElectionParties: [],
          ElectionVoters: []
        }
        console.log(returnObject)
        return returnObject;
      }
      if(record.electioncandidates.length > 0){
        const returnObject = {
          electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
          ElectionOptions: record.expand.electionoptions,
          ElectionCandidates: [],
          ElectionParties: [],
          ElectionVoters: []
        }
        console.log(returnObject)
        return returnObject;
      }

    }
  )
  console.log(ElectionRecordResult)
  return ElectionRecordResult

}