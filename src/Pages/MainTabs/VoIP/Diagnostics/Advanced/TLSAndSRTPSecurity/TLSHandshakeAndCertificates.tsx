import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TLSHandshakeAndCertificates = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/TLSAndSRTPSecurity/TLSHandshakeAndCertificates';

  return (
    <>
      <PageLayout>
        <PageTitle title="TLS Handshake & Certificates" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TLSHandshakeAndCertificates;
