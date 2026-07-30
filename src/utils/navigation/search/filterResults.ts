import { SearchMatch, GroupedSearchResult } from "@/types/navigation/types";

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function contentHasWholeWord(content: string, term: string): boolean {
  const pattern = new RegExp(`(?<![a-z0-9])${escapeRegExp(term)}(?![a-z0-9])`, 'i');
  return pattern.test(content);
}

export function filterResults(
  allPages: SearchMatch[],
  searchTerm: string
): GroupedSearchResult[] {
  const terms = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);

  const filtered = allPages.filter(({ name, breadcrumbs, content }) => {
    const navHaystack = [name, ...breadcrumbs].join(" ").toLowerCase();
    const contentHaystack = content ?? "";

    return terms.every(
      (term) => navHaystack.includes(term) || contentHasWholeWord(contentHaystack, term)
    );
  });

  const grouped: Record<string, SearchMatch[]> = {};

  filtered.forEach((item) => {
    const group = item.section || "Other";
    if (!grouped[group]) grouped[group] = [];
    grouped[group].push(item);
  });

  return Object.entries(grouped).map(([section, matches]) => ({
    section,
    matches,
  }));
}