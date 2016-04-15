var _do = {  
  to : function(p_obj){
    this.obj = p_obj;
    return this;
  },
  split : function(regexp){
    this.obj = this.obj.split(regexp);
    return this;
  },
  trim : function(){
    this.obj = this.obj.replace(/ /g,'');
    return this;
  },
  and_get : function(){
    return this.obj;
  }
}

var splitted_and_trimmed = 
_do
  .to('ho .  la')
  .trim()
  .split('\.')  
  .and_get();

console.log(splitted_and_trimmed);