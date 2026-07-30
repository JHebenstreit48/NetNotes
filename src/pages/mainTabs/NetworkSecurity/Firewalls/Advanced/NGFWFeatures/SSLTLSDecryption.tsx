import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SSLTLSDecryption = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Advanced/NGFWFeatures/SSLTLSDecryption';

  return (
    <>
      <PageLayout>
        <PageTitle title="SSL/TLS Decryption" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSLTLSDecryption;
