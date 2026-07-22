import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Basics = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/ExtendedACLs/Basics';

  return (
    <>
      <PageLayout>
        <PageTitle title="ExtendedACLs: Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;
