import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
