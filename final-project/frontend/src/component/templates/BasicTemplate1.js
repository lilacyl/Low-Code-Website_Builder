import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import './BasicTemplate.css';

class BasicTemplate1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            templateName: "BasicTemplate1",
            isDetailView: false,
            currentSection : null,
            backgroundColor: "white",
            pageContent : {
                pageTitle : {
                    name: "pageTitle",
                    text: "My Website",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:40,
                    fontStyle:"bold"

                },
                titleText : {
                    name: "titleText",
                    text: "Hi, Welcome to my Website! My name is _________.",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:15,
                    fontStyle:"italic"

                },
                subTitle1 : {
                    name: "subTitle1",
                    text:"Enter subtitle 1 here!",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:30,
                    fontStyle:"bold"

                },
                subText1 : {
                    name: "subText1",
                    text:"You can click each section to change it's text, font, size and text color!",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:15,
                    fontStyle:"italic"

                },
                subTitle2 : {
                    name: "subTitle2",
                    text:"Subtitle 2 here!",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:30,
                    fontStyle:"bold"

                },
                subText2 : {
                    name: "subText2",
                    text:"You can also change the background color of your page by selecting \"Edit Color\"",
                    style: "div_hover",
                    color: "black",
                    backgroundColor: "white",
                    font:"Georgia",
                    fontSize:15,
                    fontStyle:"italic"

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
    
    updateSectionInfo = (section, newText, newColor, newFont, newFontSize, newFontStyle) => {
        this.setState(prevState => {
            let newPageContent = Object.assign({}, prevState.pageContent)
            newPageContent[section] = {
                ...prevState.pageContent[section],
                text: newText,
                color: newColor,
                font: newFont,
                fontSize: newFontSize,
                fontStyle: newFontStyle
            }
            return {currentSection:section, pageContent:newPageContent}
        })
    }

    componentDidMount() {
        this.props.collectTemplateStates(this.state)
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
                        this.state.pageContent[this.state.currentSection].fontStyle
                    )
                }
                if (previousProps.color !== this.props.color) {
                    this.updateSectionInfo(this.state.currentSection,
                        this.state.pageContent[this.state.currentSection].text,
                        this.props.color,
                        this.state.pageContent[this.state.currentSection].font,
                        this.state.pageContent[this.state.currentSection].fontSize,
                        this.state.pageContent[this.state.currentSection].fontStyle
                    )
                }
                if (previousProps.font !== this.props.font) {
                    this.updateSectionInfo(this.state.currentSection,
                        this.state.pageContent[this.state.currentSection].text,
                        this.state.pageContent[this.state.currentSection].color,
                        this.props.font,
                        this.state.pageContent[this.state.currentSection].fontSize,
                        this.state.pageContent[this.state.currentSection].fontStyle
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
                        this.props.fontStyle
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

                <div onClick={(e) => this.handleSectionClick(e, "subTitle1")} 
                    className={this.state.pageContent.subTitle1.style}
                    style={{backgroundColor: this.state.backgroundColor,
                        color: this.state.pageContent.subTitle1.color,
                        height: "10%",
                        fontFamily: this.state.pageContent.subTitle1.font,
                        fontSize: this.state.pageContent.subTitle1.fontSize,
                        fontWeight: this.state.pageContent.subTitle1.fontStyle}}>
                    <p>{this.state.pageContent.subTitle1.text}</p>
                </div>

                <div onClick={(e) => this.handleSectionClick(e, "subText1")}
                    className={this.state.pageContent.subText1.style}
                    style={{backgroundColor: this.state.backgroundColor,
                        color: this.state.pageContent.subText1.color,
                        height: "20%",
                        fontFamily: this.state.pageContent.subText1.font,
                        fontSize: this.state.pageContent.subText1.fontSize,
                        fontWeight: this.state.pageContent.subText1.fontStyle}}>
                    <p>{this.state.pageContent.subText1.text}</p>
                </div>

                <div onClick={(e) => this.handleSectionClick(e, "subTitle2")} 
                    className={this.state.pageContent.subTitle2.style}
                    style={{backgroundColor: this.state.backgroundColor,
                        color: this.state.pageContent.subTitle2.color,
                        height: "10%",
                        fontFamily: this.state.pageContent.subTitle2.font,
                        fontSize: this.state.pageContent.subTitle2.fontSize,
                        fontWeight: this.state.pageContent.subTitle2.fontStyle}}>
                    <p>{this.state.pageContent.subTitle2.text}</p>
                </div>

                <div onClick={(e) => this.handleSectionClick(e, "subText2")} 
                    className={this.state.pageContent.subText2.style}
                    style={{backgroundColor:this.state.backgroundColor,
                        color: this.state.pageContent.subText2.color,
                        height: "20%",
                        fontFamily: this.state.pageContent.subText2.font,
                        fontSize: this.state.pageContent.subText2.fontSize,
                        fontWeight: this.state.pageContent.subText2.fontStyle}}>
                    <p>{this.state.pageContent.subText2.text}</p>
                </div>
            </div>

            </>
        );
    };
}



export default BasicTemplate1;