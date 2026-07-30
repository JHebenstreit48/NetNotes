import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ModelsDirectory = () => {
  const markdownFilePath = 'VoIP/Tools/VoIPDeskPhones/AvayaDeskPhones/ModelsDirectory';

  return (
    <>
      <PageLayout>
        <PageTitle title="Models Directory" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModelsDirectory;
