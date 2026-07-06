import {createMessage,getMessages,getMessageById,updateMessage,deleteMessage,} from "./mockApi";

console.log("=== Create Message ===");
console.log(createMessage("You", "Hello"));

console.log("\n=== Get All Messages ===");
console.log(getMessages());

console.log("\n=== Get Message By ID ===");
console.log(getMessageById(1));

console.log("\n=== Update Message ===");
console.log(updateMessage(1, { text: "Updated Hello" }));

console.log("\n=== Get Updated Message ===");
console.log(getMessageById(1));

console.log("\n=== Delete Message ===");
console.log(deleteMessage(1));

console.log("\n=== Get All Messages After Delete ===");
console.log(getMessages());