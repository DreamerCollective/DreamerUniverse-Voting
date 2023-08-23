import { pb } from "$lib/pocketbase.js";

export async function getAllElectionRecords(){
  const resultList = await pb.collection('elections').getFullList({
    sort: 'created',
    expand: 'electionoptions',
  });
  console.log(resultList)

  return resultList.map((record) => {
      return {
        electionname: record.electionname,
        electionsubtitle: record.electionsubtitle,
        electiondescription: record.electiondescription,
        electionoptions: record.expand.electionoptions.map((record) => {
          return {
            candidatesNumber: record.candidatesNumber,
            candidatesCanWin: record.candidatesCanWin,
            percentageCandidatesMustWin: record.percentageCandidatesMustWin,
            howManyRounds: record.howManyRounds,
            howManyVoters: record.howManyVoters,
            howManyVotesPerVoter: record.howManyVotesPerVoter,
            canYouVoteForParties: record.canYouVoteForParties,
            doVotesTransfer: record.doVotesTransfer,
            votersMustVote: record.votersMustVote,
            dataElectionStarts : record.dataElectionStarts,
          }
    }),
        electioncandidates: [],
        electionparties: [],
        electionvoters: []
      }
    }
  )
}