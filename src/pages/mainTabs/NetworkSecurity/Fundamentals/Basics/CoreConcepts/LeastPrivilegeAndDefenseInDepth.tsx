import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LeastPrivilegeAndDefenseInDepth = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Basics/CoreConcepts/LeastPrivilegeAndDefenseInDepth';

  return (
    <>
      <PageLayout>
        <PageTitle title="Least Privilege & Defense in Depth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LeastPrivilegeAndDefenseInDepth;
