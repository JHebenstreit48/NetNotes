import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
