import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FrequenciesAndChannels = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/802_11Fundamentals/FrequenciesAndChannels';

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
