import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CryptoMapsAndVTIs = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Basics/SiteToSite/CryptoMapsAndVTIs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Crypto Maps & VTIs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CryptoMapsAndVTIs;
