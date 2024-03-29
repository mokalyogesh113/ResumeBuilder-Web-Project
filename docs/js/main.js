document.querySelector('#page').contentEditable = true;

defaultTemplateVars = [ "fontMonospace" , "caseNormal" , "titleRuled" , "ruleAbove" , "imageShow" , "rollShow" , "course1" , "tableShow" , "edyearFirst" , "experience1" , "projects1" ]

$('.toggle-option').click(function(){
	toggleType = $(this).attr('data-toggle');
	toggleValue = $(this).attr('id');
	if(!$(this).hasClass('multi-select'))
	{
		if(!$(this).hasClass('selected'))
		{
			$('.toggle-option',$(this).parent()).removeClass('selected');
			$(this).addClass('selected');
			changeTemplate(toggleType,toggleValue);
		}
	}
	else
	{
		if($(this).hasClass('selected'))
			$(this).removeClass('selected');
		else
			$(this).addClass('selected');
		changeTemplate(toggleType,toggleValue);
	}
});

$('input[name="sectionToggle"]').change(function(){
	toggleSection($(this).val(),$(this).is(':checked'));
});


function toggleSection(sectionName,toggleState)
{
	if(toggleState==true)
		$('input[value="'+sectionName+'"]').attr('checked','true');
	else
		$('input[value="'+sectionName+'"]').removeAttr('checked');
	$('#'+sectionName).toggle();
}

