<script>
    import VotingCards from "../../lib/components/VotingCards.svelte";
    export let maindata;
</script>
{@debug maindata}
{(console.log(maindata),'')}

<div class="flex flex-1 flex-col md:pl-64">
    <main class="flex-1">
        <div class="py-6">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {maindata}
                <!--<VotingCards data="{maindata}"/>-->
            </div>
        </div>
    </main>
</div>