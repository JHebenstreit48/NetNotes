import pages from '@/domain/navigation/mainTabs';
import { flattenNavigation } from '@/utils/navigation/search/flattenNavigation';
import type { SearchMatch } from '@/types/navigation/types';

let cached: SearchMatch[] | null = null;

export function getSearchIndex(): SearchMatch[] {
  if (cached) return cached;
  cached = flattenNavigation(pages);
  return cached;
}