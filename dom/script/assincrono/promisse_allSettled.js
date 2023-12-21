const promise1 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        return resolve('Promisse 1');
    }, 3000); // 3 segundos
});

const promise2 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        return resolve('Promisse 2');
    }, 4000);  // 4 segundos
});

const promise3 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        return resolve('Promisse 3');
    }, 1000); // 1 segundo
});

Promise.allSettled( [promise1, promise2, promise3]).then( (resAllSettled) => {
    //console.log(resAllSettled);
    resAllSettled.forEach( item => {
        if (item.status === 'fulfilled'){
            console.log(item.value);

        } else if (item.status === 'rejected'){
            console.log(item.reason);

        }
    })
})