import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const IPsecIKEv2Overview = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Basics/SiteToSite/IPsecIKEv2Overview';

  return (
    <>
      <PageLayout>
        <PageTitle title="IPsec/IKEv2 Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPsecIKEv2Overview;
