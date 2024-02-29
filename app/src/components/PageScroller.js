import React from "react";
import Page from "./Page";
class PageScroller extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        scrollPos: 0,
        pageIndex: 0,
        scrollAgain: true
      };
      
      this.pages = 0;
      this.scrollLocker = () => {}
    }
    
    componentDidMount = () => {
      window.addEventListener('scroll', this.handleScroll)
    }
    
    componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll)
    }
    
    handleScroll = () => {
      const scrollPos = this.state.scrollPos
      let pageIndex = this.state.pageIndex
      const winHeight = window.innerHeight
      
      if(this.state.scrollAgain) {
        if((document.body.getBoundingClientRect()).top > scrollPos) {
          // handle scroll up
          if(pageIndex - 1 >= 0) {
            //pageIndex--;
            this.scroll(winHeight, pageIndex - 1)
          }
        } else {
          // handle scroll down
          if(pageIndex + 1 <= this.pages - 1) {
            //pageIndex++;
            this.scroll(winHeight, pageIndex + 1)
          }
        }
      } else {
        // scroll to current position if scrolling is disabled
        window.scrollTo(0, pageIndex * winHeight)
      }
    }
    
    scroll = (winHeight, pageIndex) => {
      window.scrollTo(0, winHeight * pageIndex)
  
      this.scrollLocker = setTimeout(() => {
        this.setState({scrollAgain: true});
      }, 1000)
  
      this.setState({
        scrollPos: (document.body.getBoundingClientRect()).top,
        pageIndex: pageIndex,
        scrollAgain: false
      })
    }
    
    goToPage = (index) => {
      this.scroll(window.innerHeight, index)
    }
    
    renderChildren = () => {
      let childElements = []
      let navButtons = []
      let pageCount = 0
      
      React.Children.map(this.props.children, (child, i) => {
        if(child.type === Page) {
           
          if(child.props.navTitle) {
            navButtons.push({
              title: child.props.navTitle,
              index: pageCount
            })
          }
          
          pageCount++
          childElements.push(child)
        }
      })
      
      this.pages = pageCount
      
      return childElements
    }
    
    render() {
      return(
        <div {...this.props}>
          {this.renderChildren()}
        </div>
      )
    }
}

export default PageScroller