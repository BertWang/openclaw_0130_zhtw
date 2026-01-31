import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { marked } from "marked";

// @ts-ignore
import docsContent from "./openclaw_docs_zh_tw.md?raw";

export function renderDocsZh() {
    // Use simple sync parsing since we don't need async features of marked here
    return html`
    <div class="card" style="max-width: 800px; margin: 0 auto; padding: 24px;">
      <div class="markdown-body">
        ${unsafeHTML(marked.parse(docsContent) as string)}
      </div>
    </div>
  `;
}
