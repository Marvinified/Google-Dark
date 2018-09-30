import React, { Component } from "react";
import styled from "styled-components";
import { Apps, Notifications } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

class Nav extends Component {
  state = {
    IsAppsDropDowmOpen: false
  };

  openAppsDropDown = () => {
    this.setState(
      {
        IsAppsDropDowmOpen: true
      },
      () => {
        document.addEventListener("click", this.closeAppsDropDown);
      }
    );
  };
  closeAppsDropDown = () => {
    this.setState(
      {
        IsAppsDropDowmOpen: false
      },
      () => {
        document.removeEventListener("click", this.closeAppsDropDown);
      }
    );
  };
  render() {
    const { IsAppsDropDowmOpen } = this.state;
    return (
      <Wrapper>
        <Item>
          <Link href="https://mail.google.com">Gmail</Link>
        </Item>
        <Item>
          <Link href="https://www.google.com.ng/imghp?hl=en&tab=wi&authuser=0">
            Images
          </Link>
        </Item>
        <Item>
          <Apps onClick={this.openAppsDropDown} />
          {IsAppsDropDowmOpen && (
            <AppsDropDown>
              <AppsDropDownList>
                <AppsDropDownListItem href="https://myaccount.google.com">
                  <Image src={require("../asset/account.png")} />
                  Account
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://www.google.com">
                  <Image src={require("../asset/G.png")} />
                  Search
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://maps.google.com">
                  <Image src={require("../asset/GMap.png")} />
                  Maps
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://www.youtube.com">
                  <Image src={require("../asset/youtube.png")} />
                  YouTube
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://play.google.com">
                  <Image src={require("../asset/GPlay.png")} />
                  Play
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://news.google.com">
                  <Image src={require("../asset/GNews.png")} />
                  News
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://mail.google.com">
                  <Image src={require("../asset/GMail.png")} />
                  Gmail
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://contacts.google.com">
                  <Image src={require("../asset/GContacts.png")} />
                  Contacts
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://drive.google.com">
                  <Image src={require("../asset/GDrive.png")} />
                  Drive
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://www.google.com/calendar">
                  <Image src={require("../asset/GCalendar.png")} />
                  Calendar
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://plus.google.com">
                  <Image src={require("../asset/G+.png")} />
                  Google+
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://translate.google.com">
                  <Image src={require("../asset/GTranslate.png")} />
                  Translate
                </AppsDropDownListItem>
                <AppsDropDownListItem href="https://photos.google.com">
                  <Image src={require("../asset/GPhotos.png")} />
                  Photos
                </AppsDropDownListItem>
              </AppsDropDownList>

              <Link href="https://www.google.com.ng/intl/en/options/">
                <LearnMoreButton>Learn More</LearnMoreButton>
              </Link>
            </AppsDropDown>
          )}
        </Item>
        <Item>
          <Notifications />
        </Item>
        <Item>
          <Avatar
            style={{
              width: "1.5em",
              height: "1.5em",
              backgroundColor: "#6CAEDD"
            }}
          >
            M
          </Avatar>
        </Item>
      </Wrapper>
    );
  }
}

const LearnMoreButton = styled.button`
  color #8C8E8F;
  width stretch;
  padding 1em 1em;
  background-color : #24282A;
  border 0;
`;
const Image = styled.img`
  width 50px;
  height 50px;
`;
const AppsDropDownListItem = styled.a`
  display flex;
  flex-direction column;
  justify-content space-evenly;
  align-items center;
  width 80px;
  height 80px;
  color #8C8E8F;
  text-decoration none;
  border .5px solid transparent;
  &:hover{
    border .5px solid #8C8E8F;
  }
`;

const AppsDropDownList = styled.div`
  display grid;
  grid-template-columns repeat(3, 1fr);
  grid-template-rows repeat(5, 1fr);
  grid-gap 1em;
  padding 2em;
`;

const Wrapper = styled.div`
  width stretch;
  background-color transparent;
  padding .5em;
  color  #8C8E8F;
  display flex;
  justify-content flex-end;
  align-items center;
  

`;

const Item = styled.span`
  padding .5em;
  font-size small;

`;
const Link = styled.a`
  color: #8C8E8F;
  text-decoration none;
`;

const AppsDropDown = styled.div`
  // padding 2em 2em 0em 2em;
  width: fit-content;
  height fit-content;
  // border 2px solid #24282A;
  background-color #141618;
  position absolute;
  margin 1em ;
  box-shadow 0em 0em 1em .1em rgba(100, 100, 100, .2);
  right 0em;
  &::before{
    content : "";
    background-color: #;
    position : absolute;
    top: -10px;
    right 6.2em;
    border-left : 10px solid transparent;
    border-right : 10px solid transparent;
    border-bottom : 10px solid #141618;
  }
`;
export default Nav;
