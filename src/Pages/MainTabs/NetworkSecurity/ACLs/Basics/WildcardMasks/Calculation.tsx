import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Calculation = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/WildcardMasks/Calculation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Calculation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Calculation;
