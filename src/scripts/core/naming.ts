import { config } from "../config";

export function pascalize(raw: string): string {
  return raw
    .replace(/['"]/g, "")
    .replace(/\(.*?\)/g, "") // drop "(...)" content
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

export function sectionFolderName(sectionCrumb: string): string {
  return config.sectionNameMap[sectionCrumb] ?? pascalize(sectionCrumb);
}

export function topicFolderName(topicCrumb: string): string {
  return config.topicNameMap?.[topicCrumb] ?? pascalize(topicCrumb);
}

/**
 * TCP/IP Model folder normalization:
 * - "Layer 2: Data Link" -> "DataLink"
 * - "Layer 1: Physical" -> "Physical"
 * - "Network Access Layer" -> "NetworkAccess"
 * - "Application Layer" -> "Application"
 */
export function tcpipFolderName(raw: string): string {
  const s = raw.trim();

  // "Layer X: Something" -> "Something"
  const m = s.match(/^Layer\s*\d+\s*:\s*(.+)$/i);
  if (m?.[1]) return pascalize(m[1]);

  // drop trailing "Layer"
  return pascalize(s.replace(/\bLayer\b/gi, "").trim());
}

export function safeLazyVarName(parts: string[]): string {
  const name = parts.map(pascalize).join("");
  return `P_${name || "Page"}`;
}

export function isGenericLeafName(name: string): boolean {
  return config.genericLeafNames.has(name);
}