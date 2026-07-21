import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Calculation = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/WildcardMasks/Calculation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Calculation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Calculation;
