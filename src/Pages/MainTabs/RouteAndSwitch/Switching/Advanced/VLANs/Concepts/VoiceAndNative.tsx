import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VoiceAndNative = () => {
  const markdownFilePath = 'RouteAndSwitch/Switching/Advanced/VLAN/Concepts/VoiceAndNative';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Voice & Native VLANs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VoiceAndNative;