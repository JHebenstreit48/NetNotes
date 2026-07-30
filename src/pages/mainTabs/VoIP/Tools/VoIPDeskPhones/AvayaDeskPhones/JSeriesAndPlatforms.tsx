import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
