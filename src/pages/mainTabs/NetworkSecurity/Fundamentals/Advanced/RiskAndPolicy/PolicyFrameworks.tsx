import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
