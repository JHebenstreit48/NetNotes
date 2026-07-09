import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PathsAndPrereqs = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/ProgramOverview/PathsAndPrereqs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Paths & Prereqs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PathsAndPrereqs;
