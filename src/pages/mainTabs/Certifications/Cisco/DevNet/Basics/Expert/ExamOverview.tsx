import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ExamOverview = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Expert/ExamOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Exam Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExamOverview;
