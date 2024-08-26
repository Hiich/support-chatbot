'use client';
import React from 'react';
import { useChat } from 'ai/react';
export const Chatbot = () => {
    const { messages, input, handleSubmit, handleInputChange, isLoading } = useChat();
    return (React.createElement("div", null,
        messages.map((message) => (React.createElement("div", { key: message.id },
            React.createElement("div", null, message.role),
            React.createElement("div", null, message.content)))),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("input", { value: input, placeholder: "Send a message...", onChange: handleInputChange, disabled: isLoading }))));
};
