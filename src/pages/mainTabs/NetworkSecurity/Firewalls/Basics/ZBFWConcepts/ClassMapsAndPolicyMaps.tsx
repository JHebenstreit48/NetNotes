import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ClassMapsAndPolicyMaps = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/ZBFWConcepts/ClassMapsAndPolicyMaps';

  return (
    <>
      <PageLayout>
        <PageTitle title="Class-Maps & Policy-Maps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClassMapsAndPolicyMaps;
