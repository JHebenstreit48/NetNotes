import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
