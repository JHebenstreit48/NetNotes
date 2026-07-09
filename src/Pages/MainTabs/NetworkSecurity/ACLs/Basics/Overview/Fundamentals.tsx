import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Fundamentals = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/Overview/Fundamentals';

  return (
    <>
      <PageLayout>
        <PageTitle title="Overview: Fundamentals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Fundamentals;
