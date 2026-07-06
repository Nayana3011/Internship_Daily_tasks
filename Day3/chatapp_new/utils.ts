import { ChatMessage} from "./interfaces";

export function generateId (existingItems : ChatMessage[]): number {
  return existingItems.length
    ? Math.max(...existingItems.map((item) => item.id)) + 1
    : 1;
}

export function currentTimestamp() : string {
  return new Date().toISOString();
}

exports = {
  generateId,
  currentTimestamp,
};


