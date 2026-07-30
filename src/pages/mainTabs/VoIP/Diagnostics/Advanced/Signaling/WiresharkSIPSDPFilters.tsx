import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
