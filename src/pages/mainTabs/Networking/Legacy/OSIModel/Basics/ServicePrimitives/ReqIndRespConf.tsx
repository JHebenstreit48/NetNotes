import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ReqIndRespConf = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/ServicePrimitives/ReqIndRespConf';

  return (
    <>
      <PageLayout>
        <PageTitle title="Req/Ind/Resp/Conf" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReqIndRespConf;
