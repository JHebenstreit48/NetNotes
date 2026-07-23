import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/EndDevices/Introduction';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - End Devices - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;