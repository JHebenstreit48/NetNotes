import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Fundamentals = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Overview/Fundamentals';

  return (
    <PageLayout>
      <Header />
      <PageTitle title="OSI Model - Fundamentals" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default Fundamentals;