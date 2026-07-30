import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
