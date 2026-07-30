import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
