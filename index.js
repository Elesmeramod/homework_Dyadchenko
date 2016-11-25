function Task1() {
    var n = 1000000;
    var array = [];
    var sum = 0;
    var startInit = new Date() * 1000;
    for (var i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * (1000 + 1)));
    }
    var endInit = new Date() * 1000;
    console.log({
        "startInit": startInit,
        "endInit": endInit,
        "arr": array,
        "result": endInit - startInit
    });
    var arraySortUp = array.slice();
    var arraySortDown = array.slice();
    var first = 0;
    var last = n - 1;
    var startSum = new Date() * 1000;
    for (var i = 0; i < n; i++) {
        sum += array[i];
    }
    var endSum = new Date() * 1000;
    console.log({
        "startSum": startSum,
        "endSum": endSum,
        "sum": sum,
        "result": endSum - startSum
    });
    var startSortUp = new Date() * 1000;
    QsortUp(arraySortUp, first, last);
    var endSortUp = new Date() * 1000;
    console.log({
        "startSortUp": startSortUp,
        "endSortUp": endSortUp,
        "arraySortUp": arraySortUp,
        "result": endSortUp - startSortUp
    });
    var startSortDown = new Date() * 1000;
    QsortDown(arraySortDown, first, last);
    var endSortDown = new Date() * 1000;
    console.log({
        "startSortDown": startSortDown,
        "endSortDown": endSortDown,
        "arraySortDown": arraySortDown,
        "result": endSortDown - startSortDown
    });
}
function QsortUp(array, first, last) {
        var l=last;
        var f=first;
        var mid = array[parseInt((first + last) / 2)];
        do
        {
            while (array[f] < mid) f++;
            while (array[l] > mid) l--;
            if (f <= l)
            {
                var count = array[f];
                array[f] = array[l];
                array[l] = count;
                f++;
                l--;
            }
        } while (f < l);
        if (first < l) QsortUp(array, first, l);
        if (f < last) QsortUp(array, f, last);
    }
function QsortDown(array, first, last) {
    var l=last;
    var f=first;
    var mid = array[parseInt((first + last) / 2)];
    do
    {
        while (array[f] > mid) f++;
        while (array[l] < mid) l--;
        if (f <= l)
        {
            var count = array[f];
            array[f] = array[l];
            array[l] = count;
            f++;
            l--;
        }
    } while (f < l);
    if (first < l) QsortDown(array, first, l);
    if (f < last) QsortDown(array, f, last);
}
function Task2(){
    var matrixA=[60,80,100];
    var matrixB=[40,60,80,60];
    var matrixC=[[1,4,3,2],[4,5,8,3],[2,3,6,7]];
    for(var i=0;i<3;i++){
        for(var j=0;j<4;j++){
            if(matrixA[i]<matrixB[j]){
                matrixC[i][j]=matrixA[i];
                matrixB[j]-=matrixA[i];
                matrixA[i]=0;
            }else{
                matrixC[i][j]=matrixB[j];
                matrixA[i]-=matrixB[j];
                matrixB[j]=0;
            }
        }
        console.log("|",matrixC[i][0],matrixC[i][1],matrixC[i][2],matrixC[i][3],"|");
    }
}






