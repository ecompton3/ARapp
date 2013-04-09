/**
 * @author evan
 */
var objCoords = {
	latitude: 33.778464, longitude: -84.396887
	//latitude: 33.770956, longitude: -84.391598
}
var cssObject;
var mode = "Home";
var index = 1, NUMINFO = 2;
var myAppController =
            {                   
                onArgonReady : function()
                {
                    // To test goto http://artnotart.org/jdbolter/argon2test/placmark.html
					// create a div
						
						  
							   var divEl = document.createElement('div');
		
					// you have a div now, in devEl. content goes here  
					// for the simple demo, just a green square with some text
							   divEl.id = "cssContent";
							   divEl.style.width = "100px";
							   divEl.style.height = "100px";
							   divEl.style.backgroundColor = "blue";
							   divEl.style.position = 'absolute';
							   divEl.style.fontSize = "16px";
							   divEl.style.WebkitTransform = "scale3d(-1, 1, 1)";
							   divEl.innerText = "AR + HTML5";
		
					//add an image
						var oImg = document.createElement('img');
							oImg.setAttribute('src','http://artnotart.org/jdbolter/decatur/decatur.0000.jpg');	
							oImg.setAttribute('height','100');	
							oImg.setAttribute('width','100');	
							divEl.appendChild(oImg);
							
					// This will actually display the div on the screen
					// be sure to comment out the cssObject to test this
					// document.body.appendChild(divEl)		
							
					// create a CSS Object in the scene graph
						  
						  cssObject = new THREE.CSSObject(divEl); 
		
					// the width and height is used to align things.
					 		cssObject.width = 10;
					 		cssObject.height = 10;
					 	  //  cssObject.position.x = 167;
							//cssObject.position.y = 50.0;
						  // 	cssObject.position.z = 157;
						   
				
			//	console.log(curCoords);
			
			var location = {y:0,x:0,z:0};
				var lla = ARGON.geolocation.getLLA();
var lat = lla.latitude;
var lon = lla.longitude;

				location.y = 50;
				
				location.x = (objCoords.longitude - lon) * 1000000;
				alert(location.x);
				location.z = (objCoords.latitude - lat) * 1000000;
						   cssObject.position.x = location.x;
				cssObject.position.y = location.y;
				cssObject.position.z = location.z;
				alert(cssObject.position.x);
					
					
					//attach directly to world. the x-y-z position should be relative to user
							   
					ARGON.World.add(cssObject);
			   		
					//  it may also be possible to attach the cssOjbect to a geoObject
		 			//  geoObject : null,
					//  near Chocolatte in Decatur
	            	//  geoObject = ARGON.createGeoObject(33.791345,-84.305655, 0);
		   			//  attach to world?
                 	//  geoObject.add( cssObject );
                 	//  ARGON.World.add( geoObject );			   
							   
					// Make is a tracked object if you are tracking off a marker. 
					//		   trackedObject.add (cssObject);                    
                }

				// This would be for tracking, for example.
             	//   onDataSetLoaded : function(event)
              	//  {
  				//
              	//  }
	
            };

document.addEventListener("AR.DataSetLoadedEvent", myAppController.onDataSetLoaded);
document.addEventListener("AR.DataSetActivatedEvent", myAppController.onDataSetActivated);
document.addEventListener("AR.ArgonReadyEvent", myAppController.onArgonReady);

var context = new webkitAudioContext();
			// Create a gain node.
var gainNode = context.createGainNode(),
 panner = context.createPanner(),
 objCoords = {latitude: 33.778464, longitude: -84.396887},
 //	latitude: 33.772191,longitude: -84.393144},
 curCoords = {},
 playing = false,
 paused = false;
//navigator.geolocation.getCurrentPosition(GetLocation);
panner.setPosition(0.0,1.0,0.0);
	panner.connect(context.destination);
      var soundBuffer;
      loadSound("RayCharles.mp3");
       
function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      soundBuffer = buffer;
      $('.btn').removeAttr('disabled');
      $('#btn2').removeAttr('disabled');
     // playSound(soundBuffer);
    }, function() {
           console.error('Error!');
        });
  }
  request.send();
}
function playSound(buffer) {
  var source = context.createBufferSource(), // creates a sound source
  destination = context.destination; //specifies the final destination (the speakers)
 
  // creates a panner to control L/R balance
  source.buffer = buffer;
                // tell the source which sound to play
  
  
    source.loop = true;
    source.connect(gainNode); //connect source to gain node
    source.noteOn(0); // when the source should start playing
    gainNode.gain.value = 1; 
    calcLocation();
    gainNode.connect(panner);
    


  
}


