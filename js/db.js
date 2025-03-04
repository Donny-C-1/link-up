let cachedUsers = null;
let cachedMessages = null;
let cachedConversations = null;

export async function getUsers() {
    if (cachedUsers === null) {
        try {
            console.log(window.location.href);
            const response = await fetch(`${window.location.href}/data/users.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.statusText}`);
            }
            cachedUsers = await response.json();
        } catch (err) {
            console.error(`Error fetching users: ${err.message}`);
        }
    }
    return cachedUsers;
}

export async function getMessages() {
    if (cachedMessages === null) {
        try {
            const response = await fetch(`${window.location.href}/data/messages.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.statusText}`);
            }
            cachedMessages = await response.json();
        } catch (err) {
            console.error(`Error fetching messages: ${err.message}`);
        }
    }
    return cachedMessages;
}

export async function getConversations() {
    if (cachedConversations === null) {
        try {
            const response = await fetch(`${window.location.href}/data/conversations.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.statusText}`);
            }
            cachedConversations = await response.json();
        } catch (err) {
            console.error(`Error fetching conversations: ${err.message}`);
        }
    }
    return cachedConversations;
}
