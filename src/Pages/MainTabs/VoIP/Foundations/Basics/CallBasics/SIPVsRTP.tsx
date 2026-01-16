import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SIPVsRTP = () => {
  const markdownFilePath = 'VoIP/Foundations/Basics/CallBasics/SIPVsRTP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SIP vs RTP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SIPVsRTP;
