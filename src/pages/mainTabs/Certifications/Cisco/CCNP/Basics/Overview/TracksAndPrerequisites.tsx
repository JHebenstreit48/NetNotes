import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TracksAndPrerequisites = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Basics/Overview/TracksAndPrerequisites';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tracks & Prerequisites" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TracksAndPrerequisites;
