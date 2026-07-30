import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
