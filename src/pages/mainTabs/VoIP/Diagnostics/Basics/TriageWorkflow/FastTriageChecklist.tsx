import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FastTriageChecklist = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Basics/TriageWorkflow/FastTriageChecklist';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fast Triage Checklist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FastTriageChecklist;
