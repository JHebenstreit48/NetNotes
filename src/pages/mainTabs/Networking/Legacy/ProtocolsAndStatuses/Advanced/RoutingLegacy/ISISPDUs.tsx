import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
