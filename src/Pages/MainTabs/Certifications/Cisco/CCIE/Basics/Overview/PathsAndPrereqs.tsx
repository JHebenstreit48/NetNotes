import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PathsAndPrereqs = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/Overview/PathsAndPrereqs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Paths & Prereqs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PathsAndPrereqs;
