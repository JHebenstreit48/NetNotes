import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
