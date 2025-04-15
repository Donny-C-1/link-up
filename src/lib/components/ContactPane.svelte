<script lang="ts">
    import ContactItem from "./ContactItem.svelte";

    let { conversations, setMessages, setActiveConversation } = $props();
    let activeConversation: number | null = $state(null);

    function itemClickHandler(id: number, newMessages: []) {
        activeConversation = id;
        setActiveConversation(id);
        setMessages(newMessages);
    }
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

