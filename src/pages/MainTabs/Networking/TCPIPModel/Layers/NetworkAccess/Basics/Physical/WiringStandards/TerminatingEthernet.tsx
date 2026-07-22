import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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