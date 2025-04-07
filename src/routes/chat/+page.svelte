<script>
    import ContactPane from "$lib/components/ContactPane.svelte";
    import MessageBoard from "$lib/components/MessageBoard.svelte";
    import { onMount } from "svelte";

</script>

<main>
    <div>
        <ContactPane />
    </div>
    <div>
        <MessageBoard />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: row;
        height: 100vh;
    }
    main > div {
        flex-grow: 1;

        &:first-child {
            flex-grow: 0;
            flex-basis: 18.75rem;
            border-right: 1px solid #ccc;
        }
    }
</style>