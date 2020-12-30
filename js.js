        var count = 0;
        function counter()
        {
            count++;
            document.getElementById("target").innerHTML=count;  
                    
        }
        function start()
        {
            
                interval = setInterval("counter()",1000);
                document.getElementById("btn").innerHTML="start";          
        }
        function stop()
        {
            clearInterval(interval);
            if(count>0)
            {
                document.getElementById("btn").innerHTML="Resume";
                
            }
            
        }
        function reset()
        {
            count = 0;
            stop();
            document.getElementById("target").innerHTML=0;
            document.getElementById("btn").innerHTML="start";
        }