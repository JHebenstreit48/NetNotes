import PageLayout from '@/components/NavigationUI/PageLayout';
import Notes from '@/components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = '/Certifications/Cisco/CCNA/Overview/Introduction';

  return (
    <>
      <PageLayout>
        <Header text="Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;
