import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

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