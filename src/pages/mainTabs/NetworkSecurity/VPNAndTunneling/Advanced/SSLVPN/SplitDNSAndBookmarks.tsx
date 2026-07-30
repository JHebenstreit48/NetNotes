import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
