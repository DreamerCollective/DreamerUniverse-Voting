<script>
  import VotingCard from "../../lib/components/VotingCard.svelte";
  import "../../styles/global.css"
  import NewVotingCard from "../../lib/components/NewVotingCard.svelte";

  let VotingCards = [{id: 1, number: 1}, {id: 2, number: 2}];
</script>

<div class="flex flex-wrap">
    <VotingCard />
    <!--
        {#each VotingCards as VotingCard}
            <VotingCard data={VotingCard.number} />
        {/each}
         -->
</div>

<div>
    <form>
        <button type="button" class="m-3.5 rounded-md bg-indigo-600 justify-center py-1 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span class="text-sm font-semibold leading-6 text-white">Add New Vote</span>
        </button>
    </form>
</div>


<NewVotingCard />


