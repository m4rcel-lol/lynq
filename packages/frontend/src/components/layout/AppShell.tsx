import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api";
import { useChannelStore } from "../../store/channels";
import { useServerStore } from "../../store/servers";
import { ChatArea } from "./ChatArea";
import { ChannelSidebar } from "./ChannelSidebar";
import { ServerRail } from "./ServerRail";
import styles from "./Layout.module.css";

export function AppShell() {
  const setServers = useServerStore((state) => state.setServers);
  const activeServerId = useServerStore((state) => state.activeServerId);
  const setChannels = useChannelStore((state) => state.setChannels);
  const serversQuery = useQuery({ queryKey: ["servers"], queryFn: api.servers });
  const channelsQuery = useQuery({
    queryKey: ["channels", activeServerId],
    queryFn: () => api.channels(activeServerId ?? ""),
    enabled: Boolean(activeServerId)
  });

  useEffect(() => {
    if (serversQuery.data) {
      setServers(serversQuery.data);
    }
  }, [serversQuery.data, setServers]);

  useEffect(() => {
    if (channelsQuery.data) {
      setChannels(channelsQuery.data);
    }
  }, [channelsQuery.data, setChannels]);

  return (
    <div className={styles.shell}>
      <ServerRail />
      <ChannelSidebar />
      <ChatArea />
    </div>
  );
}
