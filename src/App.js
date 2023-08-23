import React, { useState, useEffect } from 'react';
import Logo from './assets/Logo.png';
import './style.css';

function App() {
  const [v1SelectedImg, setV1SelectedImg] = useState(0);
  const v1CoverFaded = false;
  const [v2SelectedTeam, setV2SelectedTeam] = useState(0);

  let v1BGAnimeOngoing = false;
  let v1BGDisplayTimeout = null;

  function startV1BGInterval() {
    const duration = 3000;

    v1BGDisplayTimeout = setTimeout(() => {
      changeV1BG((v1SelectedImg + 1) % 3); // Cycling logic remains the same
    }, duration);
  }

  function changeV1BG(id) {
    if (!v1BGAnimeOngoing) {
      clearTimeout(v1BGDisplayTimeout);

      const transition = 1000;
      v1BGAnimeOngoing = true;

      setTimeout(() => {
        setV1SelectedImg(id);
        v1BGAnimeOngoing = false;
        startV1BGInterval();
      }, transition);
    }
  }

  useEffect(() => {
    startV1BGInterval();
    return () => {
      clearTimeout(v1BGDisplayTimeout);
    };
  });

  function ScheduleTable() {
    switch (v2SelectedTeam) {
      case 0:
        return (
          <>
            <tr>
              <td>25 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>28 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>18 Dec 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>7 Jan 2017</td>
              <td>Vestibulum viverra</td>
            </tr>
          </>
        );
      case 1:
        return (
          <>
            <tr>
              <td>17 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>13 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>28 Dec 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>9 Feb 2017</td>
              <td>Vestibulum viverra</td>
            </tr>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <>
      <div id='view0' className='view'>
        <nav>
          <img src={Logo} alt='logo' />
          <span>
            <a href='#history'>01. HISTORY&#12288;</a>
            <a href='#team'>02. TEAM&#12288;</a>
          </span>
        </nav>
        {/* <h1>LOSANGELES</h1>
        <h1>MOUNTAINS</h1> */}
      </div>

      <nav className='sticky'>
        <span className='sticky-icon'>
          <img src={Logo} alt='logo' />
          <span className='sticky-title'>
            <h6>LOSANGELES</h6>
            <h6>MOUNTAINS</h6>
          </span>
        </span>
        <span className='sticky-links'>
          <a href='#history'>01. HISTORY&#12288;</a>
          <a href='#team'>02. TEAM&#12288;</a>
        </span>
      </nav>

      <div id='history' className='view'>
        <div
          className={'view1BGImg view1Carousel-thumb' + v1SelectedImg}
          onClick={() => changeV1BG((v1SelectedImg + 1) % 3)}
        />
        <div
          className={'view1BGCover' + (v1CoverFaded ? ' view1BGCoverOn' : '')}
        />
        <div className='viewTitle'>
          <h1>01.</h1>
          <h2>HISTORY</h2>
        </div>
        <p className='viewDesc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante
          viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
          Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras
          scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
          hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec
          congue.
        </p>
        <div
          className='view1Carousel'
          title="well, if this is the 'responsive' you mean in the desc"
        >
          <div className='view1Carousel-imgs'>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={'view1Carousel-thumb' + i}
                onClick={() => changeV1BG(i)}
              />
            ))}
          </div>

          <div className='view1Carousel-ellipses'>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={
                  'view1Carousel-ellipse' +
                  (v1SelectedImg === i ? ' view1Carousel-selectedEllipse' : '')
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div id='team' className={'view view2Team' + v2SelectedTeam}>
        <div className='view2Title'>
          <div className='viewTitle'>
            <h1>02.</h1>
            <h2>CLIMB</h2>
          </div>
          <p className='viewDesc'>
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
        <nav>
          <div
            className={v2SelectedTeam === 0 ? 'team-selected-tag' : ''}
            onClick={() => setV2SelectedTeam(0)}
          >
            MOUNTAIN 1
          </div>
          <div
            className={v2SelectedTeam === 1 ? 'team-selected-tag' : ''}
            onClick={() => setV2SelectedTeam(1)}
          >
            MOUNTAIN 2
          </div>
        </nav>
        <div className='view2Schedule'>
          <h3>SCHEDULE</h3>
          <table>
            <tbody>{ScheduleTable()}</tbody>
          </table>
        </div>
        <div
          className={
            'view2TagMobile' +
            (v2SelectedTeam === 0 ? ' team-selected-tag' : '')
          }
          onClick={() => setV2SelectedTeam(0)}
        >
          MOUNTAIN 1
        </div>
        {v2SelectedTeam === 0 && (
          <div className='view2Schedule0 view2ScheduleMobile'>
            <h3>SCHEDULE</h3>
            <table>
              <tbody>{ScheduleTable()}</tbody>
            </table>
          </div>
        )}
        <div
          className={
            'view2TagMobile' +
            (v2SelectedTeam === 1 ? ' team-selected-tag' : '')
          }
          onClick={() => setV2SelectedTeam(1)}
        >
          MOUNTAIN 2
        </div>
        {v2SelectedTeam === 1 && (
          <div className='view2Schedule1 view2ScheduleMobile'>
            <h3>SCHEDULE</h3>
            <table>
              <tbody>{ScheduleTable()}</tbody>
            </table>
          </div>
        )}

        <footer>
          <span className='footer-icon'>
            <img src={Logo} alt='logo' />
            <span className='footer-title'>
              <h6>LOSANGELES</h6>
              <h6>MOUNTAINS</h6>
            </span>
          </span>
          <span className='copyright'>
            COPYRIGHT 2023. MADE BY HRITHIK KUMAR
          </span>
        </footer>
      </div>
    </>
  );
}

export default App;
