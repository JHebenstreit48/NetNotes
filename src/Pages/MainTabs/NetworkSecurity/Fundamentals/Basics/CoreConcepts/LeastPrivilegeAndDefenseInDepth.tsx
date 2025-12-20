import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LeastPrivilegeAndDefenseInDepth = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Basics/CoreConcepts/LeastPrivilegeAndDefenseInDepth';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Least Privilege & Defense in Depth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LeastPrivilegeAndDefenseInDepth;
