export interface ChatMessage {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
}

export interface ChatResponse {
  success: boolean;
  data:
    | ChatMessage
    | ChatMessage[]
    | {
        userMessage: ChatMessage;
        botMessage: ChatMessage;
      }
    | null;
  message: string;
}
