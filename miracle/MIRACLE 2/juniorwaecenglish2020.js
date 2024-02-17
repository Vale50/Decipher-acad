<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
 <style>
    h1{
        color: #fff;
        font-style: italic;
    }
* {box-sizing: border-box;}
body {
 margin: 0;
 font-family: Arial, Helvetica, sans-serif;
 background-color: #12335b;
}
.header {
 overflow: hidden;
 background-color: #3498db;
 padding: 10px 5px;
 transition: 0.3s ease;
}
.header a {
 float: left;
 color: #12335b;
 text-align: center;
 padding: 10px;
 text-decoration: none;
 font-size: 17px;
 line-height: 25px;
 border-radius: 4px;
}
.header a.logo {
 font-size: 20px;
 font-weight: bold;
}
.header a:hover {
 color: cyan;
}
.header-right {
 float: right;
}
@media screen and (max-width: 500px) {
 .header a {
 float: none;
 display: block;
 text-align: center;
 transition: 0.3s ease;
 }
 
 .header-right {
 float: none;
 }
}
</style>
</head>
<body>
<div class="header">
 <a href="#default" class="logo">DECIPHER-ACADEMY</a>
 <a href="facebook.com"><i class="fab fa-facebook-f facebook-bg"></i></a>
 <a href="x.com"><i class="fab fa-twitter"></i></i></a>
 <div class="header-right">
 <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
 <a href="#contact">About</a>
 <a href="#courses">Courses</a>
 <a href="#classroom">Classrooms</a>
 <a href="#blog">Blog</a>
 </div>
</div>
</body>
    <style>


       *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* Quiz container styles */
#quiz{
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    margin: 20px auto;
    max-width: 600px;
    text-align: center;
}


#question {
    font-size: 18px;
    margin-bottom: 20px;
}


.option {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
}


#answer {
    margin-top: 20px;
}
.answer{
    border: 1px solid blue;
    background-color: #3498db;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
}




/* Score and progress bar styles */
#score {
    font-size: 16px;
    margin-top: 20px;
}


#progressBar {
width: 100%;
height: 20px;
margin-top: 10px;
}
       
.correct { background-color: green; }
.incorrect { background-color: red; }
.hidden { display: none; }
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
<div id="quiz">
<div class="question">
INSTRUCTION: Choose the word that is nearly opposite in meaning to the underlined
word in each of the following sentences.
<p>1: He passed through the narrow wav.</p>
<div class="options">
<div class="option" data-correct="false">A. Plain</div>
<div class="option" data-correct="false">B. extraordinary</div>
<div class="option" data-correct="true">C. broad</div>
<div class="option" data-correct="false">D. endless</div></div>
<button class="check-answer hidden">Check Answer</button>
<div class="answer hidden"> </div>The opposite of narrow is broad.The correct answer is C. broad</div>
</div>
<div id="quiz">
<div class="question">
            <p>2: The boxer speedily punched the heavy bag.</p>
            <div class="options">
                <div class="option" data-correct="false">A. small</div>
                <div class="option" data-correct="false">B. tiny</div>
                <div class="option" data-correct="false">C. mini</div>
                <div class="option" data-correct="true">D. light</div>
            </div>
            <button class="check-answer hidden">Check Answer</button>
            <div class="answer hidden">The opposite of heavy is light. The correct answer is D. light</div>
        </div>
    </div>
      <div id="quiz">
        <div class="question">
            <p>3: I admire students who are serious with their studies.</p>
            <div class="options">
                <div class="option" data-correct="false">A. adore</div>
                <div class="option" data-correct="false">B. appreciate</div>
                <div class="option" data-correct="true">C. detest</div>
                <div class="option" data-correct="false">D. fancy</div>
            </div>
            <button class="check-answer hidden">Check Answer</button>
            <div class="answer hidden">The correct answer is C. Paris</div>
        </div>


      </div>
   
       <div id="quiz">
        <div class="question">
            <p>4: He was given a severe punishment for stealing a goat.</p>
            <div class="options">
                <div class="option" data-correct="false">A. hard</div>
                <div class="option" data-correct="true">B. mild</div>
                <div class="option" data-correct="false">C. partial</div>
                <div class="option" data-correct="false">D. serious</div>
            </div>
            <button class="check-answer hidden">Check Answer</button>
            <div class="answer hidden">the opposite of severe is mild. The correct answer is B. mild</div>
        </div>
   


       </div>
      <div id="quiz">
        <div class="question">
            <p>5: Most rural areas need urgent government social intervention.</p>
            <div class="options">
                <div class="option" data-correct="false">A. City</div>
                <div class="option" data-correct="true">B. township</div>
                <div class="option" data-correct="false">C. Urban</div>
                <div class="option" data-correct="false">D. Village</div>
            </div>
            <button class="check-answer hidden">Check Answer</button>
            <div class="answer hidden">The opposite of rural is urban. The correct answer is C. Urban</div>
        </div>
   
      <div id="quiz">
        <div class="question">
        INSTRUCTION: Choose the right option which has almost the same meaning as the
