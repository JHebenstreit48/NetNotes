import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const NetworkModels = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkModels';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals - Networking Models" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkModels;