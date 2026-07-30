import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
