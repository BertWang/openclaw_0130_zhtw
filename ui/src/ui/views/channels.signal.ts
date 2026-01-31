import { html, nothing } from "lit";
import { t } from "../locales";

import { formatAgo } from "../format";
import type { SignalStatus } from "../types";
import type { ChannelsProps } from "./channels.types";
import { renderChannelConfigSection } from "./channels.config";

export function renderSignalCard(params: {
  props: ChannelsProps;
  signal?: SignalStatus | null;
  accountCountLabel: unknown;
}) {
  const { props, signal, accountCountLabel } = params;
  const strings = t();

  return html`
    <div class="card">
      <div class="card-title">Signal</div>
      <div class="card-sub">${strings.tabSubChannels} (Signal)</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${strings.configured}</span>
          <span>${signal?.configured ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.running}</span>
          <span>${signal?.running ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">Base URL</span>
          <span>${signal?.baseUrl ?? "n/a"}</span>
        </div>
        <div>
          <span class="label">${strings.lastStart}</span>
          <span>${signal?.lastStartAt ? formatAgo(signal.lastStartAt) : "n/a"}</span>
        </div>
        <div>
          <span class="label">${strings.lastProbe}</span>
          <span>${signal?.lastProbeAt ? formatAgo(signal.lastProbeAt) : "n/a"}</span>
        </div>
      </div>

      ${signal?.lastError
      ? html`<div class="callout danger" style="margin-top: 12px;">
            ${signal.lastError}
          </div>`
      : nothing}

      ${signal?.probe
      ? html`<div class="callout" style="margin-top: 12px;">
            Probe ${signal.probe.ok ? "ok" : "failed"} ·
            ${signal.probe.status ?? ""} ${signal.probe.error ?? ""}
          </div>`
      : nothing}

      ${renderChannelConfigSection({ channelId: "signal", props })}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${() => props.onRefresh(true)}>
          ${strings.probe}
        </button>
      </div>
    </div>
  `;
}
