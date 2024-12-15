import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

  const handleCardClick = (text) => {
    setInput(text); 
  };
  return (
        <div className="main">

          <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
          </div>
            <div className="main-container">
              {!showResult
                ?<>
                <div className="greet">
                    <p><span>Hello,Dev.</span></p>
                    <p>How can I hepl you today?</p>
                  </div>
                  <div className="cards">
                    <div className="card" onClick={() => handleCardClick("Suggest beautiful places to see on an upcoming road trip")}>
                      <p>Suggest beautiful places to see on an upcoming road trip</p>
                      <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card" onClick={() => handleCardClick("Breifly Summarize this concept:urban planning")}>
                      <p>Breifly Summarize this concept:urban planning</p>
                      <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card" onClick={() => handleCardClick("Brainstorm team bonding activites for our work retreat")}>
                      <p>Brainstorm team bonding activites for our work retreat</p>
                      <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card" onClick={() => handleCardClick("Improve the redability of the following code")}>
                      <p>Improve the redability of the following code</p>
                      <img src={assets.code_icon} alt="" />
                    </div>
                  </div>
                </>:<div className='result'>
                      <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                      </div>
                      <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />

                        </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                      }
                      </div>
                    </div>
              }
              

              <div className="main-bottom">
                  <div className="search-box">
                    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Enter a Prompt here' />
                      <div>
                       {input ? <img  onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                      </div>
                  </div>
                  <p className='bottom-info'>
                    Gemini may display inaccurate info,including about people,so double check its responses.your privacy and Gemini Apps

                  </p>
              </div>
            </div>
        </div>

  )
}

export default Main