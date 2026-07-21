import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Fundamentals = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/WildcardMasks/Fundamentals';

  return (
    <>
      <PageLayout>
        <PageTitle title="WildcardMasks: Fundamentals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Fundamentals;
