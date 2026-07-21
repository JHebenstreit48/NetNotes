import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const LevelsAndAreas = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/ISIS/LevelsAndAreas';

  return (
    <>
      <PageLayout>
        <PageTitle title="Levels & Areas" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LevelsAndAreas;
