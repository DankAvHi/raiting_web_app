export type TelegramUser = { name: string; id: number };

export type User = (TelegramUser & { voutes: number; presents: string }) | undefined;
