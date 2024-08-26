'use client';

import React from 'react';
import { useChat, Message } from 'ai/react';

export const Chatbot: React.FC = () => {
    const { messages, input, handleSubmit, handleInputChange, isLoading } = useChat();

    return (
        <div>
            {messages.map((message: Message) => (
                <div key={message.id}>
                    <div>{message.role}</div>
                    <div>{message.content}</div>
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    placeholder="Send a message..."
                    onChange={handleInputChange}
                    disabled={isLoading}
                />
            </form>
        </div>
    );
}
