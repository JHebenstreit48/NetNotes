import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityExamFormat = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIASecurity/Overview/SecurityExamFormat';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security+ Exam Format" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityExamFormat;
