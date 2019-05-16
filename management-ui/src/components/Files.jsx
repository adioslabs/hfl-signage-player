import React, { Component } from 'react';
import { Button, withStyles } from '@material-ui/core';
import { OpenInNew } from '@material-ui/icons';

const styles = theme => ({
  mainContent: {
    textAlign: 'center',
  },
});

class Files extends Component {

  render() {
    const { classes } = this.props;
    const uploadDirectory = process.env.REACT_APP_BACK_END_URL + 'uploads';

    return (
      <main className={classes.mainContent}>
        <h1>
          Files
        </h1>
        <p>
          <a
            href={uploadDirectory}
            target="_blank"
            rel="external noopener noreferrer"
          >
            <abbr title="Opens in a new tab/window">
              <OpenInNew fontSize="inherit" />
            </abbr>
            Browser files in Back-end (check after send).
          </a>
        </p>
        <p>
          <strong>Note:</strong> In addition to uploading the file, you must
          also include it in a sign, before you can use it in a playlist.
        </p>
        <p>
          <strong>Note:</strong> You can get a file&rsquo;s <abbr>URL</abbr> by
          right-clicking it and selecting &ldquo;Copy link address&rdquo;.
        </p>
        <section>
          <h2>
            Upload
          </h2>
          <form
            action={uploadDirectory}
            method="POST"
            encType="multipart/form-data"
          >
            <p>
              <input type="file" name="file" />
            </p>
            <p>
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </p>
          </form>
        </section>
      </main>
    );
  }
}

const FilesStyled = withStyles(styles)(Files);

export default FilesStyled;
