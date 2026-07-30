import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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