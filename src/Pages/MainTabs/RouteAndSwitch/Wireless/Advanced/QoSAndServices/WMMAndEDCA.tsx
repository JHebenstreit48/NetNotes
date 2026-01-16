import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WMMAndEDCA = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Advanced/QoSAndServices/WMMAndEDCA';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="WMM & EDCA" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WMMAndEDCA;
