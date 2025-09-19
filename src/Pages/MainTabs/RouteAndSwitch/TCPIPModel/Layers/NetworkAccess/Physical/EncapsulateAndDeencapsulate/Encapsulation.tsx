import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Encapsulation = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/EncapAndDeencap/Encapsulation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Network Access - Physical - Encapsulation" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default Encapsulation;