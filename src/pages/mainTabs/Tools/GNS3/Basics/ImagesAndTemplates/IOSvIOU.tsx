import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
