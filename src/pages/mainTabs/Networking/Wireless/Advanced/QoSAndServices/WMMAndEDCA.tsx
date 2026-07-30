import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
