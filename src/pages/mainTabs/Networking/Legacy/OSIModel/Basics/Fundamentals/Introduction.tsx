import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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