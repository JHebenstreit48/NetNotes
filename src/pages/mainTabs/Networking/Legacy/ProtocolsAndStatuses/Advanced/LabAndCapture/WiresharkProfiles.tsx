import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WiresharkProfiles = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/LabAndCapture/WiresharkProfiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wireshark Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WiresharkProfiles;
