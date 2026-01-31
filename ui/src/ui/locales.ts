export type Locale = "en" | "zh-TW";

export interface DashboardStrings {
    // Navigation
    navChat: string;
    navChannels: string;
    navConfig: string;
    navNodes: string;
    navDevices: string;
    navSessions: string;
    navCron: string;
    navSkills: string;
    navDebug: string;
    navLogs: string;
    navOverview: string;

    // Tab titles
    tabTitleOverview: string;
    tabTitleChannels: string;
    tabTitleInstances: string;
    tabTitleSessions: string;
    tabTitleCron: string;
    tabTitleSkills: string;
    tabTitleNodes: string;
    tabTitleChat: string;
    tabTitleConfig: string;
    tabTitleDebug: string;
    tabTitleLogs: string;

    // Tab subtitles
    tabSubOverview: string;
    tabSubChannels: string;
    tabSubInstances: string;
    tabSubSessions: string;
    tabSubCron: string;
    tabSubSkills: string;
    tabSubNodes: string;
    tabSubChat: string;
    tabSubConfig: string;
    tabSubDebug: string;
    tabSubLogs: string;

    // App Layout
    appTitle: string;
    appSub: string;
    health: string;
    healthOk: string;
    healthOffline: string;
    expandSidebar: string;
    collapseSidebar: string;
    resources: string;
    docs: string;

    // Groups
    groupChat: string;
    groupControl: string;
    groupAgent: string;
    groupSettings: string;

    // Overview
    gatewayAccess: string;
    gatewayAccessSub: string;
    wsUrl: string;
    gatewayToken: string;
    passwordNotStored: string;
    defaultSessionKey: string;
    connect: string;
    refresh: string;
    clickConnectHint: string;
    snapshot: string;
    snapshotSub: string;
    status: string;
    uptime: string;
    tickInterval: string;
    lastChannelsRefresh: string;
    connected: string;
    disconnected: string;
    instances: string;
    instancesSub: string;
    sessions: string;
    sessionsSub: string;
    cron: string;
    cronSub: string;
    notes: string;
    notesSub: string;
    tailscaleServe: string;
    tailscaleServeSub: string;
    sessionHygiene: string;
    sessionHygieneSub: string;
    cronReminders: string;
    cronRemindersSub: string;

    // Chat
    typeMessage: string;
    send: string;
    abort: string;
    thinking: string;
    chatDisconnected: string;
    compacting: string;
    contextCompacted: string;
    removeAttachment: string;
    loadingChat: string;
    newSession: string;
    stop: string;
    queue: string;
    queuedMessages: (count: number) => string;
    imageAttachment: (count: number) => string;
    attachmentId: string;
    composePlaceholderNormal: string;
    composePlaceholderWithAttachments: string;
    composePlaceholderDisconnected: string;
    exitFocusMode: string;
    messageLabel: string;

    // Config
    settings: string;
    searchSettings: string;
    allSettings: string;
    form: string;
    raw: string;
    unsavedChanges: string;
    unsavedChangeCount: (count: number) => string;
    noChanges: string;
    reload: string;
    loading: string;
    save: string;
    saving: string;
    apply: string;
    applying: string;
    update: string;
    updating: string;
    viewPendingChanges: (count: number) => string;
    all: string;
    loadingSchema: string;
    formUnsafeWarning: string;
    rawJson5: string;

    // Sections
    sectionEnv: string;
    sectionUpdate: string;
    sectionAgents: string;
    sectionAuth: string;
    sectionChannels: string;
    sectionMessages: string;
    sectionCommands: string;
    sectionHooks: string;
    sectionSkills: string;
    sectionTools: string;
    sectionGateway: string;
    sectionWizard: string;

    // Section Descriptions
    sectionEnvDesc: string;
    sectionUpdateDesc: string;
    sectionAgentsDesc: string;
    sectionAuthDesc: string;
    sectionChannelsDesc: string;
    sectionMessagesDesc: string;
    sectionCommandsDesc: string;
    sectionHooksDesc: string;
    sectionSkillsDesc: string;
    sectionToolsDesc: string;
    sectionGatewayDesc: string;
    sectionWizardDesc: string;

    // Additional Config Sections
    sectionMeta: string;
    sectionMetaDesc: string;
    sectionLogging: string;
    sectionLoggingDesc: string;
    sectionBrowser: string;
    sectionBrowserDesc: string;
    sectionUi: string;
    sectionUiDesc: string;
    sectionModels: string;
    sectionModelsDesc: string;
    sectionBindings: string;
    sectionBindingsDesc: string;
    sectionBroadcast: string;
    sectionBroadcastDesc: string;
    sectionAudio: string;
    sectionAudioDesc: string;
    sectionSession: string;
    sectionSessionDesc: string;
    sectionCron: string;
    sectionCronDesc: string;
    sectionWeb: string;
    sectionWebDesc: string;
    sectionDiscovery: string;
    sectionDiscoveryDesc: string;
    sectionCanvasHost: string;
    sectionCanvasHostDesc: string;
    sectionTalk: string;
    sectionTalkDesc: string;
    sectionPlugins: string;
    sectionPluginsDesc: string;

    // Config Form
    schemaUnavailable: string;
    unsupportedSchemaUseRaw: string;
    noSettingsMatch: (query: string) => string;
    noSettingsInSection: string;

    // Config Form Node
    addKey: string;
    addEntry: string;
    enterValue: string;
    invalidNumber: string;
    remove: string;
    newKey: string;

    // Channel Config
    channelConfigSchemaUnavailable: string;
    loadingConfigSchema: string;

    // Exec Approval
    execApprovalNeeded: string;
    expiresIn: (time: string) => string;
    expired: string;
    pendingCount: (count: number) => string;
    allowOnce: string;
    allowAlways: string;
    deny: string;

    // Gateway URL Confirmation
    changeGatewayUrl: string;
    changeGatewayUrlSub: string;
    trustWarning: string;
    confirm: string;
    cancel: string;

