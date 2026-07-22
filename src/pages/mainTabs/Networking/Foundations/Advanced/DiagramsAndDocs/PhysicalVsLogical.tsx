import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
