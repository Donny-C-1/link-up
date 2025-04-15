<script lang="ts">
	import ContactPane from '$lib/components/ContactPane.svelte';
	import MessageBoard from '$lib/components/MessageBoard.svelte';
	import type { Conversation, Message } from '$lib/server/db/schema';

	let { data } = $props();
    let messages: Message[] = $state([]);
    let conversations: Conversation[] = $state(data.conversations);
    let activeConversation: Conversation | {} = $state({});

    const setMessages = (newMessages: Message[]) => {
        messages = newMessages;
    }

    const setActiveConversation = (id: number) => {
        activeConversation = conversations.find(conv => conv.id === id) || {};
    }
</script>

<main>
	<div>
		<ContactPane {conversations} {setMessages} {setActiveConversation} />
	</div>
	<div>
        {#if messages.length >= 1}
		<MessageBoard {messages} conversation={activeConversation} />
        {:else}
        <p>Begin chatting with friends</p>
        {/if}
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
