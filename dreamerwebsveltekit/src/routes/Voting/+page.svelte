<script>
  import VotingCard from "../../lib/components/VotingCard.svelte";
  import "../../styles/global.css"
  import NewVotingCard from "../../lib/components/NewVotingCard.svelte";

  let VotingCards = [1];
</script>



<div class="flex flex-wrap">
    {#each VotingCards as VotingCard}

    {/each}
    <VotingCard />
    <VotingCard />
</div>

<NewVotingCard />


