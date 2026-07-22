import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
