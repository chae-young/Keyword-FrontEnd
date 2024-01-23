import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({
  title,
  description = '약속의 시작부터 끝까지 생길 이용자의 불편함을 한 데 모아, 빠르고 편리하게 이용자의 약속 일정을 도와줄 서비스입니다'
}: SEOProps) => (
  <Helmet>
    <title>keyword {title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="robots" content="index,nofollow" />
    <meta name="keywords" content="약속,일정,친구" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="//keyword-front-end.vercel.app" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="/images/logo.svg" />
  </Helmet>
);

export default SEO;
