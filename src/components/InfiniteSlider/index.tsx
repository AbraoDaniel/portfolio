import { CssIcon, HtmlIcon, PostgresIcon, ReactIcon, RubyIcon, TailwindIcon, TypescriptIcon } from "../icons/languagesIcons"

const InfiniteSlider: React.FC = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {[1,2]?.map(() => {
          return (
            <>
              <div className="slide">
                <ReactIcon />
              </div>
              <div className="slide">
                <TypescriptIcon />
              </div>
              <div className="slide">
                <CssIcon />
              </div>
              <div className="slide">
                <TailwindIcon />
              </div>
              <div className="slide">
                <RubyIcon />
              </div>
              <div className="slide">
                <PostgresIcon />
              </div>
              <div className="slide">
                <HtmlIcon />
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default InfiniteSlider