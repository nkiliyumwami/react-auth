import Nav from './Nav';

//This layout function will permet to add the nav to every page
//children represent all the other pages
export default function Layout({ children }) {
  return (
    <div className='mx-14'>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
