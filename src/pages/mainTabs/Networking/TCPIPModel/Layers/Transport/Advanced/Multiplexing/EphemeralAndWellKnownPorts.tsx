import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
