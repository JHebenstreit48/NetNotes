import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WirelessTroubleshooting = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Basics/Troubleshooting/WirelessTroubleshooting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Wireless Troubleshooting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WirelessTroubleshooting;
