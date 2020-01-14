import React from "react"

import "./sticky-wrapper.styles.scss"

import Sticky from "./sticky.component"

const StickyWrapper: React.FC = () => {
  const [isSticky, setSticky] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 40)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  return (
    <>
      <div
        className={`sticky-wrapper${isSticky ? " sticky-wrapper--sticky" : ""}`}
        ref={ref}
      >
        <Sticky />
      </div>
    </>
  )
}

export default StickyWrapper
