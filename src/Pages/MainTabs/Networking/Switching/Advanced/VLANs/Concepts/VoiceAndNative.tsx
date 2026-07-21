import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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