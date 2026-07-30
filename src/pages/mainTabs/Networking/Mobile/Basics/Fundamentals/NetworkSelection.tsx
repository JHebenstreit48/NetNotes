import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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