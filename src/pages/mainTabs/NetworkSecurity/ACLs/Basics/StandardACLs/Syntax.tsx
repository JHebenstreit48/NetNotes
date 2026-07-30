import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Syntax = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/StandardACLs/Syntax';

  return (
    <>
      <PageLayout>
        <PageTitle title="Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Syntax;
