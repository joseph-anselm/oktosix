import { useRouter } from "next/router";

import Menubar from "./menu";

function Layout({ children }) {
  const router = useRouter();

  //   const showHeader = router.asPath === "/" ? true : false;
  //   const showHeader2 = router.asPath === "/about" ? true : false;
  //   const showHeader3 = router.asPath === "/contact" ? true : false;
  //   const showHeader4 = router.asPath === "/galleries" ? true : false;
  //   const showHeader5 = router.pathname === "/blog" ? true : false;
  //   const showHeader6 = router.pathname === "/blog/[slug]" ? true : false;
  //   const showHeader7 = router.pathname === "/[slug]" ? true : false;
  //   const showBlog = router.asPath === "/" ? true : false;

  return (
    <div>
      <Menubar />

      {children}
    </div>
  );
}

export default Layout;
