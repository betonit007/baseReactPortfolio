import React from 'react'
import { ReactComponent as LinkedIn } from '../../utils/imgs/SVG/linkedin.svg'
import { ReactComponent as YouTube } from '../../utils/imgs/SVG/youtube.svg'
import { ReactComponent as Twitter } from '../../utils/imgs/SVG/twitter.svg'
import { ReactComponent as Github } from '../../utils/imgs/SVG/github.svg'
import { ReactComponent as Facebook } from '../../utils/imgs/SVG/facebook.svg'
import { ReactComponent as Instagram } from '../../utils/imgs/SVG/instagram.svg'
import { ReactComponent as ResumeIcon } from '../../utils/imgs/SVG/resume.svg'
import resume from '../../utils/resume.docx';

const SocialLinks = ({ fillColor }) => {

    const styles = {
        display: 'flex'
    }

    const socialStyle = {
        fill: fillColor,
        margin: '10px'
    }

    return (
        <div className='socialLinksContainer' style={styles}>
            <a href="https://www.linkedin.com/in/tim-nagorski-7a188091/" target="_blank" rel="noopener noreferrer">
                <LinkedIn style={{...socialStyle, marginLeft: 0}} />
            </a>
            <a href="https://github.com/betonit007" target="_blank" rel="noopener noreferrer">
                <Github style={socialStyle} />
            </a>
            <a href="https://twitter.com/Timmydrone" target="_blank" rel="noopener noreferrer">
                <Twitter style={socialStyle} />
            </a>
            <a href="https://www.instagram.com/timmydrones" target="_blank" rel="noopener noreferrer">
                <Instagram style={socialStyle} />
            </a>
            <a href="https://www.facebook.com/tim.nagorski" target="_blank" rel="noopener noreferrer">
                <Facebook style={socialStyle} />
            </a>
            <a href="https://www.youtube.com/channel/UCoK0KHwtkBURRiftcH0mr-w" target="_blank" rel="noopener noreferrer">
                <YouTube style={socialStyle} />
            </a>
            <a href={resume} alt='resume' target='_blank' rel="noopener noreferrer">
                <ResumeIcon style={socialStyle} />
            </a>
        </div>
    )
}

export default SocialLinks
