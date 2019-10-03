function isOneEditAway(a, b){
  if(a == b){
    return false;
  }
  if(b.length > a){
    return isOneEditAway(b, a);
  }

  if((b.length - a.length) > 1){
    return false;
  } else{
    let i = 0;
    for(let i =0; i < a.length; i++){
      if(a[i] != b[i]){
        // Strings must be equal from this point forward, take into consideration we removed one
        return (a.slice(i+1) == b.slice(i+i) || a.slice(i) == b.slice(i+i))
      }
    }
    return true;
  }
}

