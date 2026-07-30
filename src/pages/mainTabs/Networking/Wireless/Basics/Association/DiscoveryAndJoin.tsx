import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DiscoveryAndJoin = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/Association/DiscoveryAndJoin';

  return (
    <>
      <PageLayout>
        <PageTitle title="Discovery & Join" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DiscoveryAndJoin;
