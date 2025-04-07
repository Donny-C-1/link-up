<script lang="ts">
    import 'remixicon/fonts/remixicon.css';
    import avatar from "$lib/assets/images/avatar3.png";
    
    const { message } = $$props;
</script>

<div class="messageItem {message.type}">
    <img src={avatar} alt="" width="30" height="30" class="avatar" />
    <div>
        <p class="messageContent">{message.text}</p>
        <p class="messageTime">{message.time}</p>
    </div>
</div>

<style>
    .messageItem {
        display: flex;
        width: 70%;

        & .messageContent {
            padding: .5rem;
            background-color: #ebebeb;
        }

        &.sent {
            justify-content: flex-end;
            margin-left: auto;

            & .avatar {
                order: 1;
                margin-right: unset;
                margin-left: .75rem;
            }

            & .messageContent {
                background-color: #d0f0c0;
            }
        }
    }

    .avatar {
        border-radius: 50%;
        margin-right: .75rem;
    }
    /* .messageItem.received {
        background-color: #f0f0f0;
    }
    .messageItem.sent {
        background-color: #d0f0c0;
    } */
    .messageTime {
        font-size: 0.8em;
        color: #888;
    }
</style>