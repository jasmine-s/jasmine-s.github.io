var img;

function can()
{
     const status = document.getElementById('status');
      const output = document.getElementById('output');
      output.src="https://i.ibb.co/jG66NfD/logo.png";
      if (window.FileList && window.File && window.FileReader) {
        document.getElementById('file-selector').addEventListener('change', event => {
          output.src = '';
          status.textContent = '';
          const file = event.target.files[0];
          if (!file.type) {
            status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
            return;
          }
          if (!file.type.match('image.*')) {
            status.textContent = 'Error: The selected file does not appear to be an image.'
            return;
          }
          const reader = new FileReader();
          reader.addEventListener('load', event => {
            output.src = event.target.result;
          });
          reader.readAsDataURL(file);
        }); 
      }

  }

function vintage() 
{
   
   Caman("#output",img, function () { this.vintage().render(); });
  };
  
  function lomo() 
{
   
   Caman("#output",img, function () { this.lomo().render(); });
  };
  
  function clarity() 
{
   
   Caman("#output",img, function () { this.clarity().render(); });
  };
  
 function cpr() 
{
   
   Caman("#output",img, function () { this.crossProcess().render(); });
  };
  
  function pinhole() 
{
   
   Caman("#output",img, function () { this.pinhole().render(); });
  };
  
  function nostalgia() 
{
   
   Caman("#output",img, function () { this.nostalgia().render(); });
  }; 
  
  function majesty() 
{
   
   Caman("#output",img, function () { this.herMajesty().render(); });
  }; 
  
  function sin() 
{
   
   Caman("#output",img, function () { this.sinCity().render(); });
  }; 
function rem()
{
     Caman("#output", img, function() {
    this.revert();});
}
function noise()
{
    Caman("#output",img, function () {  this.noise(15).render(); });
}

function Ch()
{
    var br=document.getElementById('v1').value;
    br=br/100;
 var sp=document.getElementById('v2').value;
 var bl=document.getElementById('v3').value;
   bl=bl/10;
   var gr=document.getElementById('v4').value; 
   var hr=document.getElementById('v5').value; 
   var cn=document.getElementById('v6').value;  document.getElementById('output').style.filter="brightness("+br+") sepia("+sp+"%) blur("+bl+"px) grayscale("+gr+"%) hue-rotate("+hr+"deg) contrast("+cn+"%)";
}
function restore()
{
    document.getElementById('output').style.filter="none";
}