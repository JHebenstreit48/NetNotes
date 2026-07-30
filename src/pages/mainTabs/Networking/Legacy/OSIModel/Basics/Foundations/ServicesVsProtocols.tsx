import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
