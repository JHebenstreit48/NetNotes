import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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