<script context="module">
    import VotingCards from "../../components/VotingCards.svelte";

    export async function load({ fetch }) {
        const response = await fetch("`http://localhost:3000/ElectionsVariables'"); // stored in static folder
        const data = await response.json();
    }
</script>

<div class="flex flex-1 flex-col md:pl-64">
    <main class="flex-1">
        <div class="py-6">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <VotingCards data="data"/>
            </div>
        </div>
    </main>
</div>