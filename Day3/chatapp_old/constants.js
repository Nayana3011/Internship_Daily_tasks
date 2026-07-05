const BOT_SENDER = "Bot";

const BOT_REPLIES = [
  "Got it, thanks!",
  "Interesting, tell me more.",
  "I see what you mean.",
  "Sounds good to me!",
  "Thanks for the update.",
];

function getRandomBotReply() {
  return BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)];
}

module.exports = {
  BOT_SENDER,
  BOT_REPLIES,
  getRandomBotReply,
};
