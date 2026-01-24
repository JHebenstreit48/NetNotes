import path from "node:path";
import { config } from "@/scripts/shared/config";
import {
  pascalize,
  sectionFolderName,
  isGenericLeafName,
  safeLazyVarName,
  tcpipFolderName, // ✅ add this import
  topicFolderName, // if you have it
} from "@/scripts/shared/utils/naming";

export function derive(leaf: { urlPath: string; crumbs: string[] }) {
  const [sectionCrumb = "Misc", topicCrumb = "Topic", ...rest] = leaf.crumbs;

  const sectionFolder = sectionFolderName(sectionCrumb);
  const topicFolder = topicFolderName ? topicFolderName(topicCrumb) : pascalize(topicCrumb);

  const topicPrefix = config.topicFsPrefixMap?.[topicCrumb] ?? [];

  const groupsRaw = rest.slice(0, -1);
  const leafRaw = rest.at(-1) ?? "Page";

  const groupFolders = groupsRaw.map((g, idx) => {
    // ✅ if this is TCP/IP Model, normalize the *layer folder* (first group)
    if (topicCrumb === "TCP/IP Model" && idx === 0) return tcpipFolderName(g);

    return config.groupFolderNameMap?.[g] ?? pascalize(g);
  });

  const componentName = pascalize(leafRaw);

  const pageFsPath = path.join(
    process.cwd(),
    config.pagesRoot,
    sectionFolder,
    topicFolder,
    ...topicPrefix,
    ...groupFolders,
    `${componentName}.tsx`
  );

  const rel = [...topicPrefix, ...groupFolders, componentName].join("/");
  const pageImportPath = `@/Pages/MainTabs/${sectionFolder}/${topicFolder}/${rel}`;
  const markdownFilePath = `${sectionFolder}/${topicFolder}/${rel}`;

  const parentGroup = groupFolders.at(-1);
  const pageTitle =
    isGenericLeafName(leafRaw) && parentGroup ? `${parentGroup}: ${leafRaw}` : leafRaw;

  const lazyVarName = safeLazyVarName([sectionFolder, topicFolder, ...topicPrefix, ...groupFolders, componentName]);

  return {
    sectionCrumb,
    topicCrumb,
    sectionFolder,
    topicFolder,
    groupFolders,
    componentName,
    pageFsPath,
    pageImportPath,
    markdownFilePath,
    "urlPath": leaf.urlPath,
    pageTitle,
    lazyVarName,
  };
}