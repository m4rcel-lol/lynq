export type PublicUser = {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string | null;
  bannerUrl: string | null;
  bio: string | null;
  status: string;
  isBot: boolean;
  isSystem: boolean;
  isLynqAdmin: boolean;
  passwordResetRequired: boolean;
  createdAt: string;
};

export type Server = {
  id: string;
  name: string;
  description: string | null;
  iconUrl: string | null;
  bannerUrl: string | null;
  ownerId: string;
  verified: boolean;
  partner: boolean;
  publicDiscovery: boolean;
  boostTier: number;
};

export type Channel = {
  id: string;
  serverId: string;
  name: string;
  type: "text" | "voice" | "announcement" | "forum" | "stage" | "rules" | "dm" | "group_dm";
  topic: string | null;
  nsfw: boolean;
  position: number;
};

export type Message = {
  id: string;
  channelId: string;
  authorId: string;
  content: string;
  editedAt: string | null;
  pinned: boolean;
  type: string;
  referenceMessageId: string | null;
  attachments: MessageAttachment[];
  embeds: MessageEmbed[];
  createdAt: string;
};

export type MessageAttachment = {
  id: string;
  filename: string;
  contentType: string;
  size: number;
  url: string;
  width?: number;
  height?: number;
  durationSecs?: number;
};

export type MessageEmbed = {
  url: string;
  siteName?: string;
  title?: string;
  description?: string;
  image?: string;
  thumbnail?: string;
};

export type AuthResponse = {
  accessToken: string;
  user: PublicUser;
};

export type BotApplication = {
  id: string;
  name: string;
  description: string;
  iconUrl: string | null;
  ownerId: string;
  clientId: string;
  redirectUris: string[];
  verified: boolean;
  publicBot: boolean;
  requireCodeGrant: boolean;
  createdAt: string;
};

export type BotApplicationCreateResponse = {
  application: BotApplication;
  clientSecret: string;
  botToken: string;
};

export type Page<T> = {
  items: T[];
  nextCursor: string | null;
};
