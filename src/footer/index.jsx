import React, { Component } from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";

class Footer extends Component {
  state = {
    isAboutDialogOpen: false
  };
  openAboutDialog = () => {
    this.setState(
      {
        isAboutDialogOpen: true
      },
      () => {
        document.addEventListener("click", this.closeAboutDialog);
      }
    );
  };
  closeAboutDialog = () => {
    this.setState(
      {
        isAboutDialogOpen: false
      },
      () => {
        document.removeEventListener("click", this.closeAboutDialog);
      }
    );
  };
  render() {
    return (
      <Wrapper>
        <Dialog
          open={this.state.isAboutDialogOpen}
          onClose={this.closeAboutDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Google Dark</DialogTitle>
          <DialogContent>
            A Dark Themed Google for those who love black and sleek.
            <span>
              Made With ❤ by{" "}
              <Link href="marvinified.github.com">Marvin Tunji-ola</Link>{" "}
            </span>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeAboutDialog} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <div>
          <Link href="https://www.google.com.ng/intl/en_ng/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
            Advertising
          </Link>
          <Link href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">
            Business
          </Link>
          <Link onClick={this.openAboutDialog}>About</Link>
        </div>
        <div>
          <Link href="https://www.google.com/intl/en_ng/policies/privacy/?fg=1">
            Privacy
          </Link>
          <Link href="https://www.google.com/intl/en_ng/policies/terms/?fg=1">
            Terms
          </Link>
          <Link href="https://www.google.com/preferences?hl=en">Settings</Link>
        </div>
      </Wrapper>
    );
  }
}

const Link = styled.a`
  color : #8C8E8F;
  text-decoration none;
  padding .5em;
  font-size small;
  cursor pointer;
`;

const Wrapper = styled.div`
  display flex;
  justify-content space-between;
  align-items center;
  width stretch;
  padding 1em 2em;
  background-color #1C2022;
  border-top .5px solid rgba(140, 142, 143, .5) 
`;

export default Footer;
