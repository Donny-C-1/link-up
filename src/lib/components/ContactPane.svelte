<script lang="ts">
    import ContactItem from "./ContactItem.svelte";
    import { onMount } from "svelte";

    let { conversations, setMessages, setActiveConversation } = $props();
    let activeConversation: number | null = $state(null);

    function itemClickHandler(id: number, newMessages: []) {
        activeConversation = id;
        setActiveConversation(id);
        setMessages(newMessages);
    }

    async function fetchNothing() {
        // const response = await fetch("/api/ws/");
        // const data = await response.json();
        // console.log(data);

        const wss = new WebSocket("ws://localhost:5173/api/ws");
    }

    let ws;

    onMount(async () => {
        // ws = new WebSocket(`ws://localhost:5173/api/ws`);

        // ws.send('hi');
        // ws.onopen = () => {
        //     console.log("Connection opened");
        // }
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
            {#each conversations as conversation}
                <li class="contactItem">
                    <ContactItem contact={conversation} isActive={activeConversation === conversation.id} toggleActive={itemClickHandler} />
                </li>
            {/each}
            <li>
                <button onclick={fetchNothing}>Click ME</button>
            </li>
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

