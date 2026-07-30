import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
