function Insertion_Sort()
{
    var ans = prompt("Want to sort ? " + "Y for Yes, N for No");
    if(ans == "N" || ans == 'n'){
        enable_buttons();
        return;
    }
    if(ans == "Y" || ans == 'y'){

    // algoithm implementation 
    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
    
            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color update

    enable_buttons();
}

        //Setting time complexities
        document.getElementById("Time_Worst").innerText="O(N^2)";
        document.getElementById("Time_Average").innerText="Θ(N^2)";
        document.getElementById("Time_Best").innerText="Ω(N)";

        //Setting Space complexity
        document.getElementById("Space_Worst").innerText="O(1)";
}