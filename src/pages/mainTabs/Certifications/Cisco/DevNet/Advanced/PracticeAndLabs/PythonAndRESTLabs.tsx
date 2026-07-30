import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PythonAndRESTLabs = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Advanced/PracticeAndLabs/PythonAndRESTLabs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Python & REST Labs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PythonAndRESTLabs;
