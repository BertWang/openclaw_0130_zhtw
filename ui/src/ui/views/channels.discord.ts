import { html, nothing } from "lit";
import { t } from "../locales";

import { formatAgo } from "../format";
import type { DiscordStatus } from "../types";
import type { ChannelsProps } from "./channels.types";
import { renderChannelConfigSection } from "./channels.config";

export function renderDiscordCard(params: {
  props: ChannelsProps;
  discord?: DiscordStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, discord, accountCountLabel } = params;
  const strings = t();

  return html`
    <div class="card">
      <div class="card-title">Discord</div>
      <div class="card-sub">${strings.tabSubChannels} (Discord)</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${strings.configured}</span>
          <span>${discord?.configured ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.running}</span>
          <span>${discord?.running ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.lastStart}</span>
          <span>${discord?.lastStartAt ? formatAgo(discord.lastStartAt) : "n/a"}</span>
        </div>
        <div>
          <span class="label">${strings.lastProbe}</span>
          <span>${discord?.lastProbeAt ? formatAgo(discord.lastProbeAt) : "n/a"}</span>
        </div>
      </div>

      ${discord?.lastError
      ? html`<div class="callout danger" style="margin-top: 12px;">
            ${discord.lastError}
          </div>`
      : nothing}

      ${discord?.probe
      ? html`<div class="callout" style="margin-top: 12px;">
            Probe ${discord.probe.ok ? "ok" : "failed"} ·
            ${discord.probe.status ?? ""} ${discord.probe.error ?? ""}
          </div>`
      : nothing}

      ${renderChannelConfigSection({ channelId: "discord", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          ${strings.probe}
        </button>
      </div>
    </div>
  `;
}
