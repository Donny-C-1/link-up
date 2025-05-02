<script lang="ts">
    import avatar from '$lib/assets/images/avatar3.png';
    import MessageItem from './MessageItem.svelte';
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
	import { ssrExportAllKey } from 'vite/module-runner';
	import { SingleStoreSmallInt } from 'drizzle-orm/singlestore-core';

    let { messages, conversation } = $props();

    onMount(async () => {
        const stream = new EventSource("/api/sse");

        stream.onmessage = console.log;

        stream.onerror = (err) => {
            console.error(err);
            stream.close();
        }
    })
</script>

<div class="messageBoard">
    <div class="header">
        <img src={avatar} alt="profile" width="30" height="30" class="avatar"/>
        <div>
            <p class="chat_name">{conversation.name}</p>
            <p class="chat_status">Online &sdot; Last message 10mins ago</p>
        </div>
    </div>
    <div class="body">
        <div class="messageList">
            {#each messages as msg (msg.id)}
                <MessageItem message={msg}/>
            {/each}
        </div>
    </div>
    <div class="footer">
        <form action="?/createMessage" method="post" use:enhance>
            <input type="hidden" value="2" name="senderId" />
            <input type="hidden" value={conversation.id} name="conversationId" />
            <input class="input" type="text" name="content" placeholder="Type a message..." />
            <button type="submit">Send</button>
        </form>
    </div>
</div>

<style>
    .messageBoard {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .header {
        display: flex;
        align-items: center;
        border-bottom: 2px solid #ccc;
        padding: .75rem 1rem;

        & .avatar {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            margin-right: 1rem;
        }

        & .chat_name {
            font-weight: bold;
            font-size: 1.2rem;
        }

        & .chat_status {
            font-size: 0.9rem;
            color: #888;
        }
    }
    
    .body {
        flex-grow: 1;
        overflow-y: auto;
        padding-inline: 1rem;
    }

    .messageList {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-top: 2rem;
    }

    

    .footer {
        display: flex;
        align-items: center;

        .input {
            flex-grow: 1;
            padding: .5rem;
            border: 0;
        }
    }
</style>