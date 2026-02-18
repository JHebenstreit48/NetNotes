import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EphemeralAndWellKnownPorts = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Advanced/Multiplexing/EphemeralAndWellKnownPorts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Ephemeral & Well-Known Ports" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EphemeralAndWellKnownPorts;
