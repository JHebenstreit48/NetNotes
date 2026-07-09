import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BSSESSSSID = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/WLANArchitecture/BSSESSSSID';

  return (
    <>
      <PageLayout>
        <PageTitle title="BSS/ESS/SSID" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BSSESSSSID;
