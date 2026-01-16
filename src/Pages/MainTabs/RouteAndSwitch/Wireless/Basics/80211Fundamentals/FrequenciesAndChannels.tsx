import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FrequenciesAndChannels = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Basics/80211Fundamentals/FrequenciesAndChannels';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Frequencies & Channels" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FrequenciesAndChannels;
