import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RoutingAndCrypto = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Advanced/DMVPN/RoutingAndCrypto';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Routing & Crypto" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoutingAndCrypto;
