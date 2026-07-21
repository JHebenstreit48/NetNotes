import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const WMMAndEDCA = () => {
  const markdownFilePath = 'Networking/Wireless/Advanced/QoSAndServices/WMMAndEDCA';

  return (
    <>
      <PageLayout>
        <PageTitle title="WMM & EDCA" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WMMAndEDCA;
