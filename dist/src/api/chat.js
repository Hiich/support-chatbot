var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
export function chatHandler(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const { messages } = yield req.json();
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            throw new Error('OPENAI_API_KEY is not set');
        }
        const result = yield streamText({
            model: openai("ft:gpt-4o-2024-08-06:personal:reach-doc:A0aqM4IR"),
            system: 'You are a helpful assistant.',
            messages,
        });
        return result.toDataStreamResponse();
    });
}
