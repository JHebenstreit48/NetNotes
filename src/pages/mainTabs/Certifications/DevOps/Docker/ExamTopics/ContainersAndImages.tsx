import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ContainersAndImages = () => {
  const markdownFilePath = 'Certifications/DevOps/Docker/ExamTopics/ContainersAndImages';

  return (
    <>
      <PageLayout>
        <PageTitle title="Containers & Images" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContainersAndImages;
