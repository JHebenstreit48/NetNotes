import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ExamDomains = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Associate/ExamDomains';

  return (
    <>
      <PageLayout>
        <PageTitle title="Exam Domains" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExamDomains;
