/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyles = css`
  /* position: fixed; */
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  /* margin: 10px 170px 0 170px; */
  /* max-width: 1200px; */
  background-color: #ffffff;
  color: #1a1a1a;
  width: 100%;

  img {
    height: 45px;
  }
`;

const navLinkStyles = css`
  list-style-type: none;
  display: flex;

  a {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #ffffff99;
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

  :hover {
    cursor: pointer;
  }
`;
const heroStyles = css`
  height: 130vh;
  margin-top: -120px;
  background-image: url(./bg-home.svg);
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;

  h1 {
    font-family: 'Playfair Display', serif;
    padding-top: 160px;
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
  padding: 80px 160px;
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

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 400;
  }
`;

const firstImg = css`
  width: 88px;
  margin: 0 104px 20px;
`;

const wrapper = css`
  display: flex;
  margin: auto;
  width: 1200px;
  justify-content: center;
`;

function App() {
  return (
    <>
      <header>
        <section css={headerStyles}>
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
          <div>
            <a href="/#">
              <img
                src="https://digitaltoucan.com/wp-content/uploads/2022/06/logo-digital-toucan-v2.svg"
                alt="Logo digital Toucan"
              />
            </a>
          </div>
          <button css={buttonStyles}>Contact Us</button>
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
          <div css={wrapper}>
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
          <div css={wrapper}>
            <div css={gridContainer}>
              <div css={card}>
                <img
                  css={firstImg}
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-jql-search-extensions-for-jira.svg"
                  alt="JQL Search Extensions for Jira"
                />
                <div css={css({ position: 'relative', height: '280px' })}>
                  <img
                    css={css({
                      position: 'absolute',
                      left: '-280px',
                      width: '424px',
                    })}
                    src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-jql-search-extensions-for-jira.jpg"
                    alt="Interface of JQL Search Extensions for Jira."
                  />
                </div>
                <h3>JQL Search Extensions for Jira</h3>
                <p>
                  Find all your issues with over 50 JQL search extensions.
                  Search Jira comments, subtasks, attachments, versions and
                  links.
                </p>
                <a href="/#">Learn More</a>
              </div>
              <div css={card}>
                <img
                  // css={secondImg}
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-jql-search-extensions-for-jira.svg"
                  alt="JQL Search Extensions for Jira"
                />
                <img
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-jql-search-extensions-for-jira.jpg"
                  alt="Interface of JQL Search Extensions for Jira."
                />
              </div>
              <div css={card}>
                <img
                  // css={secondImg}
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-jql-search-extensions-for-jira.svg"
                  alt="JQL Search Extensions for Jira"
                />
                <img
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-jql-search-extensions-for-jira.jpg"
                  alt="Interface of JQL Search Extensions for Jira."
                />
              </div>

              <div css={card}>
                <img
                  // css={thirdImg}
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/logo-jql-search-extensions-for-jira.svg"
                  alt="JQL Search Extensions for Jira"
                />
                <img
                  src="https://digitaltoucan.com/wp-content/uploads/2021/02/screenshot-jql-search-extensions-for-jira.jpg"
                  alt="Interface of JQL Search Extensions for Jira."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      Content in any sections
      <footer>footer with subfooter</footer>
    </>
  );
}

export default App;
