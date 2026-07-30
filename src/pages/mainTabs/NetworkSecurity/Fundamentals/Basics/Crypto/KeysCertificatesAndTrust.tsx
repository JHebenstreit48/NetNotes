import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
