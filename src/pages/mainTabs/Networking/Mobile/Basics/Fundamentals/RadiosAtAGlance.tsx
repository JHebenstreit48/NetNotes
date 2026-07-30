import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RadiosAtAGlance = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Fundamentals/RadiosAtAGlance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Radios at a Glance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RadiosAtAGlance;