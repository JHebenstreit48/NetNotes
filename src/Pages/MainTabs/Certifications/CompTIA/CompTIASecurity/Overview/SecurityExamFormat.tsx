import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityExamFormat = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIASecurity/Overview/SecurityExamFormat';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Security+ Exam Format" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityExamFormat;
