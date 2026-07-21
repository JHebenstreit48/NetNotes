import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const FrequenciesAndChannels = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/802_11Fundamentals/FrequenciesAndChannels';

  return (
    <>
      <PageLayout>
        <PageTitle title="Frequencies & Channels" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FrequenciesAndChannels;
