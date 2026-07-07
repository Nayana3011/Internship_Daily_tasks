// Day 5 task

# Chat Application API Contract

This document defines the API endpoints and data structures shared between the backend and React Native frontend.

## Shared Types

### ChatMessage

```ts
interface ChatMessage {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
}
```

### ChatResponse

```ts
interface ChatResponse {
  success: boolean;
  data: ChatMessage | ChatMessage[] | { userMessage: ChatMessage; botMessage: ChatMessage } | null;
  message: string;
}
```

---

## API Endpoints

### 1. Create Message

- Method: POST
- Endpoint: `/messages`

Request

```json
{
  "sender": "You",
  "text": "Hello"
}
```

Response

```json
{
  "success": true,
  "data": {
    "userMessage": {},
    "botMessage": {}
  },
  "message": "Message sent and bot replied"
}
```

---

### 2. Get All Messages

- Method: GET
- Endpoint: `/messages`

Response

```json
{
  "success": true,
  "data": [],
  "message": "Messages fetched successfully"
}
```

---

### 3. Get Message by ID

- Method: GET
- Endpoint: `/messages/{id}`

---

### 4. Update Message

- Method: PATCH
- Endpoint: `/messages/{id}`

Request

```json
{
  "text": "Updated message"
}
```

---

### 5. Delete Message

- Method: DELETE
- Endpoint: `/messages/{id}`

---

## Notes

- Data is stored in memory.
- All API responses follow the `ChatResponse` interface.
- The frontend and backend should use the same `ChatMessage` and `ChatResponse` types.