import { html, nothing } from "lit";

import type { AppViewState } from "../app-view-state";
import { t } from "../locales";

export function renderGatewayUrlConfirmation(state: AppViewState) {
  const strings = t();
  const { pendingGatewayUrl } = state;
  if (!pendingGatewayUrl) return nothing;

  return html`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">${strings.changeGatewayUrl}</div>
            <div class="exec-approval-sub">${strings.changeGatewayUrlSub}</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${pendingGatewayUrl}</div>
        <div class="callout danger" style="margin-top: 12px;">
          ${strings.trustWarning}
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${() => state.handleGatewayUrlConfirm()}
          >
            ${strings.confirm}
          </button>
          <button
            class="btn"
            @click=${() => state.handleGatewayUrlCancel()}
          >
            ${strings.cancel}
          </button>
        </div>
      </div>
    </div>
  `;
}
