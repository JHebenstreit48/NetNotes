import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LogicalVsPhysical = () => {
  const markdownFilePath = 'ToolsAndTesting/Tools/CiscoPacketTracer/Basics/WorkspaceAndViews/LogicalVsPhysical';

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
