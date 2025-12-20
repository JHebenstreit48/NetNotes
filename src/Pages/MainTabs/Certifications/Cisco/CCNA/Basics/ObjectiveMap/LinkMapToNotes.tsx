import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LinkMapToNotes = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/ObjectiveMap/LinkMapToNotes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Link Map to Notes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LinkMapToNotes;
