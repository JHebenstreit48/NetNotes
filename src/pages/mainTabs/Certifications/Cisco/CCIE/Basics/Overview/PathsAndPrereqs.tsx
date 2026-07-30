import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PathsAndPrereqs = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/Overview/PathsAndPrereqs';

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
