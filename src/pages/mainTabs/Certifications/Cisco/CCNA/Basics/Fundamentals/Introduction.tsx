import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/Overview/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="CCNA - Funamentals - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;