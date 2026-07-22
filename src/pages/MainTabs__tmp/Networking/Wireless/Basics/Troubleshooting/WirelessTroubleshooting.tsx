import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const WirelessTroubleshooting = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/Troubleshooting/WirelessTroubleshooting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wireless Troubleshooting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WirelessTroubleshooting;
