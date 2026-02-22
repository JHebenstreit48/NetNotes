import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TerminatingEthernet = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards/TerminatingEthernet';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Network Access - Physical - Terminating Ethernet Cables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TerminatingEthernet;