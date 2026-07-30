import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
