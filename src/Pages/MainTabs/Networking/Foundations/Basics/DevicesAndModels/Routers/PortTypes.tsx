import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTile from '@/Components/PageComponents/PageTitle'
import Notes from '@/Components/PageComponents/Notes/Notes';

const PortTypes = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Routers/PortTypes';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - Routers - Port Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PortTypes;