import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
