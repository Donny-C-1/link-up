<script lang="ts">
    import { onMount } from "svelte";
    import ContactItem from "./ContactItem.svelte";

    let contacts: { id: number; name: string, last_message: string, time: string, unread_count: number }[] = $state([]);
    let selectedConversation = null;

    onMount(() => {
        // Fetch conversations from the server or state management
        // For example, using a store or an API call
        contacts = [
            { id: 1, name: "Alice", last_message: "Hello!", time: "10:00 AM", unread_count: 2 },
            { id: 2, name: "Bob", last_message: "How are you?", time: "10:00 AM", unread_count: 2 },
            { id: 3, name: "Charlie", last_message: "See you later!", time: "10:00 AM", unread_count: 2 },
        ];
    })
</script>

<div class="contactPane">
    <div class="header">
        <div>
            <h1>Chats</h1>
        </div>
        <div></div>
        <div></div>
    </div>
    <div class="body">
        <ul class="contactList">
            {#each contacts as contact}
                <li class="contactItem">
                    <ContactItem {contact} />
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .contactPane {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .body {
        flex-grow: 1;
        overflow-y: auto;
    }
    .contactList {
        display: flex;
        flex-direction: column;
        list-style-type: none;
    }
</style>

