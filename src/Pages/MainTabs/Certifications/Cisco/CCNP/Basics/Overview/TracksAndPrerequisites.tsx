import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TracksAndPrerequisites = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Basics/Overview/TracksAndPrerequisites';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tracks & Prerequisites" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TracksAndPrerequisites;
