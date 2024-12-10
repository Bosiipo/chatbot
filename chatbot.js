// Responses based on simple keywords
const responses = {
    hello: "Hi there! How can I help you today?",
    help: "Sure! I'm here to assist. What do you need help with?",
    bye: "Goodbye! Have a great day!",
    default: "I'm not sure how to respond to that. Can you try rephrasing?",
  };
  
  // Function to handle sending messages
  function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    const chatDisplay = document.getElementById("chatDisplay");
  
    if (userInput === "") return;
  
    // Display the user's message
    appendMessage(userInput, "user-message");
  
    // Determine bot's response
    const botResponse = getResponse(userInput.toLowerCase());
    appendMessage(botResponse, "bot-message");
  
    // Clear input
    document.getElementById("userInput").value = "";
  }
  
  // Function to get a bot response
  function getResponse(message) {
    for (const key in responses) {
      if (message.includes(key)) {
        return responses[key];
      }
    }
    return responses.default;
  }
  
  // Function to append a message to the chat display
  function appendMessage(text, className) {
    const chatDisplay = document.getElementById("chatDisplay");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = text;
    chatDisplay.appendChild(messageElement);
    chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to the bottom
  }
  