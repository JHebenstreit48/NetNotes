import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
