import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LinkMapToNotes = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/ObjectiveMap/LinkMapToNotes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Link Map to Notes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LinkMapToNotes;