$(document).ready(function() {
	//$('#mainNav').css('margin-top', $(window).height() - 120);
	//alert($(window).height())
	//$('.btn-group').css('margin-top', $(window).height() - 150);
	$('#playButton').click(function() {
		alert('been clicked!');
		if (playing == false)
			playSound(soundBuffer);
	});
	getText();
				$('.nextButton').on('click',function(){
     
     getText();
     
  });
  
  $('.homeBtn').click(function(e) {
  	e.preventDefault();
  	alert('click!');
  	//$('#mainNav').css('margin-top', $(window).height() - 120);
  	$('section').css('display','none');
  	$('#home').css('display','block');
  	$('#mainNav .nav li').removeClass('active');
  	$('#homeLink').addClass('active');
  });
  
  $('.listenBtn').click(function(e) {
  	e.preventDefault();
  	alert('click!');
  	//$('#mainNav').css('margin-top', 0);
  //	$('.btn-group').css('margin-top', $(window).height()  - 150);
  	$('section').css('display','none');
  	$('#listen').css('display','block');
  	$('#mainNav .nav li').removeClass('active');
  	$('#homeLink').removeClass('active');
  	$('#listenLink').addClass('active');
  });
  
  $('.learnBtn').click(function(e) {
  	e.preventDefault();
  	alert('click!');
  //	$('#mainNav').css('margin-top', $(window).height() - 120);
  	$('section').css('display','none');
  	$('#learn').css('display','block');
  	$('#mainNav .nav li').removeClass('active');
  	$('#homeLink').removeClass('active');
  	$('#learnLink').addClass('active');
  });
  
  $('.discoverBtn').click(function(e) {
  	e.preventDefault();
  	alert('click!');
  	//$('#mainNav').css('margin-top', $(window).height() - 120);
  	$('section').css('display','none');
  	$('#discover').css('display','block');
  	$('#mainNav .nav li').removeClass('active');
  	$('#homeLink').removeClass('active');
  	$('#discoverLink').addClass('active');
  });
  
});

var time = new Date().getTime();

function refresh() {
	calcLocation();
	var location = {
		y : 0,
		x : 0,
		z : 0
	};
	var lla = ARGON.geolocation.getLLA();
	var lat = lla.latitude;
	var lon = lla.longitude;

	location.y = 50;

	location.x = (objCoords.longitude - lon) * 1000000;
	//alert(location.x);
	location.z = (objCoords.latitude - lat) * 1000000;
	cssObject.position.x = location.x;
	cssObject.position.y = location.y;
	cssObject.position.z = location.z;
	//alert(cssObject.position.x);

	//attach directly to world. the x-y-z position should be relative to user

	ARGON.World.add(cssObject);
	setTimeout(refresh, 10000);
}

//setTimeout(refresh, 10000);


function calcLocation() {
	var location = {};
	var location = {y:0,x:0,z:0};
				var lla = ARGON.geolocation.getLLA();
var lat = lla.latitude;
var lon = lla.longitude;
	console.log(curCoords);
	//alert(curCoords.coords.latitude);
	//alert(curCoords.coords.longitude);
	//alert(curCoords.coords.accuracy);
		//alert(curCoords.coords.altitude);
	location.y = 0;
	location.x = (objCoords.longitude - lon) * 1000;
	location.z = (objCoords.latitude - lat) * 1000;
	gainNode.gain.value = 1 - Math.abs(location.z / 10); 
	if(gainNode.gain.value < 0.3) {
		$('#audioIcon').css('background-image','url("res/audioLow.png")');
	} else if(gainNode.gain.value >= 0.3 && gainNode.gain.value < 0.7) {
		$('#audioIcon').css('background-image','url("res/audioMed.png")');
	} else if(gainNode.gain.value > 0.7) {
		$('#audioIcon').css('background-image','url("res/audioHigh.png")');
	}
	console.log(location);
	
	// straight ahead, 0.0 is striaght, negative left, positive right
   
	panner.setPosition(location.x,location.y,location.z);
	
}


			function getText() {
				var fileLoc = 'res/test'+index+'.html';
				index++;
				if(index > NUMINFO) {
					index = 1;
				}
				//$('body.mainBody').append('<div id="loaderBackground"><div id="loaderImage"></div></div>');
				//var fileLoc = 'res/page1.html';
				//-----------------------------------------------------------------------
				// 2) Send a http request with AJAX http://api.jquery.com/jQuery.ajax/
				//-----------------------------------------------------------------------
				$.ajax({
					type : "GET",
					url : 'getInfoText.php', //the script to call to get data
					data : {
						filepath : fileLoc
					},
					cache : true, //you can insert url argumnets here to pass to api.php
					//for example "id=5&parent=6"
					dataType : 'json', //data format
					success : function(data)//on recieve of reply
					{
						//	console.log(data);
						text = data;
						//$('#loaderBackground').remove();
						renderText(text);
					},
					error : function() {
						loadFailure();
					}
				});
			}

			function loadFailure() {
				var json = {

					'text' : 'Error Getting Content'

				}, template = $('#infoTemplate').html(), output;
				output = Mustache.render(template, json);

				$('#infoBox').html(output);
				// $('#loaderBackground').remove();

			}

			function renderText(text) {
				var json = {

					'text' : text
				}, template = $('#infoTemplate').html(), output;
				output = Mustache.render(template, json);

				$('#infoBox').html(output);

			}