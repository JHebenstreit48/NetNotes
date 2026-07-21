import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const EphemeralAndWellKnownPorts = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Advanced/Multiplexing/EphemeralAndWellKnownPorts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ephemeral & Well-Known Ports" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EphemeralAndWellKnownPorts;
