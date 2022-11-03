<script>
    import VotingCard from "./VotingCard.svelte";
    import "../../styles/global.css"
    import NewVotingCard from "./NewVotingCard.svelte";

    export let data
</script>
<div class="flex flex-wrap">
    {#each data as votingCard}
        <VotingCard data="{votingCard}"/>
    {/each}
</div>

<NewVotingCard/>