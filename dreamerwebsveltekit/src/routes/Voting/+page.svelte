<script>
    import VotingCards from "../../lib/components/VotingCards.svelte";
    export let data
    console.log(data);
</script>
{@debug data}

<VotingCards data="{data}"/>
