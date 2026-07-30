import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/Resources/Anki/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cisco - CCNA - Basics - Study Materials - Anki - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;