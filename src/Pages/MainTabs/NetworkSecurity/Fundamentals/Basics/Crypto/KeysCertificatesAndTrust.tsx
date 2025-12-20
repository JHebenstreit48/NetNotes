import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KeysCertificatesAndTrust = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Basics/Crypto/KeysCertificatesAndTrust';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Keys, Certificates & Trust" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KeysCertificatesAndTrust;
