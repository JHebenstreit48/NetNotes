import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PhysicalVsLogical = () => {
  const markdownFilePath = 'RouteAndSwitch/Foundations/Advanced/DiagramsAndDocs/PhysicalVsLogical';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Physical vs Logical" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PhysicalVsLogical;
