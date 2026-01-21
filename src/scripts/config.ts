export const config = {
  // Where to import the navigation root from (Subpage[])
  navEntryModule: '@/Navigation/Combined/Core/Pages',

  // Output roots
  pagesRoot: 'src/Pages/MainTabs',
  routesSectionsRoot: 'src/routes/Sections',

  // prettier-ignore
  sectionNameMap: {
    'Routing & Switching': 'RouteAndSwitch',
    'Network Security': 'NetworkSecurity',
    'VoIP': 'VoIP',
    'Certifications': 'Certifications',
    'Tools': 'Tools',
  } as Record<string, string>,

  groupFolderNameMap: {
    'TCP/IP Model': 'TCPIPModel',
    'Layer 2: Data Link': 'DataLink',
    'Layer 1: Physical': 'Physical',
  } as Record<string, string>,

  topicFsPrefixMap: {
    'TCP/IP Model': ['Layers'],
  } as Record<string, string[]>,

  // If the leaf name is “generic”, make the H1 slightly richer:
  // “Fundamentals: Introduction”
  genericLeafNames: new Set(
    [
      'Introduction',
      'Overview',
      'Basics',
      'Fundamentals',
      'Getting Started',
      'Setup'
    ]
  ),

  // Optional safety cap default (can be overridden by CLI --limit)
  defaultLimit: 10_000,
};