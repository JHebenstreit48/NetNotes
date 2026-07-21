import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
