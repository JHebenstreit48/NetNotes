import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
