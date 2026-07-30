import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Basics = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/StandardACLs/Basics';

  return (
    <>
      <PageLayout>
        <PageTitle title="StandardACLs: Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;
