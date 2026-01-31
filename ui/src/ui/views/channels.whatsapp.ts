import { html, nothing } from "lit";
import { t } from "../locales";

import { formatAgo } from "../format";
import type { WhatsAppStatus } from "../types";
import type { ChannelsProps } from "./channels.types";
import { renderChannelConfigSection } from "./channels.config";
import { formatDuration } from "./channels.shared";

export function renderWhatsAppCard(params: {
  props: ChannelsProps;
  whatsapp?: WhatsAppStatus;
  accountCountLabel: unknown;
}) {
  const { props, whatsapp, accountCountLabel } = params;
  const strings = t();

  return html`
    <div class="card">
      <div class="card-title">WhatsApp</div>
      <div class="card-sub">${strings.tabSubChannels} (WhatsApp)</div>
      ${accountCountLabel}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${strings.configured}</span>
          <span>${whatsapp?.configured ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.linked}</span>
          <span>${whatsapp?.linked ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.running}</span>
          <span>${whatsapp?.running ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.connected}</span>
          <span>${whatsapp?.connected ? strings.healthOk : strings.healthOffline}</span>
        </div>
        <div>
          <span class="label">${strings.lastConnect}</span>
          <span>
            ${whatsapp?.lastConnectedAt
      ? formatAgo(whatsapp.lastConnectedAt)
      : "n/a"}
          </span>
        </div>
        <div>
          <span class="label">${strings.lastMessage}</span>
          <span>
            ${whatsapp?.lastMessageAt ? formatAgo(whatsapp.lastMessageAt) : "n/a"}
          </span>
        </div>
        <div>
          <span class="label">${strings.authAge}</span>
          <span>
            ${whatsapp?.authAgeMs != null
      ? formatDuration(whatsapp.authAgeMs)
      : "n/a"}
          </span>
        </div>
      </div>

      ${whatsapp?.lastError
      ? html`<div class="callout danger" style="margin-top: 12px;">
            ${whatsapp.lastError}
          </div>`
      : nothing}

      ${props.whatsappMessage
      ? html`<div class="callout" style="margin-top: 12px;">
            ${props.whatsappMessage}
          </div>`
      : nothing}

      ${props.whatsappQrDataUrl
      ? html`<div class="qr-wrap">
            <img src=${props.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`
      : nothing}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${props.whatsappBusy}
          @click=${() => props.onWhatsAppStart(false)}
        >
          ${props.whatsappBusy ? strings.working : strings.showQr}
        </button>
        <button
          class="btn"
          ?disabled=${props.whatsappBusy}
          @click=${() => props.onWhatsAppStart(true)}
        >
          ${strings.relink}
        </button>
        <button
          class="btn"
          ?disabled=${props.whatsappBusy}
          @click=${() => props.onWhatsAppWait()}
        >
          ${strings.waitForScan}
        </button>
        <button
          class="btn danger"
          ?disabled=${props.whatsappBusy}
          @click=${() => props.onWhatsAppLogout()}
        >
          ${strings.logout}
        </button>
        <button class="btn" @click=${() => props.onRefresh(true)}>
          ${strings.refresh}
        </button>
      </div>

      ${renderChannelConfigSection({ channelId: "whatsapp", props })}
    </div>
  `;
}
