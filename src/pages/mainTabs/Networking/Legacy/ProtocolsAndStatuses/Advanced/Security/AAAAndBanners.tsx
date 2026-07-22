import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const AAAAndBanners = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/Security/AAAAndBanners';

  return (
    <>
      <PageLayout>
        <PageTitle title="AAA & Banners" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AAAAndBanners;
