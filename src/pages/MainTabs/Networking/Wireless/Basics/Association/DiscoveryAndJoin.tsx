import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
