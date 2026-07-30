import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MethodologyAndFlow = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/Troubleshooting/MethodologyAndFlow';

  return (
    <>
      <PageLayout>
        <PageTitle title="Methodology & Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MethodologyAndFlow;
