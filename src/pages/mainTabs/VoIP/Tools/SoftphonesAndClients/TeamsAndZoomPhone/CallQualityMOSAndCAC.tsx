import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
