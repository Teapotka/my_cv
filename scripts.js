let mask = document.querySelector('div.load');
window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});
document.querySelector('div.links').onmouseenter = ()=>{
            document.querySelector('div.field').style.animationName = 'see'
            document.querySelector('div.field').style.animationDuration = 1 +'s' 
            document.querySelector('div.field').style.animationFillMode = 'forwards'
        }
        document.querySelector('div#phone').onmouseenter = () =>{
            document.querySelector('div.field').innerHTML = '+38 (066) 489 46 76'
        }
        document.querySelector('div#mail').onmouseenter = () =>{
            document.querySelector('div.field').innerHTML = 'tymofii.sukhariev@gmail.com'
        }
        document.querySelector('div#tg').onmouseenter = (e) =>{            
            document.querySelector('div.field').innerHTML = '<a href="https://t.me/teapotka">t.me/teapotka</a>'
        }      
        document.querySelector('div#hub').onmouseenter = (e) =>{            
            document.querySelector('div.field').innerHTML = '<a href="https://github.com/Teapotka">github.com/Teapotka</a>'
        }      
        let arr = document.querySelectorAll('.item')
        for (let i = 0; i<4;i++) {
            Hop(arr[i])
        }
        
        function Hop(elem){        
        document.onmousedown = (e)=> e.preventDefault() 
        var text = elem.innerHTML.split('')
        elem.innerHTML ='';  
        var i = 1;      
        for (const iterator of text) {
            var span = document.createElement('div');           
            
            span.innerHTML = iterator;
            span.className = 'anim'
            
            span.style.animationDelay = i/10+'s'                                     
            elem.append(span);   
            i++         
        }     
        elem.onmouseenter = function(){
        for (let iterator of elem.querySelectorAll('div')) {
            if(iterator.className ==='retanim')
            {
               iterator.classList.remove('retanim')
               iterator.className = 'anim'
            } 
           else{
               iterator.classList.remove('anim')
               iterator.className = 'retanim'
           }
       
        }
        }
        elem.onclick = function(){
            var offset = 0;
            var e = elem.querySelectorAll('div').length
            switch(e){
                case 4:
                  offset = 0
                    break
                case 5:
                  offset = window.innerHeight
                    break
                case 6:
                  offset = window.innerHeight*2
                    break
                case 9:
                  offset = window.innerHeight*3
                    break
            }      
            window.scrollTo({
            top: offset,
            left: 0,
            behavior: 'smooth'
            });
        }
        
    }