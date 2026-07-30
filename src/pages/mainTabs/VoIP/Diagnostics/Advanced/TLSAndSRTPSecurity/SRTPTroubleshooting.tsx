import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