underlined word in each of the following sentences.          
            <p>6: The cry of the animal terrified us</p>
            <div class="options">
                <div class="option" data-correct="false">A. astonished</div>
                <div class="option" data-correct="false">B. frayed</div>
                <div class="option" data-correct="false">C. surprised</div>
                <div class="option" data-correct="true">D. frightened</div>
            </div>
            <button class="check-answer hidden">Check Answer</button>
            <div class="answer hidden">frightened has the same meaning with terrified. The correct answer is D. frightened</div>
        </div>
   
      </div>
        <div class="question">
            <p>7: Ngozi later realized that she was wrong.</p>
            <div class="options">
                <div class="option" data-correct="false">A. recognized</div>
                <div class="option" data-correct="true">B. understood</div>
                <div class="option" data-correct="false">C. apprehended</div>
                <div class="option" data-correct="false">D. discovered</div>
            </div>
            <button class="check-answer hidden">Check Answer</button>
            <div class="answer hidden">undestood has the same meaning with realized. The correct answer is B. understood</div>
        </div>
 
         <div id="quiz">
            <div class="question">
                <p>8: I wasn't brave enough to tell her what I thought of her.</p>
                <div class="options">
                    <div class="option" data-correct="false">A. bright</div>
                    <div class="option" data-correct="true">B. courageous</div>
                    <div class="option" data-correct="false">C. strong</div>
                    <div class="option" data-correct="false">D. weak</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">courageous has same meaning with brave. The correct answer is B. courageous</div>
            </div>
       
         </div>
        <div id="quiz">
            <div class="question">
                <p>9: Chemical weapons are banned internationally</p>
                <div class="options">
                    <div class="option" data-correct="false">A. allowed</div>
                    <div class="option" data-correct="false">B. destroyed</div>
                    <div class="option" data-correct="true">C. prohibited</div>
                    <div class="option" data-correct="false">D. used</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">prohibited has the same meaning with banned. The correct answer is C. prohibited</div>
            </div>
       
        </div>
        <div id="quiz">
            <div class="question">
                <p>10: That accident was fatal but my brother came out unscratched.</p>
                <div class="options">
                    <div class="option" data-correct="false">A. alive</div>
                    <div class="option" data-correct="false">B. scattered</div>
                    <div class="option" data-correct="false">C. unconscious</div>
                    <div class="option" data-correct="true">D. unhurt</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">unhurt means unscratched. The correct answer is D. unhurt</div>
            </div>
        </div>
          <div id="quiz">
            <div class="question">
            INSTRUCTION: Choose the correct word or phrase that best completes each of the blank
