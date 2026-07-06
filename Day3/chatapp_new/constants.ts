export const BOT_SENDER : string = "Bot";

export const BOT_REPLIES : string[] = [
  "Got it, thanks!",
  "Interesting, tell me more.",
  "I see what you mean.",
  "Sounds good to me!",
  "Thanks for the update.",
];

export function getRandomBotReply() : string {
  return BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)!];
}

exports = {
  BOT_SENDER,
  BOT_REPLIES,
  getRandomBotReply,
};

