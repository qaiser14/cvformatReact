// import React from 'react'
// import ReactDom from 'react-dom'

// ReactDom.render(
//   <div>
//     <h1>hello</h1>
//     <p>hello</p>
//   </div>,
//   document.getElementById("root")
// )



import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

ReactDom.render(

<div> {/*------------------Main Div START------------*/} 
  <div className="flex"> {/*------------------Flex START------------*/}

      {/* ---------------ROOT1 START-------------*/}
        <div id="root1">

            <h1>Jane Doe</h1>

            <div id="divIcon">
              
              <div id="twoP">
                <i class="fas fa-briefcase" id="icon1"></i> 
                <h4 id="hdg1">Designer</h4>
              </div> 
              
              <div id="twoP">
                <i class="fas fa-home" id="icon1"></i>
                <h4 id="hdg1">London, UK</h4>
              </div>

              <div id="twoP">
                <i class="fas fa-envelope" id="icon1"></i>
                <h4 id="hdg1">ex@mail.com</h4>
              </div>

              <div id="twoP">
                <i class="fas fa-phone" id="icon1"></i>
                <h4 id="hdg1">1223344556677</h4>
              </div>

            </div>
            
            {/* Skills Section */}

            <div id="skills">
              <div id="twoP">
                <i class="fas fa-dice-d6" id="icon3"></i> 
                <h4 id="hdg3">Skills</h4>
              </div> 
            </div>

            <div id="skills1">
                <div id="twoP">
                  <h4 id="hdg4">Adobe Photoshop</h4>
                  <div className="aPS1">
                      <div className="aPS2"><span className="percM1">90%</span></div>
                  </div>
                </div> 

            </div>

            <div id="skills1">
                <div id="twoP">
                  <h4 id="hdg4">Photography</h4>
                  <div className="aPS1">
                      <div className="aPS3"><span className="percM1">80%</span></div>
                  </div>
                </div> 

            </div>

            <div id="skills1">
                <div id="twoP">
                  <h4 id="hdg4">Illustrator</h4>
                  <div className="aPS1">
                      <div className="aPS4"><span className="percM1">75%</span></div>
                  </div>
                </div> 

            </div>

            <div id="skills1">
                <div id="twoP">
                  <h4 id="hdg4">Media</h4>
                  <div className="aPS1">
                      <div className="aPS5"><span className="percM1">50%</span></div>
                  </div>
                </div> 

            </div>

            {/* Language Section */}

            <div id="skills">
              <div id="twoP">
                <i class="fas fa-language" id="icon3"></i> 
                <h4 id="hdg3">Language</h4>
              </div> 
            </div>
          
                  
            <div id="skills1">
                <div id="twoP">
                  <h4 id="hdg4">English</h4>
                    <div className="aPS1">
                        <div className="aPS6"></div>
                    </div>
                </div> 
            </div>


            <div id="skills1">
                <div id="twoP">
                  <h4 id="hdg4">Spanish</h4>
                    <div className="aPS1">
                        <div className="aPS7"></div>
                    </div>
                </div> 
            </div>

            <div id="skills1">
                <div id="twoP">
                  <h4 id="hdg4">German</h4>
                    <div className="aPS1">
                        <div className="aPS8"></div>
                    </div>
                </div> 
            </div>

        </div>

        {/*-------------ROOT2 START------*/}
        <div id="root2">
    
          <div className="wExp">
              <i i class="fas fa-briefcase" id="icon2" ></i>
              <p className="hdg2">WORK EXPERIANCE</p>
          </div>

          <div className="wExp1">
              <h3 className="hdg3">Front End Developer/w3schools.com</h3>
                <div className="wExp1A">
                  <i class="fas fa-calendar-alt"></i>
                  <p>JAN 2015 - CURRENT</p>
                </div>
                  <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
          </div>

          <div className="wExp1">
              <h3 className="hdg3">Web Developer/w3schools.com</h3>
                <div className="wExp1A">
                  <i class="fas fa-calendar-alt"></i>
                  <p>Mar 2012 - Dec 2014</p>
                </div>
                  <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
          </div>

          <div className="wExp1">
              <h3 className="hdg3">Graphic Designer/w3schools.com</h3>
                <div className="wExp1A">
                  <i class="fas fa-calendar-alt"></i>
                  <p>Jun 2010 - Mar 2012</p>
                </div>
                  <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
          </div>

        </div>


        {/*-------------ROOT3 START------*/}
        <div id="root3">

          <div className="wExp">
              <i i class="fas fa-book" id="icon2E" ></i>
              <p className="hdg2E">EDUCATION</p>
          </div>

          <div className="wExp1">
              <h3 className="hdg3">w3schools.com</h3>
                <div className="EExp1A">
                  <i class="fas fa-calendar-alt"></i>
                  <p className="Exp1"> Forever</p>
                </div>
                  <p>Web Development. All I need to know in one place</p>
          </div>

          <div className="wExp1E">
              <h3 className="hdg3">London Buisness School</h3>
                <div className="EExp1A">
                  <i class="fas fa-calendar-alt"></i>
                  <p className="Exp1"> 2013-2015</p>
                </div>
                  <p>Master Degree</p>
          </div>

          <div className="wExp1E">
              <h3 className="hdg3">School of Coding</h3>
                <div className="EExp1A">
                  <i class="fas fa-calendar-alt"></i>
                  <p className="Exp1"> 2010-2013</p>
                </div>
                  <p>Bachelor Degree</p>  
          </div>


        </div>

        {/*-------------ROOT3 START------*/}
        <div id="root4">
          <div className="bgreen">
            <p>Find me on social media.</p>

              <div className="greenI">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-pinterest"></i>
                <i class="fab fa-snapchat"></i>
              </div>

            <a href="https://www.w3schools.com" className="aGreen"><span>Powered by</span>W3.css</a>

          </div>  
        </div>



  </div> {/*------------------Flex END------------*/}
</div>, /*------------------Main Div END------------*/
  document.getElementById("root")
)