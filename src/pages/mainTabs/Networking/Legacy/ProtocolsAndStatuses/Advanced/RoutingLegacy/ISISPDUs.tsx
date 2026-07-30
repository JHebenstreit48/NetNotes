import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
