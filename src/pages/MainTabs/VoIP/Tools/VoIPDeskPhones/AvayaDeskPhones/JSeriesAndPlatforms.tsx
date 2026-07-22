import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
