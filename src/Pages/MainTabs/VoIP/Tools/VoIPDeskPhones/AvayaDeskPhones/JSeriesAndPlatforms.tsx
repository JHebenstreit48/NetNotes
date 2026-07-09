import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSeriesAndPlatforms = () => {
  const markdownFilePath = 'VoIP/Tools/VoIPDeskPhones/AvayaDeskPhones/JSeriesAndPlatforms';

  return (
    <>
      <PageLayout>
        <PageTitle title="J-Series & Platforms (Aura, IP Office)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSeriesAndPlatforms;
