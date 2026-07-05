const { generateId, currentTimestamp } = require("./utils");
const { BOT_SENDER, getRandomBotReply } = require("./constants");
import { ChatMessage, ChatResponse } from "./interfaces";

const messages : ChatMessage[] = [];

export function getMessages() : ChatResponse {
  return {
    success: true,
    data: messages,
    message: "Messages fetched successfully",
  };
}

export function addMessage(message: ChatMessage): ChatResponse {
  messages.push(message);

  return {
    success: true,
    data: message,
    message: "Message added",
  };
}

export function sendMessage(sender : string, text : string) : ChatResponse {
  const nextId : number = generateId(messages);

  const userMessage : ChatMessage = {
    id: nextId,
    sender,
    text,
    timestamp: currentTimestamp(),
  };
  messages.push(userMessage);

  const botMessage : ChatMessage = {
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

export function deleteMessage(id : number) : ChatResponse {
  const index : number = messages.findIndex((m) => m.id === id);

  if (index === -1) {
    return {
      success: false,
      data: null,
      message: "Message not found",
    };
  }

  const deleted : ChatMessage[] = messages.splice(index, 1);

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

export{};