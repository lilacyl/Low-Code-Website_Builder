import React from 'react';
import './BasicTemplate.css';

class BasicTemplate4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            templateName: "BasicTemplate4",
            isDetailView: false,
            currentSection : null,
            backgroundColor: "white",
            pageContent : {
                pageTitle : {
                    name: "pageTitle",
                    text: "Profolio Template",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:40,
                    fontStyle:"bold",
                    imageLink:null

                },
                titleText : {
                    name: "titleText",
                    text: "Type whatever you want here.",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:15,
                    fontStyle:"italic",
                    imageLink:null

                },
                subTitle1 : {
                    name: "subTitle1",
                    text:"Project 1",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:30,
                    fontStyle:"bold",
                    imageLink:null

                },
                subText1 : {
                    name: "subText1",
                    text:"Click on any section to start editing!",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:15,
                    fontStyle:"italic",
                    imageLink:null

                },
                subTitle2 : {
                    name: "subTitle2",
                    text:"Project 2",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:30,
                    fontStyle:"bold",
                    imageLink:null

                },
                subText2 : {
                    name: "subText2",
                    text:"Upload an image or use an online url.",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:15,
                    fontStyle:"italic",
                    imageLink:null
                },
                subTitle3 : {
                    name: "subTitle3",
                    text:"Project 3",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:30,
                    fontStyle:"bold",
                    imageLink:null

                },
                subText3 : {
                    name: "subText4",
                    text:"You can also choose color, font, size",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:15,
                    fontStyle:"italic",
                    imageLink:null
                },
                footer : {
                    name: "footer",
                    text:"email: cats@no-such-email.com",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:15,
                    fontStyle:"italic",
                    imageLink:null
                }
            }
        };
    }


    resetSection = () => {
        if (this.state.isDetailView === false) {
                // Reset hover status for all sections
                this.setState((prevState, props) => {
                    let newPageContent = {
                        pageTitle : {
                            ...prevState.pageContent.pageTitle ,
                            style: "div_hover"

                        },
                        titleText : {
                            ...prevState.pageContent.titleText ,
                            style: "div_hover"

                        },
                        subTitle1 : {
                            ...prevState.pageContent.subTitle1 ,
                            style: "div_hover"

                        },
                        subText1 : {
                            ...prevState.pageContent.subText1 ,
                            style: "div_hover"

                        },
                        subTitle2 : {
                            ...prevState.pageContent.subTitle2 ,
                            style: "div_hover"

                        },
                        subText2 : {
                            ...prevState.pageContent.subText2 ,
                            style: "div_hover"

                        },
                        subTitle3 : {
                            ...prevState.pageContent.subTitle3 ,
                            style: "div_hover"

                        },
                        subText3 : {
                            ...prevState.pageContent.subText3 ,
                            style: "div_hover"

                        },
                        footer : {
                            ...prevState.pageContent.footer ,
                            style: "div_hover"

                        }
                    }
                    return {pageContent:newPageContent}
            })

            // Pass empty strings and texts to parent
            this.props.updateText("")
            this.props.updateColor("")
        }
    };

    updateClickedSection = (section) => {
        if (this.state.isDetailView === false) {
            this.setState(prevState => {
                let newPageContent = Object.assign({}, prevState.pageContent)
                newPageContent[section] = {
                    ...prevState.pageContent[section],
                    style: "div_clicked"
                }
                return {currentSection:section, pageContent:newPageContent}
            })
        }
    };


    handleSectionClick(e, section) {
        this.resetSection()
        if (this.state.currentSection === section) {
            this.setState({currentSection:null})
        } else {
            this.updateClickedSection(section)
            this.props.updateText(this.state.pageContent[section].text)
            this.props.updateColor(this.state.pageContent[section].color)
        }
    };
    
    updateSectionInfo = (section, newText, newColor, newFont, newFontSize, newFontStyle, newImageLink) => {
        this.setState(prevState => {
            let newPageContent = Object.assign({}, prevState.pageContent)
            newPageContent[section] = {
                ...prevState.pageContent[section],
                text: newText,
                color: newColor,
                font: newFont,
                fontSize: newFontSize,
                fontStyle: newFontStyle,
                imageLink:newImageLink
            }
            return {currentSection:section, pageContent:newPageContent}
        })
    }

    componentDidMount() {
        this.props.updateBackgroundColor(this.state.backgroundColor)
        if (this.props.templateState !== null &&  this.props.isDetailView === true) {

            this.setState((prevState, props) => {
                let newPageContent = {
                    pageTitle : {
                        ...props.templateState.pageContent.pageTitle ,
                        style: "none"

                    },
                    titleText : {
                        ...props.templateState.pageContent.titleText ,
                        style: "none"

                    },
                    subTitle1 : {
                        ...props.templateState.pageContent.subTitle1 ,
                        style: "none"

                    },
                    subText1 : {
                        ...props.templateState.pageContent.subText1 ,
                        style: "none"

                    },
                    subTitle2 : {
                        ...props.templateState.pageContent.subTitle2 ,
                        style: "none"

                    },
                    subText2 : {
                        ...props.templateState.pageContent.subText2 ,
                        style: "none"

                    },
                    subTitle3 : {
                        ...props.templateState.pageContent.subTitle3 ,
                        style: "none"

                    },
                    subText3 : {
                        ...props.templateState.pageContent.subText3 ,
                        style: "none"

                    },
                    footer : {
                        ...props.templateState.pageContent.footer ,
                        style: "none"

                    }
                }
                return {pageContent:newPageContent, isDetailView: props.isDetailView, backgroundColor: props.templateState.backgroundColor}
        })
        }
    }
    
    componentDidUpdate(previousProps, previousState) {
        if (this.state.isDetailView !== true) {
                
            if (this.state.currentSection !== null) {
                if (previousProps.text !== this.props.text) {
                    this.updateSectionInfo(this.state.currentSection,
                        this.props.text,
                        this.state.pageContent[this.state.currentSection].color,
                        this.state.pageContent[this.state.currentSection].font,
                        this.state.pageContent[this.state.currentSection].fontSize,
                        this.state.pageContent[this.state.currentSection].fontStyle,
                        this.state.pageContent[this.state.currentSection].imageLink
                    )
                }
                if (previousProps.color !== this.props.color) {
                    this.updateSectionInfo(this.state.currentSection,
                        this.state.pageContent[this.state.currentSection].text,
                        this.props.color,
                        this.state.pageContent[this.state.currentSection].font,
                        this.state.pageContent[this.state.currentSection].fontSize,
                        this.state.pageContent[this.state.currentSection].fontStyle,
                        this.state.pageContent[this.state.currentSection].imageLink
                    )
                }
                if (previousProps.font !== this.props.font) {
                    this.updateSectionInfo(this.state.currentSection,
                        this.state.pageContent[this.state.currentSection].text,
                        this.state.pageContent[this.state.currentSection].color,
                        this.props.font,
                        this.state.pageContent[this.state.currentSection].fontSize,
                        this.state.pageContent[this.state.currentSection].fontStyle,
                        this.state.pageContent[this.state.currentSection].imageLink
                    )
                }
                if (previousProps.fontSize !== this.props.fontSize) {
                    this.updateSectionInfo(this.state.currentSection,
                        this.state.pageContent[this.state.currentSection].text,
                        this.state.pageContent[this.state.currentSection].color,
                        this.state.pageContent[this.state.currentSection].font,
                        this.props.fontSize,
                        this.state.pageContent[this.state.currentSection].fontStyle
                    )
                }
                if (previousProps.fontStyle !== this.props.fontStyle) {
                    this.updateSectionInfo(this.state.currentSection,
                        this.state.pageContent[this.state.currentSection].text,
                        this.state.pageContent[this.state.currentSection].color,
                        this.state.pageContent[this.state.currentSection].font,
                        this.state.pageContent[this.state.currentSection].fontSize,
                        this.props.fontStyle,
                        this.state.pageContent[this.state.currentSection].imageLink
                    )
                }
                if (previousProps.imageLink !== this.props.imageLink) {
                    this.updateSectionInfo(this.state.currentSection,
                        this.state.pageContent[this.state.currentSection].text,
                        this.state.pageContent[this.state.currentSection].color,
                        this.state.pageContent[this.state.currentSection].font,
                        this.state.pageContent[this.state.currentSection].fontSize,
                        this.state.pageContent[this.state.currentSection].fontStyle,
                        this.props.imageLink
                    )
                }
            }
            if (previousProps.backgroundColor !== this.props.backgroundColor) {
                this.setState((state, props) => ({backgroundColor: this.props.backgroundColor}))
            }
            if (previousProps.imageLink !== this.props.imageLink) {
                this.setState((state, props) => ({imageLink: this.props.imageLink}))
            }
            if (previousState.pageContent !== this.state.pageContent ||
                previousState.backgroundColor !== this.state.backgroundColor ) {
                // TODO: 
                this.props.collectTemplateStates(this.state)
            }
        }
    };

    render() {
        return (
            
            <>
            <div id='container' style={{textAlign:"center", 
                        // display:"flex",
                        flexDirection:"column",
                        backgroundColor: this.state.backgroundColor}}>
                
                <div onClick={(e) => this.handleSectionClick(e, "pageTitle")} 
                    className={this.state.pageContent.pageTitle.style}
                    style={{textAlign:"center", 
                        backgroundColor: this.state.backgroundColor,
                        color: this.state.pageContent.pageTitle.color,
                        margin:0,
                        height: "10%",
                        fontFamily: this.state.pageContent.pageTitle.font,
                        fontSize: this.state.pageContent.pageTitle.fontSize,
                        fontWeight: this.state.pageContent.pageTitle.fontStyle}}>
                    <p>{this.state.pageContent.pageTitle.text}</p>
                </div>
                <div onClick={(e) => this.handleSectionClick(e, "titleText")}
                    className={this.state.pageContent.titleText.style}
                    style={{backgroundColor: this.state.backgroundColor, 
                        color: this.state.pageContent.titleText.color,
                        margin:0,
                        height: "20%",
                        fontFamily: this.state.pageContent.titleText.font,
                        fontSize: this.state.pageContent.titleText.fontSize,
                        fontWeight: this.state.pageContent.titleText.fontStyle}}>
                    <p>{this.state.pageContent.titleText.text}</p>
                </div>

                <div style={{textAlign:"center", 
                        display:"flex",
                        justifyContent:"space-evenly",
                        backgroundColor: this.state.backgroundColor}}>

                    <div  style={{textAlign:"center", 
                        flexDirection:"column",
                        width: "45%"}}>
                        <div onClick={(e) => this.handleSectionClick(e, "subTitle1")} 
                            className={this.state.pageContent.subTitle1.style}
                            style={{backgroundColor: this.state.backgroundColor,
                                color: this.state.pageContent.subTitle1.color,
                                height: "10vh",
                                fontFamily: this.state.pageContent.subTitle1.font,
                                fontSize: this.state.pageContent.subTitle1.fontSize,
                                fontWeight: this.state.pageContent.subTitle1.fontStyle}}>
                            <p>{this.state.pageContent.subTitle1.text}</p>
                        </div>

                        <div onClick={(e) => this.handleSectionClick(e, "subText1")}
                            className={this.state.pageContent.subText1.style}
                            style={{backgroundColor: this.state.backgroundColor,
                                color: this.state.pageContent.subText1.color,
                                height: "33vh",
                                fontFamily: this.state.pageContent.subText1.font,
                                fontSize: this.state.pageContent.subText1.fontSize,
                                fontWeight: this.state.pageContent.subText1.fontStyle}}>
                            <p>{this.state.pageContent.subText1.text}</p>
                            {/* TODO:  */}
                            {this.state.pageContent.subText1.imageLink != null
                                ? <img style={{ height: "20vh"}} src={this.state.pageContent.subText1.imageLink} alt="User uploaded photo in section1"></img>
                                : <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh_-7NSQ7J-RyYt42aP7R2ujOEvNUZtkKvGSX4DWMyA&s"} alt="Default cat photo"></img>
                            }
                            
                        </div>
                    </div>
                            
                    <div  style={{textAlign:"center", 
                        flexDirection:"column",
                        width: "45%"}}>
                        <div onClick={(e) => this.handleSectionClick(e, "subTitle2")} 
                        className={this.state.pageContent.subTitle2.style}
                        style={{backgroundColor: this.state.backgroundColor,
                            color: this.state.pageContent.subTitle2.color,
                            height: "10vh",
                            fontFamily: this.state.pageContent.subTitle2.font,
                            fontSize: this.state.pageContent.subTitle2.fontSize,
                            fontWeight: this.state.pageContent.subTitle2.fontStyle}}>
                        <p>{this.state.pageContent.subTitle2.text}</p>
                        </div>

                        <div onClick={(e) => this.handleSectionClick(e, "subText2")} 
                            className={this.state.pageContent.subText2.style}
                            style={{backgroundColor:this.state.backgroundColor,
                                color: this.state.pageContent.subText2.color,
                                height: "33vh",
                                fontFamily: this.state.pageContent.subText2.font,
                                fontSize: this.state.pageContent.subText2.fontSize,
                                fontWeight: this.state.pageContent.subText2.fontStyle}}>
                            <p>{this.state.pageContent.subText2.text}</p>
                            {this.state.pageContent.subText2.imageLink != null
                                // ? <>{this.state.pageContent.subText2.imageLink}</>
                                ?  <img style={{ height: "20vh"}} src={this.state.pageContent.subText2.imageLink} alt="User uploaded photo in section 2"></img>
                                : <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh_-7NSQ7J-RyYt42aP7R2ujOEvNUZtkKvGSX4DWMyA&s"} alt="Default cat photo"></img>
                            }
                        </div>
                    </div>
                    
                    <div  style={{textAlign:"center", 
                        flexDirection:"column",
                        width: "45%"}}>
                        <div onClick={(e) => this.handleSectionClick(e, "subTitle3")} 
                        className={this.state.pageContent.subTitle3.style}
                        style={{backgroundColor: this.state.backgroundColor,
                            color: this.state.pageContent.subTitle3.color,
                            height: "10vh",
                            fontFamily: this.state.pageContent.subTitle3.font,
                            fontSize: this.state.pageContent.subTitle3.fontSize,
                            fontWeight: this.state.pageContent.subTitle3.fontStyle}}>
                        <p>{this.state.pageContent.subTitle3.text}</p>
                        </div>

                        <div onClick={(e) => this.handleSectionClick(e, "subText3")} 
                            className={this.state.pageContent.subText3.style}
                            style={{backgroundColor:this.state.backgroundColor,
                                color: this.state.pageContent.subText3.color,
                                height: "33vh",
                                fontFamily: this.state.pageContent.subText3.font,
                                fontSize: this.state.pageContent.subText3.fontSize,
                                fontWeight: this.state.pageContent.subText3.fontStyle}}>
                            <p>{this.state.pageContent.subText3.text}</p>
                            {this.state.pageContent.subText3.imageLink != null
                                // ? <>{this.state.pageContent.subText2.imageLink}</>
                                ?  <img style={{ height: "20vh"}} src={this.state.pageContent.subText3.imageLink} alt="User uploaded photo in section 3"></img>
                                : <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh_-7NSQ7J-RyYt42aP7R2ujOEvNUZtkKvGSX4DWMyA&s"} alt="Default cat photo"></img>
                            }
                        </div>
                    </div>
                </div>

                <div onClick={(e) => this.handleSectionClick(e, "footer")} 
                            className={this.state.pageContent.footer.style}
                            style={{backgroundColor:this.state.backgroundColor,
                                color: this.state.pageContent.footer.color,
                                height: "10vh",
                                fontFamily: this.state.pageContent.footer.font,
                                fontSize: this.state.pageContent.footer.fontSize,
                                fontWeight: this.state.pageContent.footer.fontStyle,
                                verticalAlign:"middle",
                                position:"relative",
                                display: "flex",
                                justifyContent:"center"}}
                                >
                            <div style={{
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                margin:"auto"
                                }}>
                                <p>{this.state.pageContent.footer.text}</p>
                            </div>
                        </div>
            </div>

            </>
        );
    };
}



export default BasicTemplate4;