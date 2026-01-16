import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DHCPOptionsAndVoiceVLANs = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/Provisioning/DHCPOptionsAndVoiceVLANs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DHCP Options & Voice VLANs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DHCPOptionsAndVoiceVLANs;
