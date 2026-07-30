import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
