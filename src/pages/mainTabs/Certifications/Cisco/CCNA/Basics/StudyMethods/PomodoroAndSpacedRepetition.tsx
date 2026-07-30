import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PomodoroAndSpacedRepetition = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/StudyMethods/PomodoroAndSpacedRepetition';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pomodoro & Spaced Repetition" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PomodoroAndSpacedRepetition;