function changeTemplate(toggleType,toggleValue)
{
	switch(toggleType)
	{
		// Contact Details 
		case 'contact':
			if(toggleValue=='contact1')
			{
				$('#contactLink1').hide();
				$('#contactLink2').hide();
				$('#contactlink5').hide();
				$('#contactlink6').hide();
			}
			else if(toggleValue=='contact2')
			{
				$('#contactLink1').show();
				$('#contactLink2').hide();
				$('#contactlink5').show();
				$('#contactlink6').show();
			}
			else
			{
				$('#contactLink1').show();
				$('#contactLink2').show();
			}
			break;
		//Horizontal Margin
		case 'margin':
			if(toggleValue=='margin1')
				$('#page').css('padding','0.2cm 1cm 1cm 1cm');
			else if(toggleValue=='margin2')
				$('#page').css('padding','0.2cm 1.1cm 1cm 1.1cm');
			else if(toggleValue=='margin3')
				$('#page').css('padding','0.2cm 1.2cm 1cm 1.2cm');
			else if(toggleValue=='margin4')
				$('#page').css('padding','0.2cm 1.3cm 1cm 1.3cm');
			else if(toggleValue=='margin5')
				$('#page').css('padding','0.2cm 1.4cm 1cm 1.4cm');
			else if(toggleValue=='margin6')
				$('#page').css('padding','0.2cm 1.5cm 1cm 1.5cm');
			break;
		
		//Line Spacing	
		case 'line':
			if(toggleValue=='line1')
				$('#page').css('line-height','1.1em');
			else if(toggleValue=='line2')
				$('#page').css('line-height','1.2em');
			else if(toggleValue=='line3')
				$('#page').css('line-height','1.3em');
			else if(toggleValue=='line4')
				$('#page').css('line-height','1.4em');
			else if(toggleValue=='line5')
				$('#page').css('line-height','1.5em');
			else if(toggleValue=='line6')
				$('#page').css('line-height','1.6em');
			break;

		//Change Font
		case 'font':
			if(toggleValue=='fontVerdanaSans')
				$('#page').removeClass('droid').removeClass('roboto').removeClass('montserrat').addClass('verdana-sans');
			else if(toggleValue=='fontMonospace')
				$('#page').removeClass('verdana-sans').removeClass('droid').removeClass('roboto').addClass('montserrat');
			else if(toggleValue=='fontRoboto')
				$('#page').removeClass('montserrat').removeClass('verdana-sans').removeClass('droid').addClass('roboto');
			else if(toggleValue=='fontDroid')
				$('#page').removeClass('roboto').removeClass('montserrat').removeClass('verdana-sans').addClass('droid');
			break;
		//Change case 
		case 'case':
			if(toggleValue=='caseNormal')
				$('.section-title').removeClass('uppercase');
			else
				$('.section-title').addClass('uppercase');
			break;
			
		case 'title':
			if(toggleValue=='titleRuled')
			{
				$('.section-title').removeClass('shaded');
				$('.section-title').addClass('ruled');
			}
			else
			{
				$('.section-title').removeClass('ruled');
				$('.section-title').addClass('shaded');
			}
			break;
		case 'rule':
			if(toggleValue=='ruleAbove')
			{
				$('.section-title').removeClass('rule-below');
				$('.section-title').addClass('rule-above');
			}
			else
			{
				$('.section-title').removeClass('rule-above');
				$('.section-title').addClass('rule-below');
			}
			break;

		case 'image':
			if(toggleValue=='imageShow')
			{
				$('#image_box').show();
				$('#info').css('margin-left','0px');
			}
			else
			{
				$('#image_box').hide();
				$('#info').css('margin-left','20px');
			}
			break;
		case 'roll':
			if(toggleValue=='rollShow')
			{
				$('#contentRoll').show();
				$('#info').css('margin-top','0px');
			}
			else
			{
				$('#contentRoll').hide();
				$('#info').css('margin-top','10px');
			}
			break;
		case 'course':
			if(toggleValue=='course1')
			{
				$('#contentBranch').hide();
				$('#contentCourse').text('B.Tech - '+$('#contentBranch').text());
			}
			else
			{
				$('#contentBranch').show();
				$('#contentCourse').text('B.Tech undergraduate');
			}
			break;
		case 'table':
			if(toggleValue=='tableShow')
			{
				$('#educationTable').removeClass('borderless');
				$('#educationTable').addClass('customBordered');
			}
			else
			{
				$('#educationTable').removeClass('customBordered');
				$('#educationTable').addClass('borderless');
			}
			break;
		case 'edyear':
			if(toggleValue=='edyearFirst')
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(0).before($(this).find("td").eq(3));
				});
				var temp = document.getElementById('column4').className;
				document.getElementById('column4').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column1').className;
				document.getElementById('column1').className = temp;
			}
			else
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(3).after($(this).find("td").eq(0));
				});
				var temp = document.getElementById('column1').className;
				document.getElementById('column1').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column4').className;
				document.getElementById('column4').className = temp;
			}
			break;
		case 'experience':
			if(toggleValue=='experience1')
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','inline-block');
				$("#sectionExperience .time").addClass('right').removeClass('tab');
				$("#sectionExperience .link").show();
			}
			else
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','block');
				$("#sectionExperience .time").removeClass('right').addClass('tab');
				$("#sectionExperience .link").hide();
			}
			break;
		case 'projects':
			if(toggleValue=='projects1')
			{
				$("#sectionProjects .title , #sectionProjects .time").css('display','inline-block');
				$("#sectionProjects .time").addClass('right').removeClass('tab');
				$("#sectionProjects .mentor , #sectionProjects .link").show();
			}
			else
			{
				$("#sectionProjects .title , #sectionProjects .time").css('display','block');
				$("#sectionProjects .time").removeClass('right').addClass('tab');
				$("#sectionProjects .mentor , #sectionProjects .link").hide();
			}
			break;
	}
}

function getSelectionContainerElement()
{
	var range, sel, container;
	if (document.selection && document.selection.createRange)
	{
		range = document.selection.createRange();
		return range.parentElement();
	}
	else if (window.getSelection)
	{
		sel = window.getSelection();
		if (sel.getRangeAt)
		{
			if (sel.rangeCount > 0)
				range = sel.getRangeAt(0);
		}
		else
		{
			// Old WebKit selection object has no getRangeAt, so
			// create a range from other selection properties
			range = document.createRange();
			range.setStart(sel.anchorNode, sel.anchorOffset);
			range.setEnd(sel.focusNode, sel.focusOffset);
			// Handle the case when the selection was selected backwards (from the end to the start in the document)
			if (range.collapsed !== sel.isCollapsed)
			{
				range.setStart(sel.focusNode, sel.focusOffset);
				range.setEnd(sel.anchorNode, sel.anchorOffset);
			}
		}
		if (range)
		{
			container = range.commonAncestorContainer;
			// Check if the container is a text node and return its parent if so
			return container.nodeType === 3 ? container.parentNode : container;
		}
	}
}

function insertAfter(referenceNode,newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}