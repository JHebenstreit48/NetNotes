import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
