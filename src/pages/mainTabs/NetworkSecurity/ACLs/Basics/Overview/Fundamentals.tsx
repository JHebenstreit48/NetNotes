import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
