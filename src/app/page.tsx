import Link from "next/link";
import flagsmith from "@/utils/flagsmith";

export const revalidate = 0;

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>new text</p>
      </div>
      <Link href="/about">About</Link>
      <br />
      {flags.isFeatureEnabled("search") && <input placeholder="Search" />}

      <>
        {/* Hello world */}
        <div id="top_links">
          <div id="header">
            <h1>
              Online Banking System
              <span className="style1" />
            </h1>
            <h1>
              For RIO Bank Co.Ltd
              <span className="style1" />
            </h1>
            <h2>Extra Ordinary Service</h2>
          </div>
          <div id="navigation">
            <ul>
              <li>
                <a href="create1.html">NEW CUSTOMER</a>
              </li>
              <li>
                <a href="login.html">LOGIN</a>
              </li>
              <li>
                <a href="about.jsp">ABOUT US</a>
              </li>
            </ul>
          </div>
          <table cellPadding={0} cellSpacing={0} id="content1">
            <tbody>
              <tr>
                <td className="con" valign="top">
                  <div id="heade1">
                    <h1>Results</h1>
                  </div>
                  <p>
                    This is Global Business bank which is under business and
                    finance category for your website design.
                    Freedesignertemplates.com is a free collection of site
                    templates with HTML layouts which are frequently updated.
                    <br />
                    <br />
                    These web design layouts are developed by the professional
                    designers for you to make your task easy in creating a
                    website and are easy to download.
                  </p>
                </td>
                <td className="con" valign="top">
                  <div id="heade2">
                    <h1>Opportunities</h1>
                  </div>
                  <p>
                    {" "}
                    These Global Business bank would be idle for building a
                    successful online businesses. Download the required HTML
                    template, install it and edit the existing content with your
                    original text.
                    <br />
                    <br />
                    The entire website are pre-designed websites all you need to
                    do is adding your own personal content and start your own
                    website.
                  </p>
                </td>
                <td className="con" valign="top">
                  <div id="heade3">
                    <h1>Solutions</h1>
                  </div>
                  <p>
                    There are various other template categories like Art,
                    Finance, Nature, Night club, Communication, Computer, Music,
                    Religious, Fashion, Holiday, Travel, Health, Medicine. This
                    free Global Business bank which is built using XHTML and
                    CSS.
                    <br />
                    These are user friendly that any user can download and
                    customize it according to their wish.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style={{ width: 897, background: "#FFFFFF", margin: "0 auto" }}
          >
            <tbody>
              <tr>
                <td
                  width={299}
                  valign="top"
                  style={{ borderRight: "#666666 1px dotted" }}
                >
                  <div id="services">
                    <h1>Services</h1>
                    <br />
                    <ul>
                      <li>
                        <a href="#">www.javatpoint.com</a>
                      </li>
                      <li>
                        <a href="#">www.javacstpoint.com </a>
                      </li>
                      <li>
                        <a href="#">www.javatpoint.com/forum.jsp</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td width={299} valign="top">
                  <div
                    id="welcome"
                    style={{ borderRight: "#666666 1px dotted" }}
                  >
                    <h1>Welcome</h1>
                    <br />
                    <center>
                      <img
                        src="images/globe_10.gif"
                        alt="business"
                        width={196}
                        height={106}
                      />
                    </center>
                    <br />
                    <p>
                      Each people plan their site layouts depending upon their
                      business type. Here comes a free designer template which
                      provides you with a selection of different kinds of
                      webdesign starting from business template, fashion
                      template, media template, Science template, Arts template
                      and much more.
                    </p>
                  </div>
                </td>
                <td width={299} valign="top">
                  <div id="news">
                    <h1>News &amp; Events</h1>
                    <br />
                    <div className="img">
                      <img src="images/globe_12.gif" alt="Business" />
                    </div>
                    <h2>Nov. 17, 2008.</h2>
                    <p>
                      Get your dream web design at no cost, no extra manpower
                      for your professional website.
                    </p>
                    <br />
                    <div className="img">
                      <img src="images/globe_16.gif" alt="Business" />
                    </div>
                    <h2>Nov. 17, 2008.</h2>
                    <p>
                      Get your dream web design at no cost, no extra manpower
                      for your professional website.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div id="footer_top">
            <div id="footer_navigation"></div>
            <div id="footer_copyright">
              <center>
                <img alt="business" width={196} height={106} />
              </center>
              <br />
              <p>
                Each people plan their site layouts depending upon their
                business type. Here comes a free designer template which
                provides you with a selection of different kinds of webdesign
                starting from business template, fashion template, media
                template, Science template, Arts template and much more.
              </p>
              Copyright © Your Company Name
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
