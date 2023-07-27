<script>
  import VotingCard from "$lib/components/VotingCard.svelte";
  import "../../styles/global.css"
  import NewVotingCard from "$lib/components/NewVotingCard.svelte";
  export let VotingCards;
  console.log(VotingCards)

</script>

<div class="flex flex-wrap">

    {#each VotingCards.records.resultList as VotingCard}
        <VotingCard data={VotingCard} />
    {/each}

</div>

<div>
    <form>
        <button type="button" class="m-3.5 rounded-md bg-indigo-600 justify-center py-1 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span class="text-sm font-semibold leading-6 text-white">Add New Vote</span>
        </button>
    </form>
</div>


<NewVotingCard />


