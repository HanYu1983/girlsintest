
(function(){
	var btn_register = $('#btn_register' );
	var inp_account = $('#inp_account' );
	var inp_password = $('#inp_password' );
	var slt_type = $('#slt_type' );
	btn_register.click( onBtnRegisterClick );
	
	function onBtnRegisterClick(e){
		var ac = inp_account.val();
		var pw = inp_password.val();
		var t = slt_type.val();
		console.log( ac, pw, t );
	}
})();