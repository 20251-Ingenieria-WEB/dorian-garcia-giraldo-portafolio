import LeftMenu from './components/LeftMenu';
import MainContents from './components/MainContents';
import RightMenu from './components/RightMenu';

export default function Home() {
  return (
    //<div className="flex h-screen">
     <div className="flex flex-col md:flex-row">
      <LeftMenu />
      <MainContents />
      <RightMenu />
    </div>
  );
}