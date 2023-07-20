import {pb} from '$lib/pocketbase'
import {onMount} from 'svelte'

export async function load(){
  const resultList = await getAllElectionRecords()
  return{
    resultList
  }
}

async function getAllElectionRecords(){
  const resultList = await pb.collection('elections').getFullList({
    sort: 'created',
    expand: 'electionoptions, electioncandidates, electioncandidates.candidateIssues, electionparties, electionparties.partyIssues, electionvoters',
  });

}