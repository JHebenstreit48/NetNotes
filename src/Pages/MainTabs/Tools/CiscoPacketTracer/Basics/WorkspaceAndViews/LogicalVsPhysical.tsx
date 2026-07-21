import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
