import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CryptoMapsAndVTIs = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Basics/SiteToSite/CryptoMapsAndVTIs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Crypto Maps & VTIs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CryptoMapsAndVTIs;
