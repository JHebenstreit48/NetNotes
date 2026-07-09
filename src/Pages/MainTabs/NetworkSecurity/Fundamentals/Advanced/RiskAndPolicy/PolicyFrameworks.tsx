import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PolicyFrameworks = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Advanced/RiskAndPolicy/PolicyFrameworks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Policy Frameworks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PolicyFrameworks;
