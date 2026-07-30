import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