spaces.       
                <p>11: Starch is got____cassava.</p>
                <div class="options">
                    <div class="option" data-correct="true">A. from</div>
                    <div class="option" data-correct="false">B. in</div>
                    <div class="option" data-correct="false">C. of</div>
                    <div class="option" data-correct="false">D. with</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">when using te verb got, the right preposition is from. The correct answer is A. from</div>
            </div>
          </div>
          <div id="quiz">
            <div class="question">
                <p>12: The boy_______pencil 1 broke has reported to the teachers.</p>
                <div class="options">
                    <div class="option" data-correct="false">A. which</div>
                    <div class="option" data-correct="false">B. who</div>
                    <div class="option" data-correct="false">C. who's</div>
                    <div class="option" data-correct="true">D. whose</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">we use whose for human. The correct answer is D. whose</div>
            </div>
          </div>
          <div id="quiz">
            <div class="question">
                <p>13: The thief made________with the cash box.</p>
                <div class="options">
                    <div class="option" data-correct="true">A.away</div>
                    <div class="option" data-correct="false">B. in</div>
                    <div class="option" data-correct="false">C. on </div>
                    <div class="option" data-correct="false">D. out </div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">away is the right preposition. The correct answer is A.away</div>
            </div>
          </div>
          <div id="quiz">
            <div class="question">
                <p>14: Obi and Chioma went hunting today.________</p>
                <div class="options">
                    <div class="option" data-correct="false">A. Isn't it?</div>
                    <div class="option" data-correct="true">B. Didn't they?</div>
                    <div class="option" data-correct="false">C.Hadn't they?</div>
                    <div class="option" data-correct="false">D. Haven't they?</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">it is the right  question tag. The correct answer is B. Didn't they?</div>
            </div>
          </div>
          <div id="quiz">
            <div class="question">
                <p>15: The doctors' strike was____yesterday</p>
                <div class="options">
                    <div class="option" data-correct="true">A. called in</div>
                    <div class="option" data-correct="false">B. called off</div>
                    <div class="option" data-correct="false">C. called of</div>
                    <div class="option" data-correct="false">D. called out </div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">because the trike just started. The correct answer is A. called in</div>
            </div>
          </div>
        <div id="quiz">
            <div class="question">
            INSTRUCTION: Choose the ward that Is correctly spelt to fill each of the gaps below.       
                <p>16: The_________visited our school on Monday.</p>
                <div class="options">
                    <div class="option" data-correct="false">A. commissiona</div>
                    <div class="option" data-correct="true">B. commissioner</div>
                    <div class="option" data-correct="false">C. commisioner</div>
                    <div class="option" data-correct="false">D. commistioner</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">The correct answer is B. commissioner</div>
            </div>
        </div>
        <div id="quiz">
            <div class="question">
                <p>17: Cutting firewood is a_____work.</p>
                <div class="options">
                    <div class="option" data-correct="false">A. strenuos</div>
                    <div class="option" data-correct="true">B. strenuous</div>
                    <div class="option" data-correct="false">C. strenuus</div>
                    <div class="option" data-correct="false">D. strenous</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">The correct answer is B. strenuous</div>
            </div>
        </div>
         <div id="quiz">
            <div class="question">
                <p>18: There is an ongoing________on my car.</p>
                <div class="options">
                    <div class="option" data-correct="true">A. maintenance</div>
                    <div class="option" data-correct="false">B. maintai nance</div>
                    <div class="option" data-correct="false">C. maintenanse</div>
                    <div class="option" data-correct="false">D. maintenance</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">The correct answer is A. maintenance</div>
            </div>
         </div>
         <div id="quiz">
            <div class="question">
                <p>19: He wrote an_________letter to the principal.</p>
                <div class="options">
                    <div class="option" data-correct="false">A. anonimous</div>
                    <div class="option" data-correct="true">B. anonymous</div>
                    <div class="option" data-correct="false">C. annonymous</div>
                    <div class="option" data-correct="false">D. anonymus</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">The correct answer is B. anonymous</div>
            </div>
         </div>
         <div id="quiz">
            <div class="question">
                <p>20: I have received the_____card.</p>
                <div class="options">
                    <div class="option" data-correct="true">A. acknowledgement</div>
                    <div class="option" data-correct="false">B. aknowledgement</div>
                    <div class="option" data-correct="false">C. acknowledgmen</div>
                    <div class="option" data-correct="false">D. acnoleggement</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">The correct answer is A. acknowledgement</div>
            </div>
         </div>
         <div id="quiz">
            <div class="question">
            INSTRUCTION: Choose the word that represents the correct part of speech of each of
