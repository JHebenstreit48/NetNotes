import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
