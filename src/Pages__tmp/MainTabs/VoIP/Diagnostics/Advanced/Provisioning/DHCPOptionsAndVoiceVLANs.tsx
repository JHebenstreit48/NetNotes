import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const DHCPOptionsAndVoiceVLANs = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/Provisioning/DHCPOptionsAndVoiceVLANs';

  return (
    <>
      <PageLayout>
        <PageTitle title="DHCP Options & Voice VLANs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DHCPOptionsAndVoiceVLANs;
