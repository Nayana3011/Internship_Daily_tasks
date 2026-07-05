"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessages = getMessages;
exports.addMessage = addMessage;
exports.sendMessage = sendMessage;
exports.deleteMessage = deleteMessage;
const { generateId, currentTimestamp } = require("./utils");
const { BOT_SENDER, getRandomBotReply } = require("./constants");
const messages = [];
function getMessages() {
    return {
        success: true,
        data: messages,
        message: "Messages fetched successfully",
    };
}
function addMessage(message) {
    messages.push(message);
    return {
        success: true,
        data: message,
        message: "Message added",
    };
}
function sendMessage(sender, text) {
    const nextId = generateId(messages);
    const userMessage = {
        id: nextId,
        sender,
        text,
        timestamp: currentTimestamp(),
    };
    messages.push(userMessage);
    const botMessage = {
        id: nextId + 1,
        sender: BOT_SENDER,
        text: getRandomBotReply(),
        timestamp: currentTimestamp(),
    };
    messages.push(botMessage);
    return {
        success: true,
        data: { userMessage, botMessage },
        message: "Message sent and bot replied",
    };
}
function deleteMessage(id) {
    const index = messages.findIndex((m) => m.id === id);
    if (index === -1) {
        return {
            success: false,
            data: null,
            message: "Message not found",
        };
    }
    const deleted = messages.splice(index, 1);
    return {
        success: true,
        data: deleted[0],
        message: "Deleted successfully",
    };
}
module.exports = {
    getMessages,
    addMessage,
    deleteMessage,
    sendMessage,
};
