import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IOSvIOU = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/ImagesAndTemplates/IOSvIOU';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IOSv/IOU (Licensing)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IOSvIOU;
