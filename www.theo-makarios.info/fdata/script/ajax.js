/*
     General AJAX technique samples--how to talk to the server + return data and do stuff with it.
     Direct questions, answers, rants, flames to sbenfield@clearnova.com

      1.0: 2005-07-14   Initial Release
      1.1: 2005-07-15   Fixed bugs, changed text for clarity, added ability to register for updates
      1.2: 2005-07-21   Cleaned up samples for clarity. Original version was all over the board using all sorts of different ways of calling XMLHTTPRequest
                        This version is cleaner. Only ping uses its own custom AJAX handling, everything else uses AJAXRequest
			Added many many comments
			
     If you find any bugs or have any ideas of enhancement--send them on.
     
*/
     
var _ms_XMLHttpRequest_ActiveX = ""; // Holds type of ActiveX to instantiate
var _ajax;                           // Reference to a global XMLHTTPRequest object for some of the samples
var _logger = true;                  // write output to the Activity Log
var _status_area;                    // will point to the area to write status messages to


if (!window.Node || !window.Node.ELEMENT_NODE) {
    var Node = { ELEMENT_NODE: 1, ATTRIBUTE_NODE: 2, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, ENTITY_REFERENCE_NODE: 5,
                  ENTITY_NODE: 6, PROCESSING_INSTRUCTION_NODE: 7, COMMENT_NODE: 8, DOCUMENT_NODE: 9, DOCUMENT_TYPE_NODE: 10, 
    		  DOCUMENT_FRAGMENT_NODE: 11, NOTATION_NODE: 12 };
}

// From prototype.js @ www.conio.net | Returns an object reference to one or more strings
// ignore the fact that there are no arguments to this method -- javascript doesn't care how many you send (not strongly typed)
// The method checks the actual # of arguments -- returns a single object or an array
function $() {
    var elements = new Array();

    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];

        if (typeof element == 'string')
            element = document.getElementById(element);

        if (arguments.length == 1)
            return element;

        elements.push(element);
    }

    return elements;
}

// Method to get text from an XML DOM object
function getTextFromXML( oNode, deep ) {
    var s = "";
    var nodes = oNode.childNodes;

    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        if (node.nodeType == Node.TEXT_NODE) {
            s += node.data;
        } else if (deep == true && (node.nodeType == Node.ELEMENT_NODE || node.nodeType == Node.DOCUMENT_NODE
                                       || node.nodeType == Node.DOCUMENT_FRAGMENT_NODE)) {
            s += getTextFromXML(node, true);
        };
    }

    ;
    return s;
}

;

// If you plan on doing anything outside of North America, then you'd better encode the things you pass back and forth
// the escape() method in Javascript is deprecated -- should use encodeURIComponent if available
function encode( uri ) {
    if (encodeURIComponent) {
        return encodeURIComponent(uri);
    }

    if (escape) {
        return escape(uri);
    }
}

function decode( uri ) {
    uri = uri.replace(/\+/g, ' ');

    if (decodeURIComponent) {
        return decodeURIComponent(uri);
    }

    if (unescape) {
        return unescape(uri);
    }

    return uri;
}

// log information to the status area textfield
function logger( text, clear ) {
    if (_logger) {
        if (!_status_area) {
            _status_area = document.getElementById("status_area");
        }

        if (_status_area) {
            if (clear) {
                _status_area.value = "";
            }

            var old = _status_area.value;
            _status_area.value = text + ((old) ? "\r\n" : "") + old;
        }
    }
}


/*
 * AJAXRequest: An encapsulated AJAX request. To run, call
 * new AJAXRequest( method, url, async, process, data )
 *
 */

function executeReturn( AJAX ) {
    if (AJAX.readyState == 4) {
        if (AJAX.status == 200) {
            logger('AJAXRequest is complete: ' + AJAX.readyState + "/" + AJAX.status + "/" + AJAX.statusText);
	    if ( AJAX.responseText ) {
		    logger(AJAX.responseText);
		    logger("-----------------------------------------------------------");
		    eval(AJAX.responseText);
	    }
	}
    }
}

