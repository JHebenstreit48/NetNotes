import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
