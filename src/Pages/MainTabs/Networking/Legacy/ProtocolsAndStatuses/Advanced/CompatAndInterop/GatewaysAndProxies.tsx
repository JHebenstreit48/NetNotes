import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
