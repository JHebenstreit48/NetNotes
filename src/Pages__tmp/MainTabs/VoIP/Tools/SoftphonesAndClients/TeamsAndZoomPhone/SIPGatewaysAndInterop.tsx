import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
