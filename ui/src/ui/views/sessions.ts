import { html, nothing } from "lit";
import { t } from "../locales";

import { formatAgo } from "../format";
import { formatSessionTokens } from "../presenter";
import { pathForTab } from "../navigation";
import type { GatewaySessionRow, SessionsListResult } from "../types";

export type SessionsProps = {
  loading: boolean;
  result: SessionsListResult | null;
  error: string | null;
  activeMinutes: string;
  limit: string;
  includeGlobal: boolean;
  includeUnknown: boolean;
  basePath: string;
  onFiltersChange: (next: {
    activeMinutes: string;
    limit: string;
    includeGlobal: boolean;
    includeUnknown: boolean;
  }) => void;
  onRefresh: () => void;
  onPatch: (
    key: string,
    patch: {
      label?: string | null;
      thinkingLevel?: string | null;
      verboseLevel?: string | null;
      reasoningLevel?: string | null;
    },
  ) => void;
  onDelete: (key: string) => void;
};

const THINK_LEVELS = ["", "off", "minimal", "low", "medium", "high"] as const;
const BINARY_THINK_LEVELS = ["", "off", "on"] as const;
const VERBOSE_LEVELS = [
  { value: "", label: "inherit" },
  { value: "off", label: "off (explicit)" },
  { value: "on", label: "on" },
] as const;
const REASONING_LEVELS = ["", "off", "on", "stream"] as const;

function normalizeProviderId(provider?: string | null): string {
  if (!provider) return "";
  const normalized = provider.trim().toLowerCase();
  if (normalized === "z.ai" || normalized === "z-ai") return "zai";
  return normalized;
}

function isBinaryThinkingProvider(provider?: string | null): boolean {
  return normalizeProviderId(provider) === "zai";
}

function resolveThinkLevelOptions(provider?: string | null): readonly string[] {
  return isBinaryThinkingProvider(provider) ? BINARY_THINK_LEVELS : THINK_LEVELS;
}

function resolveThinkLevelDisplay(value: string, isBinary: boolean): string {
  if (!isBinary) return value;
  if (!value || value === "off") return value;
  return "on";
}

function resolveThinkLevelPatchValue(value: string, isBinary: boolean): string | null {
  if (!value) return null;
  if (!isBinary) return value;
  if (value === "on") return "low";
  return value;
}

export function renderSessions(props: SessionsProps) {
  const strings = t();
  const rows = props.result?.sessions ?? [];
  return html`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${strings.tabTitleSessions}</div>
          <div class="card-sub">${strings.tabSubSessions}</div>
        </div>
        <button class="btn" ?disabled=${props.loading} @click=${props.onRefresh}>
          ${props.loading ? strings.loading : strings.refresh}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>${strings.activeMinutes}</span>
          <input
            .value=${props.activeMinutes}
            @input=${(e: Event) =>
      props.onFiltersChange({
        activeMinutes: (e.target as HTMLInputElement).value,
        limit: props.limit,
        includeGlobal: props.includeGlobal,
        includeUnknown: props.includeUnknown,
      })}
          />
        </label>
        <label class="field">
          <span>${strings.limit}</span>
          <input
            .value=${props.limit}
            @input=${(e: Event) =>
      props.onFiltersChange({
        activeMinutes: props.activeMinutes,
        limit: (e.target as HTMLInputElement).value,
        includeGlobal: props.includeGlobal,
        includeUnknown: props.includeUnknown,
      })}
          />
        </label>
        <label class="field checkbox">
          <span>${strings.includeGlobal}</span>
          <input
            type="checkbox"
            .checked=${props.includeGlobal}
            @change=${(e: Event) =>
      props.onFiltersChange({
        activeMinutes: props.activeMinutes,
        limit: props.limit,
        includeGlobal: (e.target as HTMLInputElement).checked,
        includeUnknown: props.includeUnknown,
      })}
          />
        </label>
        <label class="field checkbox">
          <span>${strings.includeUnknown}</span>
          <input
            type="checkbox"
            .checked=${props.includeUnknown}
            @change=${(e: Event) =>
      props.onFiltersChange({
        activeMinutes: props.activeMinutes,
        limit: props.limit,
        includeGlobal: props.includeGlobal,
        includeUnknown: (e.target as HTMLInputElement).checked,
      })}
          />
        </label>
      </div>

      ${props.error
      ? html`<div class="callout danger" style="margin-top: 12px;">${props.error}</div>`
      : nothing}

      <div class="muted" style="margin-top: 12px;">
        ${props.result ? `${strings.store} ${props.result.path}` : ""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          <div>${strings.key}</div>
          <div>${strings.notes}</div>
          <div>${strings.kind}</div>
          <div>${strings.updatedLabel}</div>
          <div>${strings.tokens}</div>
          <div>${strings.thinkingLabel}</div>
          <div>${strings.verboseLabel}</div>
          <div>${strings.reasoningLabel}</div>
          <div>${strings.actions}</div>
        </div>
        ${rows.length === 0
      ? html`<div class="muted">${strings.noSessionsFound}</div>`
      : rows.map((row) =>
        renderRow(row, props.basePath, props.onPatch, props.onDelete, props.loading),
      )}
      </div>
    </section>
  `;
}

