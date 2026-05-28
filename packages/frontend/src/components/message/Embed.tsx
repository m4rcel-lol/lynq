import type { MessageEmbed } from "../../types/api";

export function Embed({ embed }: { embed: MessageEmbed }) {
  return (
    <article className="glass" style={{ borderLeft: "3px solid var(--accent-primary)", borderRadius: 8, marginTop: 8, maxWidth: 520, padding: 12 }}>
      {embed.siteName ? <small style={{ color: "var(--text-muted)" }}>{embed.siteName}</small> : null}
      {embed.title ? (
        <a href={embed.url} rel="noreferrer" target="_blank">
          <strong>{embed.title}</strong>
        </a>
      ) : null}
      {embed.description ? <p style={{ color: "var(--text-secondary)" }}>{embed.description}</p> : null}
      {embed.thumbnail ? <img alt="" src={embed.thumbnail} style={{ maxHeight: 180, maxWidth: "100%", borderRadius: 6 }} /> : null}
    </article>
  );
}
