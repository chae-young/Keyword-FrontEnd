import Header from '../Header';
import Nav from '../Nav';

interface LayoutWithHeaderPops {
  children: React.ReactNode;
}
const LayoutWithHeader = ({ children }: LayoutWithHeaderPops) => (
  <>
    <Header />
    {children}
    <Nav />
  </>
);

export default LayoutWithHeader;
