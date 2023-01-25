/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const container = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
`;

const fixedHeader = (isTop) => css`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vw;
  top: 0;
  background-color: #fff;
  transition: background-color 0.6s;
  z-index: 100;
  ${isTop ? `background: #fff0;` : `background: #ffffffb3;`}
  ${!isTop && 'box-shadow: 0 8px 24px rgb(0 0 0 / 10%)'};
`;
const headerStyles = (isTop) => css`
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  display: flex;
  padding-top: 10px;
  align-items: center;

  > * {
    flex: 1;
  }
  a {
    ${isTop ? `color: #ffffff99;` : `color: #333;`}
  }
`;

const navLinkStyles = css`
  list-style-type: none;
  display: flex;

  a {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    padding-right: 20px;
  }
  a:hover {
    color: #4284f3;
  }
`;

const buttonStyles = css`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  background-color: #f5a623;
  color: #fff;
  font-size: 14px;
  border: none;
  padding: 6px 12px;
  transition: transform 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const heroStyles = css`
  height: 90vh;
  color: #fff;

  h1 {
    font-family: 'Playfair Display', serif;
    padding-top: 100px;
    font-size: 3.5em;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    font-size: 20px;
  }
`;

const helpYourTeam = css`
  text-align: center;
  margin: auto;
  padding: 0px 160px 100px;
`;

const gridContainer = css`
  display: grid;
  grid-template-columns: 428px 428px;
  grid-template-rows: auto;
  grid-gap: 100px;
`;
const card = css`
  position: relative;
  background-color: #f8f4ee;
  width: 368px;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  :nth-child(even) {
    top: 96px;
    left: 8px;
  }
  :nth-child(odd) {
    left: 60px;
  }
`;

const cardText = css`
  text-align: left;

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 400;
  }
  a {
    text-decoration: none;
    color: #4284f3;
    size: 14px;
    font-weight: 700;
    font-family: 'Open Sans';
  }
`;

const cardIcon = css`
  width: 88px;
  margin: 0 104px 20px;
  opacity: 0.75;
`;
const screenshot = css`
  position: relative;
  height: 280px;

  img {
    position: absolute;
    width: 424px;
    border-radius: 6px;
    box-shadow: 3px 3px 15px rgb(0 0 0 / 10%);
  }
`;

const testimonials = css`
  background-color: #f5a623;
  display: flex;
  margin-top: 200px;
  position: relative;
`;

const testImg = css`
  position: absolute;
  bottom: -43px;
  width: 250px;
  height: 250px;
  background-image: url(https://digitaltoucan.com/wp-content/themes/digital-toucan/images/graphic-section-testimonials.svg);
  background-size: 200% 100%;
`;

const cite = css``;

const birdImg = css`
  background-image: url(https://digitaltoucan.com/wp-content/themes/digital-toucan/images/graphic-heading-style-1.svg);
  width: 200px;
  height: 158px;
  background-repeat: no-repeat;
`;

const footerStyles = css`
  background-color: #e4e4e4;
  padding: 30px 0;
`;

