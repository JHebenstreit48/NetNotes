import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WiresharkSIPSDPFilters = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/Signaling/WiresharkSIPSDPFilters';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wireshark — SIP/SDP Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WiresharkSIPSDPFilters;
