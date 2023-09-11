import { pb } from "$lib/pocketbase.js";

export async function getAllElectionRecords(){
  const resultList = await pb.collection('elections').getFullList({
    sort: 'created',
    expand: 'electioncandidates, electioncandidates.candidateIssues, electionparties, electionparties.partyIssues, electionvoters',
  });
  console.log(resultList)

  return resultList.map((record) => {
    if(record.electioncandidates.length > 0 && record.electionparties.length > 0 && record.electionvoters.length > 0){
      return {
        id: record.id,
        electionname: record.electionname, electionsubtitle: record.electionsubtitle, electiondescription: record.electiondescription,
        numberOfCandidates: record.numberOfCandidates, candidatesCanWin: record.candidatesCanWin, percentageCandidatesMustWin: record.percentageCandidatesMustWin,
        howManyRounds: record.howManyRounds, howManyVoters: record.howManyVoters, howManyVotesPerVoter: record.howManyVotesPerVoter,
        canYouVoteForParties: record.canYouVoteForParties, doVotesTransfer: record.doVotesTransfer, votersMustVote: record.votersMustVote, dateElectionStarts : record.dateElectionStarts,
        electioncandidates: record.expand.electioncandidates.map((record)=>{
          if(record.issues.length === 0)
          {
            return { id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription, candidateIssues: [] }
          }
          else if(record.issues.length > 0)
          {
            return {
              id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription,
              candidateIssues: record.expand.candidateIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        electionparties: record.expand.electionparties.map((record)=>{
          if(record.issues.length === 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              partyIssues: []
            }
          }
          else if(record.issues.length > 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              partyIssues: record.expand.partyIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
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
        electionparties: record.expand.electionparties.map((record)=>{
          if(record.issues.length === 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              partyIssues: []
            }
          }
          else if(record.issues.length > 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              partyIssues: record.expand.partyIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
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
        electioncandidates: record.expand.electioncandidates.map((record)=>{
          if(record.issues.length === 0)
          {
            return { id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription, candidateIssues: [] }
          }
          else if(record.issues.length > 0)
          {
            return {
              id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription,
              candidateIssues: record.expand.candidateIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        electionparties: [],
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
        electioncandidates: record.expand.electioncandidates.map((record)=>{
          if(record.issues.length === 0)
          {
            return { id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription, candidateIssues: [] }
          }
          else if(record.issues.length > 0)
          {
            return {
              id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription,
              candidateIssues: record.expand.candidateIssues.map((record)=>{
                return { id: record.id, issueTitle: record.issueTitle, issueDescription: record.issueDescription }
              })
            }
          }
        }),
        electionparties: record.expand.electionparties.map((record)=>{
          if(record.issues.length === 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              partyIssues: []
            }
          }
          else if(record.issues.length > 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
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
        electioncandidates: record.expand.electioncandidates.map((record)=>{
          if(record.issues.length === 0)
          {
            return { id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription, candidateIssues: [] }
          }
          else if(record.issues.length > 0)
          {
            return {
              id: record.id, attachedUser: null, candidateName: record.candidateName, candidateDescription: record.candidateDescription,
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
        electionparties: record.expand.electionparties.map((record)=>{
          if(record.issues === null)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
              partyIssues: []
            }
          }
          else if(record.issues.length > 0)
          {
            return {
              id: record.id, partyName: record.partyName, partyDescription: record.partyDescription,
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