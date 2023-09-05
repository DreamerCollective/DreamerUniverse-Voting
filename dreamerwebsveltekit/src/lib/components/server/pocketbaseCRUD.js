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
        numberOfCandidates: record.numberOfCandidates,
        candidatesCanWin: record.candidatesCanWin,
        percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds,
        howManyVoters: record.howManyVoters,
        howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties,
        doVotesTransfer: record.doVotesTransfer,
        votersMustVote: record.votersMustVote,
        dateElectionStarts : record.dateElectionStarts,
        electioncandidates: [],
        electionparties: [],
        electionvoters: []
      }
    }
  )
}