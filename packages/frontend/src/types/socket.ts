import type { Message } from "./api";

export type ClientToServerEvents = {
  "channel:join": (payload: { channelId: string }) => void;
  "channel:leave": (payload: { channelId: string }) => void;
  "message:send": (payload: { channelId: string; content: string; nonce?: string; replyTo?: string }) => void;
  "message:edit": (payload: { messageId: string; content: string }) => void;
  "message:delete": (payload: { messageId: string }) => void;
  "reaction:add": (payload: { messageId: string; emoji: string }) => void;
  "reaction:remove": (payload: { messageId: string; emoji: string }) => void;
  "typing:start": (payload: { channelId: string }) => void;
  "typing:stop": (payload: { channelId: string }) => void;
  "presence:update": (payload: { status: "online" | "idle" | "dnd" | "invisible"; customStatus?: string }) => void;
  "voice:join": (payload: { channelId: string }) => void;
  "voice:leave": () => void;
  "read_state:update": (payload: { channelId: string; lastReadMessageId: string }) => void;
};

export type ServerToClientEvents = {
  "message:create": (payload: { message: Message }) => void;
  "message:update": (payload: { message: Message }) => void;
  "message:delete": (payload: { messageId: string; channelId: string }) => void;
  "reaction:add": (payload: { messageId: string; emoji: string; userId: string; count: number }) => void;
  "reaction:remove": (payload: { messageId: string; emoji: string; userId: string; count: number }) => void;
  "typing:start": (payload: { channelId: string; userId: string; timestamp: string }) => void;
  "typing:stop": (payload: { channelId: string; userId: string }) => void;
  "presence:update": (payload: { userId: string; status: string; customStatus?: string }) => void;
  "voice:user_join": (payload: { channelId: string; userId: string }) => void;
  "voice:user_leave": (payload: { channelId: string; userId: string }) => void;
  "notification:new": (payload: { notification: unknown }) => void;
};
