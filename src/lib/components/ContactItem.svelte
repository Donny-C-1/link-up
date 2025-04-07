<script>
    import avatar from "$lib/assets/images/avatar3.png";
    let { contact } = $props();
</script>

<button>
    <img class="avatar" src={avatar} alt="" width="50" height="50" />
    <div class="contact_info">
        <div>
            <p class="name">{contact.name}</p>
            <p class="time">{contact.time}</p>
        </div>
        <div>
            <p class="last_message">{contact.last_message}</p>
            <p class="unread_count">{contact.unread_count}</p>
        </div>
    </div>
</button>

<style>
    button {
        display: flex;
        align-items: center;
        width: 100%;
        border: 0;
        background-color: transparent;
        cursor: pointer;
        padding: 1rem;
    }

    .avatar {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-right: 1rem;
    }

    .contact_info {
        flex-grow: 1;

        & div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            &:first-child {
                margin-bottom: .375rem;
            }
        }
    }

    .name {
        font-weight: semibold;
        text-align: left;
        font-size: 1.1rem;
    }

    .time {
        font-size: .75rem;
        color: #888;
    }

    .last_message {
        color: gray;
    }

    .unread_count {
        background-color: red;
        color: white;
        border-radius: 50%;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
    }
    /* button {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 10px;
        border-radius: 8px;
        background-color: #f0f0f0;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #e0e0e0;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .name {
        font-weight: bold;
    }

    .last_message {
        color: gray;
    }

    .time {
        font-size: 12px;
        color: gray;
    }

    .unread_count {
        background-color: red;
        color: white;
        border-radius: 50%;
        padding: 5px 10px;
    } */
</style>