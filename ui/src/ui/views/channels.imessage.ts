import { html, nothing } from "lit";
import { t } from "../locales";

import { formatAgo } from "../format";
import type { IMessageStatus } from "../types";
import type { ChannelsProps } from "./channels.types";
import { renderChannelConfigSection } from "./channels.config";

export function renderIMessageCard(params: {
  props: ChannelsProps;
  imessage?: IMessageStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, imessage, accountCountLabel } = params;
  const strings = t();

  return html`
    <div class="card">
      <div class="card-title">iMessage</div>
      <div class="card-sub">${strings.tabSubChannels} (iMessage)</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${strings.configured}</span>
          <span>${imessage?.configured ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.running}</span>
          <span>${imessage?.running ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.lastStart}</span>
          <span>${imessage?.lastStartAt ? formatAgo(imessage.lastStartAt) : "n/a"}</span>
        </div>
        <div>
          <span class="label">${strings.lastProbe}</span>
          <span>${imessage?.lastProbeAt ? formatAgo(imessage.lastProbeAt) : "n/a"}</span>
        </div>
      </div>

      ${imessage?.lastError
      ? html`<div class="callout danger" style="margin-top: 12px;">
            ${imessage.lastError}
          </div>`
      : nothing}

      ${imessage?.probe
      ? html`<div class="callout" style="margin-top: 12px;">
            Probe ${imessage.probe.ok ? strings.probeOk : strings.probeFailed} ·
            ${imessage.probe.error ?? ""}
          </div>`
      : nothing}

      ${renderChannelConfigSection({ channelId: "imessage", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          ${strings.probe}
        </button>
      </div>
    </div>
  `;
}
