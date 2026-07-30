import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SplitDNSAndBookmarks = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Advanced/SSLVPN/SplitDNSAndBookmarks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Split-DNS & Bookmarks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SplitDNSAndBookmarks;
