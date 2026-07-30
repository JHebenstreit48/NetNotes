import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

const InterfacesAndPortTypes = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Routers/InterfacesAndPortTypes';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - Routers - Interfaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InterfacesAndPortTypes;