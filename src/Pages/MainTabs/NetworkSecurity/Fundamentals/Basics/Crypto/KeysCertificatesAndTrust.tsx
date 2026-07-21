import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const KeysCertificatesAndTrust = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Basics/Crypto/KeysCertificatesAndTrust';

  return (
    <>
      <PageLayout>
        <PageTitle title="Keys, Certificates & Trust" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KeysCertificatesAndTrust;
