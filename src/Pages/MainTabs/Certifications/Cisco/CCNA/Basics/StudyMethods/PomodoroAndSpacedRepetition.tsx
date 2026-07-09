import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
