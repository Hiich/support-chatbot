import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function chatHandler(req: Request) {
    const { messages }: { messages: CoreMessage[] } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        throw new Error('OPENAI_API_KEY is not set');
    }


    const result = await streamText({
        model: openai("ft:gpt-4o-2024-08-06:personal:reach-doc:A0aqM4IR"),
        system: 'You are a helpful assistant.',
        messages,
    });

    return result.toDataStreamResponse();
}