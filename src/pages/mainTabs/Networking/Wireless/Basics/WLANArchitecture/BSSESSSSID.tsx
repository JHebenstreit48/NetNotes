import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
