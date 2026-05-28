import type { Message as MessageType } from "../../types/api";
import { Message } from "./Message";

export function MessageGroup({ messages }: { messages: MessageType[] }) {
  return (
    <>
      {messages.map((message, index) => (
        <Message grouped={index > 0} key={message.id} message={message} />
      ))}
    </>
  );
}
