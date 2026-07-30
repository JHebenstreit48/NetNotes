import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
