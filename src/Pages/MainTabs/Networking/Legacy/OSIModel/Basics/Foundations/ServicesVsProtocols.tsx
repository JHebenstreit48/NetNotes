import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServicesVsProtocols = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Foundations/ServicesVsProtocols';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Services vs Protocols" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServicesVsProtocols;
