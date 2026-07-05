import { ChatMessage} from "./interfaces";

function generateId (existingItems : ChatMessage[]): number {
  return existingItems.length
    ? Math.max(...existingItems.map((item) => item.id)) + 1
    : 1;
}

function currentTimestamp() : string {
  return new Date().toISOString();
}

module.exports = {
  generateId,
  currentTimestamp,
};

export{};
