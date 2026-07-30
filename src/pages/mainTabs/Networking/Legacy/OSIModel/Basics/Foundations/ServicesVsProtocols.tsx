import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ServicesVsProtocols = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Foundations/ServicesVsProtocols';

  return (
    <>
      <PageLayout>
        <PageTitle title="Services vs Protocols" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServicesVsProtocols;
