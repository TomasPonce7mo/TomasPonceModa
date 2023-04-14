function vectoraleatorioordenado(n){
    let a = "";
    for(let i=0;i<n;i++){
        a += (Math.round(Math.random() * 60)) + " ";
    }
    a = a.substring(0, a.length - 1)
    a = a.split(" ").sort(function(ma, me){return ma - me});
    return a;
}
function moda(n){
 let a = new Array(n.length), ma = 0, m = 0;
    for(let i=0;i<n.length;i++){
        let c = 0;
        for(let it=0;it<n.length;it++){
            if(n[i] == n[it]){
                c += 1;
            }
        }
        a[i] = c;
    }
    for(let i=0;i<a.length;i++){
        if(a[i] > ma){
            ma = a[i];
            m = n[i];
        }
    }
    return m;
}