import { getChatCompletion } from './lib/openai';

const exec = async () => {
  const responseText = await getChatCompletion('こんにちは、あなたのどこに住んでいますか？');
  console.log(responseText);
};

exec();