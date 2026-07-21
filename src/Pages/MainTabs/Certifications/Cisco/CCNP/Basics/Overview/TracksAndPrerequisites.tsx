import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
