import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DiscoveryAndJoin = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/Association/DiscoveryAndJoin';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Discovery & Join" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DiscoveryAndJoin;
