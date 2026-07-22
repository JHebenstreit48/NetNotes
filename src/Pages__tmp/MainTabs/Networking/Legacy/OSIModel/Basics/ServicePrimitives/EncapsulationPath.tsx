import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const EncapsulationPath = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/ServicePrimitives/EncapsulationPath';

  return (
    <>
      <PageLayout>
        <PageTitle title="Encapsulation Path" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EncapsulationPath;
