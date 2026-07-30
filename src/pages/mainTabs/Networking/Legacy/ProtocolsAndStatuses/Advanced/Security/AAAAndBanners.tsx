import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
