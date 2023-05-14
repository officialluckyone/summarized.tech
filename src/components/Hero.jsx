import { logo } from '../assets';


const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col" >
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img 
                src={logo} 
                alt="SumzLogo"
                className="w-28 object-contain"
            />
            <button 
                type="button"
                onClick={() => window.open('https://github.com/officialluckyone')}
                className="black_btn"
                >
            Github
            </button>
        </nav>

        <h1 className="head_text">Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
        Struggling to understand lengthy articles? <br className="md:block hidden" />Introducing <span className="orange_gradient text-bold">summarized.tech</span> - a free online tool that summarizes complex texts into concise and lucid summaries. Save time and effort by getting the key points of any article with just one click.
        </h2>
    </header>
  )
}

export default Hero