import * as dotenv from "dotenv";
import {
    Configuration,
    OpenAIApi,
} from "openai";

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getChatCompletion = async (content: string): Promise<string> => {
    try {
        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: content,
                },
            ],
        });
        return completion.data!.choices[0]!.message!.content || ""
    } catch (error: any) {
        if (error.response) {
            return `${error.response.status}, ${error.response.data}`;
        } else {
            return `${error.type}, ${error.message}`;
        };
    };
}