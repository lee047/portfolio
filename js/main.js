var vHeight;
var vWidth;

window.addEventListener('DOMContentLoaded', function(e){
    var main = this.document.querySelector('#hero-page');
    
    main.querySelector('li:last-child').onclick = handlePresentationClick;
 
    // vHeight = Math.max(document.documentElement.clientHeight, window.innerHeight )  / 15
    // vWidth = Math.max(document.documentElement.clientWidth , window.innerWidth ) / 25



    // button to scroll horziontal project page 

    const scrollButtonRight = document.getElementById('slideRight');
    const scrollButtonLeft = document.getElementById('slideLeft');
    const buttonLeft = document.getElementById('slideLeft');
    const projectSectionOffsetWidth = document.querySelector('.project-section').offsetWidth;
    let widthofSet = document.querySelector('.project-card').offsetWidth;
    
    scrollButtonRight.onclick = function () {
        console.log( "width for project-section " + projectSectionOffsetWidth + " offsetWidth" + widthofSet + " project-scroll " + document.getElementById('project-scroll').scrollLeft);

        if(document.getElementById('project-scroll').scrollLeft == projectSectionOffsetWidth){
            // remove the right button
            document.querySelector('#slideRight').style.display = 'none';
        }
        if(document.getElementById('project-scroll').scrollLeft > widthofSet){
            // add the left button 
            document.querySelector('#slideLeft').style.display = 'inline';
        }
        if(document.getElementById('project-scroll').scrollLeft == 0){
            // remove the left button 
            document.querySelector('#slideLeft').style.display = 'none';
        }   
      document.getElementById('project-scroll').scrollLeft += widthofSet /2;
    };

    scrollButtonLeft.onclick = function (){
        console.log('clickRight btn');
        document.getElementById('project-scroll').scrollLeft -= widthofSet /2;
    }
    // buttonLeft.onclick = function () {
    //   document.getElementsByClassName('project-wrapper').scrollLeft -= 20;
    // };



    console.log(window.innerHeight);
   const scrollItemList = document.querySelectorAll('.scroll-item');
   console.log(scrollItemList);
   let div = document.getElementById('print');
   this.window.onscroll = () => {

        scrollTopNav();



        scrollItemList.forEach(item => {
         
            let offset = item.offsetTop;
            let height = item.offsetHeight;
            let top = window.scrollY + height - 100;
            let id = item.getAttribute('id');
            var paraArray = [];
            var paraCoverElement = document.createElement('div');
            // check off set of page and change text            
            if(top >= offset && top < offset + height){
                var printData = Array.from(item.dataset.name); 
                div.innerHTML = '';
                console.log(printData);
                // add p tag to char
                printData.forEach(el  =>  {
                    var paraElement = document.createElement('span');
                    paraElement.classList.add('side-bar-chars');
                    console.log(el);
                    paraElement.innerText += el;
                    console.log(paraElement)
                    paraArray.push(paraElement);
                });
                // add p tags to div
                console.log(paraArray);
                paraArray.forEach(el => {
                    paraCoverElement.appendChild(el);
                });
                // append div
                div.appendChild(paraCoverElement);
            }
        })
   }
});



function handlePresentationClick(e){
    var sectionPage = document.querySelector('.div-divider');
    
    var noDivs = 330;
    var divContainer = document.createElement('div');
    divContainer.classList.add('small-div-container')
    for(i=0; i<noDivs ; i++){
        var divs = document.createElement('div');
        divs.style.height = vHeight + 'px';
        divs.style.width = vWidth + 'px';
        divs.classList.add('small-divs');
        divContainer.append(divs);
         
    }
    setTimeout(() => {
        divContainer.classList.add('active');
    }, 2000); 
    sectionPage.append(divContainer);
  //  console.log(divs);
}

function scrollTopNav(){
    let top = window.scrollY;
    let topNav = document.querySelector('#hero-page .hero-nav');
    // console.log(topNav);
    // console.log(top);
    if(top > 100 && !(topNav.classList.contains('hide-nav'))){
        console.log('%c hide-nav addded' , "background:red");
    topNav.classList.add('hide-nav');
    }else if (top < 100 && topNav.classList.contains('hide-nav')){
        topNav.classList.remove('hide-nav');
        console.log('%c hide-nav removed' , "background:red");
    }
    
}