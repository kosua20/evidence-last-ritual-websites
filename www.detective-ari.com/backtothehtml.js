/**
	Frédéric Saunier
	http://www.tekool.net/javascript/backtothehtml

	This program is part of a free software; you can redistribute it and/or
	modify it under the terms of the GNU General Public License
	as published by the Free Software Foundation; either version 2
	of the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

**/

/*****************************************************************************
* BackToTheHtml Command
*///**************************************************************************
function BackToTheHtml(node)
{
	if(node == null)
		this.node = document; 
	else
		this.node = node; 
};
BackToTheHtml.prototype.node = null;

BackToTheHtml.prototype.execute = function()
{
	this.activateObject();
}

BackToTheHtml.prototype.activateObject = function(domObject)
{
	var aDomObject = this.node.getElementsByTagName('object');
	var activationObject;
	for(var i=0; i<aDomObject.length; i++)
		if
		(
			aDomObject[i].getAttributeNode('BackToTheHtml') == null
			&&
			(activationObject = this.getActivationObject(aDomObject[i])) != null
		)
			activationObject.execute();
};

BackToTheHtml.prototype.getActivationObject = function(domObject)
{
	var classid = domObject.classid.toUpperCase().substr('clsid:'.length);
	var mimeType = domObject.type.toLowerCase();

	switch(true)
	{
		case 
			classid == 'D27CDB6E-AE6D-11CF-96B8-444553540000' 
			||
			mimeType == 'application/x-shockwave-flash'
		:
			return new ActivateObjectFlash(domObject);

		default :
			return null;
	}
};

BackToTheHtml.uniqueID = function(prefix)
{
	var sPrefix;
	if(prefix == null)
		sPrefix = 'uniqueId';
	else
		sPrefix = prefix;
		
	var i=0;
	while(document.getElementById(sPrefix + (i++)))
		;
	return sPrefix + (i-1);
};

BackToTheHtml.isParentOf = function(parent,child)
{
	var found = false;
	for(var i=0; i<parent.childNodes.length; i++)
		if(parent.childNodes[i] == child)
			return true;
		else
			found = arguments.callee(parent.childNodes[i],child);

	return found;
}

/*****************************************************************************
* ActivateObject Command
*///**************************************************************************
function ActivateObject(domObject)
{
	this.domObject = domObject;
}

ActivateObject.prototype.domObject = null;
ActivateObject.prototype.classid = null;
ActivateObject.prototype.aHtmlAttribute = ['accessKey','align','alt','archive','border','code','codeBase','codeType','declare','dir','height','hideFocus','hspace','lang','language','name','standby','tabIndex','title','useMap','vspace','width'];
ActivateObject.prototype.aObjectProperty = null;

ActivateObject.prototype.execute = function()
{
	this.xndObjectId = BackToTheHtml.uniqueID();
	this.setTextHtml();
	this.writeObject();

	this.xndObject = document.getElementById(this.xndObjectId);
	this.setSpecialProperties();
	this.removeOriginalObject();
}

ActivateObject.prototype.setTextHtml = function()
{
	var str = '';
	str += '<object BackToTheHtml ' + '\n';
	str += ' classid="clsid:' + this.classid + '" ' + '\n';

	//Add HTML attributes to the <object> tag
	for(var i=0; i<this.aHtmlAttribute.length; i++)
	{
		var name = this.aHtmlAttribute[i];
		if(typeof this.domObject[name] != 'undefined' && this.domObject[name].toString() != '')
			str += '\t' + name + '="' + this.domObject[name].toString() + '" ' + '\n';
	}

	str += 'id="' + this.xndObjectId + '" ' + '\n';
	str += '>';

	for(var i=0; i<this.aObjectProperty.length; i++)
	{
		var name = this.aObjectProperty[i];
		if(typeof this.domObject[name] != 'undefined' && this.domObject[name].toString() != '' )
			str += '\t<param name="' + name + '" value="' + this.domObject[name].toString() + '"></param>' + '\n';
	}
	str += '</object>';

	this.textHtml = str;
};

ActivateObject.prototype.writeObject = function()
{
	this.domObject.insertAdjacentHTML("afterEnd",this.textHtml);
};

ActivateObject.prototype.setSpecialProperties = function()
{
	if(typeof this.domObject.className != 'undefined' && this.domObject.className.toString() != '')
		this.xndObject.className = this.domObject.className

	if(typeof this.domObject.style.cssText != 'undefined' && this.domObject.style.cssText.toString() != '')
		this.xndObject.style.cssText = this.domObject.style.cssText;

	if(typeof this.domObject.SWRemote != 'undefined' && this.domObject.SWRemote.toString() != '')
		this.xndObject.FlashVars = this.domObject.SWRemote;

	if(typeof this.domObject.codebase == 'undefined' || this.domObject.codebase.toString() == '')
		this.xndObject.codebase = 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,24,0';

	if(typeof this.domObject.id != 'undefined' && this.domObject.id.toString() != '')
		this.xndObject.id = this.domObject.id;

};

ActivateObject.prototype.removeOriginalObject = function()
{
	this.domObject.parentNode.removeChild(this.domObject);
};

/*****************************************************************************
* ActivateObjectFlash Command
*///**************************************************************************
function ActivateObjectFlash(domObject)
{
	ActivateObject.call(this,domObject);
}
ActivateObjectFlash.prototype = new ActivateObject;
ActivateObjectFlash.prototype.aObjectProperty = ['FrameNum','Playing','Quality','Quality2','Scalemode','Scale','AlignMode','SAlign','BackgroundColor','BGColor','Loop','Movie','WMode','Base','DeviceFont','EmbedMovie','SWRemote','FlashVars','AllowScriptAccess'];
ActivateObjectFlash.prototype.classid = 'D27CDB6E-AE6D-11CF-96B8-444553540000';


/*****************************************************************************
* Script initialisation
*///**************************************************************************
if(typeof ActiveXObject != 'undefined' && typeof Function.call != 'undefined')
{
	var styleId = BackToTheHtml.uniqueID();
	document.write('<style id="' + styleId + '" ></style>');
	var domStyle = document.getElementById(styleId);

	var isHead = false;
	var aHead = document.getElementsByTagName('head');
	for(var i=0; i<aHead.length; i++)
		if(BackToTheHtml.isParentOf(aHead[i],domStyle))
			isHead = true;

	if(isHead)
	{
		document.write('<style type="text/css">OBJECT{visibility:hidden;}</style>');
		document.onreadystatechange = function()
		{
			if(document.readyState == 'complete')
			{
				new BackToTheHtml().execute();
				document.styleSheets[document.styleSheets.length-1].addRule("OBJECT","visibility:visible;");
				//alert('head');
				//alert(document.body.innerHTML);
			}
		}
	}
	else
	{
		new BackToTheHtml().execute();
		//alert('body');
		//alert(document.body.innerHTML);
	}
	
	domStyle.parentNode.removeChild(domStyle);
}