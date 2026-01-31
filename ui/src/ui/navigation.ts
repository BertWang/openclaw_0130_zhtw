import type { IconName } from "./icons.js";
import { t } from "./locales.js";

export const TAB_GROUPS = [
  { label: "Chat", tabs: ["chat"] },
  {
    label: "Control",
    tabs: ["overview", "channels", "instances", "sessions", "cron"],
  },
  { label: "Agent", tabs: ["skills", "nodes"] },
  { label: "Settings", tabs: ["config", "debug", "logs"] },
] as const;

export type Tab =
  | "overview"
  | "channels"
  | "instances"
  | "sessions"
  | "cron"
  | "skills"
  | "nodes"
  | "chat"
  | "config"
  | "debug"
  | "logs"
  | "docs-zh";

const TAB_PATHS: Record<Tab, string> = {
  overview: "/overview",
  channels: "/channels",
  instances: "/instances",
  sessions: "/sessions",
  cron: "/cron",
  skills: "/skills",
  nodes: "/nodes",
  chat: "/chat",
  config: "/config",
  debug: "/debug",
  logs: "/logs",
  "docs-zh": "/docs-zh",
};

const PATH_TO_TAB = new Map(
  Object.entries(TAB_PATHS).map(([tab, path]) => [path, tab as Tab]),
);

export function normalizeBasePath(basePath: string): string {
  if (!basePath) return "";
  let base = basePath.trim();
  if (!base.startsWith("/")) base = `/${base}`;
  if (base === "/") return "";
  if (base.endsWith("/")) base = base.slice(0, -1);
  return base;
}

export function normalizePath(path: string): string {
  if (!path) return "/";
  let normalized = path.trim();
  if (!normalized.startsWith("/")) normalized = `/${normalized}`;
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

export function pathForTab(tab: Tab, basePath = ""): string {
  const base = normalizeBasePath(basePath);
  const path = TAB_PATHS[tab];
  return base ? `${base}${path}` : path;
}

export function tabFromPath(pathname: string, basePath = ""): Tab | null {
  const base = normalizeBasePath(basePath);
  let path = pathname || "/";
  if (base) {
    if (path === base) {
      path = "/";
    } else if (path.startsWith(`${base}/`)) {
      path = path.slice(base.length);
    }
  }
  let normalized = normalizePath(path).toLowerCase();
  if (normalized.endsWith("/index.html")) normalized = "/";
  if (normalized === "/") return "chat";
  return PATH_TO_TAB.get(normalized) ?? null;
}

export function inferBasePathFromPathname(pathname: string): string {
  let normalized = normalizePath(pathname);
  if (normalized.endsWith("/index.html")) {
    normalized = normalizePath(normalized.slice(0, -"/index.html".length));
  }
  if (normalized === "/") return "";
  const segments = normalized.split("/").filter(Boolean);
  if (segments.length === 0) return "";
  for (let i = 0; i < segments.length; i++) {
    const candidate = `/${segments.slice(i).join("/")}`.toLowerCase();
    if (PATH_TO_TAB.has(candidate)) {
      const prefix = segments.slice(0, i);
      return prefix.length ? `/${prefix.join("/")}` : "";
    }
  }
  return `/${segments.join("/")}`;
}

export function iconForTab(tab: Tab): IconName {
  switch (tab) {
    case "chat":
      return "messageSquare";
    case "overview":
      return "barChart";
    case "channels":
      return "link";
    case "instances":
      return "radio";
    case "sessions":
      return "fileText";
    case "cron":
      return "loader";
    case "skills":
      return "zap";
    case "nodes":
      return "monitor";
    case "config":
      return "settings";
    case "debug":
      return "bug";
    case "logs":
      return "scrollText";
    case "docs-zh":
      return "book";
    default:
      return "folder";
  }
}

export function titleForTab(tab: Tab) {
  const strings = t();
  switch (tab) {
    case "overview":
      return strings.tabTitleOverview;
    case "channels":
      return strings.tabTitleChannels;
    case "instances":
      return strings.tabTitleInstances;
    case "sessions":
      return strings.tabTitleSessions;
    case "cron":
      return strings.tabTitleCron;
    case "skills":
      return strings.tabTitleSkills;
    case "nodes":
      return strings.tabTitleNodes;
    case "chat":
      return strings.tabTitleChat;
    case "config":
      return strings.tabTitleConfig;
    case "debug":
      return strings.tabTitleDebug;
    case "logs":
      return strings.tabTitleLogs;
    case "docs-zh":
      return "OpenClaw 中文文檔";
    default:
      return "Control";
  }
}

export function subtitleForTab(tab: Tab) {
  const strings = t();
  switch (tab) {
    case "overview":
      return strings.tabSubOverview;
    case "channels":
      return strings.tabSubChannels;
    case "instances":
      return strings.tabSubInstances;
    case "sessions":
      return strings.tabSubSessions;
    case "cron":
      return strings.tabSubCron;
    case "skills":
      return strings.tabSubSkills;
    case "nodes":
      return strings.tabSubNodes;
    case "chat":
      return strings.tabSubChat;
    case "config":
      return strings.tabSubConfig;
    case "debug":
      return strings.tabSubDebug;
    case "logs":
      return strings.tabSubLogs;
    case "docs-zh":
      return "核心概念與安裝指南";
    default:
      return "";
  }
}
