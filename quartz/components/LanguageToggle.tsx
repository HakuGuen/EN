import { QuartzComponentConstructor } from "./types"
export default (() => {
  function LanguageToggle() {
    return <a class="red-text" href="https://designosphere.wiki/VN"
    >
    VIETNAMESE
 </a>
 
  }
 
  LanguageToggle.css = `
  p.red-text {
    color: red;
  }
  `
 
  return LanguageToggle
}) satisfies QuartzComponentConstructor
