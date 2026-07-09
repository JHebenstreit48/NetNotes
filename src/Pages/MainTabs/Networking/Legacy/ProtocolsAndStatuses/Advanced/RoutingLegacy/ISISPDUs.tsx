import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ISISPDUs = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/RoutingLegacy/ISISPDUs';

  return (
    <>
      <PageLayout>
        <PageTitle title="IS-IS PDUs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ISISPDUs;
