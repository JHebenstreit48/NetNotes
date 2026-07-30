import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
