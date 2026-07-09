import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PhysicalVsLogical = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/DiagramsAndDocs/PhysicalVsLogical';

  return (
    <>
      <PageLayout>
        <PageTitle title="Physical vs Logical" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PhysicalVsLogical;
