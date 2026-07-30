import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FiberConnectors = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/CablingAndInterfaces/FiberConnectors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - Fiber Connectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FiberConnectors;