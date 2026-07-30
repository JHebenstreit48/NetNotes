import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
