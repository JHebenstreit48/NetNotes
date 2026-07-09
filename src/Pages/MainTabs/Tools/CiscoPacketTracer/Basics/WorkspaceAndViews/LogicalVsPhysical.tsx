import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LogicalVsPhysical = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/WorkspaceAndViews/LogicalVsPhysical';

  return (
    <>
      <PageLayout>
        <PageTitle title="Logical vs Physical" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LogicalVsPhysical;