    // Nostr Profile Form
    nostrName: string;
    nostrAbout: string;
    nostrPicture: string;
    nostrBanner: string;
    nostrWebsite: string;
    nostrLud16: string;
    nostrNip05: string;
    nostrDisplayName: string;
    importFromRelay: string;
    importing: string;
    profileSaved: string;
    noProfileChanges: string;
    advancedFields: string;
    hideAdvanced: string;
    nostrAccount: (id: string) => string;
    nostrEditProfile: string;
    nostrUnsaved: string;
    savePublish: string;
    importRelays: string;

    nostrNamePlaceholder: string;
    nostrNameHelp: string;
    nostrDisplayNamePlaceholder: string;
    nostrDisplayNameHelp: string;
    nostrAboutPlaceholder: string;
    nostrAboutHelp: string;
    nostrPicturePlaceholder: string;
    nostrPictureHelp: string;
    nostrBannerPlaceholder: string;
    nostrBannerHelp: string;
    nostrWebsitePlaceholder: string;
    nostrWebsiteHelp: string;
    nostrLud16Placeholder: string;
    nostrLud16Help: string;
    nostrNip05Placeholder: string;
    nostrNip05Help: string;

    toolNoOutput: string;
    toolView: string;
    toolCompleted: string;

    // Logs
    logsTitle: string;
    logsSub: string;
    filter: string;
    searchLogs: string;
    autoFollow: string;
    logFile: (file: string) => string;
    logTruncated: string;
    noLogEntries: string;
    exportFiltered: string;
    exportVisible: string;
    exportAction: (label: string) => string;

    // Channels
    channelsTitle: string;
    channelsSub: string;
    channelLink: string;
    probe: string;
    logout: string;
    login: string;
    lastSeen: string;
    activeMinutes: string;
    limit: string;
    includeGlobal: string;
    includeUnknown: string;
    delete: string;
    rename: string;
    nodeId: string;
    version: string;
    address: string;
    healthOK: string;
    healthError: string;
    offline: string;

    // Channel Details
    accounts: (count: number) => string;
    configured: string;
    linked: string;
    running: string;
    mode: string;
    lastConnect: string;
    lastMessage: string;
    lastStart: string;
    lastProbe: string;
    authAge: string;
    showQr: string;
    relink: string;
    waitForScan: string;
    working: string;
    probeOk: string;
    probeFailed: string;
    lastInbound: string;
    credential: string;
    audience: string;
    publicKey: string;
    editProfile: string;
    noProfileSet: string;
    about: string;
    nip05: string;

    // Chat
    hiddenMessages: (hidden: number, limit: number) => string;

    enable: string;
    disable: string;
    runNow: string;

    // Cron Form & Labels
    scheduler: string;
    newJob: string;
    jobName: string;
    jobDescription: string;
    agentId: string;
    schedule: string;
    session: string;
    wakeMode: string;
    payload: string;
    systemText: string;
    agentMessage: string;
    deliver: string;
    channel: string;
    to: string;
    timeoutSeconds: string;
    postToMainPrefix: string;
    addJob: string;
    runHistory: string;
    selectJobHistory: string;
    noRuns: string;
    every: string;
    unit: string;
    expression: string;
    timezone: string;

    // Skills
    searchSkills: string;
    numShown: (count: number) => string;
    noSkillsFound: string;
    eligible: string;
    blocked: string;
    missingLabels: string;
    reasonLabel: string;
    installing: string;
    apiKey: string;
    saveKey: string;

    // Instances
    noInstances: string;
    secondsAgo: (s: number) => string;
    numScopes: (count: number) => string;
    scopesLabel: string;
    unknownHost: string;
    lastInput: string;

    // Sessions
    store: string;
    key: string;
    kind: string;
    updatedLabel: string;
    tokens: string;
    thinkingLabel: string;
    verboseLabel: string;
    reasoningLabel: string;
    actions: string;
    noSessionsFound: string;
    optional: string;
    inherit: string;
    onLabel: string;
    offExplicitLabel: string;

    // Nodes / Devices
    noNodes: string;
    pairingSub: string;
    pending: string;
    paired: string;
    noPairedDevices: string;
    roleLabel: string;
    rolesLabel: string;
    repair: string;
    requested: string;
    approve: string;
    reject: string;
    tokensLabel: string;
    tokensNone: string;
    revoked: string;
    active: string;
    rotate: string;
    revoke: string;
    execNodeBinding: string;
    execNodeBindingSub: string;
    switchConfigForm: string;
    loadConfigToEdit: string;
    loadConfig: string;
    defaultBinding: string;
    defaultBindingSub: string;
    anyNode: string;
    noNodesSystemRun: string;
    noAgentsFound: string;
    execApprovals: string;
    execApprovalsSub: string;
    allowlist: string;
    loadApprovalsToEdit: string;
    loadApprovals: string;
    target: string;
    targetSub: string;
    host: string;
    selectNode: string;
    noNodesApprovals: string;
    defaults: string;
    security: string;
    defaultSecurityMode: string;
    defaultLabel: (def: string) => string;
    useDefault: (def: string) => string;
    ask: string;
    defaultAskPolicy: string;
    askFallback: string;
    askFallbackSub: string;
    autoAllowSkills: string;
    autoAllowSkillsSub: string;
    autoAllowSkillCLIs: string;
    allowSkillExecutables: string;
    usingDefaultLabel: (def: string) => string;
    overrideLabel: (def: string) => string;
    enabled: string;
    pattern: string;
    addPattern: string;
    noAllowlistEntries: string;
    newPattern: string;
    lastUsedPrefix: string;
    never: string;
    defaultAgent: string;
    agent: string;
    usesDefaultLabel: (def: string) => string;
    overridePrefix: string;
    unpaired: string;
}

// Global active locale reference for t()
let activeLocale: Locale = "en";

