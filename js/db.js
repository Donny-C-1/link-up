let cachedUsers = null;
let cachedMessages = null;
let cachedConversations = null;

export async function getUsers() {
    if (cachedUsers === null) {
        try {
            const response = await fetch("../data/users.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.statusText}`);
            }
            cachedUsers = await response.json();
        } catch (err) {
            console.log(`Error fetching users: ${err.message}`);
        }
    }
    return cachedUsers;
}

export async function getMessages() {
    if (cachedMessages === null) {
        try {
            const response = await fetch("../data/messages.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.statusText}`);
            }
            cachedMessages = await response.json();
        } catch (err) {
            console.log(`Error fetching messages: ${err.message}`);
        }
    }
    return cachedMessages;
}

export async function getConversations() {
    if (cachedConversations === null) {
        try {
            const response = await fetch("../data/conversations.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.statusText}`);
            }
            cachedConversations = await response.json();
        } catch (err) {
            console.log(`Error fetching conversations: ${err.message}`);
        }
    }
    return cachedConversations;
}
