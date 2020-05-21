import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import "@assets/sass/main.scss";

/* eslint-disable */
class Layout extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isPreloaded: true,
      footerVisible: false,
    };

    this.linkHandler = this.linkHandler.bind(this);
    this.toggleFooter = this.toggleFooter.bind(this);
  }

  linkHandler(e: any, name: string) {
    e.preventDefault();
    if (name === "about") {
      this.toggleFooter();
    }
  }

  toggleFooter() {
    this.setState({ footerVisible: !this.state.footerVisible });
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded, footerVisible } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <>
            <div
              className={`main-body ${footerVisible ? "content-active" : ""}
               ${isPreloaded ? "is-preload" : ""}`}
            >
              <div id="wrapper">
                <Header onAction={this.linkHandler} />
                <div
                  id="main"
                  onClick={(e) => {
                    if (footerVisible) {
                      e.preventDefault();
                      e.stopPropagation();
                      this.toggleFooter();
                    }
                  }}
                >
                  {children}
                </div>
                <Footer isVisible={footerVisible} onClose={this.toggleFooter} />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}


export default Layout;