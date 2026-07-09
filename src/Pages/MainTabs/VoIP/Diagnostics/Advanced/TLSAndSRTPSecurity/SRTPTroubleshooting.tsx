import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SRTPTroubleshooting = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/TLSAndSRTPSecurity/SRTPTroubleshooting';

  return (
    <>
      <PageLayout>
        <PageTitle title="SRTP Troubleshooting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SRTPTroubleshooting;
