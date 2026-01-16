import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EncapsulationPath = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Basics/ServicePrimitives/EncapsulationPath';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Encapsulation Path" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EncapsulationPath;