function AJAXRequest( method, url, data, process, async, dosend) {
    // self = this; creates a pointer to the current function
    // the pointer will be used to create a "closure". A closure
    // allows a subordinate function to contain an object reference to the
    // calling function. We can't just use "this" because in our anonymous
    // function later, "this" will refer to the object that calls the function 
    // during runtime, not the AJAXRequest function that is declaring the function
    // clear as mud, right?
    // Java this ain't
    
    var self = this;

    // check the dom to see if this is IE or not
    if (window.XMLHttpRequest) {
	// Not IE
        self.AJAX = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
	// Hello IE!
        // Instantiate the latest MS ActiveX Objects
        if (_ms_XMLHttpRequest_ActiveX) {
            self.AJAX = new ActiveXObject(_ms_XMLHttpRequest_ActiveX);
        } else {
	    // loops through the various versions of XMLHTTP to ensure we're using the latest
	    var versions = ["Msxml2.XMLHTTP.7.0", "Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP",
                        "Microsoft.XMLHTTP"];

            for (var i = 0; i < versions.length ; i++) {
                try {
		    // try to create the object
		    // if it doesn't work, we'll try again
		    // if it does work, we'll save a reference to the proper one to speed up future instantiations
                    self.AJAX = new ActiveXObject(versions[i]);

                    if (self.AJAX) {
                        _ms_XMLHttpRequest_ActiveX = versions[i];
                        break;
                    }
                }
                catch (objException) {
                // trap; try next one
                } ;
            }

            ;
        }
    }
    
    // if no callback process is specified, then assing a default which executes the code returned by the server
    if (typeof process == 'undefined' || process == null) {
        process = executeReturn;
    }

    self.process = process;

    // create an anonymous function to log state changes
    self.AJAX.onreadystatechange = function( ) {
        //logger("AJAXRequest Handler: State =  " + self.AJAX.readyState);
        self.process(self.AJAX);
    }

    // if no method specified, then default to POST
    if (!method) {
        method = "POST";
    }

    method = method.toUpperCase();

    if (typeof async == 'undefined' || async == null) {
        async = true;
    }

    logger("----------------------------------------------------------------------");
    logger("AJAX Request: " + ((async) ? "Async" : "Sync") + " " + method + ": URL: " + url + ", Data: " + data);

    self.AJAX.open(method, url, async);

    if (method == "POST") {
        self.AJAX.setRequestHeader("Connection", "close");
        self.AJAX.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        self.AJAX.setRequestHeader("Method", "POST " + url + "HTTP/1.1");
    }

    // if dosend is true or undefined, send the request
    // only fails is dosend is false
    // you'd do this to set special request headers
    if ( dosend || typeof dosend == 'undefined' ) {
	    if ( !data ) data=""; 
	    self.AJAX.send(data);
    }
    return self.AJAX;
}

// handle some key press events
function handleKeyUp( e ) {
    e = (!e) ? window.event : e;
    target = (!e.target) ? e.srcElement : e.target;

    if (e.type == "keyup") {
        // skip shift, alt, control keys
        if (e.keyCode == 16 || e.keyCode == 17 || e.keyCode == 18) {
        // do nothing
        }

        else {
            if (target.name == "state1" && !$('state1').value) {
                clearCustomersByState();
            } else if (target.name == "state2" && !$('state2').value) {
                clearCustomersByStateXML();
            } else if (target.name == "google_search") {
                if (target.value) {
                    getSuggest(target);
                } else {
                    $('google_suggest_target').innerHTML = "";
                }
            }
        }
    }
}


<!----------------------------------- BEGIN CUSTOMERS BY STATE WITH XML  ------------------------>


function getSmsScrollApi(url) {
        return new AJAXRequest("post",'get_sms.php',"url=" + encode(url),processGetSmsScrollApi);
}

function processGetSmsScrollApi( myAJAX ) {
    if (myAJAX.readyState == 4) {
        if (myAJAX.status == 200) {
            var response = myAJAX.responseText;
            var div = document.getElementById("hscroll0");
            div.innerHTML= response;
            }
    }
}



