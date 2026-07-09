import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworkSelection = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Fundamentals/NetworkSelection';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mobile Fundamentals - Network Selection & Wi-Fi Behavior" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkSelection;