"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chatbot = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("ai/react");
const Chatbot = () => {
    const { messages, input, handleSubmit, handleInputChange, isLoading } = (0, react_2.useChat)();
    return (react_1.default.createElement("div", null,
        messages.map((message) => (react_1.default.createElement("div", { key: message.id },
            react_1.default.createElement("div", null, message.role),
            react_1.default.createElement("div", null, message.content)))),
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("input", { value: input, placeholder: "Send a message...", onChange: handleInputChange, disabled: isLoading }))));
};
exports.Chatbot = Chatbot;
