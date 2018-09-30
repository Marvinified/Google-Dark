import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";

class App extends Component {
  state = {
    searchText: ""
  };
  handleUserInput = e => {
    const searchText = e.target.value;
    this.setState({
      searchText
    });
  };
  sendSearchQuery = e => {
    let text = this.state.searchText;
    text = text.replace(/\s/g, "+");
    const query = `https://www.google.com.ng/search?q=${text}`;
    window.location.href = query;
  };
  feelLucky = e => {
    const goToDoodles = "https://www.google.com/doodles/";
    window.location.href = goToDoodles;
  };
  render() {
    return (
      <Container>
        <Nav />
        <Main>
          <div>
            <Image alt="Google" src={require("./asset/google.png")} />
          </div>
          <SearchBox>
            <SearchInput onChange={this.handleUserInput} />
            <MicButton />
          </SearchBox>
          <div>
            <Button onClick={this.sendSearchQuery}>Google Search</Button>
            <Button onClick={this.feelLucky}>I'm Feeling Lucky</Button>
          </div>
        </Main>
        <Footer />
      </Container>
    );
  }
}

const Container = styled.div`
  background-color #141618;
  width stretch;
  height stretch;
  color  #8C8E8F;
  display flex;
  flex-direction column;
  justify-content space-between;
  align-items center;
`;

const Main = styled.div`
  display flex;
  flex-direction column;
  justify-content center;
  align-items center;
  width : stretch;
`;

const Image = styled.img`
  padding 1em;
`;

const SearchBox = styled.div`
  width: 600px;
  display flex;
  flex-wrap no-wrap;
  height : 30px;
  background-color #141618;
  padding : .5em;
  box-shadow 0em .1em .5em 0em rgba(100, 100, 100, .2);
  &:hover, &:focus-within{
    box-shadow 0em .1em .5em 0em rgba(100, 100, 100, .3);
  }
`;

const SearchInput = styled.input`
  background-color transparent;
  border 0; 
  height inherit;
  width stretch; 
  color  #8C8E8F;
  outline 0;
  font-size 18px;
`;

const MicButton = styled.button`
  border 0;
  outline 0;
  cursor pointer;
  width : 30px;
  background : url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACrElEQVR42u2Xz2sTQRSAX8VSb1K8iNqKooJH2Ux6Ksn+iPQqxZMIehJB0do/IMhmQWsvHr2KSEGk0tSLIoWIYNUKij20F2/N7iaUZnYT0kYzzhMKs0HDJiTdLcwHDwKZSd63781LBiQSSW9JZdkhzfKm1Rz9mjZp/W9YdEU3vXv4HsQZ40FtNG36q5rls//Ej4tmbSS2T15Mvp3ExOPmEMQNbBtMMEyoljcFcQN7PqyAlqNfIG7gYQ0tYNIaxA1MrJPY3wImbUqBKAXSFv0tBSIVMOkvKRDtGKWN/T6FdqRAxFNoWwpEPIXqUqBT6ALU/UVgu8GW4GD3f6f9TRDYNJTDrk7YbtiqUumHwIYoUJuHERDAS0r4CvgFECgbY+cFAR7KT+g1POmCKFDNw6WggHc3fBtVb4CAoyauBgXIG+g1Xh5mRAGah6cggBd11fK/h7lOprIs0H6uRl6KAo5O7kOv4QmPiwJ4Jqqv4FiwCtXjvD2+tRmfK6kZ/ygI2HritK0rDVGgrClJ6DWMwYC/AGuCBMYcIC2V0CzvjmbRz3j3xUjn6CfeYreUJ2wQkGD75INPX1mFfsEFrrcIYCvdhC4paWQakxajpJMr0C9YFg54i7AsClRmh9/xnr0NHcInzZStk2aLwAcGMAD9pPIazvFKVDD5rdnhJeHLX5RTyRPQHpz5o66emMc9wdlPtvA8wF7Aq2BUHh1525qEo5JtR1WeOXpickO9cJIpyuD6xJmhYiZ5ytWSl3mlnuOaf+2zDaLDXmJrSgZ/MYVEugo+gSh+FkSBa4yd5Ul87DZ5XpFl/AyIEjzYjkau8WqshU2cr13HPbgX4gJOD97n465GZlyVvC9mSKloKI2iTnbwNT+gBX54H+IaXAtxJzE3ycSAFqSAFJACUkAikXD+AHj5/wx2o5osAAAAAElFTkSuQmCC) no-repeat ;
  background-size : 100% 100%;
`;

const Button = styled.button`
  border 0;
  padding 1em;
  font-size 13px;
  font-weight bold;
  margin 2em .5em;
  background-color #1C2022;
  color #8C8E8F;
  cursor pointer;
  &:hover{
    box-shadow 0em 0em .1em .1em rgba(100, 100, 100, .5)
  }
`;

export default App;
