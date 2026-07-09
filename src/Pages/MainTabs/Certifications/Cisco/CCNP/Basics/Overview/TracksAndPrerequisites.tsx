import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
