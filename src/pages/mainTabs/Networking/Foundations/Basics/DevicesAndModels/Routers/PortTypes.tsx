import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

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