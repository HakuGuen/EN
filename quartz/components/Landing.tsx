import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/Landing.scss"


export const TOTAL_CARDS = 8
export const CARDS = {
  "Architecture": (
    <a href={"./Architecture/An-Outline"}>
      <div class="card card-1">
        <p class="card-title">Architecture</p>
        <p class="card-subhead">101</p>
        <img src="/EN/static/1-ball.png" class="card-illustration-1" />
      </div>
    </a>
  ),
  "Landscape-design": (
    <a href={"./Landscape-Design/An-Outline"}>
      <div class="card card-2">
        <p class="card-title">Landscape Design</p>
        <p class="card-subhead">101</p>
        <img src="/EN/static/2-ball.png" class="card-illustration-2" />
      </div>
    </a>
  ),
  "Interior-design": (
    <a href={"./Interior-Design/An-Outline"}>
      <div class="card card-3">
        <p class="card-title">Interior Design</p>
        <p class="card-subhead">101</p>
        <img src="/EN/static/3-ball.png" class="card-illustration-3" />
      </div>
    </a>
  ),
  "Spatial-design": (
    <a href={"./Spatial-Design/An-Outline"}>
      <div class="card card-4">
        <p class="card-title">Spatial Design</p>
        <p class="card-subhead">101</p>
        <img src="/EN/static/4-ball.png" class="card-illustration-4" />
      </div>
    </a>
  ),
  "Urban-design": (
    <a href={"./Urban-Design/An-Outline"}>
      <div class="card card-5">
        <p class="card-title">Urban Design</p>
        <p class="card-subhead">101</p>
        <img src="/EN/static/5-ball.png" class="card-illustration-5" />
      </div>
    </a>
  ),

"Industrial-design": (
  <a href={"./Industrial-Design/An-Outline"}>
    <div class="card card-6">
      <p class="card-title">Industrial Design</p>
      <p class="card-subhead">101</p>
      <img src="/EN/static/6-ball.png" class="card-illustration-6" />
    </div>
  </a>
),

"Lighting-design": (
  <a href={"./Lighting-Design/An-Outline"}>
    <div class="card card-7">
      <p class="card-title">Lighting Design</p>
      <p class="card-subhead">101</p>
      <img src="/EN/static/7-ball.png" class="card-illustration-7" />
    </div>
  </a>
),

"Material-design": (
  <a href={"./Material-Design"}>
    <div class="card card-8">
      <p class="card-title">Materials in Design</p>
      <p class="card-subhead">101</p>
      <img src="/EN/static/8-ball.png" class="card-illustration-8" />
    </div>
  </a>
),
}


export default (() => {
  function LandingComponent() {
    return (
      <div>
        <div class="content-container">
          <p class="landing-header">Welcome to DesignOsphere</p>
          <p class="page-subhead">
            Started here•{" "}
            <a href="https://designosphere.wiki" target="_blank">
            Main Page
            </a>{" "}
            •{" "}
            <a href="https://designosphere.wiki/EN/Intro" target="_blank">
            About
            </a>{" "}
            •{" "}
            <a href="https://designosphere.wiki/EN/Intro" target="_self">
            Contact
            </a>{" "}
            •{" "}
            
          </p>
          <div class="issue-container">
            {Object.values(CARDS)}
            {Array(TOTAL_CARDS - Object.keys(CARDS).length)
              .fill(0)
              .map(() => (
                <div class="card card-coming">
                  <p class="card-title">Coming Soon</p>
                  <p class="card-subhead">Issue XXX</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor