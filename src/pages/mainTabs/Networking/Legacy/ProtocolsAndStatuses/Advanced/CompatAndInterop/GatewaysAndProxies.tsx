import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GatewaysAndProxies = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/CompatAndInterop/GatewaysAndProxies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Gateways & Proxies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GatewaysAndProxies;
