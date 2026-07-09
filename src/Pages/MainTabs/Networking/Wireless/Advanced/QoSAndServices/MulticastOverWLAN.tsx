import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MulticastOverWLAN = () => {
  const markdownFilePath = 'Networking/Wireless/Advanced/QoSAndServices/MulticastOverWLAN';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multicast over WLAN" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MulticastOverWLAN;
