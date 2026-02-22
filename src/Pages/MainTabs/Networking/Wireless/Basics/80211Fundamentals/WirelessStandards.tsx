import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WirelessStandards = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/802_11Fundamentals/WirelessStandards';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Wireless Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WirelessStandards;
