import { html, nothing } from "lit";
import { t } from "../locales";

import { formatAgo } from "../format";
import type { SlackStatus } from "../types";
import type { ChannelsProps } from "./channels.types";
import { renderChannelConfigSection } from "./channels.config";

export function renderSlackCard(params: {
  props: ChannelsProps;
  slack?: SlackStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, slack, accountCountLabel } = params;
  const strings = t();

  return html`
    <div class="card">
      <div class="card-title">Slack</div>
      <div class="card-sub">${strings.tabSubChannels} (Slack)</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${strings.configured}</span>
          <span>${slack?.configured ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.running}</span>
          <span>${slack?.running ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.lastStart}</span>
          <span>${slack?.lastStartAt ? formatAgo(slack.lastStartAt) : "n/a"}</span>
        </div>
        <div>
          <span class="label">${strings.lastProbe}</span>
          <span>${slack?.lastProbeAt ? formatAgo(slack.lastProbeAt) : "n/a"}</span>
        </div>
      </div>

      ${slack?.lastError
      ? html`<div class="callout danger" style="margin-top: 12px;">
            ${slack.lastError}
          </div>`
      : nothing}

      ${slack?.probe
      ? html`<div class="callout" style="margin-top: 12px;">
            Probe ${slack.probe.ok ? "ok" : "failed"} ·
            ${slack.probe.status ?? ""} ${slack.probe.error ?? ""}
          </div>`
      : nothing}

      ${renderChannelConfigSection({ channelId: "slack", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          ${strings.probe}
        </button>
      </div>
    </div>
  `;
}
