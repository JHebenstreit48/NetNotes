import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GatewaysAndProxies = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced/CompatAndInterop/GatewaysAndProxies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Gateways & Proxies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GatewaysAndProxies;
