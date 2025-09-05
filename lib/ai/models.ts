export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    description: 'Advanced multimodal model with vision and text capabilities',
  },
];
