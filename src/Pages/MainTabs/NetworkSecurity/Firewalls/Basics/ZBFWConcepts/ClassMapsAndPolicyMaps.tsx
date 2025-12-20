import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ClassMapsAndPolicyMaps = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/ZBFWConcepts/ClassMapsAndPolicyMaps';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Class-Maps & Policy-Maps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClassMapsAndPolicyMaps;
