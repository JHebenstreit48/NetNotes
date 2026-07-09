import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PearsonVUEChecklist = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/ExamDayPrep/PearsonVUEChecklist';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pearson/VUE Checklist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PearsonVUEChecklist;
