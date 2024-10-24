import About from "./about/page"
import Image from "next/image"
import Contact from "./contact/page"

export default function Main_Page() {
  return (
    <div>

      {/* image section */}
      <Image src={"/new-img.jpg"} width={300} height={100} alt="my-image" className="img" />

      {/* introduction */}
      <main className="main-introduction">
        <div className="introduction">
          <h2 className="">
            Building High-Impact, User-Centered Websites
          </h2>
          <p className="introduction">
            I create websites that combine sleek design with top-notch performance.
            My focus is on delivering responsive, engaging, and technically robust solutions
            that drive user interaction and business success.
          </p>
        </div>
      </main>
      <About />
      <Contact />
    </div>
  )
}
