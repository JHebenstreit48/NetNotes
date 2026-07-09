import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
