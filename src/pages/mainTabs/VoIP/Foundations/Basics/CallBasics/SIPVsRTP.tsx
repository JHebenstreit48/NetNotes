import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SIPVsRTP = () => {
  const markdownFilePath = 'VoIP/Foundations/Basics/CallBasics/SIPVsRTP';

  return (
    <>
      <PageLayout>
        <PageTitle title="SIP vs RTP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SIPVsRTP;
