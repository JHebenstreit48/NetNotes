import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RoutingAndCrypto = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Advanced/DMVPN/RoutingAndCrypto';

  return (
    <>
      <PageLayout>
        <PageTitle title="Routing & Crypto" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoutingAndCrypto;
