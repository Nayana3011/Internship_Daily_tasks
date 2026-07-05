const readline = require("readline");
const chat = require("./chatService");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "You: ",
});

console.log(
  'Type a message and press Enter. Type "delete <id>" to remove a message. Type "exit" to quit.\n'
);
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
    const result = chat.deleteMessage(id);
    console.log(result.message);
  } else if (text) {
    const result = chat.sendMessage("You", text);
    console.log(`Bot: ${result.data.botMessage.text}`);
  }

  rl.prompt();
});

rl.on("close", () => {
  console.log("\nChat ended.");
  process.exit(0);
});
