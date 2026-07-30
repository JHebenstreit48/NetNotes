import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
