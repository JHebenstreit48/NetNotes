import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
