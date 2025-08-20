  var message = [
  "“Be yourself; everyone else is already taken.”<br/>― Oscar Wilde",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”<br/>― Marilyn Monroe",
  "“So many books, so little time.”<br/>― Frank Zappa",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br/>― Albert Einstein" ,
  "“A room without books is like a body without a soul.”<br/>― Marcus Tullius Cicero" ,
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”<br/>― Bernard M. Baruch" ,
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”<br/>― Dr. Seuss" ,
  "“You only live once, but if you do it right, once is enough.”<br/>― Mae West" ,
  "“Be the change that you wish to see in the world.”<br/>― Mahatma Gandhi" ,
  "“In three words I can sum up everything I've learned about life: it goes on.”<br/>― Robert Frost" ,
  "“If you tell the truth, you don't have to remember anything.”<br/>― Mark Twain" ,
  "“To live is the rarest thing in the world. Most people exist, that is all.”<br/>― Oscar Wilde" ,
  "“A friend is someone who knows all about you and still loves you.”<br/>― Elbert Hubbard" ,
  "“Always forgive your enemies; nothing annoys them so much.”<br/>― Oscar Wilde" ,
  "“We accept the love we think we deserve.”<br/>― Stephen Chbosky, The Perks of Being a Wallflower" ,
  "“Without music, life would be a mistake.”<br/>― Friedrich Nietzsche, Twilight of the Idols" ,
  "“It is better to be hated for what you are than to be loved for what you are not.”<br/>― Andre Gide, Autumn Leaves" ,
  "“Insanity is doing the same thing, over and over again, but expecting different results.”<br/>― Narcotics Anonymous" ,
 
];


    var index = 0;

    function showMessage() {
      var msg = message[index];
      
      document.getElementById("text").innerHTML = msg;
      
      console.log(msg);

      index++;
      if (index >= message.length) index = 0;
    }
    
    function showMessage() {
  var randomIndex = Math.floor(Math.random() * message.length);
  var msg = message[randomIndex];
  document.getElementById("text").innerHTML = msg;
  console.log(msg);
}
