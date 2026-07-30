import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
