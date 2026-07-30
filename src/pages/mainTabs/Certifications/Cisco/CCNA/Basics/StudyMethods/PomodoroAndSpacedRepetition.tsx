import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
