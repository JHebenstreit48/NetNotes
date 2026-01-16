import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EightOTwoElevenkVR = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Advanced/Roaming/80211kVR';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="802.11k/v/r" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EightOTwoElevenkVR;
