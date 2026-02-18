import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AAAAndBanners = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/Security/AAAAndBanners';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="AAA & Banners" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AAAAndBanners;
