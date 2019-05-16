import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  mainContent: {
    margin: 'auto',
    maxWidth: '500px',
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.mainContent}>
        <header>
          <h1>
            HFL Signage Player: Management UI 0.3.0
          </h1>
          <p>
            <small>
              Copyright © 2018 Henrik Franciscus Leppä<br />
              All rights reserved.
            </small>
          </p>
        </header>
        <p>
          Welcome!
        </p>
        <p>
          This is the management UI for HFL Signage Player.
        </p>
        <p>
          With this web app you can create HTML signs that show products and
          such, upload files (like images and videos) that you can attach to
          those signs, and create playlists &ndash; collections of signs that are
          shown in sequence.
        </p>
        <p>
          <strong>Note:</strong> All the work you do is autosaved. Your changes
          only show up in Front-end once you refresh the page in it. Autosaving
          cannot be turned off in this version.
        </p>
      </main>
    );
  }
}

const HomeStyled = withStyles(styles)(Home);

export default HomeStyled;
