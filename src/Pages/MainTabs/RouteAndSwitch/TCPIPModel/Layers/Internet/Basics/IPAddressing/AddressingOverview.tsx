import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AddressingOverview = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Internet/Basics/IPAddressing/AddressingOverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Addressing Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AddressingOverview;
