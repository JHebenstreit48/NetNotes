import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
