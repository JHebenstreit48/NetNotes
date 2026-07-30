import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
