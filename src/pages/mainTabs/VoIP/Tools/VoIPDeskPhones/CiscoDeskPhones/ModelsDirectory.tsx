import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ModelsDirectory = () => {
  const markdownFilePath = 'VoIP/Tools/VoIPDeskPhones/CiscoDeskPhones/ModelsDirectory';

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
