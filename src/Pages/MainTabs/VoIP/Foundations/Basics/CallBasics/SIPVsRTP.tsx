import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
