import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
