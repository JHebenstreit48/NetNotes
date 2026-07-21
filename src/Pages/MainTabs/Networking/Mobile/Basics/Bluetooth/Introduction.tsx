import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Bluetooth/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Bluetooth: Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;
