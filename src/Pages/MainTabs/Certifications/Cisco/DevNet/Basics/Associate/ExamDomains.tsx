import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExamDomains = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Associate/ExamDomains';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Exam Domains" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExamDomains;
