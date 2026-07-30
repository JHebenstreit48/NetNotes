import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StatefulInspection = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/StatefulAndNAT/StatefulInspection';

  return (
    <>
      <PageLayout>
        <PageTitle title="Stateful Inspection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StatefulInspection;
