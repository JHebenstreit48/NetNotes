import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FastTriageChecklist = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Basics/TriageWorkflow/FastTriageChecklist';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fast Triage Checklist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FastTriageChecklist;
