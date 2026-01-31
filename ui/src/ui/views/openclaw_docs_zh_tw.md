# OpenClaw 文檔摘要

這份文件總結了 OpenClaw 文檔中的關鍵概念和資訊。

## 1. 入門與安裝 (Start Here & Installation)

### 核心組件 (Core Components)
- **Gateway (網關)**：中央 WebSocket 控制平面（預設運行在 18789 端口）。它負責管理會話 (sessions)、頻道 (channels)、工具 (tools) 和事件 (events)。
- **Pi Agent**：負責處理推理、工具執行和記憶的運行時 (runtime)。
- **CLI**：\`openclaw\` 命令列工具，用於管理、引導設置 (onboarding) 和健康檢查。
- **Web Dashboard (Web 控制台)**：用於管理機器人、查看日誌和配置的用戶界面 (預設: \`http://127.0.0.1:18789/\`)。

### 安裝流程 (Setup Workflows)
- **穩定版 (Stable - Mac App)**：推薦給大多數用戶。由 App 管理 Gateway。
- **開發版 (Bleeding Edge)**：在終端機中手動運行 Gateway (\`pnpm gateway:watch\`)。

### 關鍵目錄 (Key Directories)
- **工作區 (Workspace)**：\`~/.openclaw/workspace\`。這是一個 git 友好的存儲庫，包含：
  - \`AGENTS.md\`: Agent 定義。
  - \`SOUL.md\`: 角色設定 (Persona) 和指令。
  - \`USER.md\`: 用戶偏好和身份。
  - \`TOOLS.md\`: 自定義工具定義。
- **配置文件**: \`~/.openclaw/openclaw.json\`。
- **憑證目錄**: \`~/.openclaw/credentials/\`。
- **會話目錄**: \`~/.openclaw/agents/<agentId>/sessions/\`。

### 認證 (Authentication)
- 支援 OpenRouter, Anthropic, OpenAI。
- 憑證存儲在 \`oauth.json\` 或 \`auth-profiles.json\` 中。
- 支援 \`claude setup-token\` 以重用 Claude Code 的憑證。

### 頻道 (Channels) - 概覽
- **WhatsApp**: 通過掃描 QR 碼連接 (\`openclaw channels login\`)。需要第二支手機或支援 WhatsApp Web 的設備。
- **Telegram/Discord**: 通過 Bot Token 支援。

### 主動模式 (Proactive Mode - Heartbeats)
- Agent 可以按計畫運行（預設 30 分鐘）來檢查任務。
- 由 \`HEARTBEAT.md\` 指令控制。
- 配置項：\`agents.defaults.heartbeat.every\`。

## 2. 概念與架構 (Concepts & Architecture)

### Agent 循環 (Agent Loop)
- **週期**: 提示詞組裝 (Prompt Assembly) -> 推理 (Inference) -> 工具執行 (Tool Execution) -> Hooks -> 輸出/串流 (Output/streaming)。
- **上下文 (Context)**: 由系統提示詞 (System Prompt) + 歷史記錄 + 工具定義 + 注入的工作區文件 (\`AGENTS.md\`, \`SOUL.md\` 等) 組成。
- **事件 (Events)**: 系統使用事件驅動模型 (\`event:presence\`, \`event:agent\`)。

### 多 Agent 路由 (Multi-Agent Routing)
- **Account ID vs Agent ID**:
  - \`accountId\`: 特定的頻道身份 (例如："personal" WhatsApp 帳號)。
  - \`agentId\`: 邏輯上的 "大腦"，擁有獨立的工作區和記憶。
- **綁定 (Bindings)**: 將來自特定 \`(channel, accountId, peer)\` 的消息路由到 \`agentId\` 的規則。
- **預設 Agent**: 如果沒有匹配的綁定，則回退到預設 Agent (通常是 \`main\`)。

### 網關協議 (Gateway Protocol)
- **傳輸**: 基於 WebSocket 的 JSON-RPC (預設端口 18789)。
- **握手 (Handshake)**: 客戶端使用 auth token 連接。伺服器回應包含狀態快照的 \`hello-ok\`。
- **配對 (Pairing)**: 新設備/客戶端必須通過配對碼批准，除非運行在 loopback/受信任的網絡上。

### 安全性 (Security)
- **訪問控制**: 在啟用智慧功能之前先驗證身份。
- **沙箱 (Sandboxing)**:
  - **Docker**: 在容器中運行整個 Gateway。
  - **工具沙箱**: 限制文件系統訪問 (\`agents.defaults.sandbox\`)。模式：\`none\` (無法訪問 Agent 工作區), \`ro\` (唯讀), \`rw\` (讀寫)。
- **DM 策略**: \`pairing\` (預設 - 配對), \`allowlist\` (白名單), \`open\` (開放), 或 \`disabled\` (禁用)。

### 配置 (\`openclaw.json\`)
- **結構**: 支援 \`$include\` 和環境變數替換 (\`\${VAR}\`)。
- **關鍵區塊**:
  - \`auth\`: LLM 供應商的配置檔案。
  - \`agents\`: Agent 的定義及其預設值。
  - \`channels\`: WhatsApp, Telegram 等頻道的配置。
  - \`logging\`: 日誌級別和目的地。

## 3. 頻道與工具 (Channels & Tools)

### 頻道詳解
- **WhatsApp**:
  - 通過 QR 碼連接 (Web 頻道模擬)。
  - 支援文字、媒體和語音筆記 (PTT)。
  - 建議使用專用電話號碼。
- **Telegram**:
  - 使用標準 Bot API (\`@BotFather\`)。
  - 在 \`channels.telegram.botToken\` 中配置 Token。
- **Discord**:
  - 需要 Discord App + Bot User。
  - 需要在開發者門戶中啟用 "Message Content Intent" 和 "Server Members Intent"。
  - 配置：\`channels.discord.botToken\`。
- **Slack**:
  - 使用 Socket Mode (推薦)。
  - 需要 App Level Token (\`xapp-...\`) 和 Bot Token (\`xoxb-...\`).
  - 權限範圍 (Scopes): \`connections:write\`, \`message.channels\`, \`app_mention\` 等。
- **Signal**:
  - 使用 \`signal-cli\` (需要 Java)。
  - 建議使用單獨的號碼以避免循環問題。
  - 通過 \`signal-cli link -n "OpenClaw"\` 連結。
- **iMessage**:
  - 使用 \`imsg\` CLI 工具 (\`brew install steipete/tap/imsg\`)。
  - 需要 macOS 上的「完全磁碟存取權 (Full Disk Access)」和「自動化 (Automation)」權限。
  - 確定性路由至 \`agent:<id>:imessage:group:<chat_id>\`。
- **Mattermost**:
  - 需要安裝 \`@openclaw/mattermost\` 插件。
  - 配置：\`baseUrl\` 和 \`botToken\`。
  - 聊天模式：\`oncall\` (僅提及), \`onmessage\` (所有訊息), \`onchar\` (前綴觸發)。
- **Google Chat**:
  - 支援 **Webhook-only** (公開 URL) 或 **App** 模式 (Tailscale Funnel/反向代理)。
  - 推薦設置：使用 **Tailscale Funnel** 安全地暴露本地端口。
  - 支援 \`ADDED_TO_SPACE\`, \`MESSAGE\` 等事件。

### 工具 (Tools)
- **瀏覽器 (Browser)**:
  - OpenClaw 管理一個 Chromium 實例 (通過 Playwright)。
  - **安全性**: 避免使用個人 Profile。使用專用/沙箱化的 Profile。
  - 支援本地和遠端控制 (通過 WebSocket)。
- **技能 (Skills)**:
  - 可以被 Agent 拉取的外部工具定義。
  - 定義在 \`SKILL.md\` 中。
  - 可以是每個 Agent 獨有或共享的。
- **斜線指令 (Slash Commands)**:
  - **/model**: 即時切換模型。
  - **/reset** / **/new**: 開始一個新的會話。
  - **/think** / **/verbose**: 切換思考/日誌模式。
  - **/exec**: 執行 Shell 命令（如果已授權）。
  - **/context**: 檢查當前上下文使用情況。

## 4. 模型供應商 (Providers & Models)

### 配置
在 \`openclaw.json\` 的 \`agents.defaults.model\` 或 \`models\` 下定義。

- **Anthropic**:
  - \`anthropic/claude-3-5-sonnet-20241022\` (通常為預設)。
  - 支援 Prompt Caching (\`cacheControlTtl\` 參數)。
  - 認證: API Key (\`anthropic-api-key\`) 或 \`claude setup-token\`。
- **OpenAI**:
  - \`openai/gpt-4o\`。
  - 認證: \`OPENAI_API_KEY\`。
- **OpenRouter**:
  - 許多模型的統一接口。
  - 引用格式: \`openrouter/<provider>/<model>\` (例如: \`openrouter/anthropic/claude-3\`)。
  - 認證: \`OPENROUTER_API_KEY\`。

### 模型選擇
- 使用 \`/model\` 斜線指令切換上下文。
- 使用 \`/model status\` 查看當前端點狀態。

## 5. 部署與節點 (Deployment & Nodes)

### Docker (推薦)
- **容器化 Gateway**: 通過 Docker Compose 運行完整的 Gateway。
- **快速開始**: \`./docker-setup.sh\` 構建映像檔、運行引導程序並生成 Token。
- **環境變數**: \`OPENCLAW_DOCKER_APT_PACKAGES\` 允許在構建期間安裝額外的依賴 (例如 ffmpeg)。
- **沙箱化**: Docker 也用於工具沙箱 (\`agents.defaults.sandbox\`)，以將工具執行與主機隔離。

### 節點 (Nodes)
- "節點" 通常指運行 Gateway 或單獨客戶端的機器。
- 可以是 **macOS**, **Linux**, 或 **Docker** 容器。
- 連接節點需要 **配對 (Pairing)**（除非在 loopback/受信任的網絡上）。

## 6. 進階概念 (Advanced Concepts)

### 記憶系統 (Memory System)
- **檔案結構**:
  - \`memory/YYYY-MM-DD.md\`: 每日日誌 (Append-only)，啟動時讀取今天與昨天的記錄。
  - \`MEMORY.md\`: 精選的長期記憶 (只在主會話加載)。
- **自動刷新 (Auto-flush)**: 當 Context 即將滿時 (Compaction)，系統會觸發一個靜默的回合，要求模型將重要資訊寫入磁碟。
- **向量搜索 (Vector Search)**:
  - 預設對 \`MEMORY.md\` 和 \`memory/*.md\` 建立索引。
  - **混合搜索 (Hybrid Search)**: 結合 **Vector** (語意相似度) 與 **BM25** (關鍵字精確匹配)，以達到最佳召回率。
  - 儲存在 \`~/.openclaw/memory/<agentId>.sqlite\`。

### 多 Agent 路由詳解 (Multi-Agent Routing Deep Dive)
- **隔離性**: 每個 Agent 擁有獨立的 \`workspace\`, \`agentDir\` (Auth/Config) 和 \`sessions\`。
- **路由規則 (優先級由高到低)**:
  1. \`peer\`: 特定 DM/Group ID (最精確)。
  2. \`guildId\` / \`teamId\`: 特定伺服器或工作區。
  3. \`accountId\`: 特定頻道帳號 (例如 WhatsApp 的 "personal" vs "biz")。
  4. \`channel\`: 頻道級別通配符。
  5. \`default\`: 預設 Agent (通常是 \`main\`)。
- **沙箱策略**: 可為每個 Agent 單獨配置沙箱 (\`sandbox.mode: "all"\`) 和工具權限 (\`tools.deny: ["exec"]\`)，適合運行不受信任的 Agent。
