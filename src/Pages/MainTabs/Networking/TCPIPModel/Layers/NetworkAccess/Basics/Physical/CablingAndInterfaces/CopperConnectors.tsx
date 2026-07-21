import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CopperConnectors = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/CablingAndInterfaces/CopperConnectors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - Copper Connectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CopperConnectors;