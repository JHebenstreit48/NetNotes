import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
