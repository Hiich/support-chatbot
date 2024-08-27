"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Chatbox;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const react_2 = require("ai/react");
function Chatbox() {
    const { messages, input, handleSubmit, handleInputChange, isLoading } = (0, react_2.useChat)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const toggleChat = () => setIsOpen(!isOpen);
    return (react_1.default.createElement("div", { className: "fixed bottom-4 right-4" }, isOpen ? (react_1.default.createElement("div", { className: "w-80 bg-white rounded-lg shadow-lg overflow-hidden" },
        react_1.default.createElement("div", { className: "bg-gray-100 px-4 py-3 flex justify-between items-center" },
            react_1.default.createElement("h2", { className: "text-sm font-semibold text-gray-800" }, "Chat Support"),
            react_1.default.createElement("button", { onClick: toggleChat, className: "text-gray-500 hover:text-gray-700 focus:outline-none" },
                react_1.default.createElement(lucide_react_1.X, { className: "h-4 w-4" }),
                react_1.default.createElement("span", { className: "sr-only" }, "Close"))),
        react_1.default.createElement("div", { className: "p-4 h-64 overflow-y-auto" }, messages.map((message, index) => (react_1.default.createElement("div", { key: index, className: `text-sm ${message.role === 'user' ? 'text-blue-700' : 'text-gray-700'}` },
            react_1.default.createElement("p", null, message.content))))),
        react_1.default.createElement("div", { className: "bg-gray-100 px-4 py-3" },
            react_1.default.createElement("form", { className: "flex items-center space-x-2", onSubmit: handleSubmit },
                react_1.default.createElement("input", { type: "text", value: input, onChange: handleInputChange, placeholder: "Type your message...", className: "flex-1 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }),
                react_1.default.createElement("button", { type: "submit", className: "px-3 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" },
                    react_1.default.createElement(lucide_react_1.Send, { className: "h-4 w-4" }),
                    react_1.default.createElement("span", { className: "sr-only" }, "Send")))))) : (react_1.default.createElement("button", { onClick: toggleChat, className: "bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" },
        react_1.default.createElement(lucide_react_1.MessageCircle, { className: "h-6 w-6" }),
        react_1.default.createElement("span", { className: "sr-only" }, "Open chat")))));
}
