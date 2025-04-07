import config from "./constants.js";
import { getUsers, getConversations, getMessages } from "./db.js";

const actions = {
    toggle_nav: function (evt) {
        const element = evt.currentTarget;

        const activeLink = document.querySelector(".sidebar .nav_list a.active");
        activeLink.classList.remove("active");
        element.classList.add("active");
    },
    send_message: function (evt) {
        const messageInput = document.querySelector(".message_input");
        const message = messageInput.value;
        updateMessage({ content: message }, true);
        messageInput.value = "";
    }
};

window.addEventListener("DOMContentLoaded", () => {
    loadConversations(config.USERID);

    setupButtonListeners();

    const links = document.querySelectorAll("[href^='/']");
    const navToggle = document.querySelector(".nav_toggle");
    const sidebar = document.querySelector(".sidebar");

    navToggle.addEventListener("click", evt => {
        sidebar.classList.add("visible");
        evt.stopPropagation();

        document.body.addEventListener(
            "click",
            evt => {
                if (!sidebar.contains(evt.target)) {
                    sidebar.classList.remove("visible");
                }
            },
            { once: true }
        );
    });

    for (let link of links) {
        link.addEventListener("click", evt => {
            evt.preventDefault();

            const action = evt.currentTarget.getAttribute("data-action");

            if (action !== null && actions[action]) {
                actions[action](evt);
            }
        });
    }
});

function setupButtonListeners() {
    const buttons = document.querySelectorAll("button");
    for (let button of buttons) {
        button.addEventListener("click", evt => {
            const action = evt.currentTarget.getAttribute("data-action");

            if (action !== null && actions[action]) {
                actions[action](evt);
            }
        });
    }
}

async function loadConversations(userID) {
    const convList = document.querySelector(".conversation_list");
    const convTemplate = document.getElementById("conversation_template");

    try {
        const users = await getUsers();
        const conversations = await getConversations();
        const user = users[userID];

        for (let convID of user.conversations) {
            const conversation = conversations[convID];
            const chatFragment = convTemplate.content.cloneNode(true);

            if (conversation.type === "pair") {
                let partnerID = conversation.participants.find(id => id !== userID);
                let partner = users[partnerID];
                chatFragment.querySelector(".conversation").addEventListener("click", evt => {
                    toggleActiveConversation(evt.currentTarget);
                    toggleVisibleFrame();
                    loadMessages(conversation, convID, userID);
                });
                chatFragment.querySelector(".conversation_name").textContent = partner.name;
                chatFragment.querySelector(".chat_img").src = config.IMAGE_PATH + partner.image;
                chatFragment.querySelector(".conversation_status").textContent = partner.status;
            }
            if (conversation.type === "group") {
                chatFragment.querySelector(".chat_name").textContent = conversation.name;
                chatFragment.querySelector(".chat_img").src = config.IMAGE_PATH + conversation.image;
                chatFragment.querySelector(".chat_status").textContent = null;
            }

            convList.appendChild(chatFragment);
        }
    } catch (err) {
        console.log("Error loading conversations: ", err);
    }
}

async function loadMessages(conversation, convID, userID) {
    const messageSection = document.querySelector(".message_section");
    const contactName = document.querySelector(".contact_name");

    messageSection.innerHTML = "";

    try {
        const allMessages = await getMessages();
        const messages = allMessages[convID];
        const users = await getUsers();

        if (conversation.type === "pair") {
            let partnerID = conversation.participants.find(id => id !== userID);
            let partner = users[partnerID];
            contactName.textContent = partner.name;
        }

        messages.forEach(message => updateMessage(message, message.sender === userID));
    } catch (err) {
        console.error("Error loading messages: ", err);
    }
}

function updateMessage(message, isSender) {
    const messageSection = document.querySelector(".message_section");
    const messageTemplate = document.getElementById(`${isSender ? "sent" : "received"}_message_template`);
    const messageFragment = messageTemplate.content.cloneNode(true);

    messageFragment.querySelector(".message_content").textContent = message.content;
    messageSection.appendChild(messageFragment);
}

function toggleActiveConversation(elmn) {
    const activeConv = document.querySelector(".conversation.active");
    activeConv?.classList.remove("active");
    elmn.classList.add("active");
}

function toggleVisibleFrame() {
    const middleFrame = document.querySelector(".middle");
    const lastFrame = document.querySelector(".last");

    middleFrame.classList.remove("visible");
    lastFrame.classList.add("visible");
}
