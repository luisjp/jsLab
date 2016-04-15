function pos_handler(){	
	var last_pos = 10;		

	return {
		aum_last_pos : function(){
			last_pos++;
		},
		set_last_pos : function(pos){
			last_pos = pos;
		},
		get_last_pos : function(){
			console.log(last_pos);
		}
	}
};

var pos_manager = pos_handler();

pos_manager.set_last_pos(11);
pos_manager.aum_last_pos();
pos_manager.get_last_pos();
pos_manager.aum_last_pos();
pos_manager.aum_last_pos();
pos_manager.get_last_pos();
