# TODO
- // https://www.npmjs.com/package/react-tsparticles
- Expand timeline
- flexbox skill
- scroll app bar
- Fix zoom on index

# References
- https://preview.themeforest.net/item/matresume-material-cv-resume-vcard-portfolio-html-template/full_screen_preview/19309564
- https://bslthemes.site/html/mcard/theme_colors/purple/index-2-video.html
- https://materialui-portfolio.netlify.app/


// const [showElements, setShowElements] =
// useState({codeSkills: false, softSkills: false, experience: false, education: false})

// const onScroll = () => {
//   const elements: string[] = Object.keys(showElements)
//   elements.forEach(element => {
//     const elementY = document.getElementById(element)?.getBoundingClientRect().top || 0
//     if(elementY - window.innerHeight < -30 && !showElements[element as keyof typeof showElements]) {
//       setShowElements({...showElements, [element]: true})
//     }
//   });
// };

// useEffect(() => {
//   window.onscroll = () => onScroll()
// }, []);