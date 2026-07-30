import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VoiceAndNative = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/VLAN/Concepts/VoiceAndNative';

  return (
    <>
      <PageLayout>
        <PageTitle title="Voice & Native VLANs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VoiceAndNative;