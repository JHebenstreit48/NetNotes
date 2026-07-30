import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
