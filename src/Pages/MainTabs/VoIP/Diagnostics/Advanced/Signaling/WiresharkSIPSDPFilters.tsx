import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WiresharkSIPSDPFilters = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/Signaling/WiresharkSIPSDPFilters';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Wireshark — SIP/SDP Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WiresharkSIPSDPFilters;
