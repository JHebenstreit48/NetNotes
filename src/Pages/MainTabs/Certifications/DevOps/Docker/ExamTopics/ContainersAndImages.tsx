import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ContainersAndImages = () => {
  const markdownFilePath = 'Certifications/DevOps/Docker/ExamTopics/ContainersAndImages';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Containers & Images" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContainersAndImages;
