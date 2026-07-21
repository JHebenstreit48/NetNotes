import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
