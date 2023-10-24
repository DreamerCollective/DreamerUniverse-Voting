import { pb } from "$lib/pocketbase.js";

export async function getAllElectionRecords(){
  const resultList = await pb.collection('elections').getFullList({
    sort: 'created',
    expand: 'electioncandidates, electioncandidates.candidateIssues, electionparties, electionparties.partyIssues, electionvoters',
  });
  console.log(resultList)

  return resultList.map((record) => 
  {
    if(record.electioncandidates.length > 0 && record.electionparties.length > 0 && record.electionvoters.length > 0)
    {
      return {
        id: record.id,
        electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
        numberOfCandidates: record.numberOfCandidates, candidatesCanWin: record.candidatesCanWin, percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds, howManyVoters: record.howManyVoters, howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties, doVotesTransfer: record.doVotesTransfer, votersMustVote: record.votersMustVote, dateElectionStarts : record.dateElectionStarts,
        // @ts-ignore
        electioncandidates: record.expand.electioncandidates.map((record)=>{
          if(record.candidateIssues.length === 0)
          {
            return { id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription, candidateIssues: [] }
          }
          else if(record.candidateIssues.length > 0)
          {
            return {
              id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription,
              // @ts-ignore
              candidateIssues: record.expand.candidateIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        // @ts-ignore
        electionparties: record.expand.electionparties.map((record)=>{
          if(record.partyIssues.length === 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              partyIssues: []
            }
          }
          else if(record.partyIssues.length > 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              // @ts-ignore
              partyIssues: record.expand.partyIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        // @ts-ignore
        electionvoters: record.expand.electionvoters.map((record)=>{
          return{ id: record.id, attachedUser: [], voterName: record.voterName }
        })
      }
    }
    else if(record.electioncandidates.length === 0 && record.electionparties.length > 0 && record.electionvoters.length > 0){
      return {
        id: record.id,
        electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
        numberOfCandidates: record.numberOfCandidates, candidatesCanWin: record.candidatesCanWin, percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds, howManyVoters: record.howManyVoters, howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties, doVotesTransfer: record.doVotesTransfer, votersMustVote: record.votersMustVote, dateElectionStarts : record.dateElectionStarts,
        electioncandidates: [],
        // @ts-ignore
        electionparties: record.expand.electionparties.map((record)=>{
          if(record.partyIssues.length === 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              partyIssues: []
            }
          }
          else if(record.partyIssues.length > 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              // @ts-ignore
              partyIssues: record.expand.partyIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        // @ts-ignore
        electionvoters: record.expand.electionvoters.map((record)=>{
          return{ id: record.id, attachedUser: null, voterName: record.voterName }
        })
      }
    }
    else if(record.electioncandidates.length > 0 && record.electionparties.length === 0 && record.electionvoters.length > 0){
      return {
        id: record.id,
        electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
        numberOfCandidates: record.numberOfCandidates, candidatesCanWin: record.candidatesCanWin, percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds, howManyVoters: record.howManyVoters, howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties, doVotesTransfer: record.doVotesTransfer, votersMustVote: record.votersMustVote, dateElectionStarts : record.dateElectionStarts,
        // @ts-ignore
        electioncandidates: record.expand.electioncandidates.map((record)=>{
          if(record.candidatesIssues.length === 0)
          {
            return { id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription, candidateIssues: [] }
          }
          else if(record.candidatesIssues.length > 0)
          {
            return {
              id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription,
              // @ts-ignore
              candidateIssues: record.expand.candidateIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        electionparties: [],
        // @ts-ignore
        electionvoters: record.expand.electionvoters.map((record)=>{
          return{ id: record.id, attachedUser: null, voterName: record.voterName }
        })
      }
    }
    else if(record.electioncandidates.length > 0 && record.electionparties.length > 0 && record.electionvoters.length === 0){
      return {
        id: record.id,
        electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
        numberOfCandidates: record.numberOfCandidates, candidatesCanWin: record.candidatesCanWin, percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds, howManyVoters: record.howManyVoters, howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties, doVotesTransfer: record.doVotesTransfer, votersMustVote: record.votersMustVote, dateElectionStarts : record.dateElectionStarts,
        // @ts-ignore
        electioncandidates: record.expand.electioncandidates.map((record)=>{
          if(record.candidateIssues.length === 0)
          {
            return { id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription, candidateIssues: [] }
          }
          else if(record.candidateIssues.length > 0)
          {
            return {
              id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription,
              // @ts-ignore
              candidateIssues: record.expand.candidateIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        // @ts-ignore
        electionparties: record.expand.electionparties.map((record)=>{
          if(record.partyIssues.length === 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              partyIssues: []
            }
          }
          else if(record.partyIssues.length > 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              // @ts-ignore
              partyIssues: record.expand.partyIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        electionvoters: [],
      }
    }
    else if(record.electioncandidates.length === 0 && record.electionparties.length === 0 && record.electionvoters.length > 0){
      return {
        id: record.id,
        electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
        numberOfCandidates: record.numberOfCandidates, candidatesCanWin: record.candidatesCanWin, percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds, howManyVoters: record.howManyVoters, howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties, doVotesTransfer: record.doVotesTransfer, votersMustVote: record.votersMustVote, dateElectionStarts : record.dateElectionStarts,
        electioncandidates: [],
        electionparties: [],
        // @ts-ignore
        electionvoters: record.expand.electionvoters.map((record)=>{
          return{ id: record.id, attachedUser: null, voterName: record.voterName }
        })
      }
    }
    else if(record.electioncandidates.length > 0 && record.electionparties.length === 0 && record.electionvoters.length === 0){
      return {
        id: record.id,
        electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
        numberOfCandidates: record.numberOfCandidates, candidatesCanWin: record.candidatesCanWin, percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds, howManyVoters: record.howManyVoters, howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties, doVotesTransfer: record.doVotesTransfer, votersMustVote: record.votersMustVote, dateElectionStarts : record.dateElectionStarts,
        // @ts-ignore
        electioncandidates: record.expand.electioncandidates.map((record)=>{
          if(record.candidatesIssues.length === 0)
          {
            return { id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription, candidateIssues: [] }
          }
          else if(record.candidatesIssues.length > 0)
          {
            return {
              id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription,
              // @ts-ignore
              candidateIssues: record.expand.candidateIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        electionparties: [],
        electionvoters: []
      }
    }
    else if(record.electioncandidates.length === 0 && record.electionparties.length > 0 && record.electionvoters.length === 0){
      return {
        id: record.id,
        electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
        numberOfCandidates: record.numberOfCandidates, candidatesCanWin: record.candidatesCanWin, percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds, howManyVoters: record.howManyVoters, howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties, doVotesTransfer: record.doVotesTransfer, votersMustVote: record.votersMustVote, dateElectionStarts : record.dateElectionStarts,
        electioncandidates: [],
        // @ts-ignore
        electionparties: record.expand.electionparties.map((record)=>{
          if(record.partyIssues === null)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              partyIssues: []
            }
          }
          else if(record.partyIssues.length > 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              // @ts-ignore
              partyIssues: record.expand.partyIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        electionvoters: []
      }
    }
    else if(record.electioncandidates === null && record.electionparties === null && record.electionvoters === null){
      return {
        id: record.id,
        electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
        numberOfCandidates: record.numberOfCandidates, candidatesCanWin: record.candidatesCanWin, percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds, howManyVoters: record.howManyVoters, howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties, doVotesTransfer: record.doVotesTransfer, votersMustVote: record.votersMustVote, dateElectionStarts : record.dateElectionStarts,
        electioncandidates: [],
        electionparties: [],
        electionvoters: []
      }
    }
    else{
      return {
        id: record.id,
        electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
        numberOfCandidates: record.numberOfCandidates, candidatesCanWin: record.candidatesCanWin, percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds, howManyVoters: record.howManyVoters, howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties, doVotesTransfer: record.doVotesTransfer, votersMustVote: record.votersMustVote, dateElectionStarts : record.dateElectionStarts,
        electioncandidates: [],
        electionparties: [],
        electionvoters: []
      }
    }
  })
}