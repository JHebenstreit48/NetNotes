import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PolicyElementsAndConditions = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Advanced/ISENPS/PolicyElementsAndConditions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Policy Elements & Conditions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PolicyElementsAndConditions;
