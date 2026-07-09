import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
