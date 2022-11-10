<script>
    import VotingCards from "../../lib/components/VotingCards.svelte";
    export let data
    console.log(data);
</script>
{@debug data}

<div class="flex flex-1 flex-col md:pl-64">
    <main class="flex-1">
        <div class="py-6">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <VotingCards data="{data}"/>
            </div>
        </div>
    </main>
</div>