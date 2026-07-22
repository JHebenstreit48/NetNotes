import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const WirelessStandards = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/802_11Fundamentals/WirelessStandards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wireless Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WirelessStandards;
