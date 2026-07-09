import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
