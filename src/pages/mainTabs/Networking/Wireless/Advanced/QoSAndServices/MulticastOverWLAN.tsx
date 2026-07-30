import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
