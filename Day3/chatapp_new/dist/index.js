"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const chatService_1 = require("./chatService");
// const readline = require("readline");
// const chat = require("./chatService");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "You: ",
});
console.log('Type a message and press Enter. Type "delete <id>" to remove a message. Type "exit" to quit.\n');
rl.prompt();
rl.on("line", (line) => {
    const text = line.trim();
    if (text.toLowerCase() === "exit") {
        rl.close();
        return;
    }
    const deleteMatch = text.match(/^delete\s+(\d+)$/i);
    if (deleteMatch) {
        const id = Number(deleteMatch[1]);
        const result = (0, chatService_1.deleteMessage)(id);
        console.log(result.message);
    }
    else if (text) {
        const result = (0, chatService_1.sendMessage)("You", text);
        //console.log(`Bot: ${result.data.botMessage.text}`);
        if (result.data && "botMessage" in result.data) {
            console.log(`Bot: ${result.data.botMessage.text}`);
        }
    }
    rl.prompt();
});
rl.on("close", () => {
    console.log("\nChat ended.");
    process.exit(0);
});
