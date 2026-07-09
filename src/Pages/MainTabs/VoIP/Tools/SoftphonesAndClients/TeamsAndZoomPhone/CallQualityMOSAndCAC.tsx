import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CallQualityMOSAndCAC = () => {
  const markdownFilePath = 'VoIP/Tools/SoftphonesAndClients/TeamsAndZoomPhone/CallQualityMOSAndCAC';

  return (
    <>
      <PageLayout>
        <PageTitle title="Call Quality, MOS & CAC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CallQualityMOSAndCAC;
