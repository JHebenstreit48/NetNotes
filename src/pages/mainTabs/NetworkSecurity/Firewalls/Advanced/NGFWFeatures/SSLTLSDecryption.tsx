import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
