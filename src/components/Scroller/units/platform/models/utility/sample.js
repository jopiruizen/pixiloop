function getChange(M,P) {
    let change = M - P
    let changeArr = [0,0,0,0,0,0];
    while (change > 0) {
        if (change > 1) {
            change -= 1;
            changeArr[5]++;
        }
        else if( change > 0.50 ) {
            change -= 0.50;
            changeArr[4]++;
        }  else if( change > 0.25 ) {
            change -= 0.25;
            changeArr[3]++;
        }  else if( change > 0.10 ) {
            change -= 0.10;
            changeArr[2]++;
        } else if( change > 0.05) {
            change -= 0.05;
            changeArr[1]++;
        } else {
            change -= 0.01;
            changeArr[0]++;
        }
    }

    return changeArr;
}