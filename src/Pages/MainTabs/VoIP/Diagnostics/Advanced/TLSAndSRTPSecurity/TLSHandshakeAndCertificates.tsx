import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
