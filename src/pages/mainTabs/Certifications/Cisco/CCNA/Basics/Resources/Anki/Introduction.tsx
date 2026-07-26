import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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