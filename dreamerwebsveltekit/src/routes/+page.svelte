<script>
    import "../styles/global.css"
    import Button from "$lib/Button.svelte";
</script>

<h1 class=" bg-gray-500 text-white font-bold py-8 px-8 text-9xl"> Welcome To Dreamer Web</h1>
<div class="flex flex-grow">
        <Button Title="Voting" address="/Voting" />
        <Button Title="Execution" address="/Execution" />
        <Button Title="Discuss" address="/Discuss" />
</div>

