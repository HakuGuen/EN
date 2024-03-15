import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/Landing.scss"


export const TOTAL_CARDS = 8
export const CARDS = {
  "Architecture": (
    <a href={"/Intro"}>
      <div class="card card-1">
        <p class="card-title">Archietcture</p>
        <p class="card-subhead"> Global Design </p>
        <img src="/static/1-ball.png" class="card-illustration-1" />
      </div>
    </a>
  ),
  "Landscape-design": (
    <a href={"/Landscape-Design"}>
      <div class="card card-2">
        <p class="card-title">Landscape Design</p>
        <p class="card-subhead">Thiết Kế Cảnh Quan</p>
        <img src="/static/2-ball.png" class="card-illustration-2" />
      </div>
    </a>
  ),
  "Interior-design": (
    <a href={"/Interior-Design"}>
      <div class="card card-3">
        <p class="card-title">Interior Design</p>
        <p class="card-subhead">Thiết Kế Nội Thất</p>
        <img src="/static/3-ball.png" class="card-illustration-3" />
      </div>
    </a>
  ),
  "Spatial-design": (
    <a href={"/Spatial-Design"}>
      <div class="card card-4">
        <p class="card-title">Spatial Design</p>
        <p class="card-subhead">Chuyên ngành mới</p>
        <img src="/static/4-ball.png" class="card-illustration-4" />
      </div>
    </a>
  ),
  "Urban-design": (
    <a href={"/Urban-Design"}>
      <div class="card card-5">
        <p class="card-title">Urban Design</p>
        <p class="card-subhead">Thiết kế đô thị </p>
        <img src="/static/5-ball.png" class="card-illustration-5" />
      </div>
    </a>
  ),

"Industrial-design": (
  <a href={"/Industrial-Design"}>
    <div class="card card-6">
      <p class="card-title">Industrial Design</p>
      <p class="card-subhead">Đồ Nội Thất</p>
      <img src="/static/6-ball.png" class="card-illustration-6" />
    </div>
  </a>
),

"Lighting-design": (
  <a href={"/Lighting-Design"}>
    <div class="card card-7">
      <p class="card-title">Lighting Design</p>
      <p class="card-subhead">ứng dụng</p>
      <img src="/static/7-ball.png" class="card-illustration-7" />
    </div>
  </a>
),

"AI-new materials": (
  <a href={"/AI-New Materials"}>
    <div class="card card-8">
      <p class="card-title">AI & New Materials</p>
      <p class="card-subhead">ứng dụng</p>
      <img src="/static/8-ball.png" class="card-illustration-8" />
    </div>
  </a>
),
}


export default (() => {
  function LandingComponent() {
    return (
      <div>
        <div class="content-container">
          <p class="landing-header">Welcome to Design-O-Sphere</p>
          <p class="page-subhead">
            Started here•{" "}
            <a href={"/Giới-Thiệu"} target="_blank">
            About
            </a>{" "}
            •{" "}
            <a href="https://hakuguen.github.io/design-o-sphereVN" target="_blank">
            Guide
            </a>{" "}
            •{" "}
            <a href="https://hakuguen.github.io/design-o-sphereVN" target="_self">
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