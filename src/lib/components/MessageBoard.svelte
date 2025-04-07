<script lang="ts">
    import 'remixicon/fonts/remixicon.css';
    import avatar from '$lib/assets/images/avatar3.png';
    import MessageItem from './MessageItem.svelte';
    
    let chatName : string = "Ekhdal";

</script>

<div class="messageBoard">
    <div class="header">
        <img src={avatar} alt="profile" width="30" height="30" class="avatar"/>
        <div>
            <p class="chat_name">{chatName}</p>
            <p class="chat_status">Online &sdot; Last message 10mins ago</p>
        </div>
    </div>
    <div class="body">
        <div class="messageList">
            <MessageItem message={{type: 'sent', text: 'Hello!', time: '10:00 AM'}} />
            <MessageItem message={{type: 'received', text: 'Hi there!', time: '10:01 AM'}} />
            <MessageItem message={{type: 'sent', text: 'How are you?', time: '10:02 AM'}} />
            <MessageItem message={{type: 'received', text: 'I am good, thanks!', time: '10:03 AM'}} />
            <MessageItem message={{type: 'sent', text: 'Hello!', time: '10:00 AM'}} />
            <MessageItem message={{type: 'received', text: 'Hi there!', time: '10:01 AM'}} />
            <MessageItem message={{type: 'sent', text: 'How are you?', time: '10:02 AM'}} />
            <MessageItem message={{type: 'received', text: 'I am good, thanks!', time: '10:03 AM'}} />
            <MessageItem message={{type: 'sent', text: 'Hello!', time: '10:00 AM'}} />
            <MessageItem message={{type: 'received', text: 'Hi there!', time: '10:01 AM'}} />
            <MessageItem message={{type: 'sent', text: 'How are you?', time: '10:02 AM'}} />
            <MessageItem message={{type: 'received', text: 'I am good, thanks!', time: '10:03 AM'}} />
            <MessageItem message={{type: 'sent', text: 'Hello!', time: '10:00 AM'}} />
            <MessageItem message={{type: 'received', text: 'Hi there!', time: '10:01 AM'}} />
            <MessageItem message={{type: 'sent', text: 'How are you?', time: '10:02 AM'}} />
            <MessageItem message={{type: 'received', text: 'I am good, thanks!', time: '10:03 AM'}} />
            <MessageItem message={{type: 'sent', text: 'Hello!', time: '10:00 AM'}} />
            <MessageItem message={{type: 'received', text: 'Hi there!', time: '10:01 AM'}} />
            <MessageItem message={{type: 'sent', text: 'How are you?', time: '10:02 AM'}} />
            <MessageItem message={{type: 'received', text: 'I am good, thanks!', time: '10:03 AM'}} />
            <MessageItem message={{type: 'sent', text: 'Hello!', time: '10:00 AM'}} />
            <MessageItem message={{type: 'received', text: 'Hi there!', time: '10:01 AM'}} />
            <MessageItem message={{type: 'sent', text: 'How are you?', time: '10:02 AM'}} />
            <MessageItem message={{type: 'received', text: 'I am good, thanks!', time: '10:03 AM'}} />
            <MessageItem message={{type: 'sent', text: 'Hello!', time: '10:00 AM'}} />
            <MessageItem message={{type: 'received', text: 'Hi there!', time: '10:01 AM'}} />
            <MessageItem message={{type: 'sent', text: 'How are you?', time: '10:02 AM'}} />
            <MessageItem message={{type: 'received', text: 'I am good, thanks!', time: '10:03 AM'}} />
            <MessageItem message={{type: 'sent', text: 'Hello!', time: '10:00 AM'}} />
            <MessageItem message={{type: 'received', text: 'Hi there!', time: '10:01 AM'}} />
            <MessageItem message={{type: 'sent', text: 'How are you?', time: '10:02 AM'}} />
            <MessageItem message={{type: 'received', text: 'I am good, thanks!', time: '10:03 AM'}} />
        </div>
    </div>
    <div class="footer">
        <input class="input" type="text" placeholder="Type a message..." />
        <button>Send</button>
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