const socialMedia = css`
  img {
    width: 40px;
  }
`;

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollTop(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header>
        <section>
          <div css={fixedHeader(scrollTop === 0)}>
            <div css={headerStyles(scrollTop === 0)}>
              <nav>
                <ul css={navLinkStyles}>
                  <li>
                    <a href="/#">Jira Apps</a>
                  </li>
                  <li>
                    <a href="/#">About Us</a>
                  </li>
                  <li>
                    <a href="/#">Resources</a>
                  </li>
                  <li>
                    <a href="/#">Support</a>
                  </li>
                </ul>
              </nav>

              <div css={{ display: 'flex', justifyContent: 'center' }}>
                <a href="/#">
                  <img
                    width={45}
                    src="https://digitaltoucan.com/wp-content/uploads/2022/06/logo-digital-toucan-v2.svg"
                    alt="Logo digital Toucan"
                  />
                </a>
              </div>
              <div css={{ display: 'flex', justifyContent: 'end' }}>
                <button css={buttonStyles}>Contact Us</button>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <div css={heroStyles}>
          <h1>
            Bring your Jira <br />
            data to life.
          </h1>
          <p>
            Our Jira apps help you get the very best <br />
            out of your teams and projects.
          </p>
        </div>
        <section>
          <div css={container}>
            <div css={helpYourTeam}>
              <h2>
                Help your teams find
                <br />
                success with Jira.
              </h2>
              <p>
                From enhancing searchability to prioritizing objectives and
                goals, our <br />
                apps improve the Jira experience for teams around the world.
              </p>
            </div>
          </div>
          <div css={container} style={{ justifyContent: 'center' }}>
            <div css={gridContainer}>
              <div css={card}>
                <img
                  css={cardIcon}
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-jql-search-extensions-for-jira.svg"
                  alt="JQL Search Extensions for Jira"
                />
                <div css={screenshot}>
                  <img
                    style={{ left: '-280px' }}
                    src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-jql-search-extensions-for-jira.jpg"
                    alt="Interface of JQL Search Extensions for Jira."
                  />
                </div>
                <div css={cardText}>
                  <h3>JQL Search Extensions for Jira</h3>
                  <p>
                    Find all your issues with over 50 JQL search extensions.
                    Search Jira comments, subtasks, attachments, versions and
                    links.
                  </p>
                  <a href="/#">Learn More</a>
                </div>
              </div>
              <div css={card}>
                <img
                  css={cardIcon}
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-okr-for-jira.svg"
                  alt="OKR for Jira"
                />
                <div css={screenshot}>
                  <img
                    style={{ left: '-145px' }}
                    src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-okr-for-jira.jpg"
                    alt="Interface of OKR for Jira."
                  />
                </div>
                <div css={cardText}>
                  <h3>OKR for Jira</h3>
                  <p>
                    Easily organize and prioritize objectives at every level and
                    give you and your teams the visibility they need to keep
                    track of key results.
                  </p>
                  <a href="/#">Learn More</a>
                </div>
              </div>
              <div css={card}>
                <img
                  css={cardIcon}
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-panaroma-for-jira.svg"
                  alt="Panorama for Jira"
                />
                <div css={screenshot}>
                  <img
                    style={{ left: '-280px' }}
                    src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-panorama-for-jira.jpg"
                    alt="Interface of Panorama for Jira."
                  />
                </div>
                <div css={cardText}>
                  <h3>Panorama for Jira</h3>
                  <p>
                    Get a big-picture view of your projects and epics. Easily
                    create multilevel, structured hierarchies to manage projects
                    and track progress across teams.
                  </p>
                  <a href="/#">Learn More</a>
                </div>
              </div>

              <div css={card}>
                <img
                  css={cardIcon}
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-okr-for-jira.svg"
                  alt="Goals for Jira"
                />
                <div css={screenshot}>
                  <img
                    style={{ left: '-145px' }}
                    src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-goals-for-jira.jpg"
                    alt="Interface of Goals for Jira."
                  />
                </div>
                <div css={cardText}>
                  <h3>Goals for Jira</h3>
                  <p>
                    Keep your teams focused on success. Easily create powerful
                    dashboards to track progress on your project and sprint
                    goals in Jira.
                  </p>
                  <a href="/#">Learn More </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section css={testimonials}>
          <div css={container}>
            <div style={{ flex: '1', padding: '28px 112px 0' }}>
              <h2> Users love our Jira apps.</h2>
              <div css={testImg}></div>
            </div>
            <div style={{ flex: '1', padding: '120px 70px' }}>
              <p>
                "I love this plugin! I have recommended it to some of my clients
                and I have it in my own instance. It is great for getting a big
                picture of a lot of issues in a hierarchical view and the
                ability to do a "group by" on various fields on the structure
                gives really quick visual views of project status that are very
                helpful. Support is awesome as well. Would definitely
                recommend!"
              </p>
              <p css={cite}>--Nancy Bennett--</p>
            </div>
          </div>
        </section>
        <section>
          <div css={container}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                padding: '5px',
              }}
            >
              <div css={birdImg}></div>
              <h2
                style={{ maxWidth: '500px', textAlign: 'center', marginTop: 0 }}
              >
                Want to get in touch? <br /> Let's talk!
              </h2>
              <button css={buttonStyles}>Contact Us</button>
            </div>
          </div>
        </section>
      </main>
      <footer css={footerStyles}>
        <div css={container}>
          <div>
            <img
              src="https://digitaltoucan.com/wp-content/uploads/2022/06/logo-digital-toucan-v2.svg"
              alt="Logo digital Toucan"
            />
            <p>
              Key members of the Digital Toucan team were part of Atlassian's
              Jira development arm for over 8 years. We built some of the core
              features of the product and have developed some of the most
              successful and popular add-ons on the Atlassian Marketplace.
            </p>
            <div>
              <ul className={socialMedia}>
                <li>
                  <a href="/#" alt="LinkedIn Logo">
                    {' '}
                  </a>
                </li>
                <li>
                  <a href="/#" alt="Email Logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
