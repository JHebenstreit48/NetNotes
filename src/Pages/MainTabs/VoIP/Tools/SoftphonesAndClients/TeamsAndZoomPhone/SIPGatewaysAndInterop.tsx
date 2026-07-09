import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SIPGatewaysAndInterop = () => {
  const markdownFilePath = 'VoIP/Tools/SoftphonesAndClients/TeamsAndZoomPhone/SIPGatewaysAndInterop';

  return (
    <>
      <PageLayout>
        <PageTitle title="SIP Gateways & Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SIPGatewaysAndInterop;
