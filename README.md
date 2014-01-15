Swiping Tabs for jQuery Mobile
==============================

While I was doing a project, an android app for my workplace, I had to implement a tab widget but it should *change tabs on swipe.* So I googled and was stunned to see that there actually isnt any plugin to do this in the jQUery mobile API or in any 3rd party plugins. So thought of making my own and releasing it for everyone as well :)

Usage
=====

Step 1: Download **swipingtabs.css** and **swipingtabs.js**

Step 2: In your jquery mobile page attach them after other script

Step 3: The tabs system

The system works as a big one list. That means all your seperate tabs should be defined in ```<li></li>```, but dont be discouraged, you are free to put any thing inside those tags. First define a container div that would hold the slider, and then the slider div itself. Inside defined all the list items.

Step 4: Lastly initialize the plugin

Use ```new SwipingTabs("#container",300,"#navbar");``` for that

1.  #container : id of the div used as the container
2.  300        : speed of animations
3.  #navbar    : a nice little navbar is generated, put the id of its div

```html
<!doctype html>
<html>
<head>
<title>Profile</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link href="css/jquery.mobile-1.4.0.css" rel="stylesheet" type="text/css">
<link href="css/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.mobile-1.4.0.js"></script>

<script type="text/javascript" src="swipingtabs.js"></script>
<link href="swipingtabs.css" rel="stylesheet" type="text/css">



<body>

<div data-role="page">
	<div role="main" class="ui-content">
		<div id="container"> 
        <div id="slide">
                            
                <li>
                	 <h1>First tab contents</h1>
                </li>
            
                <li>                	
		        <ul data-role="listview" data-inset="true">
				<li><a href="#">Acura</a></li>
				<li><a href="#">Audi</a></li>
				<li><a href="#">BMW</a></li>
				<li><a href="#">Cadillac</a></li>
				<li><a href="#">Ferrari</a></li>
			</ul>			
                </li>
            
                <li>3
		        test two text 
		        test one text
		        test two text 
                </li>
            
                <li>4
		        test two text 
		        test one text
		        test two text
                 </li>

        </div>
        </div>
     
	       <div id="navbar"></div>
	</div>
	   
</div>


<script>
	$(function(){
		 new SwipingTabs("#container",300,"#navbar");        
	});
</script>

</body>
</html>
```

Step 5: Customization

1.  Change the #container style in **swipingtabs.css** so as to adjust the slider height
2.  The navbar style is also included in **swipingtabs.css**, you can change it freely


Aaaand DONE ! 
Hope you'll like it, just inform me of suggestions and comments

@email : manujith.nc@gmail.com

@twitter : @\_manzzup\_

@blog  : http://manzzup.blogspot.com


