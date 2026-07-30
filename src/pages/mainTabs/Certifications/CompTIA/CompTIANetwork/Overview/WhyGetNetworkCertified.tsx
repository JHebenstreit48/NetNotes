import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WhyGetNetworkCertified = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIANetwork/Overview/WhyGetNetworkCertified';

  return (
    <>
      <PageLayout>
        <PageTitle title="Why Get Network+ Certified?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhyGetNetworkCertified;
