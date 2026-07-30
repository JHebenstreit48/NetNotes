import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LoadBalancingAndDesign = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/EtherChannel/LoadBalancingAndDesign';

  return (
    <>
      <PageLayout>
        <PageTitle title="Load Balancing & Design" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LoadBalancingAndDesign;