function renderRow(
  row: GatewaySessionRow,
  basePath: string,
  onPatch: SessionsProps["onPatch"],
  onDelete: SessionsProps["onDelete"],
  disabled: boolean,
) {
  const strings = t();
  const updated = row.updatedAt ? formatAgo(row.updatedAt) : "n/a";
  const rawThinking = row.thinkingLevel ?? "";
  const isBinaryThinking = isBinaryThinkingProvider(row.modelProvider);
  const thinking = resolveThinkLevelDisplay(rawThinking, isBinaryThinking);
  const thinkLevels = resolveThinkLevelOptions(row.modelProvider);
  const verbose = row.verboseLevel ?? "";
  const reasoning = row.reasoningLevel ?? "";
  const displayName = row.displayName ?? row.key;
  const canLink = row.kind !== "global";
  const chatUrl = canLink
    ? `${pathForTab("chat", basePath)}?session=${encodeURIComponent(row.key)}`
    : null;

  return html`
    <div class="table-row">
      <div class="mono">${canLink
      ? html`<a href=${chatUrl} class="session-link">${displayName}</a>`
      : displayName}</div>
      <div>
        <input
          .value=${row.label ?? ""}
          ?disabled=${disabled}
          placeholder=${strings.optional}
          @change=${(e: Event) => {
      const value = (e.target as HTMLInputElement).value.trim();
      onPatch(row.key, { label: value || null });
    }}
        />
      </div>
      <div>${row.kind}</div>
      <div>${updated}</div>
      <div>${formatSessionTokens(row)}</div>
      <div>
        <select
          .value=${thinking}
          ?disabled=${disabled}
          @change=${(e: Event) => {
      const value = (e.target as HTMLSelectElement).value;
      onPatch(row.key, {
        thinkingLevel: resolveThinkLevelPatchValue(value, isBinaryThinking),
      });
    }}
        >
          ${thinkLevels.map((level) =>
      html`<option value=${level}>${level || strings.inherit}</option>`,
    )}
        </select>
      </div>
      <div>
        <select
          .value=${verbose}
          ?disabled=${disabled}
          @change=${(e: Event) => {
      const value = (e.target as HTMLSelectElement).value;
      onPatch(row.key, { verboseLevel: value || null });
    }}
        >
          ${VERBOSE_LEVELS.map((level) => {
      const label =
        level.value === ""
          ? strings.inherit
          : level.value === "off"
            ? strings.offExplicitLabel
            : strings.onLabel;
      return html`<option value=${level.value}>${label}</option>`;
    })}
        </select>
      </div>
      <div>
        <select
          .value=${reasoning}
          ?disabled=${disabled}
          @change=${(e: Event) => {
      const value = (e.target as HTMLSelectElement).value;
      onPatch(row.key, { reasoningLevel: value || null });
    }}
        >
          ${REASONING_LEVELS.map((level) =>
      html`<option value=${level}>${level || strings.inherit}</option>`,
    )}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${disabled} @click=${() => onDelete(row.key)}>
          ${t().delete}
        </button>
      </div>
    </div>
  `;
}
