"use client"
import React, { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { useChat, Message } from 'ai/react';

export default function Chatbox() {
    const { messages, input, handleSubmit, handleInputChange, isLoading } = useChat();
    const [isOpen, setIsOpen] = useState(false)

    const toggleChat = () => setIsOpen(!isOpen)

    return (
        <div className="fixed bottom-4 right-4">
            {isOpen ? (
                <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
                        <h2 className="text-sm font-semibold text-gray-800">Chat Support</h2>
                        <button
                            onClick={toggleChat}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                    <div className="p-4 h-64 overflow-y-auto">
                        {messages.map((message: Message, index: number) => (
                            <div key={index} className={`text-sm ${message.role === 'user' ? 'text-blue-700' : 'text-gray-700'}`}>
                                <p>{message.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-100 px-4 py-3">
                        <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Type your message..."
                                className="flex-1 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-3 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Send</span>
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <button
                    onClick={toggleChat}
                    className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    <MessageCircle className="h-6 w-6" />
                    <span className="sr-only">Open chat</span>
                </button>
            )}
        </div>
    )
}