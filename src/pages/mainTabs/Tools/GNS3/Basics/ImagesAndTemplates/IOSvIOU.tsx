import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const IOSvIOU = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/ImagesAndTemplates/IOSvIOU';

  return (
    <>
      <PageLayout>
        <PageTitle title="IOSv/IOU (Licensing)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IOSvIOU;
