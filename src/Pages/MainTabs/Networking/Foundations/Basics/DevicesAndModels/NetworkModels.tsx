import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworkModels = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/NetworkModels';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fundamentals - Networking Models" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkModels;