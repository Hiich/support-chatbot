'use client';

import React from 'react';
import { useChat, Message } from 'ai/react';

export const Chatbot: React.FC = () => {
    const { messages, input, handleSubmit, handleInputChange, isLoading } = useChat();

    return (
        <>
            <button
                className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
                type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white block border-gray-200 align-middle">
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" className="border-gray-200"></path>
                </svg>
            </button>

            <div style={{ boxShadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)' }}
                className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]">
                <div className="flex flex-col space-y-1.5 pb-6">
                    <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
                    <p className="text-sm text-[#6b7280] leading-3">Powered by Mendable and Vercel</p>
                </div>

                <div className="pr-4 h-[474px] overflow-y-auto" style={{ minWidth: '100%', display: 'table' }}>
                    {messages.map((message: Message) => (
                        <div key={message.id} className="flex items-start gap-2.5 mb-4">
                            <img className="w-8 h-8 rounded-full" src={message.role === 'user' ? "/user-avatar.jpg" : "/ai-avatar.jpg"} alt={`${message.role} avatar`} />
                            <div className="flex flex-col w-full max-w-[320px] leading-1.5">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {message.role === 'user' ? 'You' : 'AI'}
                                    </span>
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        {new Date().toLocaleTimeString()} {/* You might want to use actual message timestamp */}
                                    </span>
                                </div>
                                <p className="text-sm font-normal py-2 text-gray-900 dark:text-white">
                                    {message.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center pt-0">
                    <form onSubmit={handleSubmit} className="flex items-center justify-center w-full space-x-2">
                        <input
                            className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                            placeholder="Type your message"
                            value={input}
                            onChange={handleInputChange}
                            disabled={isLoading}
                        />
                        <button
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                            type="submit"
                            disabled={isLoading}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}