import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PolicyElementsAndConditions = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Advanced/ISENPS/PolicyElementsAndConditions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Policy Elements & Conditions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PolicyElementsAndConditions;