export const locales: Record<Locale, DashboardStrings> = {
    en: {
        navChat: "Chat",
        navChannels: "Channels",
        navConfig: "Config",
        navNodes: "Nodes",
        navDevices: "Devices",
        navSessions: "Sessions",
        navCron: "Cron",
        navSkills: "Skills",
        navDebug: "Debug",
        navLogs: "Logs",
        navOverview: "Overview",

        tabTitleOverview: "Overview",
        tabTitleChannels: "Channels",
        tabTitleInstances: "Instances",
        tabTitleSessions: "Sessions",
        tabTitleCron: "Cron Jobs",
        tabTitleSkills: "Skills",
        tabTitleNodes: "Nodes",
        tabTitleChat: "Chat",
        tabTitleConfig: "Config",
        tabTitleDebug: "Debug",
        tabTitleLogs: "Logs",

        tabSubOverview: "Gateway status, entry points, and a fast health read.",
        tabSubChannels: "Manage channels and settings.",
        tabSubInstances: "Presence beacons from connected clients and nodes.",
        tabSubSessions: "Inspect active sessions and adjust per-session defaults.",
        tabSubCron: "Schedule wakeups and recurring agent runs.",
        tabSubSkills: "Manage skill availability and API key injection.",
        tabSubNodes: "Paired devices, capabilities, and command exposure.",
        tabSubChat: "Direct gateway chat session for quick interventions.",
        tabSubConfig: "Edit ~/.openclaw/openclaw.json safely.",
        tabSubDebug: "Gateway snapshots, events, and manual RPC calls.",
        tabSubLogs: "Live tail of the gateway file logs.",

        appTitle: "OPENCLAW",
        appSub: "Gateway Dashboard",
        health: "Health",
        healthOk: "OK",
        healthOffline: "Offline",
        expandSidebar: "Expand sidebar",
        collapseSidebar: "Collapse sidebar",
        resources: "Resources",
        docs: "Docs",

        groupChat: "Chat",
        groupControl: "Control",
        groupAgent: "Agent",
        groupSettings: "Settings",

        gatewayAccess: "Gateway Access",
        gatewayAccessSub: "Where the dashboard connects and how it authenticates.",
        wsUrl: "WebSocket URL",
        gatewayToken: "Gateway Token",
        passwordNotStored: "Password (not stored)",
        defaultSessionKey: "Default Session Key",
        connect: "Connect",
        refresh: "Refresh",
        clickConnectHint: "Click Connect to apply connection changes.",
        snapshot: "Snapshot",
        snapshotSub: "Latest gateway handshake information.",
        status: "Status",
        uptime: "Uptime",
        tickInterval: "Tick Interval",
        lastChannelsRefresh: "Last Channels Refresh",
        connected: "Connected",
        disconnected: "Disconnected",
        instances: "Instances",
        instancesSub: "Presence beacons in the last 5 minutes.",
        sessions: "Sessions",
        sessionsSub: "Recent session keys tracked by the gateway.",
        cron: "Cron",
        cronSub: "Next wake",
        notes: "Notes",
        notesSub: "Quick reminders for remote control setups.",
        tailscaleServe: "Tailscale serve",
        tailscaleServeSub: "Prefer serve mode to keep the gateway on loopback with tailnet auth.",
        sessionHygiene: "Session hygiene",
        sessionHygieneSub: "Use /new or sessions.patch to reset context.",
        cronReminders: "Cron reminders",
        cronRemindersSub: "Use isolated sessions for recurring runs.",

        typeMessage: "Type a message...",
        send: "Send",
        abort: "Abort",
        thinking: "Thinking...",
        chatDisconnected: "Disconnected from gateway.",
        compacting: "Compacting context...",
        contextCompacted: "Context compacted",
        removeAttachment: "Remove attachment",
        loadingChat: "Loading chat...",
        newSession: "New session",
        stop: "Stop",
        queue: "Queue",
        queuedMessages: (count) => `Queued (${count})`,
        imageAttachment: (count) => `Image (${count})`,
        attachmentId: "Attachment preview",
        composePlaceholderNormal: "Message (↩ to send, Shift+↩ for line breaks, paste images)",
        composePlaceholderWithAttachments: "Add a message or paste more images...",
        composePlaceholderDisconnected: "Connect to the gateway to start chatting…",
        exitFocusMode: "Exit focus mode",
        messageLabel: "Message",

        settings: "Settings",
        searchSettings: "Search settings...",
        allSettings: "All Settings",
        form: "Form",
        raw: "Raw",
        unsavedChanges: "Unsaved changes",
        unsavedChangeCount: (count) => `${count} unsaved change${count !== 1 ? "s" : ""}`,
        noChanges: "No changes",
        reload: "Reload",
        loading: "Loading...",
        save: "Save",
        saving: "Saving...",
        apply: "Apply",
        applying: "Applying...",
        update: "Update",
        updating: "Updating...",
        viewPendingChanges: (count) => `View ${count} pending change${count !== 1 ? "s" : ""}`,
        all: "All",
        loadingSchema: "Loading schema...",
        formUnsafeWarning: "Form view can't safely edit some fields. Use Raw to avoid losing config entries.",
        rawJson5: "Raw JSON5",

        sectionEnv: "Environment",
        sectionUpdate: "Updates",
        sectionAgents: "Agents",
        sectionAuth: "Authentication",
        sectionChannels: "Channels",
        sectionMessages: "Messages",
        sectionCommands: "Commands",
        sectionHooks: "Hooks",
        sectionSkills: "Skills",
        sectionTools: "Tools",
        sectionGateway: "Gateway",
        sectionWizard: "Setup Wizard",

        sectionEnvDesc: "Environment variables passed to the gateway process",
        sectionUpdateDesc: "Auto-update settings and release channel",
        sectionAgentsDesc: "Agent configurations, models, and identities",
        sectionAuthDesc: "API keys and authentication profiles",
        sectionChannelsDesc: "Messaging channels (Telegram, Discord, Slack, etc.)",
        sectionMessagesDesc: "Message handling and routing settings",
        sectionCommandsDesc: "Custom slash commands",
        sectionHooksDesc: "Webhooks and event hooks",
        sectionSkillsDesc: "Skill packs and capabilities",
        sectionToolsDesc: "Tool configurations (browser, search, etc.)",
        sectionGatewayDesc: "Gateway server settings (port, auth, binding)",
        sectionWizardDesc: "Setup wizard state and history",

        sectionMeta: "Metadata",
        sectionMetaDesc: "Gateway metadata and version information",
        sectionLogging: "Logging",
        sectionLoggingDesc: "Log levels and output configuration",
        sectionBrowser: "Browser",
        sectionBrowserDesc: "Browser automation settings",
        sectionUi: "UI",
        sectionUiDesc: "User interface preferences",
        sectionModels: "Models",
        sectionModelsDesc: "AI model configurations and providers",
        sectionBindings: "Bindings",
        sectionBindingsDesc: "Key bindings and shortcuts",
        sectionBroadcast: "Broadcast",
        sectionBroadcastDesc: "Broadcast and notification settings",
        sectionAudio: "Audio",
        sectionAudioDesc: "Audio input/output settings",
        sectionSession: "Session",
        sectionSessionDesc: "Session management and persistence",
        sectionCron: "Cron",
        sectionCronDesc: "Scheduled tasks and automation",
        sectionWeb: "Web",
        sectionWebDesc: "Web server and API settings",
        sectionDiscovery: "Discovery",
        sectionDiscoveryDesc: "Service discovery and networking",
        sectionCanvasHost: "Canvas Host",
        sectionCanvasHostDesc: "Canvas rendering and display",
        sectionTalk: "Talk",
        sectionTalkDesc: "Voice and speech settings",
        sectionPlugins: "Plugins",
        sectionPluginsDesc: "Plugin management and extensions",

        schemaUnavailable: "Schema unavailable.",
        unsupportedSchemaUseRaw: "Unsupported schema. Use Raw.",
        noSettingsMatch: (query) => `No settings match "${query}"`,
        noSettingsInSection: "No settings in this section",

        addKey: "Add key",
        addEntry: "Add entry",
        enterValue: "Enter value...",
        invalidNumber: "Invalid number",
        remove: "Remove",
        newKey: "New key",

        channelConfigSchemaUnavailable: "Channel config schema unavailable.",
        loadingConfigSchema: "Loading config schema…",

        execApprovalNeeded: "Exec approval needed",
        expiresIn: (time) => `expires in ${time}`,
        expired: "expired",
        pendingCount: (count) => `${count} pending`,
        allowOnce: "Allow once",
        allowAlways: "Always allow",
        deny: "Deny",

        changeGatewayUrl: "Change Gateway URL",
        changeGatewayUrlSub: "This will reconnect to a different gateway server",
        trustWarning: "Only confirm if you trust this URL. Malicious URLs can compromise your system.",
        confirm: "Confirm",
        cancel: "Cancel",

        nostrName: "Name",
        nostrAbout: "About",
        nostrPicture: "Picture URL",
        nostrBanner: "Banner URL",
        nostrWebsite: "Website",
        nostrLud16: "Lightning Address (lud16)",
        nostrNip05: "NIP-05 Identifier",
        nostrDisplayName: "Display Name",
        importFromRelay: "Import from relay",
        importing: "Importing…",
        profileSaved: "Profile saved",
        noProfileChanges: "No changes to save",
        advancedFields: "Show advanced fields",
        hideAdvanced: "Hide advanced fields",
        nostrAccount: (id) => `Account: ${id}`,
        nostrEditProfile: "Edit Profile",
        nostrUnsaved: "You have unsaved changes",
        savePublish: "Save & Publish",
        importRelays: "Import from Relays",

        nostrNamePlaceholder: "satoshi",
        nostrNameHelp: "Short username (e.g., satoshi)",
        nostrDisplayNamePlaceholder: "Satoshi Nakamoto",
        nostrDisplayNameHelp: "Your full display name",
        nostrAboutPlaceholder: "Tell people about yourself...",
        nostrAboutHelp: "A brief bio or description",
        nostrPicturePlaceholder: "https://example.com/avatar.jpg",
        nostrPictureHelp: "HTTPS URL to your profile picture",
        nostrBannerPlaceholder: "https://example.com/banner.jpg",
        nostrBannerHelp: "HTTPS URL to a banner image",
        nostrWebsitePlaceholder: "https://example.com",
        nostrWebsiteHelp: "Your personal website",
        nostrLud16Placeholder: "you@getalby.com",
        nostrLud16Help: "Lightning address for tips (LUD-16)",
        nostrNip05Placeholder: "you@example.com",
        nostrNip05Help: "Verifiable identifier (e.g., you@domain.com)",

        toolNoOutput: "*No output — tool completed successfully.*",
        toolView: "View",
        toolCompleted: "Completed",

        logsTitle: "Logs",
        logsSub: "Gateway file logs (JSONL).",
        filter: "Filter",
        searchLogs: "Search logs",
        autoFollow: "Auto-follow",
        logFile: (file) => `File: ${file}`,
        logTruncated: "Log output truncated; showing latest chunk.",
        noLogEntries: "No log entries.",
        exportFiltered: "filtered",
        exportVisible: "visible",
        exportAction: (label) => `Export ${label}`,

        channelsTitle: "Channels",
        channelsSub: "Link your voice or chat apps to OpenClaw.",
        channelLink: "Link your voice or chat apps to OpenClaw.",
        probe: "Probe",
        logout: "Logout",
        login: "Login",
        lastSeen: "Last seen",
        activeMinutes: "Active Minutes",
        limit: "Limit",
        includeGlobal: "Include Global",
        includeUnknown: "Include Unknown",
        delete: "Delete",
        rename: "Rename",
        nodeId: "Node ID",
        version: "Version",
        address: "Address",
        healthOK: "Healthy",
        healthError: "Error",
        offline: "offline",

        accounts: (count) => `Accounts (${count})`,
        configured: "Configured",
        linked: "Linked",
        running: "Running",
        mode: "Mode",
        lastConnect: "Last connect",
        lastMessage: "Last message",
        lastStart: "Last start",
        lastProbe: "Last probe",
        authAge: "Auth age",
        showQr: "Show QR",
        relink: "Relink",
        waitForScan: "Wait for scan",
        working: "Working...",
        probeOk: "ok",
        probeFailed: "failed",
        lastInbound: "Last inbound",
        credential: "Credential",
        audience: "Audience",
        publicKey: "Public Key",
        editProfile: "Edit Profile",
        noProfileSet: "No profile set. Click \"Edit Profile\" to add your name, bio, and avatar.",
        about: "About",
        nip05: "NIP-05",
        hiddenMessages: (hidden, limit) => `Showing last ${limit} messages (${hidden} hidden).`,

        scheduler: "Scheduler",
        newJob: "New Job",
        jobName: "Name",
        jobDescription: "Description",
        agentId: "Agent ID",
        schedule: "Schedule",
        session: "Session",
        wakeMode: "Wake mode",
        payload: "Payload",
        systemText: "System text",
        agentMessage: "Agent message",
        deliver: "Deliver",
        channel: "Channel",
        to: "To",
        timeoutSeconds: "Timeout (seconds)",
        postToMainPrefix: "Post to main prefix",
        addJob: "Add job",
        runHistory: "Run history",
        selectJobHistory: "Select a job to inspect run history.",
        noRuns: "No runs yet.",
        every: "Every",
        unit: "Unit",
        expression: "Expression",
        timezone: "Timezone (optional)",
        enable: "Enable",
        disable: "Disable",
        runNow: "Run now",

        searchSkills: "Search skills",
        numShown: (count) => `${count} shown`,
        noSkillsFound: "No skills found.",
        eligible: "eligible",
        blocked: "blocked",
        missingLabels: "Missing:",
        reasonLabel: "Reason:",
        installing: "Installing…",
        apiKey: "API key",
        saveKey: "Save key",

        noInstances: "No instances reported yet.",
        secondsAgo: (s) => `${s}s ago`,
        numScopes: (count) => `${count} scopes`,
        scopesLabel: "scopes:",
        unknownHost: "unknown host",
        lastInput: "Last input",

        store: "Store:",
        key: "Key",
        kind: "Kind",
        updatedLabel: "Updated",
        tokens: "Tokens",
        thinkingLabel: "Thinking",
        verboseLabel: "Verbose",
        reasoningLabel: "Reasoning",
        actions: "Actions",
        noSessionsFound: "No sessions found.",
        optional: "(optional)",
        inherit: "inherit",
        onLabel: "on",
        offExplicitLabel: "off (explicit)",

        noNodes: "No nodes found.",
        pairingSub: "Pairing requests + role tokens.",
        pending: "Pending",
        paired: "Paired",
        noPairedDevices: "No paired devices.",
        roleLabel: "role:",
        rolesLabel: "roles:",
        repair: "repair",
        requested: "requested",
        approve: "Approve",
        reject: "Reject",
        tokensLabel: "Tokens",
        tokensNone: "Tokens: none",
        revoked: "revoked",
        active: "active",
        rotate: "Rotate",
        revoke: "Revoke",
        execNodeBinding: "Exec node binding",
        execNodeBindingSub: "Pin agents to a specific node when using exec host=node.",
        switchConfigForm: "Switch the Config tab to Form mode to edit bindings here.",
        loadConfigToEdit: "Load config to edit bindings.",
        loadConfig: "Load config",
        defaultBinding: "Default binding",
        defaultBindingSub: "Used when agents do not override a node binding.",
        anyNode: "Any node",
        noNodesSystemRun: "No nodes with system.run available.",
        noAgentsFound: "No agents found.",
        execApprovals: "Exec approvals",
        execApprovalsSub: "Allowlist and approval policy for exec host=gateway/node.",
        allowlist: "Allowlist",
        loadApprovalsToEdit: "Load exec approvals to edit allowlists.",
        loadApprovals: "Load approvals",
        target: "Target",
        targetSub: "Gateway edits local approvals; node edits the selected node.",
        host: "Host",
        selectNode: "Select node",
        noNodesApprovals: "No nodes advertise exec approvals yet.",
        defaults: "Defaults",
        security: "Security",
        defaultSecurityMode: "Default security mode.",
        defaultLabel: (def) => `Default: ${def}.`,
        useDefault: (def) => `Use default (${def})`,
        ask: "Ask",
        defaultAskPolicy: "Default prompt policy.",
        askFallback: "Ask fallback",
        askFallbackSub: "Applied when the UI prompt is unavailable.",
        autoAllowSkills: "Auto-allow Skills",
        autoAllowSkillsSub: "Automatically allow exec calls from skills.",
        autoAllowSkillCLIs: "Auto-allow skill CLIs",
        allowSkillExecutables: "Allow skill executables listed by the Gateway.",
        usingDefaultLabel: (def) => `Using default (${def}).`,
        overrideLabel: (def) => `Override (${def}).`,
        enabled: "Enabled",
        pattern: "Pattern",
        addPattern: "Add pattern",
        noAllowlistEntries: "No allowlist entries yet.",
        newPattern: "New pattern",
        lastUsedPrefix: "Last used:",
        never: "never",
        defaultAgent: "default agent",
        agent: "agent",
        usesDefaultLabel: (def) => `uses default (${def})`,
        overridePrefix: "override:",
        unpaired: "unpaired",
    },
    "zh-TW": {
        navChat: "對話",
        navChannels: "頻道",
        navConfig: "設定",
        navNodes: "節點",
        navDevices: "裝置",
        navSessions: "會話量",
        navCron: "排程",
        navSkills: "技能",
        navDebug: "除錯",
        navLogs: "日誌",
        navOverview: "概覽",

        tabTitleOverview: "系統概覽",
        tabTitleChannels: "通訊頻道",
        tabTitleInstances: "在線執行個體",
        tabTitleSessions: "會話管理",
        tabTitleCron: "排程任務",
        tabTitleSkills: "技能模組",
        tabTitleNodes: "連線節點",
        tabTitleChat: "即時對話",
        tabTitleConfig: "設定檔編輯",
        tabTitleDebug: "技術除錯",
        tabTitleLogs: "運行日誌",

        tabSubOverview: "存取閘道狀態、進入點與健康檢查。",
        tabSubChannels: "管理通訊頻道與相關設定。",
        tabSubInstances: "來自已連線用戶端與節點的在線訊號。",
        tabSubSessions: "檢查活躍會話並調整各別會話預設值。",
        tabSubCron: "排定自動喚醒與重複性的代理人運作。",
        tabSubSkills: "管理可用技能與 API 金鑰注入。",
        tabSubNodes: "配對裝置、功能集與指令曝光。",
        tabSubChat: "直接與閘道進行對話，以便快速介入處理。",
        tabSubConfig: "安全地編輯 ~/.openclaw/openclaw.json。",
        tabSubDebug: "閘道快照、追蹤事件與手動 RPC 呼叫。",
        tabSubLogs: "即時追蹤閘道日誌檔內容。",

        appTitle: "OPENCLAW",
        appSub: "閘道儀表板",
        health: "健康度",
        healthOk: "正常",
        healthOffline: "離線",
        expandSidebar: "展開側邊欄",
        collapseSidebar: "收合側邊欄",
        resources: "相關資源",
        docs: "說明文件",

        groupChat: "對話",
        groupControl: "控制",
        groupAgent: "代理人",
        groupSettings: "設定",

        gatewayAccess: "閘道存取",
        gatewayAccessSub: "儀表板連接與認證方式。",
        wsUrl: "WebSocket 網址",
        gatewayToken: "閘道金鑰 (Token)",
        passwordNotStored: "密碼 (不會儲存)",
        defaultSessionKey: "預設會話金鑰",
        connect: "連接",
        refresh: "重新整理",
        clickConnectHint: "點擊連接以套用連線變更。",
        snapshot: "狀態快照",
        snapshotSub: "最新的閘道交握資訊。",
        status: "狀態",
        uptime: "運行時間",
        tickInterval: "心跳間隔",
        lastChannelsRefresh: "最後頻道更新",
        connected: "已連線",
        disconnected: "斷線",
        instances: "執行個體",
        instancesSub: "最近 5 分鐘內在線的執行個體。",
        sessions: "會話量",
        sessionsSub: "閘道追蹤的最近會話金鑰。",
        cron: "排程狀態",
        cronSub: "下次喚醒",
        notes: "備註",
        notesSub: "遠端控制設定的快速提示。",
        tailscaleServe: "Tailscale Serve",
        tailscaleServeSub: "建議使用 serve 模式，透過 Tailscale 認證保持閘道在本地運行。",
        sessionHygiene: "會話維護",
        sessionHygieneSub: "使用 /new 或 sessions.patch 來重設上下文。",
        cronReminders: "排程提醒",
        cronRemindersSub: "針對重複執行的任務建議使用獨立會話。",

        typeMessage: "輸入訊息...",
        send: "發送",
        abort: "中斷",
        thinking: "思考中...",
        chatDisconnected: "已與閘道斷開連線。",
        compacting: "正在壓縮上下文...",
        contextCompacted: "上下文壓縮完成",
        removeAttachment: "移除附件",
        loadingChat: "正在載入對話...",
        newSession: "開啟新會話",
        stop: "停止",
        queue: "加入排隊",
        queuedMessages: (count) => `已排隊 (${count})`,
        imageAttachment: (count) => `圖片 (${count})`,
        attachmentId: "附件預覽",
        composePlaceholderNormal: "輸入訊息 (↩ 發送, Shift+↩ 換行, 可貼上圖片)",
        composePlaceholderWithAttachments: "輸入訊息或繼續貼上圖片...",
        composePlaceholderDisconnected: "請先連線至閘道以開始對話...",
        exitFocusMode: "退出專注模式",
        messageLabel: "訊息內容",

        settings: "系統設定",
        searchSettings: "搜尋設定...",
        allSettings: "所有設定項目",
        form: "表單模式",
        raw: "原始檔案",
        unsavedChanges: "尚有未儲存的變更",
        unsavedChangeCount: (count) => `有 ${count} 項未儲存的變更`,
        noChanges: "目前無變更",
        reload: "重新載入",
        loading: "載入中...",
        save: "儲存",
        saving: "儲存中...",
        apply: "套用",
        applying: "套用中...",
        update: "更新",
        updating: "更新中...",
        viewPendingChanges: (count) => `查看 ${count} 項待處理的變更`,
        all: "全部項目",
        loadingSchema: "正在載入架構資訊...",
        formUnsafeWarning: "表單視圖無法安全編輯部分欄位，請切換至原始檔案模式以避免資料遺失。",
        rawJson5: "原始 JSON5 內容",

        sectionEnv: "環境變數",
        sectionUpdate: "系統更新",
        sectionAgents: "代理人設定",
        sectionAuth: "身分認證",
        sectionChannels: "通訊頻道",
        sectionMessages: "訊息處理",
        sectionCommands: "指令系統",
        sectionHooks: "掛鉤 (Hooks)",
        sectionSkills: "技能管理",
        sectionTools: "工具集",
        sectionGateway: "閘道主體",
        sectionWizard: "設定精靈",

        sectionEnvDesc: "傳遞給閘道進程的環境變數",
        sectionUpdateDesc: "自動更新設定與發行版本通道",
        sectionAgentsDesc: "代理人設定、模型與身分識別",
        sectionAuthDesc: "API 金鑰與認證設定檔",
        sectionChannelsDesc: "即時通訊頻道 (Telegram、Discord、Slack 等)",
        sectionMessagesDesc: "訊息處理與路由設定",
        sectionCommandsDesc: "自訂斜線指令",
        sectionHooksDesc: "Webhook 與事件掛鉤",
        sectionSkillsDesc: "技能包與功能模組",
        sectionToolsDesc: "工具設定 (瀏覽器、搜尋等)",
        sectionGatewayDesc: "閘道伺服器設定 (通訊埠、認證、綁定)",
        sectionWizardDesc: "設定精靈狀態與歷程記錄",

        sectionMeta: "中繼資料",
        sectionMetaDesc: "閘道中繼資料與版本資訊",
        sectionLogging: "日誌記錄",
        sectionLoggingDesc: "日誌等級與輸出設定",
        sectionBrowser: "瀏覽器",
        sectionBrowserDesc: "瀏覽器自動化設定",
        sectionUi: "使用者介面",
        sectionUiDesc: "使用者介面偏好設定",
        sectionModels: "模型設定",
        sectionModelsDesc: "AI 模型設定與供應商",
        sectionBindings: "快捷鍵綁定",
        sectionBindingsDesc: "按鍵綁定與快速鍵",
        sectionBroadcast: "廣播通知",
        sectionBroadcastDesc: "廣播與通知設定",
        sectionAudio: "音訊設定",
        sectionAudioDesc: "音訊輸入/輸出設定",
        sectionSession: "會話管理",
        sectionSessionDesc: "會話管理與持久化",
        sectionCron: "排程任務",
        sectionCronDesc: "排程任務與自動化",
        sectionWeb: "網頁服務",
        sectionWebDesc: "網頁伺服器與 API 設定",
        sectionDiscovery: "服務探索",
        sectionDiscoveryDesc: "服務探索與網路設定",
        sectionCanvasHost: "畫布主機",
        sectionCanvasHostDesc: "畫布渲染與顯示",
        sectionTalk: "語音對話",
        sectionTalkDesc: "語音與語音辨識設定",
        sectionPlugins: "外掛模組",
        sectionPluginsDesc: "外掛管理與擴充功能",

        schemaUnavailable: "無法取得架構資訊。",
        unsupportedSchemaUseRaw: "不支援的架構格式，請使用原始模式。",
        noSettingsMatch: (query) => `找不到符合「${query}」的設定項目`,
        noSettingsInSection: "此區段中沒有設定項目",

        addKey: "新增鍵值",
        addEntry: "新增項目",
        enterValue: "請輸入值...",
        invalidNumber: "無效的數字",
        remove: "移除",
        newKey: "新鍵值",

        channelConfigSchemaUnavailable: "無法取得頻道設定架構。",
        loadingConfigSchema: "正在載入設定架構...",

        execApprovalNeeded: "需要執行核准",
        expiresIn: (time) => `將於 ${time} 後逾期`,
        expired: "已逾期",
        pendingCount: (count) => `${count} 項待處理`,
        allowOnce: "允許一次",
        allowAlways: "永遠允許",
        deny: "拒絕",

        changeGatewayUrl: "變更閘道網址",
        changeGatewayUrlSub: "這將會重新連線到不同的閘道伺服器",
        trustWarning: "僅在您信任此網址時才確認。惡意網址可能會危害您的系統。",
        confirm: "確認",
        cancel: "取消",

        nostrName: "名稱",
        nostrNamePlaceholder: "satoshi",
        nostrNameHelp: "簡短使用者名稱 (例如：satoshi)",
        nostrDisplayName: "顯示名稱",
        nostrDisplayNamePlaceholder: "Satoshi Nakamoto",
        nostrDisplayNameHelp: "您的完整顯示名稱",
        nostrAbout: "關於",
        nostrAboutPlaceholder: "介紹你自己...",
        nostrAboutHelp: "簡短的個人簡介或描述",
        nostrPicture: "頭像網址",
        nostrPicturePlaceholder: "https://example.com/avatar.jpg",
        nostrPictureHelp: "個人頭像圖片的 HTTPS 網址",
        nostrBanner: "橫幅網址",
        nostrBannerPlaceholder: "https://example.com/banner.jpg",
        nostrBannerHelp: "橫幅圖片的 HTTPS 網址",
        nostrWebsite: "網站",
        nostrWebsitePlaceholder: "https://example.com",
        nostrWebsiteHelp: "您的個人網站",
        nostrLud16: "閃電地址 (lud16)",
        nostrLud16Placeholder: "you@getalby.com",
        nostrLud16Help: "用於打賞的閃電地址 (LUD-16)",
        nostrNip05: "NIP-05 識別碼",
        nostrNip05Placeholder: "you@example.com",
        nostrNip05Help: "可驗證的識別碼 (例如：you@domain.com)",
        importFromRelay: "從中繼器匯入",
        importing: "匯入中...",
        profileSaved: "個人檔案已儲存",
        noProfileChanges: "沒有可儲存的變更",
        advancedFields: "顯示進階欄位",
        hideAdvanced: "隱藏進階欄位",
        nostrAccount: (id) => `帳號：${id}`,
        nostrEditProfile: "編輯個人檔案",
        nostrUnsaved: "您有未儲存的變更",
        savePublish: "儲存並發佈",
        importRelays: "從中繼器匯入",

        toolNoOutput: "*無輸出 — 工具執行成功。*",
        toolView: "查看",
        toolCompleted: "已完成",

        logsTitle: "運行日誌",
        logsSub: "閘道檔案日誌 (JSONL)。",
        filter: "篩選條件",
        searchLogs: "搜尋日誌...",
        autoFollow: "自動追蹤",
        logFile: (file) => `日誌檔：${file}`,
        logTruncated: "日誌輸出已截斷，僅顯示最新區塊。",
        noLogEntries: "查無日誌記錄。",
        exportFiltered: "篩選結果",
        exportVisible: "可見內容",
        exportAction: (label) => `匯出${label}`,

        channelsTitle: "通訊頻道",
        channelsSub: "將您的語音或聊天應用程式連接至 OpenClaw。",
        channelLink: "將您的語音或聊天應用程式連接至 OpenClaw。",
        probe: "探測",
        logout: "登出",
        login: "登入",
        lastSeen: "上次見到",
        activeMinutes: "活動分鐘",
        limit: "限制",
        includeGlobal: "包含全域",
        includeUnknown: "包含未知",
        delete: "刪除",
        rename: "重新命名",
        nodeId: "節點 ID",
        version: "版本",
        address: "位址",
        healthOK: "健康",
        healthError: "錯誤",
        offline: "離線",

        scheduler: "排程器",
        newJob: "新增任務",
        jobName: "名稱",
        jobDescription: "描述",
        agentId: "代理人 ID",
        schedule: "執行頻率",
        session: "會話類型",
        wakeMode: "喚醒模式",
        payload: "發送內容類型",
        systemText: "系統文字",
        agentMessage: "代理人訊息",
        deliver: "傳送",
        channel: "頻道",
        to: "發送至",
        timeoutSeconds: "超時秒數",
        postToMainPrefix: "發布至主會話的前置詞",
        addJob: "新增任務",
        runHistory: "執行紀錄",
        selectJobHistory: "選取任務以查看執行紀錄。",
        noRuns: "目前無執行紀錄。",
        every: "每隔",
        unit: "單位",
        expression: "Cron 表達式",
        timezone: "時區 (選填)",
        enable: "啟用",
        disable: "停用",
        runNow: "立即執行",

        accounts: (count) => `帳號數量 (${count})`,
        configured: "已設定",
        linked: "已連結",
        running: "運行中",
        mode: "模式",
        lastConnect: "最後連線",
        lastMessage: "最後訊息",
        lastStart: "最後啟動",
        lastProbe: "最後探測",
        authAge: "認證時效",
        showQr: "顯示 QR Code",
        relink: "重新連結",
        waitForScan: "等待掃描",
        working: "處理中...",
        probeOk: "正常",
        probeFailed: "失敗",
        lastInbound: "最後接收",
        credential: "憑證來源",
        audience: "受眾類型",
        publicKey: "公鑰",
        editProfile: "編輯個人目錄",
        noProfileSet: "尚未設定個人目錄。點擊「編輯個人目錄」來新增名稱、簡介和頭像。",
        about: "關於",
        nip05: "NIP-05",
        hiddenMessages: (hidden, limit) => `顯示最後 ${limit} 則訊息 (隱藏 ${hidden} 則)。`,

        searchSkills: "搜尋技能",
        numShown: (count) => `顯示 ${count} 個`,
        noSkillsFound: "找不到相關技能。",
        eligible: "符合條件",
        blocked: "已封鎖",
        missingLabels: "缺失：",
        reasonLabel: "原因：",
        installing: "安裝中...",
        apiKey: "API 金鑰",
        saveKey: "儲存金鑰",

        noInstances: "尚無回報的執行個體。",
        secondsAgo: (s) => `${s} 秒前`,
        numScopes: (count) => `${count} 個權限範圍`,
        scopesLabel: "權限範圍：",
        unknownHost: "未知主機",
        lastInput: "最後輸入",

        store: "儲存路徑：",
        key: "鍵值",
        kind: "種類",
        updatedLabel: "最後更新",
        tokens: "Token 數量",
        thinkingLabel: "思考層級",
        verboseLabel: "詳細程度",
        reasoningLabel: "推理層級",
        actions: "操作",
        noSessionsFound: "找不到會話量。",
        optional: "(選填)",
        inherit: "繼承設定",
        onLabel: "開啟",
        offExplicitLabel: "關閉 (明確指定)",

        noNodes: "找不到節點。",
        pairingSub: "配對請求與角色權限 Token。",
        pending: "待處理",
        paired: "已配對",
        noPairedDevices: "無已配對的裝置。",
        roleLabel: "角色：",
        rolesLabel: "角色清單：",
        repair: "修復",
        requested: "請求時間",
        approve: "核准",
        reject: "拒絕",
        tokensLabel: "Token 數量",
        tokensNone: "無 Token",
        revoked: "已撤銷",
        active: "啟用中",
        rotate: "輪換 (Rotate)",
        revoke: "撤銷 (Revoke)",
        execNodeBinding: "執行節點綁定 (Exec Node Binding)",
        execNodeBindingSub: "當使用 exec host=node 時，將代理人固定到特定節點。",
        switchConfigForm: "請將「設定」分頁切換為「表單」模式以在此編輯綁定項目。",
        loadConfigToEdit: "載入設定檔以編輯綁定。",
        loadConfig: "載入設定檔",
        defaultBinding: "預設綁定",
        defaultBindingSub: "當代理人未覆寫節點綁定時使用。",
        anyNode: "任何節點",
        noNodesSystemRun: "目前沒有具備 system.run 能力的節點。",
        noAgentsFound: "找不到代理人。",
        execApprovals: "執行權限審核 (Exec Approvals)",
        execApprovalsSub: "用於 exec host=gateway/node 的白名單與核准策略。",
        allowlist: "執行白名單 (Allowlist)",
        loadApprovalsToEdit: "載入執行審核以編輯白名單。",
        loadApprovals: "載入核准設定",
        target: "目標",
        targetSub: "Gateway 編輯本地核准；Node 編輯選定的節點。",
        host: "主機",
        selectNode: "選擇節點",
        noNodesApprovals: "目前尚無節點廣告執行審核功能。",
        defaults: "預設值",
        security: "安全安全性",
        defaultSecurityMode: "預設安全模式。",
        defaultLabel: (def) => `預設值：${def}。`,
        useDefault: (def) => `使用預設值 (${def})`,
        ask: "詢問策略",
        defaultAskPolicy: "預設提示策略。",
        askFallback: "詢問回退方案 (Ask Fallback)",
        askFallbackSub: "當 UI 提示不可用時套用的方案。",
        autoAllowSkills: "自動核准技能模組",
        autoAllowSkillsSub: "自動核准來自技能模組的執行請求。",
        autoAllowSkillCLIs: "自動核准技能 CLI",
        allowSkillExecutables: "核准由 Gateway 列出的技能執行檔。",
        usingDefaultLabel: (def) => `使用預設值 (${def})。`,
        overrideLabel: (def) => `覆寫設定 (${def})。`,
        enabled: "已啟用",
        pattern: "比對模式 (Pattern)",
        addPattern: "新增比對模式",
        noAllowlistEntries: "目前尚無白名單項目。",
        newPattern: "新模式",
        lastUsedPrefix: "最後使用：",
        never: "從未",
        defaultAgent: "預設代理人",
        agent: "代理人",
        usesDefaultLabel: (def) => `使用預設值 (${def})`,
        overridePrefix: "覆寫：",
        unpaired: "未配對",
    },
};

export function getLocale(): Locale {
    const lang = navigator.language.toLowerCase();
    if (lang.includes("zh")) return "zh-TW";
    return "en";
}

export function setLocale(locale: Locale) {
    activeLocale = locale;
}

export function t(): DashboardStrings {
    return locales[activeLocale];
}
