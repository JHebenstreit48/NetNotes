import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
