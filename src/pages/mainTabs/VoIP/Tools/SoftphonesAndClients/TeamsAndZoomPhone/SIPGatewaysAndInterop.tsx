import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
