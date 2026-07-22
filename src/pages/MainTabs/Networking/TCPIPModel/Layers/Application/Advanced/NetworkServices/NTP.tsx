import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const NTP = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Advanced/NetworkServices/NTP';

  return (
    <>
      <PageLayout>
        <PageTitle title="NTP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NTP;
