import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EightOTwoElevenkVR = () => {
  const markdownFilePath = 'Networking/Wireless/Advanced/Roaming/80211kVR';

  return (
    <>
      <PageLayout>
        <PageTitle title="802.11k/v/r" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EightOTwoElevenkVR;
