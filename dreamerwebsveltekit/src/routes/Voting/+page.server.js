import { error, redirect } from '@sveltejs/kit';

import {pb} from './pocketbase'
import {onMount} from 'svelte'


let VotingCards = [];
onMount(async () =>{
  const resultList = await pb.collection('users').collection('votingOptions').getList(1,50);
  VotingCards = resultList.items;
});

export VotingCards
