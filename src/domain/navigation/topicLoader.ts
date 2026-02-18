import type { Subpage } from '@/types/navigation/Subpage';

export type TopicKey =
  | "routeAndSwitch"
  | "networkSecurity"
  | "voip"
  | "certifications"
  | "tools";

export const topicButtons: Array<{ key: TopicKey; name: string }> = [
  { key: "routeAndSwitch", name: "Routing & Switching" },
  { key: "networkSecurity", name: "Network Security" },
  { key: "voip", name: "VoIP" },
  { key: "certifications", name: "Certifications" },
  { key: "tools", name: "Tools" },
];

const topicImporters: Record<TopicKey, () => Promise<{ default: Subpage }>> = {
  routeAndSwitch: () => import("@/navigation/Combined/Topics/networking"),
  networkSecurity: () => import("@/navigation/Combined/Topics/networkSecurity"),
  voip: () => import("@/navigation/Combined/Topics/voip"),
  certifications: () => import("@/navigation/Combined/Topics/certifications"),
  tools: () => import("@/navigation/Combined/Topics/tools"),
};

export async function loadTopic(key: TopicKey): Promise<Subpage> {
  const load = topicImporters[key];
  if (!load) {
    throw new Error(`Unknown topic key: ${String(key)}`);
  }
  return (await load()).default;
}