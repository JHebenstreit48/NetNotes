import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Fundamentals/Introduction';

  return (
    <PageLayout>
      <PageTitle title="OSI Model - Fundamentals - Introduction" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default Introduction;