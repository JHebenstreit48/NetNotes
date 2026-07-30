import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
