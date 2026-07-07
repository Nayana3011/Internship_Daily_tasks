//Day 4 task 

import { generateId, currentTimestamp } from "./utils";
import { BOT_SENDER, getRandomBotReply } from "./constants";
import { ChatMessage, ChatResponse, UpdateMessage } from "./interfaces";

const messages: ChatMessage[] = [];

// Create Message
export function createMessage(sender: string, text: string): ChatResponse {
  const nextId = generateId(messages);

  const userMessage: ChatMessage = {
    id: nextId,
    sender,
    text,
    timestamp: currentTimestamp(),
  };

  messages.push(userMessage);

  const botMessage: ChatMessage = {
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

// Get All Messages
export function getMessages(): ChatResponse {
  return {
    success: true,
    data: messages,
    message: "Messages fetched successfully",
  };
}

// Get Message By ID
export function getMessageById(id: number): ChatResponse {
  const message = messages.find((m) => m.id === id);

  if (!message) {
    return {
      success: false,
      data: null,
      message: "Message not found",
    };
  }

  return {
    success: true,
    data: message,
    message: "Message found",
  };
}

// Update Message
// export function updateMessage(id: number, newText: string): ChatResponse {
//   const message = messages.find((m) => m.id === id);

//   if (!message) {
//     return {
//       success: false,
//       data: null,
//       message: "Message not found",
//     };
//   }

//   message.text = newText;

//   return {
//     success: true,
//     data: message,
//     message: "Message updated successfully",
//   };
// }


export function updateMessage( id: number,updates: UpdateMessage): ChatResponse {

    const message = messages.find((m) => m.id === id);

    if (!message) {
        return {
            success: false,
            data: null,
            message: "Message not found",
        };
    }

    if (updates.sender !== undefined) {
        message.sender = updates.sender;
    }

    if (updates.text !== undefined) {
        message.text = updates.text;
    }

    if (updates.timestamp !== undefined) {
        message.timestamp = updates.timestamp;
    }

    return {
        success: true,
        data: message,
        message: "Message updated successfully",
    };
}


// Delete Message
export function deleteMessage(id: number): ChatResponse {
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

export{};