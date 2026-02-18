import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NTP = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Advanced/NetworkServices/NTP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="NTP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NTP;
