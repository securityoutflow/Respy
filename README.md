# Respy

Using respy you can easily setup a responsive website without any complicated css/js code.

Respy Features :
- Transforming your static web page into a fully responsive web page
- No CSS Media queries needed
- No CSS even needed
- No complicated scripts
- Compatible for both Texts and Images
- Auto responsive menu renderer
- No external libraries needed ( pure javascript )
- It's free and avalaible for everyone !

How to use Respy ?

* For text rendering / resizing :
using the following function : respy();
example :  respy("#element_id", {compressor:5, min:11, max:150, elem:"text"});
           respy(".element_class", {compressor:5, min:11, max:150, elem:"text"});
parameters :
 compressor : used to specify size of text / image, the default value is 25
 min / max : used to specify to min/max font size or width/height of text/image
 elem : used to specify element type : image/text
* For Menu rendering :
using the following function : menu();
example :  menu("#menu1_id", "#menu2_id", 400);
           menu(".menu1_class", "#menu2_class", 400);
           menu("#menu1_id", ".menu2_class", 400);
           menu(".menu1_class", "#menu2_id", 400);
parameters :
 Parameter 1 : menu 1 ID/Class 
 Parameter 2 : menu 2 ID/Class
 Parameter 3 : min width, it's used to hide/show one of the available menus.

Thank you for using Repsy, i hope you enjoy it.
