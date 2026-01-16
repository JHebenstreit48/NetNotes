import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BSSESSSSID = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Basics/WLANArchitecture/BSSESSSSID';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="BSS/ESS/SSID" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BSSESSSSID;
