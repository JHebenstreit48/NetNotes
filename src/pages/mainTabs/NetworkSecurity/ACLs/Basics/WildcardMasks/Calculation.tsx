import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
