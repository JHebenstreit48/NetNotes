import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
