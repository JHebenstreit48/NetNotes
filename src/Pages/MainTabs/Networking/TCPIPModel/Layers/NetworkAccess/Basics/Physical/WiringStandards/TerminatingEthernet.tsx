import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TerminatingEthernet = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards/TerminatingEthernet';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - Terminating Ethernet Cables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TerminatingEthernet;