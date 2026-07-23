import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/NetworkScopeAndDevices/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals - Introduction To Networking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;