the underlined words.             
                <p>21: I was humbled by his wisdom.</p>
                <div class="options">
                    <div class="option" data-correct="false">A. Adverb</div>
                    <div class="option" data-correct="false">B. Pronoun</div>
                    <div class="option" data-correct="true">C. Noun</div>
                    <div class="option" data-correct="false">D. Verb</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">it is an abstact noun. The correct answer is C. Noun</div>
            </div>
         </div>
         <div id="quiz">
            <div class="question">
                <p>18: What is the capital of Japan?</p>
                <div class="options">
                    <div class="option" data-correct="false">A. Beijing</div>
                    <div class="option" data-correct="false">B. Seoul</div>
                    <div class="option" data-correct="true">C. Tokyo</div>
                    <div class="option" data-correct="false">D. Bangkok</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">The correct answer is C. Tokyo</div>
            </div>
         </div>
         <div id="quiz">
            <div class="question">
                <p>18: What is the capital of Japan?</p>
                <div class="options">
                    <div class="option" data-correct="false">A. Beijing</div>
                    <div class="option" data-correct="false">B. Seoul</div>
                    <div class="option" data-correct="true">C. Tokyo</div>
                    <div class="option" data-correct="false">D. Bangkok</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">The correct answer is C. Tokyo</div>
            </div>
         </div> <div id="quiz">
            <div class="question">
                <p>18: What is the capital of Japan?</p>
                <div class="options">
                    <div class="option" data-correct="false">A. Beijing</div>
                    <div class="option" data-correct="false">B. Seoul</div>
                    <div class="option" data-correct="true">C. Tokyo</div>
                    <div class="option" data-correct="false">D. Bangkok</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">The correct answer is C. Tokyo</div>
            </div>
         </div>
         <div id="quiz">
            <div class="question">
                <p>18: What is the capital of Japan?</p>
                <div class="options">
                    <div class="option" data-correct="false">A. Beijing</div>
                    <div class="option" data-correct="false">B. Seoul</div>
                    <div class="option" data-correct="true">C. Tokyo</div>
                    <div class="option" data-correct="false">D. Bangkok</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">The correct answer is C. Tokyo</div>
            </div>
         </div>
         <div id="quiz">
            <div class="question">
                <p>18: What is the capital of Japan?</p>
                <div class="options">
                    <div class="option" data-correct="false">A. Beijing</div>
                    <div class="option" data-correct="false">B. Seoul</div>
                    <div class="option" data-correct="true">C. Tokyo</div>
                    <div class="option" data-correct="false">D. Bangkok</div>
                </div>
                <button class="check-answer hidden">Check Answer</button>
                <div class="answer hidden">The correct answer is C. Tokyo</div>
            </div>
         </div>

    </div>
    <div id="score">Score: 2</div>
    <div id="progress">Progress: 100/100</div>


    <script>
        var score = 2;
        var progress = 50;


        $(".option").click(function() {
            if ($(this).hasClass("selected")) {
                return;
            }
            $(this).addClass("selected");
            $(this).siblings().removeClass("correct incorrect");
            $(this).addClass($(this).data("correct") ? "correct" : "incorrect");
            if ($(this).data("correct")) {
                score++;
                $("#score").text("Score: " + score);
            } else {
                $(this).parent().siblings(".check-answer").removeClass("hidden");
            }
            progress++;
            $("#progress").text("Progress: " + progress + "/20");
        });


        $(".check-answer").click(function() {
            $(this).siblings(".answer").removeClass("hidden");
        });
    </script>
</body>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font￾awesome/6.4.2/css/all.min.css" />
<!-- button -->
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<style>


.footer-social-icon i {
height: 40px;
width: 40px;
text-align: center;
line-height: 38px;
border-radius: 50%;
}
.footer-widget ul li {
display: inline-block;
float: right;
width: 50%;
margin-bottom: 10px;
}
.footer-widget ul li a:hover{
color: darkcyan;
}
.footer-widget ul li a {
color: lightblue;
text-transform: capitalize;
}
.footer-menu li {
display: inline-block;
margin-left: 20px;
}
</style>
</div>
</div>
<div class="footer-content pt-5 pb-5">
<div class="row">




<!--stop -->






</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-6 mb-30">
<div class="footer-widget">
<div class="footer-widget-heading">


</div>
<a href="facebook.com"><i class="fab fa-facebook-f facebook-bg"></i></a>
<a href="x.com"><i class="fab fa-twitter"></i></i></a>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">about</a></li>
<li><a href="#">courses</a></li>
<li><a href="#">classroom</a></li>
<li><a href="#">Contact</a></li>
<li><a href="#">blog</a></li>
</ul>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-6 mb-50">
<div class="footer-widget">
<div class="footer-widget-heading">


</div>




</div>
</footer>
</html>





