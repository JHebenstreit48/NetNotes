import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
